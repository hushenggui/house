package com.hu.house.service;

import java.util.List;
import java.util.Map;

import com.hu.house.pojo.Bill;
import com.hu.house.utils.PageUtil;

public interface BillService {
	 //生成账单
	 int createBill(Bill bill,int id);
	//查找所有的账单
	 Map<String, Object>findAllBill(Bill bill,PageUtil pageUtil);
}
