package com.hu.house.controller;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.github.pagehelper.PageHelper;
import com.hu.house.pojo.Contract;
import com.hu.house.pojo.User;
import com.hu.house.service.ContractService;
import com.hu.house.service.UserService;
import com.hu.house.utils.PageUtil;

@Controller
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private ContractService contractService;
    /*
     * 用户登录
     */
	@RequestMapping("/login")
	public String UserLogin(User user,HttpSession session){
		User userLogin=userService.findUser(user);
		if(userLogin!=null){
			session.setAttribute("uname", userLogin.getUname());
			return "index";
		}else{
			
			return "login";
		}
		
	}
	
      
}
