const username = document.getElementById('#user')
const senha = document.getElementById('#password')
const senhaconfirmada = document.getElementById('#confirmpassword')
const nomeproduto = document.getElementById('#Nome')
const dataProduto = document.getElementById('#produtodata')
const codigoproduto = document.getElementById('#codigo')
const quantidadeproduto = document.getElementById('#quantidade')
const valorproduto = document.getElementById('#valor')


const users = []





function register() {
    if (users.find(obj => obj.username === username.value) === undefined) {
        if (senha.value === senhaconfirmada.value) {
            users.push({
                username: username.value,
                senha: senha.value
            });
            alert('usuário criado')
        } else alert('Senhas não coincidem')
    } else alert('Usuário já existente')
}

function login(){
    if(users.find(obj => (obj.username === username.value)&&(obj.senha === senha.value))){
            alert('login executado com sucesso')
    }
}

class Novoproduto{
    constructor(codigo, Nome, DataCadastro, Quantidade, Valor){
    this.codigo = codigo,
    this.Nome = Nome,
    this.DataCadastro = DataCadastro,
    this.Quantidade = Quantidade,
    this.Valor = Valor,
}
}




function Adicionarproduto() {
    const produtoNovo = new Novoproduto(codigoproduto.value, nomeproduto.value, dataProduto.value,quantidadeproduto.value, valorproduto.value )
    Document.createElement('div')
    div.id('container')
}


function Deletar(){
    document.removeChild
}

