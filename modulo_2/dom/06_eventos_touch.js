const area_touch= document.getElementById("area_touch");    
area_touch.addEventListener("touchstart", ()=>{
    area_touch.style.backgroundColor="purple";
});
area_touch.addEventListener("touchend", ()=>{
    area_touch.style.backgroundColor="blue";
    alert("TOUCH END");
});
