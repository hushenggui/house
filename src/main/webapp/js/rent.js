$(function () {
	
	
	
})

function findContract() {
	var id=$("#findContractId").val();
	var contractInfo=$("#contractInfo");
	$.ajax({
		type:"post",
    	url:"rentInfo",
    	data:{"id":id},
    	datatype:"json",
    	success:function(res){
    	var  contract=res["contract"];
    	var  room=res["room"];
    		if(contract==null){
    			var html='<label style="margin-left: 360px;margin-top: 40px"> <font face="楷体" color="red" size="5px">合同不存在,请重试！！！</font></label>';
				contractInfo.html(html);
    		}else{
    			var startTime=getFormatDate(new Date(contract.startTime));
	    		var endTime=getFormatDate(new Date(contract.endTime));
	    		var end1=getDate(contract.endTime,1);
	    		var end2=getDate(contract.endTime,2);
	    		var end3=getDate(contract.endTime,3);
	    		var price =room.price;
	    		var price2=price*2;
	    		var price3=price*3;
	    		
    		 var html='';
    		 html+='  <div style="margin-left: 150px ; "  ><label>合同信息</label><span style="margin-right: 32px">房间号：</span><input type="text" class="span12" value="'+contract.room+'" readonly="readonly" style="width: 150px">';
    		 html+='<label></label><span style="margin-right: 44px">租客：</span><input type="text" class="span12" value="'+contract.renterName+'" readonly="readonly" style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 20px">开始时间：</span><input type="text" class="span12" value="'+startTime+'" readonly="readonly" style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 20px">结束时间：</span><input type="text" class="span12" value="'+endTime+'" readonly="readonly" style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 44px">描述：</span><input type="text" class="span12" value="'+contract.descc+'" readonly="readonly" style="width: 150px">';
    		 html+='<label>房间信息</label>'
    		 html+='<label></label><span style="margin-right: 20px">支付方式：</span><input type="text" class="span12" value="'+room.payWays+'" readonly="readonly" style="width: 150px">';
    		 html+='<label></label><span style="margin-right: 44px">价格：</span><input type="text" class="span12" value="'+room.price+'" readonly="readonly" style="width: 150px">';
    		 html+=' </div>';
    		 html+='  <form id="billForm"><div  style="margin-left: 550px ; margin-top: -350px"  ><label>账单</label><span style="margin-right: 32px">房间号：</span><input type="text" name="room" class="span12" value="'+contract.room+'" readonly="readonly" style="width: 150px">';
    		 html+='<label></label><span style="margin-right: 44px">租客：</span><input type="text" name="renterName" class="span12" value="'+contract.renterName+'" readonly="readonly" style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 20px">开始时间：</span><input type="text" class="span12" value="'+startTime+'" readonly="readonly" style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 20px">结束时间：</span>';	
    		 html+=' <select name="endTime" style="width: 150px;height: 28px" ><option value="'+end1+'">'+end1+'</option><option value="'+end2+'">'+end2+'</option><option value="'+end3+'">'+end3+'</option></select>';
    		 html+='<label></label><span style="margin-right: 44px">金额：</span>';	
    		 html+=' <select name="cost" style="width: 150px;height: 28px" ><option value="'+price+'">'+price+'</option><option value="'+price2+'">'+price2+'</option><option value="'+price3+'">'+price3+'</option></select>';
             html+='<label></label><a href="javascript:void(0);" onclick="bill()"  > <font size="3px">确定</font></a>';
             html+='<input type="hidden" name="id" class="span12" value="'+contract.id+'" readonly="readonly" style="width: 150px">'       
                   
    		 html+=' </div> </form>';
    		 
    		 
    		 contractInfo.html(html);
    		}
    		
    	}
    	
	})
	
	
}

Date.prototype.format = function (format) {  
    var o = {  
        "M+": this.getMonth() + 1,  
        "d+": this.getDate(),  
        "h+": this.getHours(),  
        "m+": this.getMinutes(),  
        "s+": this.getSeconds(),  
        "q+": Math.floor((this.getMonth() + 3) / 3),  
        "S": this.getMilliseconds()  
    }  
    if (/(y+)/.test(format)) {  
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
    }  
    for (var k in o) {  
        if (new RegExp("(" + k + ")").test(format)) {  
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));  
        }  
    }  
    return format;  
}  

/** 
 *转换日期对象为日期字符串 
 * @param l long值 
 * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss 
 * @return 符合要求的日期字符串 
 */  
function getFormatDate(date) {  
    if (date == undefined) {  
        date = new Date();  
    }  
   
    var  pattern = "yyyy-MM-dd";  
    
    return date.format(pattern);  
}

