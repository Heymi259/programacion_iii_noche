const mensaje = document.getElementById("mensaje");
mensaje.textContent = "MENSAJE ACTUALIZADO DESDE JS";
mensaje.style.color = "blue";

const link = document.getElementById("link");
link.setAttribute('href', 'https://www.google.com');
link.classList.add('boton');
link.textContent = "Ir a Google";