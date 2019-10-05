package com.hu.house.mapper;

import java.util.Date;
import java.util.List;

import com.hu.house.pojo.Contract;

public interface ContractMapper {
        //查出过期的合同
	    List<Contract>findLateContract(Date time);
	    //查出将要过期和退房的合同
	    List<Contract>findWillContract(Date time,String status);
	    //根据ID删除合同
	    int deleteContractById(Integer id);
	    //查出预定的合同
	    List<Contract>findReserveContract(Date time);
	    //查出所有合同
	    List<Contract>findAllContract();
	    //根据ID 查出合同信息
	    Contract findContractById(int id);
	    //编辑合同 
	    int updateContractById(Contract contract);
	    //查出所有合同
	    List<Contract>findContractLike(Contract contract);
	    //添加合同
	    int  addContract(Contract contract);
	    
}