function getDate(time,flag) {
	timeTemp=2592000000*flag;
	var day=86400000;
	var ss=getFormatDate(new Date(time+timeTemp));
	var sstemp=ss.split("-");
	if(sstemp[2]=="31"||sstemp[2]=="30"){
		ss=getFormatDate(new Date(time+timeTemp+day));
	}
	var sstemp1=ss.split("-");
	if(sstemp1[2]=="31"){
		ss=getFormatDate(new Date(time+timeTemp+day+day));
	}
	return ss
	
}

function getDate1(time,flag) {
	timeTemp=2592000000*flag;
	var day=86400000;
	if(flag==2){
		ss=getFormatDate(new Date(time+timeTemp+day));
		return ss;
	}
	var ss=getFormatDate(new Date(time));
	var sstemp=ss.split("-");
	if(flag==1){
	if(sstemp[1]=="01"||sstemp[1]=="03"||sstemp[1]=="05"||sstemp[1]=="07"||sstemp[1]=="08"||sstemp[1]=="10"||sstemp[1]=="12"){
		ss=getFormatDate(new Date(time+timeTemp+day));
	}else{
		ss=getFormatDate(new Date(time+timeTemp));
	}
	}
	if(flag==3){
		if(sstemp[1]=="01"||sstemp[1]=="03"||sstemp[1]=="05"||sstemp[1]=="07"||sstemp[1]=="08"||sstemp[1]=="10"||sstemp[1]=="12"){
			ss=getFormatDate(new Date(time+timeTemp+day+day));
		}else{
			ss=getFormatDate(new Date(time+timeTemp+day));
		}
	}
	return ss;
	
}



	


function bill() {
	var params=$("#billForm").serialize();
	$.ajax({
		type:"post",
		url:"rentAndBill",
		datatype:"json",
		data:params,
		success:function(res){
			var contractInfo=$("#contractInfo");
			if(res>0){
				var html='<label style="margin-left: 360px;margin-top: 40px"> <font face="楷体" color="green" size="5px">操作成功！！！</font></label>';
				contractInfo.html(html);
			}else{
				var html='<label style="margin-left: 360px;margin-top: 40px"> <font face="楷体" color="red" size="5px">操作失败！！！</font></label>';
				contractInfo.html(html);
			}
			
		}
		
		
		
	})
	
	
}

function findRoom() {
	var id=$("#findRoomId").val();
	var contractInfo=$("#contractInfo");
	$.ajax({
		type:"post",
    	url:"willSignContract",
    	data:{"id":id},
    	datatype:"json",
    	success:function(res){
    	var  startTimeTemp=res["startTime"];
    	var  room=res["room"];
    		if(room==null){
    			var html='<label style="margin-left: 360px;margin-top: 40px"> <font face="楷体" color="red" size="5px">合同不存在,请重试！！！</font></label>';
				contractInfo.html(html);
    		}else{
    			var startTimp=getFormatDate(new Date(startTimeTemp));
	    		var end1=getDate1(startTimeTemp,1);
	    		var end2=getDate1(startTimeTemp,2);
	    		var end3=getDate1(startTimeTemp,3);
	    		var price =room.price;
	    		var price2=price*2;
	    		var price3=price*3;
    		 var html='';
    		 html+=' <form id="signForm"> <div style="margin-left: 150px ; "  ><label>登记用户</label><span style="margin-right: 32px">';
    		 html+='<label></label><span style="margin-right: 31px">租客：</span><input id="renterName" name="name" type="text" class="span12" value=""  style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 31px">电话：</span><input id="tel" name="tel" type="text" class="span12" value=""  style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 20px">身份证：</span><input id="idCard" name="idCard" type="text" class="span12" value=""  style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 20px">房间号：</span><input type="text" class="span12" value="'+room.rname+'" readonly="readonly" style="width: 150px">';
    		 html+=' </div>';
    		 html+=' <div  style="margin-left: 550px ; margin-top: -205px"  ><label>账单</label><span style="margin-right: 32px">';
    		 html+='<label></label><span style="margin-right: 20px">房间号：</span><input  type="text" class="span12" value="'+room.rname+'"  readonly="readonly" style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 9px">支付方式：</span><input type="text" class="span12" value="'+room.payWays+'"  readonly="readonly" style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 9px">开始时间：</span><input type="text" class="span12" value="'+startTimp+'"  style="width: 150px">';
    		 html+='<label></label><span style="margin-right: 9px">房间状况：</span><textarea style="width: 150px;height:70px" >'+room.descc+'</textarea> ';	
    		 html+='<label></label><span style="margin-right: 7px">结束时间：</span>';	
    		 html+=' <select name="endTime" style="width: 150px;height: 28px" ><option value="'+end1+'">'+end1+'</option><option value="'+end2+'">'+end2+'</option><option value="'+end3+'">'+end3+'</option></select>';
    		 html+='<label></label><span style="margin-right: 31px">金额：</span>';	
    		 html+=' <select name="cost" style="width: 150px;height: 28px" ><option value="'+price+'">'+price+'</option><option value="'+price2+'">'+price2+'</option><option value="'+price3+'">'+price3+'</option></select>';
    		 html+='<label></label><span style="margin-right: 33px">描述：</span><input name="descc" type="text" class="span12" value=""  style="width: 150px">';	
             html+='<label></label><a href="javascript:void(0);" onclick="sign()"  > <font size="3px">确定</font></a>';
             html+='<input type="hidden" name="id" class="span12" value="'+room.id+'"  style="width: 150px">' 
             html+='<input type="hidden" name="room" class="span12" value="'+room.rname+'"  style="width: 150px">';	 	 
                   
    		 html+=' </div> </form>';
    		 contractInfo.html(html);
    		}
    		
    	}
	
	
    })

}


