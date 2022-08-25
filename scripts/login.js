document.querySelector("form").addEventListener("submit",login)

function login(event){
    event.preventDefault();




let x=document.querySelector("#mail2");
localStorage.setItem("#mail2",x)

let y=document.querySelector("#pass2");
localStorage.setItem("#pass2",y)

let a=localStorage.getItem("mail")
let b=localStorage.getItem("pass")

if(a==x  && b==y){
    alert("login successful")
}
    else{
    alert("login unsuccessful")
    }
}
