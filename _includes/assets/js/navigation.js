document.addEventListener("DOMContentLoaded", function() {
  const navigationStyleDefault = "vertical"
  const horizontalNav = document.getElementById("h-nav");
  const verticalNav = document.getElementById("v-nav");
  const content = document.getElementById("content-main");
  const dateline = document.getElementById("dateline");
  const datelineVertical = document.getElementById("dateline-vertical");


  if (!localStorage.getItem('nav')) {
    if (navigationStyleDefault === 'vertical') {
      localStorage.setItem('nav', navigationStyleDefault)
      horizontalNav.classList.add('hidden')
      verticalNav.classList.remove('hidden')
      content.classList.add('mt-16', 'md:mt-20','md:ml-64', 'lg:ml-72')
      content.classList.remove('mt-12', 'md:mt-28')
      dateline.classList.add('hidden')
      datelineVertical.classList.remove('hidden')
    } else {
      localStorage.setItem('nav', navigationStyleDefault)
      horizontalNav.classList.remove('hidden')
      verticalNav.classList.add('hidden')
      content.classList.remove('mt-0','mt-16', 'md:mt-20','md:ml-64', 'lg:ml-72')
      content.classList.add('mt-12', 'md:mt-28')
      dateline.classList.remove('hidden')
      datelineVertical.classList.add('hidden')
    }
  } else {
    if (localStorage.getItem('nav') === 'vertical') {
      horizontalNav.classList.add('hidden')
      verticalNav.classList.remove('hidden')
      content.classList.add('mt-16', 'md:mt-20','md:ml-64', 'lg:ml-72')
      content.classList.remove('mt-12', 'md:mt-28')
      dateline.classList.add('hidden')
      datelineVertical.classList.remove('hidden')
    } else {
      horizontalNav.classList.remove('hidden')
      verticalNav.classList.add('hidden')
      content.classList.remove('mt-0','mt-16', 'md:mt-20','md:ml-64', 'lg:ml-72')
      content.classList.add('mt-12', 'md:mt-28')
      dateline.classList.remove('hidden')
      datelineVertical.classList.add('hidden')
    }
  };
});

function toggleNavigation() {
  const horizontalNav = document.getElementById("h-nav");
  const verticalNav = document.getElementById("v-nav");
  const content = document.getElementById("content-main");
  const dateline = document.getElementById("dateline");
  const datelineVertical = document.getElementById("dateline-vertical");
  if (localStorage.getItem('nav') === 'vertical') {
    localStorage.setItem('nav', 'horizontal')
    horizontalNav.classList.remove('hidden')
    verticalNav.classList.add('hidden')
    content.classList.remove('mt-16', 'md:mt-20','md:ml-64', 'lg:ml-72')
    content.classList.add('mt-12', 'md:mt-28')
    dateline.classList.remove('hidden')
    datelineVertical.classList.add('hidden')
  } else {
    console.log('i am now vertical')
    localStorage.setItem('nav', 'vertical')
    horizontalNav.classList.add('hidden')
    verticalNav.classList.remove('hidden')
    content.classList.add('mt-16', 'md:mt-20','md:ml-64', 'lg:ml-72')
    content.classList.remove('mt-12', 'md:mt-28')
    dateline.classList.add('hidden')
    datelineVertical.classList.remove('hidden')
  }
}
