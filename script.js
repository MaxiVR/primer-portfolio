var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

function cambiarImg(imagen) {
  if (imagen.length > 0) {
    var fileReader = new FileReader();

    fileReader.onload = function (event) {
      document
        .getElementById("foto-perfil")
        .setAttribute("src", event.target.result);
    };

    fileReader.readAsDataURL(imagen[0]);
  }
}

function cambiarDatoPerfil() {
  let nombre = document.getElementById("nombre").value;
  let ubicacion = document.getElementById("ubicacion").value;
  let imagen = document.getElementById("image").files;
  cambiarImg(imagen);
  if (nombre !== "") {
    document.getElementById("nomApellido").innerHTML = nombre;
  }
  if (ubicacion !== "") {
    document.getElementById("lugar-perfil").innerHTML = ubicacion;
  }
  document.getElementById("image").value = "";
}

function cambiarParrafo() {
    let info = document.getElementById("info-personal").value;
    document.getElementById("textAcercaDe").innerHTML = info;
    document.getElementById("info-personal").value = "";
}

function editarEdu() {
  let p = document.getElementById(e);
  let lugar = document.getElementById("institucion").value;
  let fecha = document.getElementById("periodo").value;
  p.firstElementChild.firstElementChild.innerHTML = lugar;
  p.firstElementChild.lastElementChild.innerHTML = fecha;
  document.getElementById("institucion").value = "";
  document.getElementById("periodo").value = "";
}

let e;

function cambiar(elemento) {
  let x = elemento.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  console.log(x);
  e = x;
}
let card = "cardEdu ";

function agregarCamposEdu() {
  let $contenedor = document.createElement("div");
  card += 1;
  $contenedor.setAttribute("id", card);
  $contenedor.setAttribute("class", "card");
  $contenedor.innerHTML = `
    <div class="titulos">
        <h5>Lugar-----</h5>
        <h6>Fecha </h6>
    </div>
    <div class="contenedor-edit">
        <ul class="menu-edit">
            <li class="btn-edit">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-open" data-bs-toggle="modal" 
                    data-bs-target="#modal-edu">
                    <i class="fa fa-pencil" onclick="cambiar(this)"></i>

                    </button>
                </button>
            </li>
            <li class="btn-edit">
            <button type="button" class="btn-right" id="btn-thash" onclick="eliminarInfo(this)">
                <i class="fa fa-trash-o btn" aria-hidden="true"> </i>
            </button>
            </li>
        </ul>
    </div>
`;

  let contenedorEdit = document.getElementById("contenedor-plus");
  contenedorEdit.parentNode.insertBefore(
    $contenedor,
    contenedorEdit.firstElementChild.nextSibling.nextSibling
  );
}

function eliminarInfo(e) {
  e.parentNode.parentNode.parentNode.parentNode.remove();
}

let cardTrabajo = "cardTrabajo ";
function agregarCamposTrabajo() {
  let $contenedor = document.createElement("div");
  cardTrabajo += 1;
  $contenedor.setAttribute("id", cardTrabajo);
  $contenedor.setAttribute("class", "card");
  $contenedor.innerHTML = ` 
                    <div class="titulos">
                        <h5>Empresa</h5>
                        <h5>Lugar-----</h5>
                        <h6>Fecha</h6>
                    </div>
                    <div class="contenedor-edit">
                        <ul class="menu-edit">
                            <li class="btn-edit">
                                <button type="button" id="btn-info" class="btn btn-open" data-bs-toggle="modal"
                                    data-bs-target="#exp">
                                    <i class="fa fa-pencil btn" onclick="cambiar(this)"></i>
                                </button>
                            </li>
                            <li class="btn-edit">
                                <button type="button" class="btn-right" id="btn-thash" onclick="eliminarInfo(this)">
                                    <i class="fa fa-trash-o btn" aria-hidden="true"> </i>
                                </button>
                            </li>
                        </ul>
                    </div>
                `;

  let contenedorEdit = document.getElementById("contenedor-titulo-trabajo");
  contenedorEdit.parentNode.insertBefore(
    $contenedor,
    contenedorEdit.firstElementChild.nextSibling.nextSibling
  );
}

function editarTrabajo() {
  let p = document.getElementById(e);
  console.log(p);
  let empresa = document.getElementById("empresa").value;
  let puesto = document.getElementById("puesto").value;
  let periodo = document.getElementById("periodoTrabajado").value;
  p.firstElementChild.firstElementChild.innerHTML = empresa;
  p.firstElementChild.firstElementChild.nextElementSibling.innerHTML = puesto;
  p.firstElementChild.lastElementChild.innerHTML = periodo;
  document.getElementById("empresa").value = "";
  document.getElementById("puesto").value = "";
  document.getElementById("periodoTrabajado").value = "";
}

let infoProyect = "infoProyect";

function addProyect() {
  let $contenedor = document.createElement("div");
  infoProyect += 1;
  $contenedor.setAttribute("id", infoProyect);
  $contenedor.setAttribute("class", "proyect");
  $contenedor.innerHTML = `<div class="titulos">
  <h4 style="width: 50%">Nombre Proyecto</h4>
  <p id="info-proyecto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur id natus perferendis animi
      quasi itaque voluptas ad culpa distinctio, aliquid odit deleniti recusandae cum reiciendis
      sapiente possimus
      officiis error iste.
  </p>
</div>
<div class="contenedor-edit">
  <ul class="menu-edit">
      <li class="btn-edit">
          <button type="button" id="btn-info" class="btn btn-open" data-bs-toggle="modal"
              data-bs-target="#Modal-proyect">
              <i class="fa fa-pencil btn" onclick="cambiar(this)"></i>
          </button>
      </li>
      <li class="btn-edit">
          <button type="button" class="btn-right" id="btn-thash" onclick="eliminarInfo(this)">
              <i class="fa fa-trash-o btn" aria-hidden="true"> </i>
          </button>
      </li>
  </ul>
</div>
                `;

  let contenedorEdit = document.getElementById("contenedor-plus2");
  contenedorEdit.parentNode.insertBefore(
    $contenedor,
    contenedorEdit.firstElementChild.nextSibling.nextSibling
  );
}

function cambiarProyecto() {
    let p = document.getElementById(e);
    console.log(p);
    let info = document.getElementById("input-proyecto").value;
    let nomProyecto = document.getElementById("nomProyecto").value;
    p.firstElementChild.firstElementChild.innerHTML = nomProyecto;
    p.firstElementChild.lastElementChild.innerHTML = info;
    document.getElementById("input-proyecto").value = "";
    document.getElementById("nomProyecto").value = "";
}