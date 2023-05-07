nav_icon = document.getElementById('nav-icon')
nav_list = document.getElementById('nav-list')
nav_scroll = document.getElementById('nav-scroll')
changeColoronScroll = document.querySelectorAll('.change-text-color-on-scroll');


nav_icon.onclick = () => {
  nav_list.classList.toggle("hidden")
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    
    nav_scroll.classList.add("bg-rose-800");
    nav_scroll.classList.add("transition");
    nav_scroll.classList.add("duration-700");
    nav_scroll.classList.remove(" bg-151A1E");

    changeColoronScroll.forEach(changeColoronScroll => {
      changeColoronScroll.classList.remove('text-white')
      changeColoronScroll.classList.add('text-black')
    });

  } else {
    nav_scroll.classList.remove("bg-rose-800");

    changeColoronScroll.forEach(changeColoronScroll => {
      changeColoronScroll.classList.add('text-white')
      changeColoronScroll.classList.remove('text-black')
    });

  }
});

