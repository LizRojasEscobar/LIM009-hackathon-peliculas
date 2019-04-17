const filterOutputMovies = document.getElementById('output');
const imputTitle = document.getElementById('title');
const imputTitle2 = document.getElementById('title2');
const search = document.getElementById('search');
const search2 = document.getElementById('search2');

const filterByTitle = (title) => {
  fetch(`https://www.omdbapi.com/?s=${title}&apikey=ea8492c7 `) 
    .then(resp => 
      resp.json())
    .then((data) => {
      let string = ' ';
      data.Search.forEach(post => {
        string += ` <br>
          <div class="row">
            <div class="col-sm-12">
            <div class = "card" >
            <img class="card-img-top" src="${post.Poster}" alt="image of ${post.Title}">
            <h5 class="card-title">${post.Title}</h5>
            <p class="card-text">Type : ${post.Type}</p>   
            <p class="card-text">Year : ${post.Year}</p>   
          </div>
          </div>
          </div>
          
        `;
      });
      return filterOutputMovies.innerHTML = string;
    });
};
search.addEventListener('click', () => {  
  filterByTitle(imputTitle.value);
  
});

const allData = (title) => {
  fetch(`https://www.omdbapi.com/?t=${title}&apikey=ea8492c7 `) 
    .then(resp => 
      resp.json())
    .then((data) => {
      let string = ' ';      
      string += `
      <div class="col-sm-4">
          <div class = "card"  >
            <h3 class="card-title">${data.Title}</h3>
            <img class="card-img-top" src="${data.Poster}" alt="imagen de ${data.Title}">
            <p>Type : ${data.Type}</p>   
            <p>Director : ${data.Director}</p>  
            <p>Gender : ${data.Genre}</p> 
            <Actors : ${data.Actors}</p>
            <p>Synopsis : ${data.Plot}</p> 
            <p>Runtime : ${data.Runtime}</p> 

        </div>
          </div>
        `;
     
      return filterOutputMovies.innerHTML = string;
    });
};
search2.addEventListener('click', () => {  
  allData(imputTitle2.value);
});
