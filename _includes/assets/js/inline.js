// Boilerplate for Netlify Identity
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Event listener for darkmode
document.addEventListener("DOMContentLoaded", function() {

  if (localStorage.getItem('darkmode') === 'true') {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

});

// Logout and remove passphrase from local storage
function logout() {
  localStorage.removeItem("passphrase")
  window.location.href = "/";
}

// Toggle search pane
function toggleSearch() {
  const search = document.getElementById("search");
  const verticalNavigation = document.getElementById("v-nav");
  const horizontalNavigation = document.getElementById("h-nav");
  search.classList.toggle("hidden");
  // if (horizontalNavigation !== null) {
  //   verticalNavigation.classList.toggle("hidden");
  // }
  // if (verticalNavigation !== null) {
  //   verticalNavigation.classList.toggle("hidden");
  // }
}

// Toggle responsive navigation
function toggleNavigation() {
  const navigation = document.getElementById("navigation");
  const verticalNavigation = document.getElementById("v-nav");
  const navigationIcon = document.getElementById("hamburger");
  const content = document.getElementById("content");
  navigation.classList.remove("hidden","mt-20");

  // verticalNavigation.classList.remove("hidden");
  verticalNavigation.classList.toggle("hidden");
  verticalNavigation.classList.toggle("w-full");
  navigationIcon.classList.toggle("bg-hamburger");
  navigationIcon.classList.toggle("bg-hamburger-close");


  header.classList.toggle("hidden");
  content.classList.toggle("hidden");
  navigationIcon.classList.toggle("open");
}

// Submenu logic for horizontal drop down nav
function showSubMenu(id) {
  var elem = document.getElementById(id);
  elem.classList.add("block")
  elem.classList.remove("hidden")
  var isOut = isOutOfViewport(elem )
  if (isOut.any) {
    elem.classList.add("right-0")
    elem.classList.remove("mr-8")
    elem.classList.add("-mr-2")
  }
}

// Toggle dark mode
function toggleDarkMode() {
  if (localStorage.getItem('darkmode') === 'true') {
    localStorage.setItem('darkmode', 'false')
    document.body.classList.remove("dark");
  } else {
    localStorage.setItem('darkmode', 'true')
    document.body.classList.add("dark");
  }
}

/*!
 * Check if an element is out of the viewport
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element to check
 * @return {Object}     A set of booleans for each side of the element
 * Used for horizontal nav drop downs
 * */
var isOutOfViewport = function (elem) {

  // Get element's bounding
  var bounding = elem.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  var out = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  out.all = out.top && out.left && out.bottom && out.right;

  return out;
};