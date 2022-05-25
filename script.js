function myFunction() {
  var firstW = document.getElementById("inputTextFirst").value;
  var secondW = document.getElementById("inputTextSecond").value;
  var resultFirst = document.getElementById("resultFirst");
  var resultSecond = document.getElementById("resultSecond");
  var result = document.getElementById("result");

  resultFirst.innerHTML = "length:" + firstW.length;
  resultSecond.innerHTML = "length:" + secondW.length;

  if (firstW == secondW) {
    result.innerHTML = "gleich lang und das selbe Wort";
  } else if (firstW.length == secondW.length) {
    result.innerHTML = " gleich lang";
  } else {
    result.innerHTML = " nicht gleich lang";
  }
}
