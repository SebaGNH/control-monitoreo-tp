'use strict';


// Declaraciones
const lista_paises = [
    {
        id: 1,
        nombre: 'Argentina',
        color_pais: '#75aadb'
    },
    {
        id: 2,
        nombre: 'Brasil',
        color_pais: '#009b3a'
    },
    {
        id: 3,
        nombre: 'Chile',
        color_pais: '#eb3c46'
    }
];  


// variables
const patentes = new Array();
patentes.push({id:1, pais_origen: "Argentina", patente_codigo: "ARG - 852"});
patentes.push({id:2, pais_origen: "Brasil", patente_codigo: "BRA - 654"});
patentes.push({id:3, pais_origen: "Chile", patente_codigo: "CHI - 753"});


const cbo_lista_paises = document.getElementById('cbo_lista_paises');
const input_patente = document.getElementById('input_patente');
const btn_agregar = document.getElementById('btn_agregar');

const lista_reportes = document.getElementById('lista_reportes');




//Llenado de comboBox de paises
const mostrar_paises = ()=>{
    lista_paises.map( (pais)=> {
        cbo_lista_paises.add(new Option(pais.nombre));
    });
}
mostrar_paises();



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Botón Agregar
btn_agregar.addEventListener("click",()=>{
    const id_patente = patentes.length + 1;
    const patente_value = input_patente.value.toUpperCase();
    const cbo_Seleccionado = cbo_lista_paises.options[cbo_lista_paises.selectedIndex].value; //ver

    if (validar_campos()) {
        lista_reportes.innerHTML="";
        patentes.push({id:id_patente, pais_origen: cbo_Seleccionado, patente_codigo: patente_value});  
        llenar_obj_reportes();
    
        limpiar_campos();
    }
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const llenar_obj_reportes = () => {
    patentes.map( (patente) =>{
        
        let option = document.createElement('option');
        
        option.value = `${patente.id}`;
        option.text = `${patente.pais_origen} - ${patente.patente_codigo}`;

        switch (patente.pais_origen) {
            case "Argentina": option.style.color = lista_paises[0].color_pais;
                break;
            case "Brasil": option.style.color = lista_paises[1].color_pais;
                break;
            case "Chile": option.style.color = lista_paises[2].color_pais;
                break;        
            default: option.style.color = "#000";
                break;
        }
        lista_reportes.appendChild(option);
        console.log(patente);
    });
}
llenar_obj_reportes();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Limpiar campos
const limpiar_campos = () => {
    input_patente.value = "";
    //input_patente.focus();
    cbo_lista_paises.selectedIndex = 0;

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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