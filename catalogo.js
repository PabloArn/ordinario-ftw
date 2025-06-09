document.addEventListener("DOMContentLoaded", function () {
  fetch("juegos.xml") //Se manda a llamar el xml donde se encuentra toda la información de los juegos de mesa//
    .then(res => res.text())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");
      const juegos = xml.getElementsByTagName("juego");
      const tabla = document.getElementById("tablaJuegos");
      tabla.innerHTML = "<tr><th>Nombre</th><th>Categoría</th><th>Jugadores</th><th>Duración</th><th>Precio</th></tr>";
      for (let juego of juegos) {
        const fila = `<tr>
          <td>${juego.getElementsByTagName("nombre")[0].textContent}</td>
          <td>${juego.getElementsByTagName("categoria")[0].textContent}</td>
          <td>${juego.getElementsByTagName("jugadores")[0].textContent}</td>
          <td>${juego.getElementsByTagName("duracion")[0].textContent} min</td>
          <td>$${juego.getElementsByTagName("precio")[0].textContent}</td>
        </tr>`;
        tabla.innerHTML += fila;
      }
    });
});
