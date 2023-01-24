
 export function clear (){

    //Chamando variavel novamente já que está em 'module'
    const result = document.getElementById('input')
    const copyResult = document.getElementById('inputResult')

    result.value = ''
    result.focus()
    copyResult.value = ''
    

    copyBtn.innerText = 'Copiar'

}