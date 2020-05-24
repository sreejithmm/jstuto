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

function exercise1(jsonobj) {
  var table = document.getElementById("myTable");
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
function exercise2(jsonobj){
  var row1  = document.getElementById("row1");
  var row2  = document.getElementById("row2");

  var id2  = document.getElementById("column1");
  var id3  = document.getElementById("column2");
  var id4  = document.getElementById("column3");
  var id5  = document.getElementById("column4");
  var id6  = document.getElementById("column5");
  var id7  = document.getElementById("column6");
  var id8  = document.getElementById("column7");
  var id9  = document.getElementById("column8");

  var i;

  row1.style.display = "block"; 


  id2.innerHTML = Object.keys(jsonobj)[0];
  id3.innerHTML = Object.keys(jsonobj)[1];
  id4.innerHTML = Object.keys(jsonobj)[2];
  id5.innerHTML = Object.keys(jsonobj)[3];

  id6.innerHTML = Object.values(jsonobj)[0];
  id7.innerHTML = Object.values(jsonobj)[1];
  id8.innerHTML = Object.values(jsonobj)[2];
  id9.innerHTML = Object.values(jsonobj)[3];
  row2.style.display = "block"; 


}

function reqParser() {
  var jsonobj = JSON.parse(this.responseText);

  /*exercise1(jsonobj); */

  exercise2(jsonobj);

}
  