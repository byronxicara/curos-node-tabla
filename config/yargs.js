
const argv = require('yargs')
      .option('b',{
         alias:'base',
         type: 'number',
         demandOption: true,
         description:'this is a number to use in create table'
      })
      .option('l',{
         alias:'listar',
         type:'boolean',
         default:false,
         description:'show the table in console',
      })
      .option('t',{
          alias:'tope',
          type:'number',
          default:10,
          description:'this is a limit the iterations in table'          
      })
      .check((argv, options) => {
         if(isNaN(argv.b)){
            throw 'la base debe ser un numero'
         }
         if(isNaN(argv.t)){
             throw 'el tope debe ser un numero'
         }
         return true;
      })
      .argv;

module.exports= argv;