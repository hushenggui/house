package com.hu.house.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hu.house.pojo.Renter;
import com.hu.house.service.RenterService;
import com.hu.house.utils.PageUtil;

@Controller
public class RenterController {
	@Autowired
	private RenterService renterService;
  	
  @RequestMapping("findAllRenter")
  @ResponseBody
  public Map<String,Object>findAllRenter(Renter renter,String pageNo){
	  PageUtil pageUtil=new PageUtil();
	  pageUtil.setPage(Integer.parseInt(pageNo));
	  
	  return renterService.findAllRenter(renter, pageUtil);
  }
  
  @RequestMapping("deleteRenterById")
  @ResponseBody
  public int deleteRenterById(int id){
	  
	  return renterService.deleteRenterById(id);
  }
  
  @RequestMapping("findRenterById")
  @ResponseBody
  public Renter findRenterById(int id){
	  
	  return renterService.findRenterById(id);
  }
  
  @RequestMapping("updateRenterById")
  @ResponseBody
  public int updateRenterById(Renter renter){
	  return renterService.updateRenterById(renter);
  }
	
	
	
}
