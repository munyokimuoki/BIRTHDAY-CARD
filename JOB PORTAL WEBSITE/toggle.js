const bar = documents.getElementById("bar");
const menu = document.getElementById("menu");

if(bar){
    bar.addEventlistener("click", ()=> { 
        menu.classList.toggle("active");});
}