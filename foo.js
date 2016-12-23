// console.log(document.getElementsByTagName("body")[0]);
console.log(document.getElementsByTagName("*"));
myFunction();
// document.getElementsByTagName("body")[0].style.backgroundColor = "black";

function myFunction() {
  var myNodelist = document.getElementsByTagName("*");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.backgroundColor = "red";
  }
}
