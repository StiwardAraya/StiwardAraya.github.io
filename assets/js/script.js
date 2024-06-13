let menuVisible = false;
function toggleMenu(){
    document.getElementById("nav").classList = menuVisible ? "" : "responsive";
    menuVisible = !menuVisible;
}