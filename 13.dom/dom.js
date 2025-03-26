function addData (){
    var username = document.getElementById("username");
    var message= document.getElementById("message");
    postdata(username.value,message.value);
}
function postdata(username,message){
    var url="http://localhost:3000/users";
    var options = {
        "method":"Post",
        "headers":{
            "content-type":"application/json"
        },
        "body":JSON.stringify({
           "username": username,
            "message":message
        })
    }
    fetch(url,options)
    .then(Response=>{
        if (Response.ok){
            alert("data added")
            displaydata();
            // alert("data added sucessfully");
            username.value ="";
            message.value=""
         }
    })
        .catch(err=>{
            alert("something wrong");
            console.error(err);
       
    })
}
function displaydata(){
    var cont2= document.getElementById("container2");
    fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then(data=>{
        for(var obj of data){
            // creating elements for every new obj
            var item=document.createElement("div");
            item.className="item";
            var usernamepara=document.createElement("p");
            var messagepara=document.createElement("p");
         var{username,message}=obj;
        //  accessing data
        var {username,message}=obj;

        // adding data into para
          usernamepara.innerText = username;
          messagepara.innerText = message;

        //   adding para into items
          item.appendChild(messagepara);
          item.appendChild(usernamepara);

          container2.appendChild(item)
        }
    })
}
displaydata();
