
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>房屋管理</title>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
  <jsp:include page="header.jsp"></jsp:include> 
  <script type="text/javascript">
			$(function() {
				$("#business-menu").addClass("in");
				$("div#menu ul li").removeClass("active");
				$("#business-menu li:eq(1)").addClass("active");
			})
		</script>  
  </head>
  <body>
  <jsp:include page="top.jsp"></jsp:include>
  <jsp:include page="menu.jsp"></jsp:include>

   <div class="content">
        
        <div class="header">
            
            <h1 class="page-title">Users</h1>
            
        </div>
        
                <ul class="breadcrumb">
            <li><a href="index.html">Home</a> <span class="divider">/</span></li>
            
        
        </ul>

        <div class="container-fluid">
            <div class="row-fluid">
                    
<div id="selectAll">
 
   
  
</div>
<div   >
<span style="margin-left: 250px">请输入合同编号：</span><input type="text" id="findContractId" class="" value="" style="width: 150px;height: 28px ;" name="name" >
<a href="javascript:void(0);" onclick="findContract()"  > <font size="3px">确定</font></a>
 <div id="contractInfo">
 <!--  <div style="margin-left: 150px ; "  >
                    <label>合同信息</label>
                    
             <span style="margin-right: 32px">房间号：</span>       <input type="text" class="span12" value="" readonly="readonly" style="width: 150px">
                    <label></label>
       <span style="margin-right: 44px">租客：</span>      <input type="text" class="span12" value="" readonly="readonly" style="width: 150px">
                    <label></label>
  <span style="margin-right: 20px">开始时间：</span>                 <input type="text" class="span12" value=""readonly="readonly" style="width: 150px">
                    <label></label>
   <span style="margin-right: 20px">结束时间：</span>             <input type="text" class="span12" value="" readonly="readonly" style="width: 150px">
                    <label></label>
    <span style="margin-right: 44px">描述：</span>             <input type="password" class="span12" value="" readonly="readonly"style="width: 150px">
                    </div>
                    
                    <form>
                     <div style="margin-left: 650px ; margin-top: -240px"  >
                    <label>账单</label>
                    
             <span style="margin-right: 32px">房间号：</span>       <input type="text" class="span12" value="" readonly="readonly" style="width: 150px">
                    <label></label>
       <span style="margin-right: 44px">租客：</span>      <input type="text" class="span12" value="" readonly="readonly" style="width: 150px">
                    <label></label>
  <span style="margin-right: 44px">金额：</span>                 <input type="text" class="span12" value=""readonly="readonly" style="width: 150px">
                    <label></label>
   <span style="margin-right: 20px">结束时间：</span>             <input type="text" class="span12" value="" readonly="readonly" style="width: 150px">
                    <label></label>
    <span style="margin-right: 44px">描述：</span>             <input type="password" class="span12" value="" readonly="readonly"style="width: 150px">
                    <label></label>
                    <a href="#" > <font size="3px">确定</font></a>
                    
                    </div>
                 </form>         
                     -->
           
                    
                、
                
          
                
                </div>
                
</div>
<div class="pagination">
   
</div>


  
  
                 <jsp:include page="footer.jsp"></jsp:include>
            </div>
            
        </div>
    </div>
	<script src="js/pager.js"></script>
	<script src="js/rent.js"></script>
	
	<input type="hidden" id="pageNo" name="pageNo" value="1"></input>
    <input type="hidden" id="totalPage" name="totalPage" value=""></input>
    <input type="hidden" id="id" name="id" value="" ></input>
</body> 
</html>

                  