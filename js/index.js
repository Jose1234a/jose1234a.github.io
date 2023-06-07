const database = [
  { title: 'Resultado 1', url: 'https://www.example.com/result1' },
  { title: 'Resultado 2', url: '' },
  { title: 'Resultado 3', url: 'https://www.example.com/result3' }
]; // Ejemplo de base de datos con título y URL

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const errorMessage = document.getElementById('errorMessage');
let allResults = [];
let selectedResultIndex = -1;

searchInput.addEventListener('click', () => {
  if (allResults.length === 0) {
      allResults = database;
  }
  displayResults(allResults);
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredResults = allResults.filter(item => item.title.toLowerCase().includes(query));
  displayResults(filteredResults);
});

searchInput.addEventListener('blur', () => {
  // Delay closing the results to allow clicking on a result
  setTimeout(() => {
      searchResults.style.display = 'none';
  }, 200);
});

searchResults.addEventListener('click', (event) => {
  const selectedResult = event.target.getAttribute('data-url');
  if (selectedResult) {
      window.location.href = selectedResult;
  }
  searchInput.value = event.target.textContent;
  errorMessage.textContent = '';
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      const firstResult = searchResults.querySelector('li');
      if (firstResult) {
          const selectedResult = firstResult.getAttribute('data-url');
          if (selectedResult) {
              window.open(selectedResult, '_blank');
          }
          searchInput.value = firstResult.textContent;
          errorMessage.textContent = '';
      }
      searchResults.style.display = 'none';
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      const results = searchResults.getElementsByTagName('li');
      const numResults = results.length;
      if (numResults > 0) {
          if (event.key === 'ArrowUp') {
              selectedResultIndex = (selectedResultIndex - 1 + numResults) % numResults;
          } else {
              selectedResultIndex = (selectedResultIndex + 1) % numResults;
          }
          Array.from(results).forEach((result, index) => {
              if (index === selectedResultIndex) {
                  result.classList.add('selected');
              } else {
                  result.classList.remove('selected');
              }
          });
      }
  }
});

document.addEventListener('click', (event) => {
  if (!searchInput.contains(event.target)) {
      searchResults.style.display = 'none';
  }
});

function displayResults(results) {
  searchResults.innerHTML = '';
  if (results.length > 0) {
      results.forEach(result => {
          const li = document.createElement('li');
          li.textContent = result.title;
          li.setAttribute('data-url', result.url);
          searchResults.appendChild(li);
      });
      searchResults.style.display = 'block';
      errorMessage.textContent = '';
  } else {
      searchResults.style.display = 'none';
      errorMessage.textContent = 'No se encontraron resultados.';
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