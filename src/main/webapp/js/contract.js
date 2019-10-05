$(function(){
	
	renderData();
	datePlu();
	selectLike();
	resize();
	

});
/*
 * 时间插件
 */
function datePlu() {
	$('.date_picker').date_input();
    $("#startTime").click(function () {
    	$("#selectForm > div:nth-child(6)").css("display","none");
		
	})
}

function selectLike() {
	$("div#selectAll  div.btn-group  button:eq(0)").click(function () {
		$("#flag").val("5");
		$("#pageNo").val("1");
		renderData();
	})
}

/*
 * 清空搜索条件
 */
function resize() {
	$("div.btn-group button:eq(1)").click(function () {
		$("div#selectAll input").val("");
	})
}



