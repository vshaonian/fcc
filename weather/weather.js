$("#search").click(function() {
  $.getJSON("http://op.juhe.cn/onebox/weather/query?callback=?", {
    "cityname" : $("#city").val(),
    "dtype" : "jsonp",
    "key" : "f5e8458c189862575a6f1f304fcdfacf"
  },function(data) {


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


  })
  // var wea = document.getElementById("weather");
  // wea.innerHTML = data.result.data.realtime.weather.info;
  //$("#weather").html("<span>" + '当前:  ' + weather + "</span>")
})
