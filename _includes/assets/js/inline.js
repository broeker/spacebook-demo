if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  
  const el = document.getElementById("main");
   el.addEventListener("click", closeNavigation, false)
   el.addEventListener("click", closeSearch, false)
  if (localStorage.getItem('darkmode') === 'true') {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

function logout() {
  localStorage.removeItem("passphrase")
  window.location.href = "/";
}

function showSearch() {
  const logo = document.getElementById("logo");
  const site = document.getElementById("site");
  const icons = document.getElementById("header-icons");
  const searchbox = document.getElementById("searchbox");
  const hamburger = document.getElementById('hamburger')
  logo.classList.add("hidden"); 
  site.classList.add("hidden"); 
  icons.classList.add("hidden"); 
  hamburger.classList.add("hidden"); 
  searchbox.classList.add("w-full"); 
  searchbox.classList.remove("hidden")
  document.getElementById("searchField").focus();
}

function closeSearch() {
  const logo = document.getElementById('logo')
  const site = document.getElementById("site");
  const searchbox = document.getElementById("searchbox");
  const hamburger = document.getElementById('hamburger')
  site.classList.remove("hidden"); 
  logo.classList.remove("hidden"); 
  hamburger.classList.remove("hidden"); 
  searchbox.classList.remove("w-full"); 
  searchbox.classList.remove("sm:block")
  searchbox.classList.add("hidden")
}


function showNavigation() {
  const navigation = document.getElementById("navigation");
  navigation.classList.remove("hidden", "sticky","pt-32"); 
  navigation.classList.add("absolute","right-0", "top-0", "-mt-0", "z-50", "pt-0", "bg-white","border-l", "border-gray-200"); 
}

function closeNavigation() {
  const navigation = document.getElementById("navigation");
  navigation.classList.add("hidden"); 
  navigation.classList.remove("absolute","right-0","z-50", "bg-gray-100", "border-r", "border-gray-800" ); 
}

function activateDarkMode() {
  if (localStorage.getItem('darkmode') === 'true') {
    localStorage.setItem('darkmode', 'false')
    document.body.classList.remove("dark");
  } else {
    localStorage.setItem('darkmode', 'true')
    document.body.classList.add("dark");
  }
}