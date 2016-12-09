var sltime = document.getElementById("slnum");
var bltime = document.getElementById("blnum");
var timeName = document.getElementById("timename");
var relTime = document.getElementById("timer");
var clock = document.getElementById("clock");
var fill = document.getElementById("fill");
var secs = 60 * sltime.innerHTML+1;
var secss = 60 * bltime.innerHTML+1;
var stopTime = false;
// var blreduce = document.getElementById("blreduce");
// var bladd = document.getElementById("bladd");
// var slreduce = document.getElementById("slreduce");
// var sladd = document.getElementById("sladd");
// var slnum = document

function addTime() {
	var btn = document.getElementsByTagName("button");
	// if (sltime.innerHTML > 0 && bltime.innerHTML > 0) {
		btn[0].onclick = function() {
			if (blnum.innerHTML > 1) {
				blnum.innerHTML--;
			} else {
				alert("时间不能为0哦");
			}
			console.log("bl-")
		};
		btn[1].onclick = function() {
			bltime.innerHTML++;
			console.log("bl+")
		};
		btn[2].onclick = function() {
			if (sltime.innerHTML > 1) {
				sltime.innerHTML--;
			} else {
				alert("时间不能为0哦");
			}
			console.log("sl-")
		};
		btn[3].onclick = function() {
			sltime.innerHTML++;
			console.log("sl+")
		};
	// } else {
	// 	alert("时间不能为0哦!")
	// }
}

clock.onclick=function ifStop() {
	if (stopTime) {
		addTime();
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
		//console.log(fillLength+"高度");
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
	//setTimeout(secondsToHms,1000)
}

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
		//console.log(fillLengths+"高度");
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
// function showTime() {
// 	relTime.innerHTML = secondsToHms()
// }
//secondsToHms();
//console.log(stopTime);
//showTime();


// function showTime() {
// 	var nowTime = new Date();
// 	nowTime.setTime(bltime);
// 	var endTime = new Date();
// 	endTime.setTime(0);
// 	var lastTime = parseInt((nowTime.getTime() - endTime.getTime() / 1000));
// 	var m = parseInt(lastTime / 60 % 60);
// 	var s = parseInt(lastTime % 60);
// 	function addZero(i) {
// 		if (i<10) {
// 			i = "0" + i;
// 		} return i;
// 	}
// 	m = addZero(m);
// 	s = addZero(s);
// 	console.log("m:"+m);
// 	console.log("s:"+s);
// 	bltime = bltime - 1000;
// 	setTimeout(showTime(),1000);
// }

