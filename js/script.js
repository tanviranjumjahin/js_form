let input = document.querySelector("input")
let password = document.querySelector("password")
let button = document.querySelector("button")
let result = document.querySelector("h1")


button.addEventListener("click",function() {
    if (input.value == "tanviranjumjahin@gmail.com") {
       result.innerHTML= "your email is correct"
       if (password.value == "12345") {
        result.innerHTML= "your password is correct"
     }
     else{
         result.innerHTML= "This password is invalid"
     }
    }
    else{
        result.innerHTML= "This email is invalid"
        
    }
})