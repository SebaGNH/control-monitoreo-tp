# Trabajo practico programa PIL – HTML & CSS

[https://sebagnh.github.io/control-monitoreo-tp/](https://sebagnh.github.io/control-monitoreo-tp/ "Click para ver online")



Consigna:
Como pasante del área de desarrollo de Vates Software se solicita el desarrollo de una app web que permita el control y monitoreo de los camiones que pasan por la aduana argentina-Chile ubicada en la provincia de Mendoza en la cual usted deberá capturar la siguiente información.
País de origen:
* Argentina
* Chile
* Brasil

Patente del vehículo en formato texto(string)
Una vez capturada la información deberá mostrar refrescar una lista donde vean los últimos ingresos de la siguiente manera.

Recuerde que los vehículos argentinos deben mostrarse en color azul, Brasil en verde y chile.
Para desarrollar dicho objetivo deberá manipular los eventos html de los controles y funciones de Javascript, también la lista deberá extraer información de un array en el cual se pueden usar los métodos push(), foreach(), map(), todo aquel que considere necesario.

Criterios de evaluación:

* HTML: 35%
* CSS: 30%
* JavaScript: 35%



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




    if (false) {
        
        let cant_registros = patentes.length;
        
        let cbo_Seleccionado = cbo_lista_paises.options[cbo_lista_paises.selectedIndex].value;
        
        let nuevo_elemento_opcion = document.createElement("option");    
        nuevo_elemento_opcion.text = cbo_Seleccionado +" - "+patentes[cant_registros -1];
        nuevo_elemento_opcion.value = patentes.length;
        lista_reportes.options[cant_registros] = new Option( nuevo_elemento_opcion.text,nuevo_elemento_opcion.value);
    }











    if (false) {
    
    let filtros = document.getElementById("filtros");
    filtros.addEventListener("click",()=>{
        const radio_filtro = document.getElementsByName("filtro_pais");
        
        for (let i=0; i<radio_filtro.length; i++) {
            if (radio_filtro[1].checked) {
                console.log("Argentina");
                break;
            }else   if (radio_filtro[2].checked) {
                console.log("Brasil");
                break;
            }else   if (radio_filtro[3].checked) {
                console.log("Chile");
                break;
            }else{
                console.log("todos");
                break;
            }
            
        }
        
    });
}


// llenar objetos funcionando sin filtros
const llenar_obj_reportes = () => {
    const nuevo_option_elemento = document.createElement("option");     
    patentes.map( (patente) => {        
        nuevo_option_elemento.text = patente.pais_origen +" - "+ patente.patente_codigo;
        nuevo_option_elemento.value = patente.id;     

        lista_reportes.options[patentes.length -1] = new Option( nuevo_option_elemento.text,nuevo_option_elemento.value);
    }); 
}






///con filtro roto
const llenar_obj_reportes = () => {
    const nuevo_option_elemento = document.createElement("option");     
    let contador_arg = 0;


    patentes.map( (patente) => {  
        if (patente.pais_origen == "Argentina") {
            contador_arg ++;
            nuevo_option_elemento.text = patente.pais_origen +" - "+ patente.patente_codigo;
            nuevo_option_elemento.value = patente.id;     
    
            lista_reportes.options[contador_arg -1] = new Option( nuevo_option_elemento.text,nuevo_option_elemento.value);
        }       

    }); 
}









// llenar objetos funcionando sin filtros
if (false) {
    

const llenar_obj_reportes = (rb_checkeado_valor) => {
    console.log(rb_checkeado_valor);
    const nuevo_option_elemento = document.createElement("option"); 
    let contador = 0;    
    patentes.map( (patente) => { 
        

        if (rb_checkeado_valor == "Todos") {
        
        nuevo_option_elemento.text = patente.pais_origen +" - "+ patente.patente_codigo;
        nuevo_option_elemento.value = patente.id;     

        lista_reportes.options[patentes.length -1] = new Option( nuevo_option_elemento.text,nuevo_option_elemento.value);
        console.log(patente);



        }else if (rb_checkeado_valor == patente.pais_origen) {
            contador ++;
            nuevo_option_elemento.text = patente.pais_origen +" - "+ patente.patente_codigo;
            nuevo_option_elemento.value = patente.id;     
    
            lista_reportes.options[contador -1] = new Option( nuevo_option_elemento.text,nuevo_option_elemento.value);
        }
    }); 
}
}

if (false) {
    const mostrar_paises = ()=>{
        lista_paises.map( (pais)=> {
            //console.log(pais.nombre +" "+ pais.id);
            cbo_lista_paises.add(new Option(pais.nombre));
        });
    }
    mostrar_paises();
}


// llenar objetos funcionando sin filtros
const llenar_obj_reportes = (rb_checkeado_valor) => {
    //const nuevo_option_elemento = document.createElement("option"); 
    //console.log(patentes)    
    let nuevo_option_elemento = document.createElement("option");
/*     patentes.map( (patente) => { 
        //console.log(patente)       
        //nuevo_option_elemento.text = patente.pais_origen +" - "+ patente.patente_codigo;
        //nuevo_option_elemento.value = patente.id;     

        //lista_reportes.options[patentes.length] = new Option( nuevo_option_elemento.text,nuevo_option_elemento.value);

        //lista_reportes.add(new Option(patente.pais_origen));
        //lista_reportes.add(new Option(`${patente.pais_origen} - ${patente.patente_codigo}`));

        
        nuevo_option_elemento.setAttribute("value", `${patente.id}`)

        let option_lleno_texto = document.createTextNode(`${patente.pais_origen}`);
        nuevo_option_elemento.appendChild(option_lleno_texto);
        lista_reportes.appendChild(nuevo_option_elemento);

        console.log(nuevo_option_elemento);
    });  */


    let option3 = document.createElement("option");
    patentes.forEach((patente) => {

        
        option3.setAttribute("value", `${patente.id}`);
        //option3.value = patente.id;


        option3.setAttribute("class", `verde`);
        //option3.class = 'verde';

        let option3Texto = document.createTextNode(`${patente.pais_origen} - ${patente.patente_codigo}`);
        option3.appendChild(option3Texto);

        console.log(option3);

        lista_reportes.appendChild(option3);
        //lista_reportes.add(new Option(option3.value,option3.class));
        //lista_reportes.options[patentes.length] = new Option( nuevo_option_elemento.text,nuevo_option_elemento.value);

    });
    
    //lista_reportes.appendChild(option3);
}
llenar_obj_reportes("Todos");






if (false) {
    

const llenar_reporte_checked = () =>{
    let rb_checkeado_valor = "Todos";

    if (document.querySelector('input[name="filtro_pais"]')) {
        document.querySelectorAll('input[name="filtro_pais"]').forEach((radio_btn) => {
        radio_btn.addEventListener("change", (rb)=> {
            rb_checkeado_valor = rb.target.value;            

            //console.log(rb_checkeado_valor);

            llenar_obj_reportes(rb_checkeado_valor);
        });
        });
    }
}

llenar_reporte_checked();

}




//llenar_obj_reportes();






if (false) {
    function AgregarProvincia(){
        //ejemplo de metodo push
        provincias_argentinas.push('Tierra del fuego');
        let ultimo_registro = provincias_argentinas.length;

        let combo_provincias = document.getElementById('ListProvincias');
        
        let nuevo_elemento = document.createElement('option');
        nuevo_elemento.text = provincias_argentinas[ultimo_registro-1];
        nuevo_elemento.value = ultimo_registro;

        combo_provincias.options[ultimo_registro] = new Option(nuevo_elemento.text, nuevo_elemento.value);
    }
}





if (false) {
    
    option = document.createElement( 'option' );
    option.value = option.text = i;
    select.add( option );
}



if (false) {
    patentes.map( (patente) => {        
        nuevo_option_elemento.text = patente.pais_origen.toString() +" - "+ patente.patente_codigo.toString();
        nuevo_option_elemento.value = patente.id.toString();

    }); 
    lista_reportes.options[patentes.length] = new Option( nuevo_option_elemento.text,nuevo_option_elemento.value);
    console.log(patentes);
}





if (false) {
    patentesCurrPais.forEach((currPatente) =>{
        //expande 1 para cada patente    
        optionsPatentes.size += 1;
        //crear la opcion y rellenar
        let elemPatente = document.createElement('option');
        elemPatente.value = currPatente.numPatente.toString();
        elemPatente.text = currPatente.pais.toString() + " - "
            + currPatente.numPatente.toString();
/*
*esta linea añade el color!
*/
        elemPatente.style.color = paises[index].color; 
        //añadir como hijo del optgroup
        optionsPatentes.appendChild(elemPatente);
    });
}




// llenar objetos funcionando sin filtros
const llenar_obj_reportes = () => {
    let patentes_cantidad = patentes.length;

    patentes.forEach((patente)=>{
        console.log(patente);
        let option = document.createElement("option");
        option.value = option.text = `${patente.pais_origen} - ${patente.patente_codigo}`
        //option.style = 'color:blue';
        // estimado_pagar.style = 'color:blue;font-weight: 200;';
        //lista_reportes.add(option)

        ///lista_reportes.options[patentes.length] = lista_reportes.add(option);
        //lista_reportes.add(new Option(option.value,option.text,option.style));
        lista_reportes.options[patentes_cantidad -1 ] = new Option(option.text,option.value);
    });
    console.log(lista_reportes);
    
    //combo_estudiantes.add(new Option(estudiante.f_nombre, estudiante.id))


}




          <div class="filtros">
                <label for="filtro_pais"> <input type="radio" name="filtro_pais" value="Todos"id="rb_todos"> Todos </label>                
                <label for="filtro_pais"><input type="radio" name="filtro_pais" value="Argentina"id="rb_Argentina">Argentina</label>
                <label for="filtro_pais"><input type="radio" name="filtro_pais" value="Brasil"id="rb_brasil">Brasil</label>
                <label for="filtro_pais"><input type="radio" name="filtro_pais" value="Chile"id="rb_chile">Chile</label>
            </div>  
-->