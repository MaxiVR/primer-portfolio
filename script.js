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



var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

