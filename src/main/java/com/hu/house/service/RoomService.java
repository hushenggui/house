package com.hu.house.service;

import java.util.List;
import java.util.Map;

import com.hu.house.pojo.Room;
import com.hu.house.utils.PageUtil;

public interface RoomService {
	
	//查找所有的房间信息
	Map<String ,Object> findAllRoom(Room room,PageUtil pageUtil);
	//根据ID删除room
    int deleteRoomById(int id);
  //根据ID查找room
    Room findRoomById(int id);
    //编辑房间信息
    int updateRoomById(Room room);

}
