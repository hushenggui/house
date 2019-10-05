package com.hu.house.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hu.house.mapper.BillMapper;
import com.hu.house.pojo.Bill;
import com.hu.house.pojo.Contract;
import com.hu.house.pojo.Room;
import com.hu.house.service.BillService;
import com.hu.house.service.ContractService;
import com.hu.house.utils.PageUtil;
import com.mysql.fabric.xmlrpc.base.Data;
@Service
public class BillServiceImpl implements BillService{
	@Autowired
	private BillMapper billMapper;
	@Autowired
	private ContractService contractService;
	 //生成账单
	@Override
	public int createBill(Bill bill,int id)   {
		// TODO Auto-generated method stub
		Date date=new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		String operDate=sdf.format(date);
		bill.setOperateDate(operDate);
		
		bill.setIncome("收入");
		
		//修改合同
		if(id!=0){
		Contract contract=contractService.findContractById(id);
		Date end=null;
		try {
			end = sdf.parse(bill.getEndTime());
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		contract.setEndTime(end);
		contractService.updateContractById(contract);
		}
		
		return billMapper.createBill(bill);
	}
	@Override
	public Map<String, Object> findAllBill(Bill bill, PageUtil pageUtil) {
		Map<String,Object> map=new HashMap<>();
		//设置分页插件
		PageHelper.startPage(pageUtil.getPage(),pageUtil.getRows());
		List<Bill>list=billMapper.findAllBill(bill);
		PageInfo info = new PageInfo<>(list);//创建获取总条数的对象
		long totalNum = info.getTotal();//获取总条数
		int totalPage=(int)Math.ceil((totalNum*1.0 )/pageUtil.getRows());
		map.put("billList", list);
		map.put("totalPage", totalPage);
		return map;
		
	}
	
	
	

}
