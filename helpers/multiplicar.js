const fs = require('fs');
const colors = require('colors')

const crearArchivo = async( base, hasta = 10, listar = false ) =>{
        

    try{

        let salida = '';
        let consola = '';


        for (let i = 1; i <= hasta ; i++ ){
    
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'x'.bgRed} ${ i } = ${ base * i }\n`;

        }

        if ( listar ){
            console.log('==================================='.red);
            console.log('            Tabla del '.cyan, colors.bold(base)               );
            console.log('==================================='.green);
            console.log(consola);
        }


    fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);


    return (`La tabla del ${ base } se guardo con exito!`);
    }
    catch (err){
        throw err;
    }
    
    
    }

module.exports = {
    crearArchivo
}