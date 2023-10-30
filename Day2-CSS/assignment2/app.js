const toggleMenuBtn = document.querySelector('.nav-toggle')
const topLink = document.querySelector('.top-link')
const navbar = document.getElementById('nav')
const linksContainer = document.querySelector('.links-container')

/* HIDE AND SHOW NAVBAR */
toggleMenuBtn.addEventListener('click', function () {
  console.log('hello')
  linksContainer.classList.toggle('show-links')
})
/* HIDE AND SHOW NAVBAR */

/* Fixed navbar */
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }
  // setup back to top link

  /* Set link to top button */
  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1)
    console.log(id)
    const element = document.getElementById(id)

    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight

    if (!fixedNav) {
      position = position - navHeight
    }
    if (navHeight > 82) {
      position = position + containerHeight
    }

    window.scrollTo({
      left: 0,
      top: position,
    })
    // close
    // linksContainer.style.height = 0
    linksContainer.classList.remove('show-links')
  })
})
// calculate heights
