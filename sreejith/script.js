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
  let length = Object.keys(jsonobj).length;
  let i;


  let myobj = document.getElementById('row1');
  if( myobj) {
    myobj.remove();
  }
  let myobj2 = document.getElementById('row2');
  if( myobj2) {
     myobj2.remove();
  }


  let div1 = document.createElement('div');
  div1.id = 'row1';
  div1.className = 'row';
  document.getElementsByTagName('body')[0].appendChild(div1);
  
  let div2 = document.createElement('div');
  div2.id = 'row2';
  div2.className = 'row';
  document.getElementsByTagName('body')[0].appendChild(div2);

  for (i =0 ; i< length;i++){
    let span = document.createElement('span');
    span.id = 'column' + i;
    span.className = 'column'
    span.innerHTML = Object.keys(jsonobj)[i];
    div1.appendChild(span);
  }

  for (i =0 ; i< length;i++){
    let span = document.createElement('span');
    span.id = 'column' + i;
    span.className = 'column'
    span.innerHTML = Object.values(jsonobj)[i];
    div2.appendChild(span);
  }
  console.log("finished");


}

function reqParser() {
  var jsonobj = JSON.parse(this.responseText);

  /*exercise1(jsonobj); */

  exercise2(jsonobj);

}
  