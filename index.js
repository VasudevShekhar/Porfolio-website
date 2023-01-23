
// ---



const hamMenuBtn = document.querySelector('.header_menu_burger')
const smallMenu = document.querySelector('.header_menu')
const headerHamMenuBtn = document.querySelector('.header_menu_open')
const headerHamMenuCloseBtn = document.querySelector('.header_menu_close')
const headerSmallMenuLinks = document.querySelectorAll('.header_menu_link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header_menu--active')) {
    smallMenu.classList.remove('header_menu--active')
  } else {
    smallMenu.classList.add('header_menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header_menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header_logo_cont')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '#'
});
