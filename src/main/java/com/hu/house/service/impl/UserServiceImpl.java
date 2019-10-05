package com.hu.house.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hu.house.mapper.UserMapper;
import com.hu.house.pojo.User;
import com.hu.house.service.UserService;
@Service
public class UserServiceImpl implements UserService{
	@Autowired 
	private UserMapper userMapper;
	//用户登录	
	public User findUser(User user) {
		User userActually=userMapper.findUser(user);
		return userActually;
	}
	

}
