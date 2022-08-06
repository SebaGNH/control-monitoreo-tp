'use strict';


// Declaraciones
const lista_paises = [
    {
        id: 1,
        nombre: 'Argentina'
    },
    {
        id: 2,
        nombre: 'Brasil'
    },
    {
        id: 3,
        nombre: 'Chile'
    }
];  

const cbo_lista_paises = document.getElementById("cbo_lista_paises");
const input_patente = document.getElementById("input_patente");
const btn_agregar = document.getElementById("btn_agregar");
let patentes = new Array();
const lista_reportes = document.getElementById("lista_reportes");

//Llenado de comboBox de paises
const mostrar_paises = ()=>{
    lista_paises.map( (pais)=> {
        //console.log(pais.nombre +" "+ pais.id);
        cbo_lista_paises.add(new Option(pais.nombre));
    });
}
mostrar_paises();



// Botón Agregar
btn_agregar.addEventListener("click",()=>{

    ///validar_campos();

    if (validar_campos()) {
        console.log("validos");
    }else{
        console.log("invalidos");
    } 

    //console.log(validar_campos());

    patentes.push(input_patente.value);
    let cant_registros = patentes.length;

    let cbo_Seleccionado = cbo_lista_paises.options[cbo_lista_paises.selectedIndex].value;
    
    let nuevo_elemento_opcion = document.createElement("option");    
    nuevo_elemento_opcion.text = cbo_Seleccionado +" - "+patentes[cant_registros -1];
    nuevo_elemento_opcion.value = patentes.length;
    lista_reportes.options[cant_registros] = new Option( nuevo_elemento_opcion.text,nuevo_elemento_opcion.value);

    limpiar_campos();    
})




// Limpiar campos
const limpiar_campos = () => {
    input_patente.value = "";
    //input_patente.focus();
}

const validar_campos = () => {
    let bandera = true;

    
    

    if (cbo_lista_paises.selectedIndex == 0) {
        //console.log("seleccionado 0")
        cbo_lista_paises.focus();
        cbo_lista_paises.style.borderColor  = "red"; 
        bandera = false;
    }else{
        cbo_lista_paises.style.borderColor  = "initial";
        input_patente.focus();
        
        if (input_patente.value == "") {
            //console.log("imput limpio");
            input_patente.style.borderColor  = "red"; 
            bandera = false;
        }else{
            input_patente.style.borderColor  = "initial";
            
        }
    }

    return bandera;
}


















