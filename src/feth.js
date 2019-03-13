const arrayGame = ['tt0451279', 'tt0119116', 'tt0117008', 'tt1454029', 'tt0120804',  'tt0120762', 'tt1392190', 'tt0114558', 'tt0780521', 'tt1217209', 'tt0078748', 'tt0089276', 'tt0266697',  'tt1536537', 'tt3077214', 'tt5083738', 'tt0085267', 'tt4925292', 'tt3716530', 'tt0457430', 'tt2873282', 'tt0120679', 'tt1620680'];
const peliculas =[];
const containerRoot = document.getElementById('img');

function card(data) {
  return (`<div class="flip-card">
        <div class="flip-card-front containingImg caja-pokemon">
          <h2>${data.Title}</h2>
          <img class="activator" src="${data.Poster}"/>
          <h1> ${data.Year}</h1>

        </div>`);

};

function showPeliculas (data){
   let result = "";
   //containerRoot.innerHTML = '';

     result = containerRoot.innerHTML += card(data);
       console.log(result);
   return result;

}



for (let i=0; i<arrayGame.length; i++){
 fetch ('http://www.omdbapi.com/?i='+arrayGame[i]+'&apikey=19e49d').then((data) =>{
   return data.json();
 }).then ((dataAsJson) => {
  //peliculas[i]= dataAsJson;
  showPeliculas(dataAsJson);


 });
 }
 //console.log(peliculas);
