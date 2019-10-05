package com.hu.house.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.hu.house.pojo.Contract;
import com.hu.house.utils.PageUtil;

public interface ContractService {
	 //查出首页所需的合同
    Map<String,Object>findLateContract(Date time,PageUtil pageUtil,int flag);
   
    //根据ID删除合同
    int deleteContractById(int id);
    //查出所有的合同
    Map<String,Object>findAllContract(PageUtil pageUtil);
    
    //根据ID 查出合同信息
    Contract findContractById(int id);
    //编辑合同 
    int updateContractById(Contract contract);
    //查出模糊查询下所有合同
    Map<String,Object>findContractLike(Contract contract,PageUtil pageUtil);
    //添加合同
    int  addContract(Contract contract);
    

}
