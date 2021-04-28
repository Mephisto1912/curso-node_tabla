
const { crearArchivo } = require(`./helpers/multiplicar`);
const  argv = require(`./config/yargs`);
require('colors');


console.clear();
//console.log( argv );

crearArchivo( argv.b, argv.h, argv.l )
   .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
   .catch( err => console.log(err));
