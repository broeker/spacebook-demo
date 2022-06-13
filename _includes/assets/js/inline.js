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
// Event listener for darkmode, close search on body click
document.addEventListener("DOMContentLoaded", function() {

  const el = document.getElementById("content");
  el.addEventListener("click", toggleSearch, false)

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

function toggleSearch() {
  const search = document.getElementById("search");
  const verticalNavigation = document.getElementById("v-nav");
  const content = document.getElementById("content");
  const app = document.getElementById("app");
  search.classList.toggle("hidden");
  // app.classList.toggle("hidden");

   verticalNavigation.classList.toggle("hidden");
    // content.classList.toggle("hidden");
}

// Show search
// function showSearch() {
//   const logo = document.getElementById("logo");
//   const site = document.getElementById("site");
//   const icons = document.getElementById("header-icons");
//   const searchbox = document.getElementById("searchbox");
//   const hamburger = document.getElementById('hamburger')
//   logo.classList.add("hidden");
//   site.classList.add("hidden");
//   icons.classList.add("hidden");
//   hamburger.classList.add("hidden");
//   searchbox.classList.add("w-full");
//   searchbox.classList.remove("hidden")
//   document.getElementById("searchField").focus();
// }
//
// // Close search
// function closeSearch() {
//   const logo = document.getElementById('logo')
//   const site = document.getElementById("site");
//   const searchbox = document.getElementById("searchbox");
//   const hamburger = document.getElementById('hamburger')
//   site.classList.remove("hidden");
//   logo.classList.remove("hidden");
//   hamburger.classList.remove("hidden");
//   searchbox.classList.remove("w-full");
//   searchbox.classList.remove("sm:block")
//   searchbox.classList.add("hidden")
// }

// Show/hide responsive navigation
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
  // verticalNavigation.classList.toggle("w-full");
  // verticalNavigation.classList.toggle("h-screen");
  // verticalNavigation.classList.toggle("h-full");

  navigationIcon.classList.toggle("open");
  //navigation.classList.add("overflow-y-scroll", "w-full","right-0", "top-0", "z-50", "pt-0", "bg-white","border-l", "border-gray-200");
}

// function closeNavigation() {
//   const navigation = document.getElementById("navigation");
//   const verticalNavigation = document.getElementById("v-nav");
//   navigation.classList.add("hidden");
//   verticalNavigation.classList.add("hidden");
//   document.body.classList.remove("overflow-hidden","foo")
//   navigation.classList.remove("overflow-y-scroll","w-full", "right-0", "z-50", "pt-0", "bg-white","border-l", "border-gray-200", "md:absolute", "md:left-0");
// }

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
function activateDarkMode() {
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