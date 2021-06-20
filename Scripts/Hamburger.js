const togglebutton = document.getElementsByClassName("togglebutton")[0]
const navlinks = document.getElementsByClassName("navbar-links")[0]

togglebutton.addEventListener("click", () => {
  navlinks.classList.toggle("active")
})

const navbar = document.querySelector(".section1")
window.onscroll = () => {
  if (window.scrollY > 300) {
    navbar.classList.add("nav-active")
  } else {
    navbar.classList.remove("nav-active")
  }
}
