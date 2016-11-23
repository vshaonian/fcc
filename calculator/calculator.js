var values;
var txt = [];
var prt = document.getElementById("prt");
var rel;
function getValues() {
  //document.getElementById("prt");
  var btns = document.getElementsByTagName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      values = this.value;
      if (values !=  "Ans") {
        if (values == "=") {
          rel = eval(txt.join(""));
          console.log(rel);
          prt.value = rel;
          txt = [];
          txt.push(rel);
        } else if (values == "AC") {
          prt.value = [];
          txt = [];
        } else if (values == "CE") {
          txt.pop();
          prt.value = txt.join("");
          } else {
            txt.push(values);
            prt.value = txt.join("");
            //txt.pop();
          };
        };
        //prt.value = txt.join("");
        console.log(txt);
      };
    };
  };
window.onload = getValues;
