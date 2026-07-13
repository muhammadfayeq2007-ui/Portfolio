const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", showMenu);

function showMenu() {
    menu.classList.toggle("show");
}console.log("JavaScript is running!");