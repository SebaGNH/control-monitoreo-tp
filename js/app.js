'use strict';



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
/* const lista_paises = [
    {
        nombre: 'Argentina'
    },
    {
        nombre: 'Brasil'
    },
    {
        nombre: 'Chile'
    }
];  */

const cbo_lista_paises = document.getElementById("cbo_lista_paises");

const btn_aceptar = document.getElementById("btn_aceptar");

btn_aceptar.addEventListener("click",()=>{
    console.log("Boton aceptar");
})



const mostrar_paises = ()=>{
    lista_paises.map( (pais)=> {
        //console.log(pais.nombre +" "+ pais.id);
        cbo_lista_paises.add(new Option(pais.nombre));
    });
} 

mostrar_paises();





