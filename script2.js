const username = document.getElementById("email")
const password = document.getElementById("password")


const users = []

function login(){
    if(username.value != "" && password.value != ""){
        users.push({username: username.value, 
                senha: password.value})
        alert('Login feito com sucesso')
        console.log(users);
        window.location.href="crud3.html"
    }else{
        alert('preencha todos os campos')
    }
}