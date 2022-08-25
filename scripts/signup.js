

document.querySelector("form").addEventListener("submit",signup)


function signup(event){
    event.preventDefault()

    let usermail=document.querySelector("#mail").value;
    localStorage.setItem ("#mail",usermail)

    let userpass=document.querySelector("#pass").value;
    localStorage.setItem ("#pass",userpass)
}
