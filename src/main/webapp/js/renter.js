$(function () {
	renderData();
	selectLike();
	deleteRenter();
	updateRenter();
	resize();
})





function renderData() {
	var pageNo=$("#pageNo").val();
    var form=$("#selectForm").serialize();
    var params=form+"&pageNo="+pageNo;
    $.ajax({
    	type:"post",
    	url:"findAllRenter",
    	data:params,
    	datatype:"json",
    	success:function(map){
    		var list=map["renterList"];
    		if(list==null||list.length==0){
    		    $("#tableTbody").html("");
    		    $("#pager").html("");
    			return;
    	  }
	    	var totalPage=map["totalPage"];
    		var html='';
    		for (var i = 0; i< list.length; i++) {
    			var room=list[i].room;
    			if(room==null) room="";
				html+='<tr>'
				html+='<td><i class="icon-user"></i>'+list[i].name+'</td>';
				html+='<td>'+list[i].tel+'</td>';
				html+='<td>'+list[i].idCard+'</td>';
				html+='<td>'+room+'</td>';
				html+='<td>'+list[i].descc+'</td>';
				html+=' <td><a href="#update" role="button" data-toggle="modal" data-id="'+list[i].id+'" data-flag="1" ><i class="icon-pencil"></i></a>   <a href="#delete" role="button" data-toggle="modal" data-id="'+list[i].id+'"><i class="icon-remove"></i></a></td></tr>';
			   }
    		 $("#tableTbody").html(html);
	    	 var totalPage=$("#totalPage").val(totalPage);
	    	 setPage1();
	    	 del();
    	}
    	
    })
   
}

function setPage1() {
	var totalPage=$("#totalPage").val();
	var pageNo=$("#pageNo").val();
	var container=document.getElementById("pager");
	setPage(container, totalPage, pageNo, renderData);
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
					url:"findRenterById",
					data:{"id":id},
					success:function(res){
						var html='';
						html+='<div class="block-body">'
						html+='<form id="formUpdate">';
						html+='<input type="hidden" class="span12"  value="'+res.id+'" name="id"> ' ;
						html+=' <label>名字</label><input type="text" class="span12" readonly="readonly"  name="name" value="'+res.name+'">';
						html+=' <label>电话</label><input type="text" class="span12"  name="tel" value="'+res.tel+'">';
						html+=' <label>身份证</label><input type="text" class="span12" name="idCard" value="'+res.idCard+'">';
						html+=' <label>描述</label><input type="text" class="span12" name="descc" value="'+res.descc+'"> ';
						
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
function deleteRenter() {
	$("#deleteButton").click(function () {
		var id=$("#id").val();
		$.ajax({
			type: "post",
			url:  "deleteRenterById",
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
function updateRenter() {
	$("#updateButton").click(function () {
		var id=$("#id").val();
		var params=$("#formUpdate").serialize() ;
		$.ajax({
			type: "post",
			url:   "updateRenterById",
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




function selectLike() {
	$("div#selectAll  div.btn-group  button:eq(0)").click(function () {
		$("#pageNo").val("1");
		renderData();
	})
}
function resize() {
	$("div.btn-group button:eq(1)").click(function () {
		$("div#selectAll input").val("");
	})
}