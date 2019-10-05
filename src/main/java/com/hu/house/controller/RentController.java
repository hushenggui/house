package com.hu.house.controller;

import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.house.mapper.RenterMapper;
import com.hu.house.mapper.RoomMapper;
import com.hu.house.pojo.Bill;
import com.hu.house.pojo.Contract;
import com.hu.house.pojo.Renter;
import com.hu.house.pojo.Room;
import com.hu.house.service.BillService;
import com.hu.house.service.ContractService;
import com.hu.house.service.RoomService;

@Controller
public class RentController {
	@Autowired
	private ContractService contractService;
	@Autowired
	private BillService billService;
	@Autowired
	private RoomMapper roomMapper;
	@Autowired
	private RenterMapper renterMapper;
	/*
	 * 收租前查合同 返回合同和房屋信息
	 */
	@RequestMapping("rentInfo")
	@ResponseBody
	public Map<String,Object> rentInfo(int id){
		Map<String,Object> map=new HashMap<String, Object>();
		Contract contract=contractService.findContractById(id);
		if(contract==null||contract.getStatuss().equals("退房中")) return null;
		List<Room> rooms=roomMapper.findRoomByName(contract.getRoom());
		Room room=rooms.get(0);
		map.put("contract", contract);
		map.put("room", room);
		
		
		return map;
	}
	/*
	 * 收租
	 */
	@RequestMapping("rentAndBill")
	@ResponseBody
	public int rentAndBill(Bill bill,HttpSession session,int id){
		String uname=(String) session.getAttribute("uname");
		bill.setOperater(uname);
		int flag= billService.createBill(bill,id) ;
		
		return flag;
	}
	
	/*
	 * 预签约
	 */
	@RequestMapping("willSignContract")
	@ResponseBody
	public Map<String,Object> willSignContract(int id){
		Map<String,Object> map=new HashMap<String, Object>();
		Room room=roomMapper.findRoomById(id);
		Date date =new Date();
		map.put("startTime", date);
		map.put("room", room);
		return map;
	}
	/*
	 * 签约
	 */
	@RequestMapping("signContract")
	@ResponseBody
	public int signContract(Bill bill,Renter renter,HttpSession session,int id) throws ParseException{
		Date date=new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		String operater=(String) session.getAttribute("uname");
		String operaterDate=sdf.format(date);
		String endTimeString=bill.getEndTime();
		Date endTime=sdf.parse(endTimeString);
		Map<String,Object> map=new HashMap<String, Object>();
		
		//添加合同
		 Contract contract=new Contract();
		 contract.setDescc(renter.getDescc());
		 contract.setRoom(renter.getRoom());
		 contract.setRenterName(renter.getName());
		 contract.setOperateDate(operaterDate);
		 contract.setOperater(operater);
		 contract.setStartTime(date);
		 contract.setEndTime(endTime);
		 contract.setStatuss("租赁中");
		 int a=this.contractService.addContract(contract);
		//添加租客
		 renter.setDescc("");
		 int y= this.renterMapper.addRenter(renter);
		 //添加 账单
		 bill.setOperater(operater);
		 bill.setOperateDate(operaterDate);
		 bill.setIncome("收入");
		 bill.setRenterName(renter.getName());
		 int b=this.billService.createBill(bill, 0);
		 
		 //修改房子状态
		 Room room=this.roomMapper.findRoomById(id);
		 room.setStatuss("租赁中");
		 int c=roomMapper.updateRoomById(room);
		 return a+b+c+y;
	}
	@RequestMapping("checkInfo")
	@ResponseBody
	public Map<String ,Object> checkInfo(int id){
		Map<String,Object> map=new HashMap<String, Object>();
		Contract contract=contractService.findContractById(id);
		if(contract==null||contract.getStatuss().equals("退房中")) return null;
		map.put("contract", contract);
		return  map;
	}
	
	@RequestMapping("check")
	@ResponseBody
	public int check(int id,String endTimeString,Bill bill,HttpSession session) throws ParseException{
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		Date endTime=null;
		Date date=new Date();
		if(!endTimeString.equals("")){
			 endTime=sdf.parse(endTimeString);
		}
		Contract contract=contractService.findContractById(id);
		contract.setStatuss("退房中");
		contract.setEndTime(endTime);
		int a=contractService.updateContractById(contract);
		//生成账单
		String operater=(String) session.getAttribute("uname");
		String operaterDate=sdf.format(date);
		bill.setEndTime(endTimeString);
		int b=billService.createBill(bill, id);
		
		return  a+b;
	}
	
	
	
}
