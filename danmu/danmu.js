// 创建数据库引用。最好自己创建一个应用，把 danmu 即 `appId` 换成你自己的
var config = {
  authDomain: "sxydanmu.wilddog.com",
  syncURL: "https://sxydanmu.wilddogio.com"
};
wilddog.initializeApp(config);
var ref = wilddog.sync().ref();
// 获取输入框的数据
var text = $(".s_txt").val();
// 将数据写到云端 message 节点下，child 用来定位子节点
ref.child('message').push(text);
function clc() {
  document.getElementsByClassName("clc");
  clc[0].onclick(ref.remove());
}
