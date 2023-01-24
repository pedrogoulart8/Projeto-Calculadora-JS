
export function trocarTema (){

    //Chamando variavel novamente já que está em 'module'
    const body = document.querySelector('body')
    const root = document.querySelector(':root')

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


}
