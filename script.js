var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

function cambiarParrafo(){
    let valor = document.getElementById("prueba").value;
    document.getElementById("textAcercaDe").innerHTML = valor;
    document.getElementById("prueba").value= "";
    
}

function cambiarDatoPerfil(){
    let nombre = document.getElementById('nombre').value;
    let ubicacion = document.getElementById("ubicacion").value;
    let imagen = document.getElementById("image").value;
    document.getElementById("nomApellido").innerHTML = nombre;
    document.getElementById("lugar").innerHTML = ubicacion;
    urlImage = URL.createObjectURL (image);
    document.getElementById("foto-perfil").setAttribute.src = urlImage;
    document.getElementById("nombre").value = "";
    document.getElementById("ubicacion").value = "";
    
}

function agregarNuevosCampos(){
    let $contenedor = document.createElement("div");
    $contenedor.innerHTML = `<div id="card-1">
    <div class="titulos-edu">
        <h5>Lugar-----</h5>
        <h6>Fecha </h6>
    </div>
    <div class="contenedor-edit">
        <ul class="menu-edit">
            <li class="btn-edit">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-open" data-bs-toggle="modal" 
                    data-bs-target="#Edu-exp">
                    <a href="#" class="btn-right">
                        <i class="fa fa-pencil btn"></i>
                    </a>
                </button>
            </li>
            <li class="btn-edit">
                <a href="#" class="btn-right" id="btn-thash" onclick="eliminarInfo(this)">
                    <i class="fa fa-trash-o btn" aria-hidden="true"> </i></a>
            </li>
        </ul>
    </div>
</div>`;

    let contenedorEdu = document.getElementById("contenedor-titulo");
    contenedorEdu.insertBefore($contenedor, contenedorEdu.firstElementChild.nextSibling);

    /* let contenedor = document.createElement("container");
    let titulo1 = document.createElement("h5");
    let titulo2 = document.createElement("h6");
    let contenido = document.createTextNode("Lugar");
    let contenido2 = document.createTextNode("Fecha");
    titulo1.appendChild(contenido);
    titulo2.appendChild(contenido2);
    contenedor.appendChild(titulo1);
    contenedor.appendChild(titulo2);
    let nodoPadre = document.getElementById("contenedor-edu");
    nodoPadre.appendChild(contenedor); */
}



function eliminarInfo(e){
    e.parentNode.parentNode.parentNode.parentNode.remove(e.parentNode.parentNode.parentNode);

}

