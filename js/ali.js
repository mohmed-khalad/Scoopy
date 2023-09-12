
$(".nav-logIn").click(function(){
{
  $(".Scooby").css({"display":"none"})
  $(".logIn").css({"display":"contents"})
  $(".nav-logIn").css({"color":"#f86ca6"})
  $(".SignUp").css({"color":"#fff"})
  $(".Sign-Up").css({"display":"none"})
}
})

$(".SignUp").click(function()
{
  $(".Scooby").css({"display":"none"})
  $(".logIn").css({"display":"none"})
  $(".Sign-Up").css({"display":"contents"})
  $(".log-In").css({"color":"#fFF"})
  $(".SignUp").css({"color":"#f86ca6"})


})

$(".img-Scoopy").click(function()
{
  $(".Scooby").css({"display":"contents"})
  $(".logIn").css({"display":"none"})
  $(".Sign-Up").css({"display":"none"})
  $(".log-In").css({"color":"#fFF"})
  $(".SignUp").css({"color":"#fff"})


})









var productEmail=document.getElementById('Email');
var password=document.getElementById('password');
var firstName=document.getElementById("firstName");
var lastName=document.getElementById("lastName");
var emailAddress=document.getElementById("emailAddress");
var age=document.getElementById("age");
var btnSignUp=document.getElementById("btn-sign-Up")
var btn=document.getElementById("btn");







async function signUp()
{
 
 var product=
{
  first_name:firstName.value,
  last_name:lastName.value,
  email:emailAddress.value,
  password:password.value,
  age:age.value,
}

let response= await axios.post("https://movies-api.routemisr.com/signup",product)


if(response.data.message=="success")
{
  
$(".Scooby").css({"display":"none"})
$(".logIn").css({"display":"contents"})
$(".log-In").css({"color":"#f86ca6"})
$(".SignUp").css({"color":"#fff"})
$(".Sign-Up").css({"display":"none"})

}
else console.log("sorry") ,console.log(response.data)



}
btnSignUp.addEventListener("click",signUp)


/*


async function signIn()
{
  var product=
  {
    email:productEmail.value,
    Name:password.value,
  } 

let response= await axios.post("https://movies-api.routemisr.com/signin",
 {
 email:product.email,
 password:product.Name,  
})

if(response.data.message=="success")
{
    $(".loginAli").hide(0); 
}
else{
  alert("no")
}
}

logIn.addEventListener("click", signIn)



/*
$(".logins").click(function(){
  $('.loginAli').css({"display":"contents"});    
}
)
async function login()
{


 let response= await axios.post("https://movies-api.routemisr.com/signin",
 {
 email:product.email,
 password:"23",
})
 console.log(response)
}
btn.addEventListener("click",login)


    var product=
  {
    names:productEmail.value,
    password:productNames.value,

  }
login();
ali();

}
  async function login(){
    const product={ email:"ahmed@ahmed.com" ,password:"mohmed@123"} 
   var o= await fetch("https://movies-api.routemisr.com/signin",{method:'POST' ,body:JSON.stringify(product)})
   var response =o.json();
   console.log(response)
    }

    async function ali(){
      const product={ email:"ahmed@ahmed.com" ,password:"Ahmed@12345"} 
     var r= await fetch("https://movies-api.routemisr.com/getAllUsers",)
     var response =r.json();
     console.log(response)
      }
   */


          
