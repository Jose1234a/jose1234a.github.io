var datos = [
  {
    title: "llaves para lavaplatos",
    url: "https://www.example.com/page1"
  },
  {
    title: "Cemento",
    url: "https://www.example.com/page2"
  },
  {
    title: "Sanitarios",
    url: "https://www.example.com/page3"
  },

  {
    title: "herramientas",
    url: "https://www.example.com/page5"
  },
  {
    title: "Tuberia",
    url: "https://www.example.com/page5"
  },
  {
    title: "Agricola",
    url: "https://www.example.com/page5"
  },
  {
    title: "Pinturas",
    url: "https://www.example.com/page5"
  },
  {
    title: "Cubiertas",
    url: "https://www.example.com/page5"
  },

  {
    title: "Sika 1 1kg",
    url: "https://www.example.com/page6"
  }
  // Agrega más datos de ejemplo si es necesario
];

var currentIndex = -1;

function search() {
  var input = document.getElementById("searchInput");
  var searchTerm = input.value.toLowerCase();
  var results = document.getElementById("searchResults");
  results.innerHTML = "";

  if (searchTerm.trim() === "") {
    return;
  }

  var count = 0;

  datos.forEach(function(dato, index) {
    if (count >= 8) {
      return;
    }

    if (dato.title.toLowerCase().includes(searchTerm)) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.textContent = dato.title;
      a.href = dato.url;
      li.appendChild(a);
      li.addEventListener("mouseover", function() {
        setCurrentIndex(index);
      });
      results.appendChild(li);

      count++;
    }
  });

  if (currentIndex >= 0 && currentIndex < results.children.length) {
    results.children[currentIndex].classList.add("selected");
  }

  var extraResults = results.children.length - 8;
  if (extraResults > 0) {
    for (var i = results.children.length - 1; i >= 8; i--) {
      results.removeChild(results.children[i]);
    }
  }
}

function setCurrentIndex(index) {
  var results = document.getElementById("searchResults");
  if (currentIndex >= 0 && currentIndex < results.children.length) {
    results.children[currentIndex].classList.remove("selected");
  }
  currentIndex = index;
  if (currentIndex >= 0 && currentIndex < results.children.length) {
    results.children[currentIndex].classList.add("selected");
  }
}

function performSearch() {
  var input = document.getElementById("searchInput");
  var searchTerm = input.value.toLowerCase();

  // Redirigir a la primera página coincidente
  for (var i = 0; i < datos.length; i++) {
    if (datos[i].title.toLowerCase().includes(searchTerm)) {
      window.location.href = datos[i].url;
      return;
    }
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (currentIndex === -1) {
      performSearch();
    } else {
      var results = document.getElementById("searchResults");
      var selectedResult = results.children[currentIndex];
      var selectedLink = selectedResult.firstChild;
      window.location.href = selectedLink.href;
    }
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    setCurrentIndex(currentIndex - 1);
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    setCurrentIndex(currentIndex + 1);
  }
}
/* PRODUCTOS***/
function filterItems(option) {
    var items = document.getElementsByClassName("item");

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (option === "todos") {
        item.classList.remove("hide");
      } else if (item.classList.contains(option)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    }
  }
/****FIN DE PRODUCTOS */

