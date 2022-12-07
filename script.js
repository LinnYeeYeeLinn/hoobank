const navbarLinks = document.querySelectorAll("#navbar-link");
const openMenu = document.querySelector(".openMenu");
const navbar = document.querySelector(".navbar");
const upKey = document.querySelector(".upKey");

function openLink(value){
    navbarLinks.forEach(link => {
        if(value.toLowerCase() == link.innerText.toLowerCase()){
            link.classList.add("active");
        }
        else{
            link.classList.remove("active");
        }
    })
}

window.onload = function(){
    openLink("Home");
}

openMenu.addEventListener("click", () => {
    navbar.classList.toggle("toggleNav");
});

for (const navLink of navbarLinks) {
    navLink.addEventListener("click", () => {
        navbar.classList.replace("toggleNav", "hide");
        navbar.classList.remove("hide");
    })
}

window.onscroll = () => {
    if(window.scrollY > 150){
        upKey.style.opacity = '1';
    }
    else{
        upKey.style.opacity = '0';
    }
}


