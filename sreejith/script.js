document.write("Hello world--");
var req = new XMLHttpRequest();
req.onload = reqListener;
req.onerror = reqError;
req.open('get', 'https://jsonplaceholder.typicode.com/todos/1', true);
req.send(); 
req.onreadystatechange = reqParser;
console.log("Request sent");


function reqListener() {
    var data = JSON.parse(this.responseText);
    console.log(data);
  }
  
function reqError(err) {
    console.log('Fetch Error :-S', err);
}

function reqParser() {
  
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }

}
  