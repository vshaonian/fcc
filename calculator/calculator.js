var values;
var txt = [];
var rel;
function getValues() {
  document.getElementById("prt");
  var btns = document.getElementsByTagName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      values = this.value;
      if (values == "=") {
        rel = eval(txt.join(""));
        console.log(rel);
        prt.value = rel;
      } else if (values == "AC") {
        prt.value = [];
        txt = [];
      } else if (values == "CE") {
        txt.pop();
          //txt.push(values);
        } else {
          txt.push(values);
          prt.value = txt.join("");
          //txt.pop();
        };
        //prt.value = txt.join("");
        console.log(txt);
      };
    };
  };
window.onload = getValues;
