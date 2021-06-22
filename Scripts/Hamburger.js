const togglebutton = document.getElementsByClassName("togglebutton")[0]
const navlinks = document.getElementsByClassName("navbar-links")[0]
const navlinks1 = document.getElementsByClassName("main-bar")[0]
const navlinks2 = document.getElementsByClassName("button")[0]
navlinks2.style.display = "flex"
const navlinks3 = document.getElementsByClassName("enroll-now")[0]


togglebutton.addEventListener("click", () => {
  navlinks.classList.toggle("active")
  navlinks1.classList.toggle("active")
  navlinks3.classList.toggle("active")
})

const navbar = document.querySelector(".section1")
window.onscroll = () => {
  if (window.scrollY > 300) {
    navbar.classList.add("nav-active")
  } else {
    navbar.classList.remove("nav-active")
  }
}
