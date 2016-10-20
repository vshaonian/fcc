// 创建数据库引用。最好自己创建一个应用，把 danmu 即 `appId` 换成你自己的
$(document).ready(function() {
  var config = {
    authDomain: "sxydanmu.wilddog.com",
    syncURL: "https://sxydanmu.wilddogio.com"
  };
  wilddog.initializeApp(config);
  var ref = wilddog.sync().ref();
  var arr = [];

  //发射按钮事件
  $("#shut").click(function() {
    var text = $(".s_txt").val();//获取输入框文字
    ref.child('message').push(text);// 将数据写到云端 message 节点下，child 用来定位子节点
    $(".s_txt").val('');//清空输入框
    //arr.push(text);
    console.log(arr);
  });

  //清空按钮事件
  $("#clc").click(function() {
    ref.remove();//清空云端数据
    arr = [];
    $(".message").empty();//清空显示框
  });

  //在显示框显示
  // 绑定 'child_added' 事件，当 message 节点下有子节点新增时，就会触发回调，回调的 `snapshot` 对象包含了新增的数据
  ref.child('message').on('child_added', function(snapshot) {
  	var text = snapshot.val();
    arr.push(text);
    var textObj = $("<div></div>");
    textObj.text(text);
    $(".message").append(textObj);
    moveObj(textObj);
    console.log(text);
  });

  //清屏后
  ref.on('child_removed', function(snapshot) {
    arr = [];
    $(".message").empty();
  });

  var topMin = $('.message').offset().top; 	 // 显示框距顶部距离
  var topMax = topMin + $('.message').height(); // 显示框底部距顶部距离
  var _top = topMin; // 每个滚动消息距顶部距离
  var moveObj = function(obj) {
  	var _left = $('.message').width() - obj.width();
  	_top = _top + 50;
  	if (_top > (topMax - 50)) {
  		_top = topMin;
  	}
  	obj.css({
  		left : _left,
  		top : _top,
  		color : getRandomColor()  // 获取随机颜色
  	});
  	var time = 20000 + 10000 * Math.random();
  	// animate() 方法执行 CSS 属性集的自定义动画。逐渐改变的，这样就可以创建动画效果。
  	obj.animate({
  		left : "-" + _left + "px"  // 让消息距左距离逐渐减小，产生右向左滚动动画。
  	}, time, function() {
  		obj.remove();
  	});
  }


  var getAndRun = function() {
	if (arr.length > 0) {
		var n = Math.floor(Math.random() * arr.length + 1) - 1;
		var textObj = $("<div>" + arr[n] + "</div>");
		$(".message").append(textObj);
		moveObj(textObj);
	}
	setTimeout(getAndRun, 1000);
  }

  var getRandomColor = function() {
	return '#' + (function(h) {
		return new Array(7 - h.length).join("0") + h
	})((Math.random() * 0x1000000 << 0).toString(16))
  }
  jQuery.fx.interval = 50;
  getAndRun();
});