function sign() {
	var renterName=$("#renterName").val();
	if(renterName==""){
		alert("租客名字不能为空");
		return;
	}
	var idCard=$("#idCard").val();
	if(idCard==""){
		alert("身份证不能为空");
		return;
	}
	var tel=$("#tel").val();
	if(tel==""){
		alert("电话不能为空");
		return;
	}
	var params=$("#signForm").serialize();
	params = decodeURIComponent(params,true);
	$.ajax({
		type:"post",
		url:"signContract",
		data:params,
		datatype:"json",
		success:function(res){
			var contractInfo=$("#contractInfo");
			if(res>=4){
				var html='<label style="margin-left: 360px;margin-top: 40px"> <font face="楷体" color="green" size="5px">操作成功！！！</font></label>';
				contractInfo.html(html);
			}
			
		}
		
		
		
	})
	
}

function findContractCheck() {
	var id=$("#findContractId").val();
	var contractInfo=$("#contractInfo");
	$.ajax({
		type:"post",
    	url:"checkInfo",
    	data:{"id":id},
    	datatype:"json",
    	success:function(res){
    	var  contract=res["contract"];
    	//var  room=res["room"];
    		if(contract==null){
    			var html='<label style="margin-left: 360px;margin-top: 40px"> <font face="楷体" color="red" size="5px">合同不存在,请重试！！！</font></label>';
				contractInfo.html(html);
    		}else{
    			var startTime=getFormatDate(new Date(contract.startTime));
	    		var endTime=getFormatDate(new Date(contract.endTime));
	    		
    		 var html='';
    		 html+='<form id="checkForm">  <div style="margin-left: 300px ; "  ><label>合同信息</label><span style="margin-right: 32px">房间号：</span><input name="room" type="text" class="span12" value="'+contract.room+'" readonly="readonly" style="width: 150px">';
    		 html+='<label></label><span style="margin-right: 44px">租客：</span><input name="renterName" type="text" class="span12" value="'+contract.renterName+'" readonly="readonly" style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 20px">结束时间：</span><input type="text" class="span12" value="'+endTime+'" readonly="readonly" style="width: 150px">';	
    		 html+='<label></label><span style="margin-right: 20px">退房时间：</span><input id="startTime" name="endTimeString" style="width: 150px;height: 28px;background: #fefefe;border: 1px solid #bbb;font-size: 14px;color: #333;padding: 7px;border-radius: 3px;" type="text" class="date_picker">';	
    		 html+='<label></label><span style="margin-right: 44px">描述：</span><input type="text" class="span12" value="'+contract.descc+'" readonly="readonly" style="width: 150px">';
    		 html+='<label></label><span style="margin-right: 18px">支出状况：</span>';	
    		 html+=' <select name="income" style="width: 150px;height: 28px" ><option value="支出">支出</option><option value="收入">收入</option></select>';
    		 html+='<label></label><span style="margin-right: 44px">金额：</span><input name="cost" type="text" class="span12" value=""  style="width: 150px">';
             html+='<label></label><a href="javascript:void(0);" onclick="checkBill()"  > <font size="3px">确定</font></a>';
             html+='<input type="hidden" name="id" class="span12" value="'+contract.id+'" readonly="readonly" style="width: 150px">'       
    		 html+=' </div> </form>';
    		 contractInfo.html(html);
    		 $('.date_picker').date_input();
    		}
    	}
    	
	})
	
}

function checkBill() {
	var params=$("#checkForm").serialize();
	$.ajax({
		type:"post",
		url:"check",
		data:params,
		datatype:"json",
		success:function(res){
			var contractInfo=$("#contractInfo");
			if(res>=2){
				var html='<label style="margin-left: 360px;margin-top: 40px"> <font face="楷体" color="green" size="5px">操作成功！！！</font></label>';
				contractInfo.html(html);
			}
		}	
		
	})
	
	
}
