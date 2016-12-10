var sltime = document.getElementById("slnum");
var bltime = document.getElementById("blnum");
var timeName = document.getElementById("timename");
var relTime = document.getElementById("timer");
var clock = document.getElementById("clock");
var fill = document.getElementById("fill");
var stopTime = false;



var secs = 60 * sltime.innerHTML + 1;
var secss = 60 * bltime.innerHTML + 1;

//判断点击状态
clock.onclick = function ifStop() {
	if (stopTime) {
		stopTime = false;
	} else {
		stopTime = true;
		if (timeName.innerHTML == "休息一下吧") {
			firstToHms();
		} else {
			secondsToHms();
		}
	}
	console.log(stopTime);
};

//改变时间函数
function changeTime() {
	var btn = document.getElementsByTagName("button");
	 if (stopTime == false) {
		btn[0].onclick = function() {
			if (blnum.innerHTML > 1) {
				blnum.innerHTML--;
				secss = 60 * bltime.innerHTML + 1;
			} else {
				alert("时间不能为0哦");
			}
			console.log("bl-");
		};
		btn[1].onclick = function() {
			bltime.innerHTML++;
			secss = 60 * bltime.innerHTML + 1;
			console.log("bl+");
		};
		btn[2].onclick = function() {
			if (sltime.innerHTML > 1) {
				sltime.innerHTML--;
				secs = 60 * sltime.innerHTML + 1;
			} else {
				alert("时间不能为0哦");
			}
			console.log("sl-");
		};
		btn[3].onclick = function() {
			sltime.innerHTML++;
			secs = 60 * sltime.innerHTML + 1;
			console.log("sl+");
		};
	 } else{
	 	for (var i = btn.length - 1; i >= 0; i--) {
	 		btn[i].onclick = function () {
	 			alert("先暂停才能修改时间哦");
	 		}
	 	}
	 }
}

setInterval(changeTime,1000);

//学习倒计时
function secondsToHms() {
	if (stopTime) {
		secs -= 1;
		var h = Math.floor(secs / 3600);
		var m = Math.floor(secs % 3600 / 60);
		var s = Math.floor(secs % 3600 % 60);
		var fillLength = 1 - (secs / (sltime.innerHTML * 60));
		fill.style.height = fillLength * 300 + "px";
		fill.style.background = "#99CC00";
		timeName.innerHTML = "专心学习哦";
		relTime.innerHTML = (
			(h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
		);
		var setTime = setTimeout(secondsToHms, 1000);
		if (secs < 0) {
			clearInterval(setTime);
			secss = 60 * bltime.innerHTML + 1;
			firstToHms();
		}
	}
}

//休息倒计时
function firstToHms() {
	if (stopTime) {
		secss -= 1;
		var hs = Math.floor(secss / 3600);
		var ms = Math.floor(secss % 3600 / 60);
		var ss = Math.floor(secss % 3600 % 60);
		var fillLengths = 1 - (secss / (bltime.innerHTML * 60));
		fill.style.height = fillLengths * 300 + "px";
		fill.style.background = "#FF4444";
		timeName.innerHTML = "休息一下吧";
		relTime.innerHTML = (
			(hs > 0 ? hs + ":" + (ms < 10 ? "0" : "") : "") + ms + ":" + (ss < 10 ? "0" : "") + ss
		);
		var setTimes = setTimeout(firstToHms, 1000);
		if (secss < 0) {
			clearInterval(setTimes);
			secs = 60 * sltime.innerHTML + 1;
			secondsToHms();
		}
	}
}