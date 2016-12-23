// console.log(document.getElementsByTagName("body")[0]);
console.log(document.getElementsByTagName("*"));
myFunction();
// document.getElementsByTagName("body")[0].style.backgroundColor = "black";

function myFunction() {
  var myNodelist = document.getElementsByTagName("*");
  var i;
  var colors = ["red", "blue", "green", "yellow"];
  for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.backgroundColor = colors[getRandomInt(0,colors.length)];
  }
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
