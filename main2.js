var registerform =document.querySelector(".registerform") ;
var usernameinput =document.querySelector("#name") ;
var descriptioninput =document.querySelector("#description") ;
var priceinput =document.querySelector("#price") ;

var users =[];

registerform.onsubmit= function(e){
   e.preventDefault();
  
   var user = {
    name:usernameinput.value,
    description:descriptioninput.value,
    price:priceinput.value,

   };
   users.push(user);
   console.log(users);
   printdata()
}
function printdata(){
    var data="";
    for(var i=0;i<users.length;i++){
        data+=`<tr>
        <td>${users[i].username}</td>
        <td>${users[i].description}</td>
        <td>${users[i].price}</td>
        </tr>`
    }
    document.querySelector("tbody").innerHTML=data;
}