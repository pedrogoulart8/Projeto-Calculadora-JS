
const body = document.querySelector('body')
const root = document.querySelector(':root')
const result = document.getElementById('input')
const copyResult = document.getElementById('inputResult')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]



//Criada uma função para cada botão pertencente a classe '.charKey'
//Quando clicado no botão, retornar o valor data dele para o input 'result'
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){

    charKeyBtn.addEventListener('click', function(){

        const valor = charKeyBtn.dataset.value
        result.value += valor

    })

})


//Keydown é um evento que dispara quando o usuário aperta alguma tecla
//Criada uma função para quando o 'keydown' for utilizado
result.addEventListener('keydown', function(ev){

    //Impede o comportamento padrão do evento 'keydown'
    ev.preventDefault()

    //o 'key' abaixo representa a tecla pressionada pelo usuario
    //Se a tecla pressionada pelo usuario estiver inclusa dentro da variavel 'allowedKeys'
    //Incluir a mesma dentro do input 'result'
    if(allowedKeys.includes(ev.key)){

        result.value += ev.key
        return

    }  


    if(ev.key === 'Backspace'){

        //slice: vai pegar desde do primeiro elemento '0' até o penultimo '-1' e apagar
        //o restante que não está incluso nessa lista
        result.value = result.value.slice(0, -1)


    }


    if(ev.key === 'Enter'){

      
        calculate()

    }

})


function calculate(){

    //Assim que o usuario clicar para calcular por padrão ira aparecer essa msg
    copyResult.value = 'ERROR'

    //Porém, caso o eval seja verdadeiro, a funcionalidade acima será substituida por essas debaixo
    const finalResult = eval(result.value)
    copyResult.value = finalResult

}


document.getElementById('equal').addEventListener('click', calculate)



//Limpar valores da calculadora
document.getElementById('clear').addEventListener('click', function(){

    result.value = ''
    result.focus()
    copyResult.value = ''
    

    copyBtn.innerText = 'Copiar'

})


//Copiando o valor da calculadora para utilizar em outras aplicações
document.getElementById('btnCopiar').addEventListener('click', function(ev){

    //Seleciona quem acionou o evento, que é o proprio botão
    const copyBtn = ev.currentTarget

    if(copyBtn.innerText === 'Copiar'){

        copyBtn.innerText = 'Copiado!'
        copyBtn.classList.add('btnCopiarCores')
       
        
        //Copiando valores da calculadora
        navigator.clipboard.writeText(copyResult.value)


    }else{

        copyBtn.innerText = 'Copiar'
        copyBtn.classList.remove('btnCopiarCores')

    }

})


//Trocando cores do tema
document.getElementById('btn-tema').addEventListener('click', function(){

    if(body.dataset.theme === 'Dark'){

        //Alterando as propriedades das variaveis de cores
        root.style.setProperty('--dark-color', '#DDDDDD')
        root.style.setProperty('--light-color', '#111111')
        root.style.setProperty('--green-color', '#212529')

        body.dataset.theme = 'Light'
        
        
    }else{

        root.style.setProperty('--dark-color', '#111111')
        root.style.setProperty('--light-color', '#DDDDDD')
        root.style.setProperty('--green-color', '#4dff91')
        
        body.dataset.theme = 'Dark'

    }





})


