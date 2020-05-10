function loadJSONDoc() {
    var req = new XMLHttpRequest();
    req.onerror = reqError;
    req.onload = reqParser;

    req.open('get', 'https://jsonplaceholder.typicode.com/todos/1', true);
    req.send(); 

    console.log("Request sent");
}

  
function reqError(err) {
    console.log('Fetch Error :-S', err);
}

function reqParser() {

  var table = document.getElementById("myTable");
  var jsonobj = JSON.parse(this.responseText);
  var length = Object.keys(jsonobj).length;
  var tablelength = table.rows.length;
  var i;

  console.log("Table legnth :-S",tablelength)

  for (i = 0; i < tablelength; i++) {
    table.deleteRow(0);
  }

  console.log("JSON Key Length:-S",length);
  var row = table.insertRow(0);

  for (i = 0; i < length; i++) {
    row.insertCell(i).innerHTML = Object.keys(jsonobj)[i];
  }
  var row1 = table.insertRow(1);

  for(i=0; i< length; i++) {
    row1.insertCell(i).innerHTML =  Object.values(jsonobj)[i];
  }
  
  console.log("Finished")
  

}
  