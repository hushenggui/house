package com.hu.house.service;

import java.util.List;
import java.util.Map;

import com.hu.house.pojo.Renter;
import com.hu.house.utils.PageUtil;

public interface RenterService {
	 //查找租户信息
	Map<String,Object>  findAllRenter(Renter renter,PageUtil pageUtil);
	//根据ID 删除租户信息
    int deleteRenterById(int id);
  //根据ID 查找租户信息
    Renter findRenterById(int id);
  //根据id 编辑租户信息
    int updateRenterById(Renter renter);
}
