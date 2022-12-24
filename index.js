const btn1El = document.querySelector(".btn1");

btn1El.addEventListener("mouseover", (e)=>{
    const x = (e.pageX - btn1El.offsetLeft);
    const y = (e.pageY - btn1El.offsetTop);
    btn1El.style.setProperty("--xPos", x + "px");
    btn1El.style.setProperty("--yPos", y + "px");
});