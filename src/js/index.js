const radios = document.querySelectorAll('.pontos')
const botaoEnviar = document.querySelector('#btn-enviar')
const abaAgradecimento = document.querySelector('.agradecimento')
const cartaoSelecionado = document.querySelector('.selecionado')

radios.forEach(radio => {
    
    radio.addEventListener('change', () => {
        let radioId = radio.id
        let label = document.querySelector("label[for='" + radioId + "']")
        const marcado = document.querySelector('.marcado')
        
        if(marcado){
            marcado.classList.remove('marcado')
        }
        
        label.classList.add('marcado')
        
        botaoEnviar.removeAttribute('disabled')
        adicionarValorSelecionado(radio)
    })
    
})

botaoEnviar.addEventListener('click', event => {
    cartaoSelecionado.classList.remove('selecionado')
    abaAgradecimento.classList.add('selecionado')
    event.preventDefault()
})

function adicionarValorSelecionado(element) {
    let nota = element.value
    const notaASerMostrada = document.querySelector('#nota-selecionada')

    notaASerMostrada.innerHTML = "You selected " + nota + " out of 5"
}