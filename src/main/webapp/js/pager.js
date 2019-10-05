//container 容器，count 总页数 pageindex 当前页数
function setPage(container, count, pageindex, func) {
  var a = [];
  //总页数少于10 全部显示,大于10 显示前3 后3 中间3 其余....
  if (pageindex == 1) {
    a[a.length] = "<li><a href=\"javascript:;\" class=\"prev unclick\">&laquo;</a></li>";
  } else {
    a[a.length] = "<li><a href=\"javascript:;\" class=\"prev\">&laquo;</a></li>";
  }
  function setPageList(i) {
    if (pageindex == i) {
      a[a.length] = "<li class=\"active\"><a href=\"javascript:;\" >" + i + "</a></li>";
    } else {
      a[a.length] = "<li><a href=\"javascript:;\">" + i + "</a></li>";
    }
  }
  //总页数小于10
  if (count <= 10) {
    for (var i = 1; i <= count; i++) {
      setPageList(i);
    }
  }
  //总页数大于10页
  else {
    if (pageindex <= 4) {
      for (var i = 1; i <= 5; i++) {
        setPageList(i);
      }
      a[a.length] = "<li><a href=\"javascript:;\">...</a></li><li><a href=\"javascript:;\">" + count + "</a></li>";
    } else if (pageindex >= count - 3) {
      a[a.length] = "<li><a href=\"javascript:;\">1</a></li><li><a href=\"javascript:;\">...</a></li>";
      for (var i = count - 4; i <= count; i++) {
        setPageList(i);
      }
    }
    else { //当前页在中间部分
      a[a.length] = "<li><a href=\"javascript:;\">1</a></li><li><a href=\"javascript:;\">...</a></li>";
      for (i = pageindex - 2; i <= parseInt(pageindex) + 2; i++) {
        setPageList(i);
      }
      a[a.length] = "<li><a href=\"javascript:;\">...</a></li><li><a href=\"javascript:;\">" + count + "</a></li>";
    }
  }
  if (pageindex == count) {
    a[a.length] = "<li><a href=\"javascript:;\" class=\"next unclick\">&raquo;</a></li>";
  } else {
    a[a.length] = "<li><a href=\"javascript:;\" class=\"next\">&raquo;</a></li>";
  }

  /*增加中转中间*/
  a[a.length] = "<li><input type=\"text\" style=\"width:55px;height: 38px;\" value=\""+pageindex+"\" onKeyPress=\"if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;\"></li>";
  a[a.length] = "<li><input type=\"button\" value=\"GO\" class=\"next\" style=\"width:44px;height: 38px;\"></li>";

  container.innerHTML = a.join("");

  //事件点击
  var pageClick = function() {
    var oAlink = container.getElementsByTagName("a");
    var inx = pageindex; //初始的页码
    oAlink[0].onclick = function() { //点击上一页
      if (inx == 1) {
        return false;
      }
      inx--;
      $("#pageNo").val(inx);
      func();
      return false;
    };

    for (var i = 1; i < oAlink.length - 1; i++) { //点击页码
      oAlink[i].onclick = function() {
        if(isNaN(this.innerHTML)){//不是数字，则必是……
          return false;
        }
        inx = parseInt(this.innerHTML);
        $("#pageNo").val(inx);
        func();
        return false;
      };
    }

    oAlink[oAlink.length - 1].onclick = function() { //点击下一页
      if (inx == count) {
        return false;
      }
      inx++;
      $("#pageNo").val(inx);
      func();
      return false;
    };

    var oButtonlink = container.getElementsByTagName("input");

    oButtonlink[1].onclick=function() { //点击下一页
      var inx = oButtonlink[0].value;
      //console.log("跳转到：" + inx + "页");
      if (inx == null || inx == "") inx = 1;
      if (inx > count) inx = count;
      $("#pageNo").val(inx);
      func();
      return false;
    };
  };
  //延迟400ms秒执行
  setTimeout(pageClick,400);
}