$(function () {
	menu();
	renderData();
	selectLike();
	resize();
	
	
})

function renderData() {
	var pageNo=$("#pageNo").val();
    var form=$("#selectForm").serialize();
    var params=form+"&page="+pageNo;
    $.ajax({
    	type:"post",
    	url:"selectBill",
    	data:params,
    	datatype:"json",
    	success:function(map){
    		var list=map["billList"];
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
				html+='<td>'+list[i].room;
				html+='<td><i class="icon-user"></i>'+renterName+'</td>';
				html+='<td>'+list[i].income+'</td>';
				html+='<td>'+list[i].cost+'</td>';
				html+='<td>'+list[i].endTime+'</td>';
				html+='<td>'+operater+'</td>';
				html+='<td>'+operateDate+'</td>';
				//html+=' <td><a href="#update" role="button" data-toggle="modal" data-id="'+list[i].id+'" data-flag="1" ><i class="icon-pencil"></i></a>   <a href="#delete" role="button" data-toggle="modal" data-id="'+list[i].id+'"><i class="icon-remove"></i></a></td></tr>';
			   }
    		 $("#tableTbody").html(html);
	    	 var totalPage=$("#totalPage").val(totalPage);
	    	 setPage1();
	    	// del();
    	}
    	
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

function resize() {
	$("div.btn-group button:eq(1)").click(function () {
		$("div#selectAll input").val("");
	})
}

function menu() {
	//$("div#menu ul").removeClass("in");
	$("#finance-menu").addClass("in");
	$("div#menu ul li").removeClass("active");
	$("#finance-menu li:eq(0)").addClass("active");
}
