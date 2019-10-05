
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
				$("#finance-menu").addClass("in");
				$("div#menu ul li").removeClass("active");
				$("#finance-menu li:eq(1)").addClass("active");
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
 <form id="selectForm">
         房间号：
   <input type="text" class="" value="" style="width: 150px;height: 28px" name="room" >
        租客：
   <input type="text" class="" value="" style="width: 150px;height: 28px" name="renterName"  >
      
     开始时间：      <input id="startTime" name="startTimeString"     style="width: 150px;height: 28px;background: #fefefe;border: 1px solid #bbb;font-size: 14px;color: #333;padding: 7px;border-radius: 3px;" type="text" class="date_picker">(查出大于这个时间)
     结束时间：<input id="startTime"  name="endTimeString"  style="width: 150px;height: 28px;background: #fefefe;border: 1px solid #bbb;font-size: 14px;color: #333;padding: 7px;border-radius: 3px;" type="text" class="date_picker">(查出小于这个时间)
    状态：  <input type="text"  name="statuss"  class="" value="" style="width: 150px;height: 28px"  >
    <br>操纵人：  <input type="text"   name="operater"  class="" value="" style="width: 150px;height: 28px"  >
 (支持模糊查询) 
 </form>   
   

   <div class="btn-group">
   <button class="btn btn-primary" >查询</button>
   <button class="btn btn-primary" >清空</button>
  </div>
  
</div>
<div class="well">

    <table class="table">
      <thead>
        <tr>
          <th>编号</th>
          <th>房间号</th>
          <th>租客</th>
          <th>开始时间</th>
          <th>应到期时间</th>
          <th>状态</th>
          <th>描述</th>
           <th>到期天数</th>
           <th>操作人</th>
           <th>操作时间</th>
        </tr>
      </thead>
      <tbody id="tableTbody">
      <c:forEach items="${contractList}" var="contract" >
        <tr>
          <td>${contract.room}</td>
          <td><i class="icon-user"></i>${contract.renterName}</td>
          <td><fmt:formatDate value="${contract.startTime}" pattern="yyyy-MM-dd"/></td>
          <td><fmt:formatDate value="${contract.endTime}" pattern="yyyy-MM-dd"/></td>
          <td>${contract.status}</td>
           <td>${contract.desc}</td>
           <td>${contract.days}</td>
            <td>${contract.operater}</td>
             <td>${contract.operateDate}</td>
           <td>
               <a href="#update" role="button" data-toggle="modal"  data-id="${contract.id}" data-flag="1"  ><i class="icon-pencil"></i></a> 
              <a href="#delete" role="button" data-toggle="modal"  data-id="${contract.id}"><i class="icon-remove" ></i></a>
          </td>
           
        </tr>
        </c:forEach>
      </tbody>
    </table>
</div>
<div class="pagination">
    <ul id="pager">
        <li><a href="#">Prev</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">Next</a></li>
    </ul>
</div>

<div class="modal small hide fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel">删除！！！</h3>
    </div>
    <div class="modal-body" id="deleteBody">
        <p class="error-text"><i class="icon-warning-sign modal-icon"></i>你确定要删除吗？</p>
    </div>
    <div class="modal-footer" id="deleteFooter">
        <!-- <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
        <button class="btn btn-danger" data-dismiss="modal">Delete</button> -->
         <button class="btn" data-dismiss="modal">取消</button>
         <button class="btn btn-danger" id="deleteButton">确定</button>
    </div>
</div>
<div class="modal big hide fade" id="update" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel">修改合同</h3>
    </div>
    <div class="modal-body" id="updateBody">
         <div class="block-body">
                <form>
                    <label>房间号</label>
                    <input type="text" class="span12" value="" readonly="readonly">
                    <label>租客</label>
                    <input type="text" class="span12" value="">
                    <label>开始时间</label>
                    <input type="text" class="span12" value="">
                    <label>应到期时间</label>
                    <input type="text" class="span12" value="">
                    <label>描述</label>
                    <input type="password" class="span12" value="">
                </form>
            </div>
    </div>
    <div class="modal-footer" id="updateFooter">
        <!-- <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
        <button class="btn btn-danger" data-dismiss="modal">Delete</button> -->
         <button class="btn" data-dismiss="modal">取消</button>
         <button class="btn btn-danger" id="updateButton">确定</button>
    </div>
</div>
  
  
                 <jsp:include page="footer.jsp"></jsp:include>
            </div>
            
        </div>
    </div>
    <script src="js/index.js"></script>
	<script src="js/pager.js"></script>
	<script src="js/contract.js"></script>
	<script src="js/jquery.date_input.pack.js"></script>
	
	<input type="hidden" id="pageNo" name="pageNo" value="1"></input>
    <input type="hidden" id="totalPage" name="totalPage" value=""></input>
    <input type="hidden" id="contractId" name="contractId" value="" ></input>
    <input type="hidden" id="date" name="date" value="" ></input>
    <input type="hidden" id="flag" name="flag" value="0" ></input>
</body> 
</html>

                  