myFunction();

function myFunction() {
  var myNodelist = document.getElementsByTagName("*");
  var i;
  var colors = ["red", "blue", "green", "yellow"];
  for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.backgroundColor = colors[getRandomInt(0,colors.length)];
  }
  ajaxGet("http://loripsum.net/api/1/plaintext");
}


// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function ajaxGet(myurl) {
  var request = new XMLHttpRequest();
  request.open('GET', myurl, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var resp = request.responseText;
      handleRespone(resp);
    } else {
      // We reached our target server, but it returned an error
    }
  };

  request.onerror = function() {
      // There was a connection error of some sort
  };

  request.send();
}

function handleResp(resp) {
  console.log(resp);
}
