package com.hu.house.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hu.house.mapper.RenterMapper;
import com.hu.house.pojo.Renter;
import com.hu.house.pojo.Room;
import com.hu.house.service.RenterService;
import com.hu.house.utils.PageUtil;
@Service
public class RenterServiceImpl implements RenterService{
    @Autowired
    private RenterMapper renterMapper;
	
	
	@Override
	public Map<String,Object>  findAllRenter(Renter renter,PageUtil pageUtil) {
		Map<String,Object> map=new HashMap<>();
		//设置分页插件
		PageHelper.startPage(pageUtil.getPage(),pageUtil.getRows());
		List<Renter>list=renterMapper.findAllRenter(renter);
		PageInfo info = new PageInfo<>(list);//创建获取总条数的对象
		long totalNum = info.getTotal();//获取总条数
		int totalPage=(int)Math.ceil((totalNum*1.0 )/pageUtil.getRows());
		map.put("renterList", list);
		map.put("totalPage", totalPage);
		return map;
		
	}


	@Override
	public int deleteRenterById(int id) {
		// TODO Auto-generated method stub
		return renterMapper.deleteRenterById(id);
	}


	@Override
	public Renter findRenterById(int id) {
		// TODO Auto-generated method stub
		return renterMapper.findRenterById(id);
	}


	@Override
	public int updateRenterById(Renter renter) {
		// TODO Auto-generated method stub
		return renterMapper.updateRenterById(renter);
	}
	
	
	
	

}
