Trabajo practico programa PIL – HTML & CSS

Consigna:
Como pasante del área de desarrollo de Vates Software se solicita el desarrollo de una app web que permita el control y monitoreo de los camiones que pasan por la aduana argentina-Chile ubicada en la provincia de Mendoza en la cual usted deberá capturar la siguiente información.
País de origen:
•	Argentina
•	Chile
•	Brasil

Patente del vehículo en formato texto(string)
Una vez capturada la información deberá mostrar refrescar una lista donde vean los últimos ingresos de la siguiente manera.
 
Recuerde que los vehículos argentinos deben mostrarse en color azul, Brasil en verde y chile.
Para desarrollar dicho objetivo deberá manipular los eventos html de los controles y funciones de Javascript, también la lista deberá extraer información de un array en el cual se pueden usar los métodos push(), foreach(), map(), todo aquel que considere necesario.

Criterios de evaluación:

HTML: 35%
CSS: 30%
JavaScript: 35%



<!--
https://sebagnh.github.io/control-monitoreo-tp/

Verificar las fuentes usadas
limpiar console log







    if (false) {
        provincias_argentinas.push('Tierra del fuego');
        let ultimo_registro = provincias_argentinas.length;

        let combo_provincias = document.getElementById('ListProvincias');
        
        let nuevo_elemento = document.createElement('option');
        nuevo_elemento.text = provincias_argentinas[ultimo_registro-1];
        nuevo_elemento.value = ultimo_registro;

        combo_provincias.options[ultimo_registro] = new Option(nuevo_elemento.text, nuevo_elemento.value);
    }


    //Agrega correctamente los elementos al arreglo

    /* 
    patentes.map((p) =>{
        console.log(p);
    }); 
    */
    /* Inicio <-- limpiando lista de reportes ------------------------------------*/
    if (false) {
    let combo_localidades = document.getElementById('ListLocalidades');

    for (var i = combo_localidades.options.length; i > 0; i--) // vacio el combo sin borrar el 'Seleccione'
        {
            combo_localidades.options[i] = null;    
        }	
    }
/*     for (let i = 0; i < lista_reportes.options.length; i++) {
       // lista_reportes.options[i] = null; 
        console.log(lista_reportes.options[i])
    } */

    /*-- Fin  <-- limpiando lista de reportes ------------------------------------*/

 
    
    if (false) {
        patentes.map( (patente) => {
            lista_reportes.add(new Option(patente));
            console.log(patente);
        });
    }
    
    
if (false) {
        /* Inicio <--  ------------------------------------*/
        for (let i = 0; i < lista_reportes.options.length; i++) {
            //lista_reportes.options[i] = null; 
            //console.log(lista_reportes.options[i])
        }
        console.log(lista_reportes.options.length)
        /*-- Fin  <--  ------------------------------------*/
    
}



    if (false) {
        patentes.push(input_patente.value);
        let cant_registros = patentes.length;
        let nuevo_elemento_opcion = document.createElement("option");
        nuevo_elemento_opcion.text = patentes[cant_registros -1].toString();
        nuevo_elemento_opcion.value = patentes.length;
    
        lista_reportes.options[cant_registros] = new Option( nuevo_elemento_opcion.text,nuevo_elemento_opcion.value);
    }


//Limpiar reportes funcion
const limpiar_lista_reportes = () => {
    //lista_reportes.value = "";
    for (let i = 0; i < patentes.length; i++) {
        lista_reportes.remove(i);
        
    } 
    //console.log(lista_reportes.options)
    
    patentes.map( (lp)=>{
        console.log(lp);
    });

}




//Boton Limpiar reportes
const btn_limpiar_reportes = document.getElementById("btn_limpiar_reportes");
btn_limpiar_reportes.addEventListener("click", ()=>{
    //console.log("boton reportes"); 
    limpiar_lista_reportes();
})





const recorrer_patentes = () => {
    patentes.map((patente)=>{
        console.log(patente);
    });
}




    if (false) {
        
    
    patentes.push(input_patente.value);
    let cant_registros = patentes.length;
    let nuevo_elemento_opcion = document.createElement("option");

    let nodo_texto = document.createTextNode(patentes[cant_registros -1].toString())
    nuevo_elemento_opcion.append(nodo_texto);

    console.log( "Argen"+" - "+patentes[cant_registros -1]);

    nuevo_elemento_opcion.value = patentes.length;
    lista_reportes.options[cant_registros] = new Option( nuevo_elemento_opcion.text,nuevo_elemento_opcion.value);
    }
    if (false) {
        
    
    patentes.push(input_patente.value);
    let cant_registros = patentes.length;
    let nuevo_elemento_opcion = document.createElement("option");

    let nodo_texto = document.createTextNode(patentes[cant_registros -1].toString())
    nuevo_elemento_opcion.append(nodo_texto);

    console.log( "Argen"+" - "+patentes[cant_registros -1]);

    nuevo_elemento_opcion.value = patentes.length;
    lista_reportes.options[cant_registros] = new Option( nuevo_elemento_opcion.text,nuevo_elemento_opcion.value);
    }



    if (false) {
        
   
    patentes.push(input_patente.value);
    let cant_registros = patentes.length;
    let nuevo_elemento_opcion = document.createElement("option");

    let nodo_texto = document.createTextNode(patentes[cant_registros -1].toString())
    nuevo_elemento_opcion.append(nodo_texto);
    let cbo_Seleccionado = cbo_lista_paises.options[cbo_lista_paises.selectedIndex].value;
    console.log( cbo_Seleccionado +" - "+patentes[cant_registros -1]);

    nuevo_elemento_opcion.value = patentes.length;

    //console.log(cbo_lista_paises.options[1].value);
    //console.log(cbo_lista_paises.options[cbo_lista_paises.selectedIndex].value);
    
    lista_reportes.options[cant_registros] = new Option( nuevo_elemento_opcion.text,nuevo_elemento_opcion.value);
}


-->