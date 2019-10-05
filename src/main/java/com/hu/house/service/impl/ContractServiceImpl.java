package com.hu.house.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hu.house.mapper.ContractMapper;
import com.hu.house.pojo.Contract;
import com.hu.house.service.ContractService;
import com.hu.house.utils.PageUtil;
@Service
public class ContractServiceImpl implements ContractService{
	@Autowired
	private ContractMapper contractMapper;
	//查出首页所需的合同
	public Map<String,Object> findLateContract(Date time,PageUtil pageUtil,int flag) {
		Map<String,Object> map=new HashMap<>();
		//设置分页插件
		PageHelper.startPage(pageUtil.getPage(),pageUtil.getRows());
		List<Contract> list=null;
		//查询满足条件的list
		if(flag==1){
		 list=contractMapper.findLateContract(time);
		}
		if(flag==2){
			
			list=contractMapper.findWillContract(time,"租赁中");
		}
		
		if(flag==3){
			//list=contractMapper.findReserveContract(time);
			list=contractMapper.findWillContract(time,"退房中");
			
		}
		if(flag==4){
			list=contractMapper.findWillContract(time,"退房中");
		}
		PageInfo info = new PageInfo<>(list);//创建获取总条数的对象
		long totalNum = info.getTotal();//获取总条数
		int totalPage=(int)Math.ceil((totalNum*1.0 )/pageUtil.getRows());
		map.put("contractList", list);
		map.put("totalPage", totalPage);
		return map;
	}
	
	//根据ID删除合同
	@Override
	public int deleteContractById(int id) {
		// TODO Auto-generated method stub
		return contractMapper.deleteContractById(id);
	}
   //查出所有合同
	@Override
	public Map<String, Object> findAllContract(PageUtil pageUtil) {
		Map<String,Object> map=new HashMap<>();
		//设置分页插件
		PageHelper.startPage(pageUtil.getPage(),pageUtil.getRows());
		List<Contract> list=null;
		list=contractMapper.findAllContract();
		PageInfo info = new PageInfo<>(list);//创建获取总条数的对象
		long totalNum = info.getTotal();//获取总条数
		int totalPage=(int)Math.ceil((totalNum*1.0 )/pageUtil.getRows());
		map.put("contractList", list);
		map.put("totalPage", totalPage);
		return map;
	}
	
	//根据ID 查出合同信息
	@Override
	public Contract findContractById(int id) {
		// TODO Auto-generated method stub
		return contractMapper.findContractById(id);
	}
	//编辑合同 
	@Override
	public int updateContractById(Contract contract) {
		// TODO Auto-generated method stub
		return contractMapper.updateContractById(contract);
	}
	 
	//查出模糊查询下所有合同

	@Override
	public Map<String,Object> findContractLike(Contract contract,PageUtil pageUtil) {
		Map<String,Object> map=new HashMap<>();
		//设置分页插件
		PageHelper.startPage(pageUtil.getPage(),pageUtil.getRows());
		List<Contract> list=null;
		list=contractMapper.findContractLike(contract);
		PageInfo info = new PageInfo<>(list);//创建获取总条数的对象
		long totalNum = info.getTotal();//获取总条数
		int totalPage=(int)Math.ceil((totalNum*1.0 )/pageUtil.getRows());
		map.put("contractList", list);
		map.put("totalPage", totalPage);
		return map;
		
	}

	@Override
	public int addContract(Contract contract) {
		// TODO Auto-generated method stub
		return contractMapper.addContract(contract);
	}
  
	
	

}
