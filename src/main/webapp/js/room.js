$(function () {
	
	renderData();
	selectLike();
	deleteRoom();
	updateRoom();
	resize();
	
})

function renderData() {
	var pageNo=$("#pageNo").val();
    var form=$("#selectForm").serialize();
    var params=form+"&page="+pageNo;
    $.ajax({
    	type:"post",
    	url:"selectRoom",
    	data:params,
    	datatype:"json",
    	success:function(map){
    		var list=map["roomList"];
	    	var totalPage=map["totalPage"];
	    	if(list==null||list.length==0){
    		    $("#tableTbody").html("");
    		    $("#pager").html("");
    			return;
    	  }
    		var html='';
    		for (var i = 0; i< list.length; i++) {
    			var renterName=list[i].renterName;
    			var operater=list[i].operater;
    			var operateDate=list[i].operateDate;
    			if(operater==null) operater="";
    			if(operateDate==null) operateDate="";
    			if(renterName==null) renterName="";
    			html+='<tr><td>'+list[i].id+'</td>';
				html+='<td data-toggle="popover" data-picture='+list[i].picture+'>'+list[i].rname;
				html+='<td><i class="icon-user"></i>'+renterName+'</td>';
				html+='<td>'+list[i].payWays+'</td>';
				html+='<td>'+list[i].statuss+'</td>';
				html+='<td>'+list[i].size+'</td>';
				html+='<td>'+list[i].descc+'</td>';
				html+='<td>'+operater+'</td>';
				html+='<td>'+operateDate+'</td>';
				html+=' <td><a href="#update" role="button" data-toggle="modal" data-id="'+list[i].id+'" data-flag="1" ><i class="icon-pencil"></i></a>   <a href="#delete" role="button" data-toggle="modal" data-id="'+list[i].id+'"><i class="icon-remove"></i></a></td></tr>';
			    
    		}
    		 $("#tableTbody").html(html);
	    	 var totalPage=$("#totalPage").val(totalPage);
	    	 setPage1();
	    	 del();
	    	 imageHover();
    	}
    	
    })
   
}
function imageHover() {
	$("#tableTbody > tr > td:eq(1)").each(function(){
		var picture=$(this).attr("data-picture");
		$(this).popover(
			     {
	   		      trigger:'hover', //触发方式
	   		     // title:"标题",//设置 弹出框 的标题
	   		      html: true, // 为true的话，data-content里就能放html代码了
	   		      template:'<img src='+picture+'> style="width:60px,height:70px"',//这里可以直接写字符串，也可以 是一个函数，该函数返回一个字符串；
	   		                 }
	   		             );
		
		
	})
	
}

function setPage1() {
	var totalPage=$("#totalPage").val();
	var pageNo=$("#pageNo").val();
	var container=document.getElementById("pager");
	setPage(container, totalPage, pageNo, renderData);
}

function selectLike() {
	$("div#selectAll  div.btn-group  button:eq(0)").click(function () {
		$("#pageNo").val("1");
		renderData();
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
					url:"findRoomById",
					data:{"id":id},
					success:function(res){
						var renterName =res.renterName
						if(renterName==null)  renterName="";
						var html='';
						html+='<div class="block-body">'
						html+='<form id="formUpdate">';
						html+='<input type="hidden" class="span12"  value="'+res.id+'" name="id"> ' ;
						html+=' <label>房间号</label><input type="text" class="span12" readonly="readonly"  name="rname" value="'+res.rname+'">';
						html+=' <label>租客</label><input type="text" class="span12" readonly="readonly" name="renterName" value="'+renterName+'">';
						html+=' <label>支付方式</label><input type="text" class="span12" name="payWays" value="'+res.payWays+'">';
						html+=' <label>状态</label> <select name="statuss" style="width: 150px;height: 28px" >';
						if(res.statuss=="空闲"){
							html+='<option value="空闲" selected="selected" >空闲</option>';
							html+='<option value="租赁中">租赁中</option>';
						}else{
							html+='<option value="空闲" >空闲</option>';
							html+='<option value="租赁中" selected="selected" >租赁中</option>';
						}
						     
						html+='</select>'   
						html+=' <label>大小</label><input type="text" class="span12" value="'+res.size+'" name="size">' ;	
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


/*
 * 删除
 */
function deleteRoom() {
	$("#deleteButton").click(function () {
		var id=$("#id").val();
		$.ajax({
			type: "post",
			url:   "deleteRoomById",
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
 * 修改
 */
function updateRoom() {
	$("#updateButton").click(function () {
		var id=$("#id").val();
		var params=$("#formUpdate").serialize() ;
		$.ajax({
			type: "post",
			url:   "updateRoomById",
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

function resize() {
	$("div.btn-group button:eq(1)").click(function () {
		$("div#selectAll input").val("");
	})
}