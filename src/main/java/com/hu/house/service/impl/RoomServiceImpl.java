package com.hu.house.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hu.house.mapper.RoomMapper;
import com.hu.house.pojo.Room;
import com.hu.house.service.RoomService;
import com.hu.house.utils.PageUtil;
@Service
public class RoomServiceImpl implements RoomService{
    @Autowired
    private RoomMapper roomMapper;
	@Override
	public Map<String, Object> findAllRoom(Room room,PageUtil pageUtil) {
		// TODO Auto-generated method stub
		Map<String,Object> map=new HashMap<>();
		//设置分页插件
		PageHelper.startPage(pageUtil.getPage(),pageUtil.getRows());
		List<Room>list=roomMapper.findAllRoom(room);
		PageInfo info = new PageInfo<>(list);//创建获取总条数的对象
		long totalNum = info.getTotal();//获取总条数
		int totalPage=(int)Math.ceil((totalNum*1.0 )/pageUtil.getRows());
		map.put("roomList", list);
		map.put("totalPage", totalPage);
		return map;
	}
	@Override
	public int deleteRoomById(int id) {
		// TODO Auto-generated method stub
		return roomMapper.deleteRoomById(id);
	}
	@Override
	public Room findRoomById(int id) {
		// TODO Auto-generated method stub
		return roomMapper.findRoomById(id);
	}
	@Override
	public int updateRoomById(Room room) {
		// TODO Auto-generated method stub
		return roomMapper.updateRoomById(room);
	}
	
	
	
}
