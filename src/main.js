//const peliculas =



function showPeliculas (peliculas){
   let result = "";
   containerRoot.innerHTML = '';

   filtered.forEach(element => {
     result = containerRoot.innerHTML += card(element);
   });

   return result;
};
