var values;
var txt = [];
var prt = document.getElementById("prt");
var rel;
function getValues() {
  var btns = document.getElementsByTagName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      values = this.value;

      //if语句

      // if (values !=  "Ans") {
      //   if (values == "=") {
      //     rel = eval(txt.join(""));
      //     console.log(rel);
      //     prt.value = rel;
      //     txt = [];
      //     txt.push(rel);
      //   } else if (values == "AC") {
      //     prt.value = [];
      //     txt = [];
      //   } else if (values == "CE") {
      //     txt.pop();
      //     prt.value = txt.join("");
      //     } else {
      //       txt.push(values);
      //       prt.value = txt.join("");
      //     };
      //   };

      //switch语句
      switch (values) {
        case "Ans":

          break;
          case "=":
              rel = eval(txt.join(""));
              prt.value = rel;
              txt = [];
              txt.push(rel);
            break;
          case "AC":
              prt.value = [];
              txt = [];
            break;
          case "CE":
              txt.pop();
              prt.value = txt.join("");
            break;
        default:
          txt.push(values);
          prt.value = txt.join("");
      }

        console.log(txt);
      };
    };
  };
window.onload = getValues;
