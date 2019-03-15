const arrayMoviesSelected = ['tt0451279', 'tt0117008', 'tt1454029', 'tt0120804', 'tt0120762', 'tt1392190', 'tt0114558', 'tt0780521', 'tt1217209', 'tt0078748', 'tt0089276', 'tt0266697', 'tt1536537', 'tt3077214', 'tt5083738', 'tt0085267', 'tt4925292', 'tt3716530', 'tt0457430', 'tt2873282', 'tt1620680'];

const containerRoot = document.getElementById('img');


const card = (data) => {
  return (`<div class=" containingImg card">
         <div class="image">
              <img src="${data.Poster}"/>
         </div>
          <div class="details">
          <div class="center">
              <h1> ${data.Year}</h1>
              <h2> ${data.Title}</h2>
              <h3> ${data.Rated}</h3>
              <h3> ${data.Director}</h3>
              <h3> ${data.Genre}</h3>
              <p> ${data.Plot}</p>
        </div>
        </div>
        </div>`);

};

function showmovies (data) {
  let result = "";
  result = containerRoot.innerHTML += card(data);
  // console.log(result);
  return result;

}




for ( i in arrayMoviesSelected) {
  fetch('http://www.omdbapi.com/?i=' + arrayMoviesSelected[i] + '&apikey=19e49d').then((data) => {
    return data.json();
  }).then((dataAsJson) => {
    //movies[i]= dataAsJson;
    showmovies(dataAsJson);



  });
}



 //console.log(movies);
