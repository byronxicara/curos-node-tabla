
const fs =  require('fs');
const color= require('colors')
const crearArchivo = async(base = 0, listar = false, tope=0) =>{
    try {     
        let salida, 
            title, 
            consola = '';
        

        title = (`============================
        Tabla del ${base}
============================`)
            for (let i=1; i<=tope;i++){    
            salida +=(`         ${base} x ${i} = ${i * base} \n`)
            consola+=(`        ${base} ${'x'.yellow} ${i} ${'='.yellow} ${i * base} \n`)
            }
                    
            if(listar){
            console.log(color.grey(title)+'\n'+ color.green(consola))   
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`,title+'\n'+salida);
            return (`tabla-${base}.text`);

        } catch (err) {
            throw err
        }
}

module.exports = {
    crearArchivo
}