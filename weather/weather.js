$("#search").click(function() {
  $.getJSON("http://op.juhe.cn/onebox/weather/query?callback=?", {
    "cityname" : $("#city").val(),
    "dtype" : "jsonp",
    "key" : "f5e8458c189862575a6f1f304fcdfacf"
  },function(data) {
    if(data.reason == "successed!") {
    //时间
    var realtime = data.result.data.realtime;
    var riqij = realtime.date;
    $("#riqi").text("日期：" + riqij);
    var gengxinj = realtime.time;
    $("#gengxin").text("更新时间：" + gengxinj);
    var weekj = realtime.week;
    $("#week").text("星期：" + weekj);
    var moonj = realtime.moon;
    $("#moon").text("阴历：" + moonj);

    //天气
    var realWeather = data.result.data.realtime.weather;

    var weatherj = realWeather.info;
    var dampj = realWeather.humidity;
    var tempj = realWeather.temperature;
    $("#weather").text("今天天气：" + weatherj);
    $("#damp").text("湿度：" + dampj);
    $("#temp").text("温度：" + tempj);

    //指数
    var life = data.result.data.life.info;
    var chuanyij = life.chuanyi;
    $("#chuanyi").text("穿衣指数：" + chuanyij);
    var ganmaoj = life.ganmao;
    $("#ganmao").text("感冒指数：" + ganmaoj);
    var ziwaixianj = life.ziwaixian;
    $("#ziwaixian").text("紫外线指数：" + ziwaixianj);

    //未来几天天气
    var futureWeather = data.result.data.weather;
    for (var i = 0; i < futureWeather.length; i++) {
      $(".future").append("<div>"+"<p>"+futureWeather[i].date+"</p>"+"<p>"+futureWeather[i].info.day+"</p>"+"<p>"+futureWeather[i].info.night+"</p>"+"</div>");
    }
  }else {
    alert("请输入正确的城市名！")
    location.reload() ;
  }


  })

})
