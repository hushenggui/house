

$(function(){
	var uname=$("#uname").val();
	if(uname!=null){
		renderData();
	}
	setPage1();
	deleteContract();
	updateContract();
	buttonCup();
	del();
});
function renderData() {
	var pageNo=$("#pageNo").val();
	var date=$("#date").val();
	var flag=$("#flag").val();
	var param=$("#selectForm").serialize();
	var params=null;
	if(param!=null){
		params=param+"&pageNo="+pageNo+"&date="+date+"&flag="+flag;
	}else{
		params="pageNo="+pageNo+"&date="+date+"&flag="+flag
	}
	$.ajax({
		  type: "post",
		  url:   "contractPage",
		  dataType: "json",
	      data:params,
	      success:function(map){
	    	 /* if(flag==3){
	    		  $("div.well > table > thead > tr > th:nth-child(8)").html("即将入住天数");
	    	  }else{
	    		  $("div.well > table > thead > tr > th:nth-child(8)").html("到期天数");
	    	  }*/
	    	  var list=map["contractList"];
	    	  var totalPage=map["totalPage"];
	    	  if(list==null||list.length==0){
	    		    $("#tableTbody").html("");
	    		    $("#pager").html("");
	    			return;
	    	  }
	    	  var html="";
	    	  for (var i = 0; i< list.length; i++) {
	    		 if(list[i].descc==null){
	    			 var descc="无";
	    		 }else{
	    			 var descc=list[i].descc;
	    		 } 
	    		  
	    		var startTime=getFormatDate(new Date(list[i].startTime));
	    		var endTime=getFormatDate(new Date(list[i].endTime));
				html+='<tr><td>'+list[i].id;
				html+='<td>'+list[i].room+'</td>';
				html+='<td><i class="icon-user"></i>'+list[i].renterName+'</td>';
				html+='<td>'+startTime+'</td>';
				html+='<td>'+endTime+'</td>';
				html+='<td>'+list[i].statuss+'</td>';
				html+='<td>'+descc+'</td>';
				html+='<td>'+list[i].days+'</td>';
				html+='<td>'+list[i].operater+'</td>';
				html+='<td>'+list[i].operateDate+'</td>';
				html+=' <td><a href="#update" role="button" data-toggle="modal" data-id="'+list[i].id+'" data-flag="1" ><i class="icon-pencil"></i></a>   <a href="#delete" role="button" data-toggle="modal" data-id="'+list[i].id+'"><i class="icon-remove"></i></a></td></tr>';
			   }
	    	  $("#tableTbody").html(html);
	    	  var totalPage=$("#totalPage").val(totalPage);
	    	  setPage1();
	    	  del();
	      }
	});
	
}
/*
 * 设置页数
 */

function setPage1() {
	var totalPage=$("#totalPage").val();
	var pageNo=$("#pageNo").val();
	var container=document.getElementById("pager");
	setPage(container, totalPage, pageNo, renderData);
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

/*
 * button 切换
 */
function buttonCup() {
	$("div.btn-toolbar button.btn-more").each(function(i,n){
		$(this).click(function() {
			if($(this).hasClass("active")){
				return ;
			}
			$(".btn-toolbar button.btn-more").removeClass("active");
			$(this).addClass("active");
			var flag=i+1;
			$("#flag").val(flag);
			$("#pageNo").val(1);
			renderData();
		})
		
	})
	
}
/*
 * 删除
 */
function deleteContract() {
	$("#deleteButton").click(function () {
		var id=$("#id").val();
		$.ajax({
			type: "post",
			url:   "deleteContractById",
			data:{"id":id},
			success:function(res){
				var html="";
				var html1="";
				if(res>0){
					html+='<h5>删除成功！！！</h5><br>';
				}else{
					html+='<h5>删除失败，请重试！！！</h5><br>';
				}
				$("#deleteBody").html(html);
				//html+='<button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>';
				html1+='<button class="btn btn-danger" data-dismiss="modal">确定</button>';
				$("#deleteFooter").html(html1);
			}
		});
	})
	
}
/*
 * 删除修改图标按钮绑定点击
 */
function del() {
	$("#tableTbody > tr> td > a").each(function(i,n){
		$(this).click(function () {
			var id=$(this).attr("data-id");
			var flag=$(this).attr("data-flag");
			$("#id").val(id);
			if(flag==1){
				$.ajax({
					type:"post",
					url:"findContractById",
					data:{"id":id},
					success:function(res){
						var startTime=getFormatDate(new Date(res.startTime));
						var endTime=getFormatDate(new Date(res.endTime));
						var html='';
						html+='<div class="block-body">'
						html+='<form id="formUpdate">';
						html+='<input type="hidden" class="span12"  value="'+res.id+'" name="id"> ' ;
						html+=' <label>房间号</label><input type="text" class="span12" readonly="readonly" value="'+res.room+'">';
						html+=' <label>租客</label><input type="text" class="span12" readonly="readonly" value="'+res.renterName+'">';
						html+=' <label>开始时间</label><input type="text" class="span12" readonly="readonly" value="'+startTime+'">';
						html+=' <label>应到期时间</label><input type="text" class="span12" value="'+endTime+'" name="endTimeString">' ;
						html+=' <label>描述</label><input type="text" class="span12" value="'+res.descc+'" name="descc">';
						html+='</form>';
						html+='</div>';
						$("#updateBody").html(html);
					}
				})
			}
		})
	});
}

function updateContract() {
	$("#updateButton").click(function () {
		var id=$("#id").val();
		var params=$("#formUpdate").serialize() ;
		$.ajax({
			type: "post",
			url:   "updateContractById",
			data:params,
			success:function(res){
				var html="";
				var html1="";
				if(res>0){
					html+='<h5>修改成功！！！</h5><br>';
				}else{
					html+='<h5>修改失败，请重试！！！</h5><br>';
				}
				$("#updateBody").html(html);
				//html+='<button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>';
				html1+='<button class="btn btn-danger" data-dismiss="modal">确定</button>';
				$("#updateFooter").html(html1);
			}
		});
	})
	
	
	
}





