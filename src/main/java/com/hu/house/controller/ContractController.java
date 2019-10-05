package com.hu.house.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.druid.util.StringUtils;
import com.hu.house.pojo.Contract;
import com.hu.house.service.ContractService;
import com.hu.house.utils.PageUtil;

@Controller
public class ContractController {
	@Autowired
	private ContractService contractService;
	@RequestMapping("contractPage")
	@ResponseBody
	public Map<String,Object> getWillPayList(String flag,@RequestParam(value="pageNo", defaultValue="1")int pageNo,String date,Contract contract,String startTimeString ,String endTimeString) throws ParseException{
		PageUtil pageUtil=new PageUtil();
		pageUtil.setPage(pageNo);
		Date time=null;
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		//查所有
		if(flag.equals("0")){
			Map<String,Object>map=contractService.findAllContract(pageUtil);
			List<Contract> listTemp= this.countReserveDay((List<Contract>) map.get("contractList"));
			List<Contract> list=this.countLateDay(listTemp);
			map.put("contractList", list);
			return map;
		}
		//首页几项
		if(flag.equals("1")){
			 time=new Date();
		}
		if(flag.equals("2")){
			if(date==null||date.length()==0){
			 time=new Date();
			}
		}
		if(flag.equals("3")){
			/*if(date==null||date.length()==0){
				 time=new Date();
				// time=this.lateWeek(time, 14);
			}
			Map<String,Object> map=this.contractService.findLateContract(time, pageUtil,Integer.parseInt(flag));
			List<Contract> listTemp= this.countReserveDay((List<Contract>) map.get("contractList"));
			//List<Contract> list=this.countLateDay(listTemp);
			map.put("contractList", listTemp);
			return map;*/
			if(date==null||date.length()==0){
				 time=new Date();
				}
			
		}
		if(flag.equals("4")){
			if(date==null||date.length()==0){
			 time=new Date();
			}
		}
		if(flag.equals("5")){
			if(org.apache.commons.lang3.StringUtils.isNotBlank(startTimeString)){
				Date startTime=sdf.parse(startTimeString);
				contract.setStartTime(startTime);
			}
			if(org.apache.commons.lang3.StringUtils.isNotBlank(endTimeString)){
				Date endTime=sdf.parse(endTimeString);
				contract.setEndTime(endTime);
			}
			
			Map<String,Object>map=contractService.findContractLike(contract,pageUtil);
			List<Contract> listTemp= this.countReserveDay((List<Contract>) map.get("contractList"));
			List<Contract> list=this.countLateDay(listTemp);
			map.put("contractList", list);
			return map;
			
		}
		Map<String,Object> map=this.contractService.findLateContract(time, pageUtil,Integer.parseInt(flag));
		List<Contract> listTemp= this.countLateDay((List<Contract>) map.get("contractList"));
		//List<Contract> list=this.countLateDay(listTemp);
		map.put("contractList", listTemp);
		return map;
		
		
	}
	
	public  List<Contract> countLateDay(List<Contract> list){
		for (Contract contract : list) {
			Date time=new Date();
			Date end=contract.getEndTime();
			try {
				int days=daysBetween(time,end);
				contract.setDays(days);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return list;
	}
	public  List<Contract> countReserveDay(List<Contract> list){
		for (Contract contract : list) {
			Date time=new Date();
			Date start=contract.getStartTime();
			try {
				int days=daysBetween(time,start);
				contract.setDays(days);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return list;
	}
	/*
	 * 将当前时间向上推迟多少天
	 */
	private static Date lateWeek(Date temp,int Num){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(temp);
		calendar.add(calendar.DATE, Num);
		temp=calendar.getTime();
		String t=sdf.format(temp);
		return temp;
	}
	
	/**  
     * 计算两个日期之间相差的天数  
     * @param smdate 较小的时间 
     * @param bdate  较大的时间 
     * @return 相差天数 
     * @throws ParseException  
     */    
	public static int daysBetween(Date smdate,Date bdate) throws Exception    
    {    
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");  
        smdate=sdf.parse(sdf.format(smdate));  
        bdate=sdf.parse(sdf.format(bdate));  
        Calendar cal = Calendar.getInstance();    
        cal.setTime(smdate);    
        long time1 = cal.getTimeInMillis();                 
        cal.setTime(bdate);    
        long time2 = cal.getTimeInMillis();         
        long between_days=(time2-time1)/(1000*3600*24);  
            
       return Integer.parseInt(String.valueOf(between_days));           
    } 
	/*
	 * 根据ID 删除合同
	 */
	@RequestMapping("deleteContractById")
	@ResponseBody
	public int deleteContractById(int id){
		return contractService.deleteContractById(id);
		
	}
	/*
	 * 预编辑合同 根据ID 查出合同信息
	 */
	@RequestMapping("findContractById")
	@ResponseBody
	public Contract findContractById(int id){
		return contractService.findContractById(id);
	}
	
	/*
	 * 编辑合同 
	 */
	@RequestMapping("updateContractById")
	@ResponseBody
	public int updateContractById(Contract contract,String endTimeString) throws ParseException{
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		Date endTime=sdf.parse(endTimeString);
		contract.setEndTime(endTime);
		return contractService.updateContractById(contract);
	}
	
	@RequestMapping("findContractLike")
	@ResponseBody
	public Map<String,Object> findContractLike(){
		
		
		return null;
	}
	
	
	
	
	
	

}
