// sticky ////////////////////////////////
const Nav = document.querySelectorAll("Nav");
window.addEventListener("scroll",function(){
    Nav.classList.toggle("sticky",this.window.scrollY > 50)
});