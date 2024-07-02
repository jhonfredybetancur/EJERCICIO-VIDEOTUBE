import { videos } from "../modules/data.js";
import {
  pintarVideos,
  agregarBotonesDeFiltrado,
  ejecutarFiltros,
} from "../modules/ui.js";

const contenedorFiltros = document.getElementById("filtros");
const listaCategorias = videos.map((video) => video.categoria);
// const categorias = [...new Set(listaCategorias)]; //Spread operators
const categorias = Array.from(new Set(listaCategorias));
const contenedorVideos = document.querySelector("main");

//1. Agregar en el DOM los botones de filtrado
agregarBotonesDeFiltrado(
  categorias,
  contenedorFiltros,
  videos,
  contenedorVideos
);

//2. Agragar las tarjetas de los videos en el DOM
pintarVideos(videos, contenedorVideos);

//3. Funcionalidad al boton todos
const botonTodos = document.getElementById("todos");
botonTodos.addEventListener("click", (evento) => {
  ejecutarFiltros(
    evento.target.id,
    contenedorFiltros.children,
    videos,
    contenedorVideos
  );
});

//4. Funcionalidad de búsqueda de video por nombre
const formularioBusqueda = document.getElementById("busqueda");

formularioBusqueda.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const inputBusqueda = document.getElementById("inputBusqueda");
  const terminoBusqueda = inputBusqueda.value;
  if (terminoBusqueda.trim() !== "") {
    const resultadoBusqueda = busquedaVideoPorNombre(videos, terminoBusqueda);
    pintarVideos(resultadoBusqueda, contenedorVideos);
  }
});

function busquedaVideoPorNombre(listaVideos, nombreABuscar) {
  return listaVideos.filter((video) =>
    video.namevideo.toLowerCase().includes(nombreABuscar.toLowerCase())
  );
}