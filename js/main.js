const container = document.querySelector("#content");
const links = document.querySelectorAll("nav a");

let url = "./partials/home.html";

// LOAD CONTENT
const loadContent = (urlFeed) => {
  fetch(urlFeed)
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;
    })
    .catch(error => console.log(error));
};

// SELECT CONTENT
const selectContent = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  loadContent(href);
};

// EVENT LISTENERS
links.forEach(link => {
  link.addEventListener("click", selectContent);
});

// LOAD DEFAULT PAGE
loadContent(url);
