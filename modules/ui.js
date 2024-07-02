function pintarVideos(listaVideos, contenedorVideos) {
    if (listaVideos.length > 0) {
      contenedorVideos.innerHTML = "";
  
      listaVideos.forEach((video) => {
        const tarjeta = document.createElement("article");
        const figure = document.createElement("figure");
        const section = document.createElement("section");
        const play = document.createElement("button");
  
        figure.innerHTML = `
        <img src=${video.poster} alt=${video.namevideo}>
        <figcaption>13:55</figcaption>
      `;
  
        section.innerHTML = `
        <figure>
          <img src=${video.avatar} alt=${video.username}>
        </figure>
        <div>
          <h2>${video.namevideo}</h2>
          <p>${video.username}</p>
          <p>${video.vistas} vistas - ${video.fecha}</p>
        </div>
      `;
  
        play.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#666666"><path d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
      `;
  
        play.addEventListener("click", () => {
          window.location.href = "/pages/detalleVideo.html";
        });
  
        figure.appendChild(play);
  
        tarjeta.classList.add("card");
  
        tarjeta.appendChild(figure);
        tarjeta.appendChild(section);
        contenedorVideos.appendChild(tarjeta);
      });
    } else {
      contenedorVideos.textContent = "No se encontraron videos";
    }
  }
  
  function agregarBotonesDeFiltrado(
    listaCategorias,
    contenedorFiltros,
    listaVideos,
    contenedorVideos
  ) {
    listaCategorias.forEach((element) => {
      const item = document.createElement("li");
      const boton = document.createElement("button");
      boton.id = element;
      boton.textContent = element;
  
      boton.addEventListener("click", () => {
        //   console.log(`Hice click en el filtro ${element}`);
        // mostrarFiltroActivo(contenedorFiltros.children, element);
        //   activarBoton(contenedorFiltros.children, element);
        //   const videosFiltrados = filtrarVideosPorCategoria(listaVideos, element);
        //   pintarVideos(videosFiltrados, contenedorVideos);
        ejecutarFiltros(
          element,
          contenedorFiltros.children,
          listaVideos,
          contenedorVideos
        );
      });
      item.appendChild(boton);
      contenedorFiltros.appendChild(item);
      console.log(contenedorFiltros.children);
    });
  }
  
  function ejecutarFiltros(
    categoriaAFiltrar,
    menuFiltro,
    listaVideos,
    contenedorVideos
  ) {
    console.log(`Hice click en el filtro ${categoriaAFiltrar}`);
    // mostrarFiltroActivo(menuFiltro, categoriaAFiltrar);
    activarBoton(menuFiltro, categoriaAFiltrar);
    const videosFiltrados = filtrarVideosPorCategoria(
      listaVideos,
      categoriaAFiltrar
    );
    pintarVideos(videosFiltrados, contenedorVideos);
  }
  
  function mostrarFiltroActivo(botonesFiltrado, filtroAActivar) {
    for (const boton of botonesFiltrado) {
      boton.classList.remove("active");
      if (boton.id === filtroAActivar) {
        boton.classList.add("active");
      }
    }
  }
  
  function activarBoton(listaBotones, botonAActivar) {
    for (const item of listaBotones) {
      const boton = item.querySelector("button");
      boton.classList.remove("active");
      if (boton.id === botonAActivar) {
        boton.classList.add("active");
      }
    }
  }
  
  function filtrarVideosPorCategoria(listaVideos, nombreCategoria) {
    return nombreCategoria === "todos"
      ? listaVideos
      : listaVideos.filter((video) => video.categoria === nombreCategoria);
  }
  
  export { agregarBotonesDeFiltrado, pintarVideos, ejecutarFiltros };