package com.hu.house.mapper;

import java.util.List;

import com.hu.house.pojo.Bill;

public interface BillMapper {
    //生成账单
	int createBill(Bill bill);
	//查找所有的账单
	List<Bill>findAllBill(Bill bill);
}
