let parrafo= null;
const btnCrear= document.getElementById("CREAR");
const contenedor= document.getElementById("contenedor");
btnCrear.addEventListener("click", () => 
{
    parrafo = document.createElement("p");
    parrafo.textContent = "párrafo  dinámico.";
    parrafo.classList.add("parrafo");
    contenedor.appendChild(parrafo);
});
const btnEliminar= document.getElementById("Eliminar");
btnEliminar.addEventListener("click", () => {
    const parrafos= document.getElementsByClassName("parrafo");
    Array.from(parrafos)
    .forEach(parrafo => parrafo.remove());

});
const btnDobleclick= document.getElementById("btnDobleclick");
btnDobleclick.addEventListener("dblclick", () => {
    alert("Hiciste doble click en el botón Doble Click");

});
const inputtext= document.getElementById("nombre");
inputtext.addEventListener("input", () => {
    console.log("Escribiendo: ",e.target.value);
});
const form= document.getElementById("formulario");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Formulario enviado ${inputtext.value}`);
});

inputtext.addEventListener("keydown", (e) => {
    console.log("Tecla presionada: ", e.key);
});
window.addEventListener("scroll", () => {
    console.log(`Scroll detectado`);
   
});