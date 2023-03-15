const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const codigo = document.querySelector('#code')
const nome = document.querySelector('#name')
const quantidade = document.querySelector('#quantity')
const valor = document.querySelector('#value')
const data = document.querySelector('#date')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    codigo.value = itens[index].codigo
    nome.value = itens[index].nome
    quantidade.value = itens[index].quantidade
    valor.value = itens[index].valor
    data.value = itens[index].data
    id = index
  } else {
    codigo.value = ''
    nome.value = ''
    quantidade.value = ''
    valor.value = ''
    data.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.codigo}</td>
    <td>${item.nome}</td>
    <td>R$ ${item.quantidade}</td>
    <td>${item.valor}</td>
    <td>R$ ${item.data}</td>
    <td class="acao">
    <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
  </td>
  <td class="acao">
    <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
  </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (codigo.value == '' || nome.value == '' || quantidade.value == ''  || valor.value == ''  || data.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].codigo = codigo.value
    itens[id].nome = nome.value
    itens[id].quantidade = quantidade.value
    itens[id].valor = valor.value
    itens[id].data = data.value
  } else {
    itens.push({'codigo': codigo.value, 'nome': nome.value, 'quantidade': quantidade.value, 'valor': valor.value, 'data': data.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()