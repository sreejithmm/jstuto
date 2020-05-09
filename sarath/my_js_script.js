
function print_hello_world() {
         
         
         var request = new XMLHttpRequest()

         request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
          console.log("requesting json data")

        request.onload = json_onload
        request.send()
}



function json_onload() {
  
        var data = JSON.parse(this.response)
        console.log("parsing json data")
        console.log(data)
        console.log(data.title )
        
        var text = " <table style=\"width:100%\">"
        text = text + "<tr><th>User ID</th><th>ID </th><th>Title</th> <th>completed</th></tr>"
    //    text =  text + "<tr><td>" + data.userId "</td><td> " + data.id +"</td><td>" + data.title  +"</td><td>" + data.completed + "</td></tr>"
        text =  text + "<tr><td>" + data.userId + "</td><td> " + data.id +"</td><td>" + data.title  +"</td><td>" + data.completed + "</td></tr>"
        text = text + "</table>"
        
        var div = document.getElementById("banner")
        div.innerHTML= text
        
    
}
