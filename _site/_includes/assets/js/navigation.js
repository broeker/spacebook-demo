document.addEventListener("DOMContentLoaded", function() {

  const navigationStyle = navigation.style
  const navigationStyleDefault = navigation.default

  // If style does not equal toggle, remove any previously set localStorage
  if (navigationStyle !== 'toggle') {
    localStorage.removeItem('nav')
    localStorage.setItem('nav', navigationStyle )
  }

  console.log(navigationStyle)
  console.log(navigationStyleDefault)
  console.log(localStorage.getItem('nav'))

  // If localstorage exists, set up the
  // navigation style using the existing key
  // If no localStorage, set default style using
  // key from _config/assets/navigation.js
  if (localStorage.getItem('nav')) {

    switch (localStorage.getItem('nav')) {
      case "horizontal":
        horizontalSetup()
        break
      case "vertical":
        verticalSetup()
        break
    }
  } else {

    switch (navigationStyle) {
      case "horizontal":
        verticalSetup()
        break
      case "vertical":
        horizontalSetup()
        break
      case "toggle":
        if (!localStorage.getItem('nav')) {
          if (navigationStyleDefault === 'vertical') {
            localStorage.setItem('nav', navigationStyleDefault)
            verticalSetup()
          } else {
            localStorage.setItem('nav', navigationStyleDefault)
            horizontalSetup()
          }
        } else {
          if (localStorage.getItem('nav') === 'vertical') {
            verticalSetup()
          } else {
            horizontalSetup()
          }
        }
        ;
        break
      default:
        horizontalSetup()
    }
  }
});

function toggleNavigation() {
  console.log(localStorage.getItem('nav'))
  if (localStorage.getItem('nav') === 'vertical') {
    localStorage.setItem('nav', 'horizontal')
    horizontalSetup()
  } else {
    localStorage.setItem('nav', 'vertical')
    verticalSetup()
  }
}

function verticalSetup() {
  const horizontalNav = document.getElementById("h-nav");
  const verticalNav = document.getElementById("v-nav");
  const content = document.getElementById("content-main");
  const dateline = document.getElementById("dateline");
  const datelineVertical = document.getElementById("dateline-vertical");
  horizontalNav.classList.add('hidden')
  verticalNav.classList.add('hidden', 'lg:block')
  content.classList.add('mt-16', 'md:mt-20-tips-tricks', 'lg:ml-72')
  content.classList.remove('mt-12', 'md:mt-28')
  dateline.classList.add('hidden')
  datelineVertical.classList.remove('hidden')
}

function horizontalSetup() {
  const horizontalNav = document.getElementById("h-nav");
  const verticalNav = document.getElementById("v-nav");
  const content = document.getElementById("content-main");
  const dateline = document.getElementById("dateline");
  const datelineVertical = document.getElementById("dateline-vertical");
  horizontalNav.classList.remove('hidden')
  verticalNav.classList.add('hidden')
  verticalNav.classList.remove('md:block', 'md:ml-64', 'lg:ml-72')
  content.classList.remove('mt-0','mt-16', 'md:mt-20-tips-tricks','md:ml-64', 'lg:ml-72')
  content.classList.add('mt-12', 'md:mt-28')
  dateline.classList.remove('hidden')
  datelineVertical.classList.add('hidden')
}