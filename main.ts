
const readlinesync = require('readline-sync')
let opcao: number;




main()
function main (){


    

    while(true) {

        console.log('WELLERSON E CIA')
        console.log('****************************')
        console.log('1 - CRIAR                   ')
        console.log('2 - Listar Todos            ')
        console.log('3 - Consultar po ID         ')   
        console.log('4 - Atualizar               ')
        console.log('0 - Para sair               ')
   
    

        opcao = readlinesync.questionInt('')

        if(opcao < 0 || opcao > 5 ){
            console.log('Erro digite um numero valido')
        }

        switch(opcao){
            case 1:

                break; 
            case 2:

                break;
            case 3: 
            
                break;
            case 4: 

                break;    




        }



    }

}


