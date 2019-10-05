package com.hu.house.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.house.pojo.Room;
import com.hu.house.service.RoomService;
import com.hu.house.utils.PageUtil;

@Controller
public class RoomController {
	@Autowired
	private RoomService roomService;
	@RequestMapping("selectRoom")
	@ResponseBody
	public Map<String,Object>selectRoom(Room room,PageUtil pageUtil){
		return roomService.findAllRoom(room, pageUtil);
		
	}
	@RequestMapping("deleteRoomById")
	@ResponseBody
	public int deleteRoomById(int id){
		
		return roomService.deleteRoomById(id);
		
	}
	@RequestMapping("findRoomById")
	@ResponseBody
	public Room findRoomById(int id){
		
		return roomService.findRoomById(id);
		
	}
	
	/*
	 * 编辑合同 
	 */
	@RequestMapping("updateRoomById")
	@ResponseBody
	public int updateRoomById(Room room){
		
		return roomService.updateRoomById(room);
	}
	
	

}
