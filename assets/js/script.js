let id_NuevaTarea   = document.getElementById('id_NuevaTarea') // nueva tarea
let id_Total        = document.getElementById('id_Total') 
let id_Realizadas   = document.getElementById('id_Realizadas')
let id_TablaBody    = document.getElementById('id_TablaBody')

let arregloTareas = []
let tareas =''
let contarRealizadas = 0;
let contarTotal = 0;
let contarTareas = 3; // ID tendrá tres tareas, incrementará cuando se cree una nueva tarea


// se agrega 3 tareas iniciales en el arreglo
window.addEventListener("load", function (){

    id_Realizadas.innerHTML = 0

    arregloTareas = [
        {id: 1, nombre: 'Hacer mercado'},
        {id: 2, nombre: 'Estudiar para la prueba'},
        {id: 3, nombre: 'Sacar a pasear a Tobby'}
    ]

    ingresaInfo ()

});

// se crea funcion para tareas realizadas
function tareaRealizada(){

    //checkbox
    let marcados = document.getElementsByTagName('input').length

    contarRealizadas = 0;

    for (let check=0; check < marcados; check ++){
        let checkbox =document.getElementsByTagName('input')[check].checked

        if (checkbox)
            contarRealizadas++
    }

    id_Realizadas.innerHTML= contarRealizadas
}

//funcion para eliminar tareas
function eliminada(op){
    let eliminar = arregloTareas.findIndex(tarea => tarea.id == op)
    arregloTareas.splice(eliminar, 1)

    ingresaInfo()

    //se reinicia contador de tareas realizadas
    tareaRealizada()
}

// funcion para crear tareas nuevas
let botonA = document.getElementById('id_botonA');
botonA.addEventListener('click', function(){

    contarTareas++
    let tareaNueva = id_NuevaTarea.value;

    arregloTareas.push({id: contarTareas, nombre: tareaNueva})

    ingresaInfo()

    id_NuevaTarea.value = ''
})

function ingresaInfo(){

    contarTotal = arregloTareas.length;

    tareas = '';
    for (let aTarea of arregloTareas){

        tareas+=`
                <tr>
                <td>${aTarea.id}</td>
                <td>${aTarea.nombre}</td>
                <td><input class="form-check-input" type="checkbox" id="id_check"
                onclick="tareaRealizada()"></td>
                <td><button type="button" class="btn btn-danger bt-sm" onclick="eliminada(${aTarea.id})">X</button></td>
                </tr>
                ` 
        }

        id_TablaBody.innerHTML = tareas;
        id_Total.innerHTML = contarTotal
}