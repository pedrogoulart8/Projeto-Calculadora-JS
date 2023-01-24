
export function btnCopiar (ev){

    //Chamando variavel novamente já que está em 'module'
    const copyResult = document.getElementById('inputResult')

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

}

