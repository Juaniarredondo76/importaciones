/*import { nombrePersona } from "./generadorNombre.js"
import { estatura } from "./generarEstatura.js"
import {nombreUniversidad} from './generarUniversidad.js'*/
import {TOKEN} from './generadorToken.js'
//import {uri} from './generadorURI.js'
import{generarURI} from './generadorURI.js'
import{consumirAPI} from './servicio.js'

/*console.log("su estatura es: "+estatura)
console.log("su nombre es: "+nombrePersona)
console.log("La universidad donde estudias es: " + nombreUniversidad)*/

console.log(TOKEN )

//rutina para detectar el click del boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

        evento.preventDefault()

        let frutasSeleccionada=document.getElementById("Artistas").value  
        let URI=generarURI(frutasSeleccionada)

        async function activarAPI(){
            let datosconsultadosApi= await consumirAPI(URI,TOKEN)
            console.log(datosconsultadosApi)

     }
     activarAPI()
    
})