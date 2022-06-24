(function (window, document) {
    "use strict";
    const search = (e) => {
      const results = window.searchIndex.search(e.target.value, {
        bool: "OR",
        expand: true,
      });
      const searchBox = document.getElementById("searchField");
      const resEl = document.getElementById("searchResults");
      const noResultsEl = document.getElementById("noResultsFound");
      const resWrapper = document.getElementById("searchWrapper");

      searchBox.addEventListener('focus', (event) => {
        event.target.classList.remove("hidden"); 
      });

    document.addEventListener('click', function(event) {
        var isClickInside = searchBox.contains(event.target);
        if (!isClickInside) {
            resEl.classList.add("hidden"),noResultsEl.classList.add("hidden")
            noResultsEl.classList.add("hidden")
        }
      });

    resEl.innerHTML = "";
      if (e.target.value != "") {
        if (results != "") {
          noResultsEl.classList.add("hidden")
          resEl.classList.add("search-results")
          resEl.classList.remove("hidden");
          resWrapper.classList.remove("hidden");
          results.map((r) => {
            const { id, title, description } = r.doc;
            const el = document.createElement("li", { tabindex: '-1' });
            resEl.appendChild(el);
    
            const h3 = document.createElement("h3");
            el.appendChild(h3);
    
            const a = document.createElement("a");
            a.setAttribute("href", id);
            a.textContent = title;
            h3.appendChild(a);
    
            const p = document.createElement("p");
            p.textContent = description;
            el.appendChild(p);
          });
        } else {
          noResultsEl.classList.remove("hidden")
          resWrapper.classList.add("hidden");
          resEl.classList.add("hidden");
          //noResultsEl.classList.add("search-results")
        }
      } else {
        noResultsEl.classList.add("hidden")
        resEl.classList.add("hidden");
      }
    };
    fetch("/search-index.json").then((response) =>
      response.json().then((rawIndex) => {
        window.searchIndex = elasticlunr.Index.load(rawIndex);
        document.getElementById("searchField").addEventListener("input", search);
      })
    );
  })(window, document);