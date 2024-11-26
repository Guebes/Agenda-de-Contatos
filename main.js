const formulario = document.getElementById('forms')

let nomes = []
let notas = []
let linhas = ''

formulario.addEventListener('submit', function (e) {

    e.preventDefault()

    addLinhas()

    attTabela()

})

function addLinhas() {

    let nome_pessoa = document.getElementById('nome')
    let numero_pessoa = document.getElementById('numero')
    let numero_pessoa_convert = Number(numero_pessoa.value)

    let linha = '<tr>'

    if (nome_pessoa.value.split(' ').length < 2) {

        let error = document.getElementById('erro')
        error.innerHTML = 'Sobrenome'
        error.style.backgroundColor = 'red'
        error.style.color = 'white'
        error.style.margin = '5px 410px'
        error.style.borderRadius = '10px'
        return;

    }else if(nome_pessoa.value.split(' ').length >= 2){

        let error = document.getElementById('erro')
        error.innerHTML = ''
        error.style.backgroundColor = ''
        error.style.color = ''
        error.style.margin = ''
        error.style.borderRadius = ''
    }
    
        if (nomes.includes(nome_pessoa.value)) {

            alert('[ERRO] Nome ja adicionado')

        } else if (notas.includes(numero_pessoa_convert)) {

            alert('[ERRO] Número ja adicionado')

        } else {

            nomes.push(nome_pessoa.value)
            notas.push(numero_pessoa_convert)

            linha += `<td>${nome_pessoa.value}</td>`
            linha += `<td>${numero_pessoa_convert}</td>`

            linhas += linha
        
        }
    }

function attTabela() {

    const corpo_tabela = document.querySelector('tbody')
    corpo_tabela.innerHTML = linhas
}