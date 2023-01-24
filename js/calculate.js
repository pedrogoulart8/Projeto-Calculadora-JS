
export function calculate(){

    //Como está em 'module', estou nomeando a variavel novamente
    const copyResult = document.getElementById('inputResult')
    const result = document.getElementById('input')

    //Assim que o usuario clicar para calcular por padrão ira aparecer essa msg
    copyResult.value = 'ERROR'

    //Porém, caso o eval seja verdadeiro, a funcionalidade acima será substituida por essas debaixo
    const finalResult = eval(result.value)
    copyResult.value = finalResult

}


