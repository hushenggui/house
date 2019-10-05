package com.hu.house.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.house.pojo.Bill;
import com.hu.house.service.BillService;
import com.hu.house.utils.PageUtil;

@Controller
public class BillController {
@Autowired
private BillService billService;
	@RequestMapping("selectBill")
	@ResponseBody
	public Map<String,Object>selectBill(Bill bill,PageUtil pageUtil,String costString){
		
		if(!costString.equals("")){
			bill.setCost(Integer.parseInt(costString));
		}else{
			bill.setCost(0);
		}
		Map<String,Object>map=billService.findAllBill(bill, pageUtil);
		
		
		return map;
	}
	
}
