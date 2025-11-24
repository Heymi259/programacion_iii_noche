const caja= document.getElementById("caja");    
caja.addEventListener("mouseover", ()=>{
    caja.style.backgroundColor="purple";
});
caja.addEventListener("mouseout", ()=>{
    caja.style.backgroundColor="blue";
});
caja.addEventListener("click", ()=>{
    alert("Hiciste click en la caja");
});
