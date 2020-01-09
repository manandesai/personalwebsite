document.getElementById("smallnav").addEventListener('click', toggleSmallNav);

function toggleSmallNav(){
    console.log("toggling nav");
    var navdisplay = document.getElementById("smallnavmenu");
    navdisplay.classList.toggle("hidden");
}