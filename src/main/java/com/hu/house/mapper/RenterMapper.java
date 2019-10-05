package com.hu.house.mapper;

import java.util.List;

import com.hu.house.pojo.Renter;

public interface RenterMapper {
     //查找租户信息
	 List<Renter> findAllRenter(Renter renter);
	 //根据ID 删除租户信息
	 int deleteRenterById(int id);
	//根据ID 查找租户信息
    Renter findRenterById(int id);
    //根据id 编辑租户信息
    int updateRenterById(Renter renter);
    //添加租户
    int addRenter(Renter renter);
}
