myFunction();

function myFunction() {
  var myNodelist = document.getElementsByTagName("*");
  // console.log(myNodelist);
  var i;
  var colors = ["#EA4335", "#4285F4", "#34A853", "#FBBC05"];
  for (i = 0; i < myNodelist.length; i++) {
    console.log(myNodelist[i].innerText);
    myNodelist[i].text = "Foo";
  }
  // ajaxGet("http://localhost:8080/test");
  // for (var j = 0; myNodelist.length < j; j++) {
  //   console.log(myNodelist[j].tagname);
  // }
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
      handleResponse(resp);
    } else {
      // We reached our target server, but it returned an error
    }
  };

  request.onerror = function() {
      // There was a connection error of some sort
  };

  request.send();
}

function handleResponse(resp) {
  console.log(resp);
}

function iterateCollection (collection) {
  return function(f) {
    for(var i = 0; collection[i]; i++) {
      f(collection[i], i);
    }
  }
}
