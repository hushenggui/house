package com.hu.house.mapper;

import java.util.List;

import com.hu.house.pojo.Room;

public interface RoomMapper {
	
	//查找所有的房间信息
	List<Room> findAllRoom(Room room);
	//根据ID删除room
    int deleteRoomById(int id);
    //根据ID查找room
    Room findRoomById(int id);
    //编辑房间信息
    int updateRoomById(Room room);
    //根据房间名查找room
    List<Room> findRoomByName(String name);
}
