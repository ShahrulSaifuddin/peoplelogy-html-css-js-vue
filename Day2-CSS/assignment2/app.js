const links = document.querySelector('.links')
const toggleMenuBtn = document.querySelector('.nav-toggle')

/* HIDE AND SHOW NAVBAR */
toggleMenuBtn.addEventListener('click', function () {
  console.log('hello')
  links.classList.toggle('show-links')
})
/* HIDE AND SHOW NAVBAR */
