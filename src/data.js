window.peliculas = {

      filterGenere: (data,genere) => {

              const filteredType = data.filter(data => {

                     return data.Genre.indexOf(genere) > -1;

        });

                             return filteredType;

      }
}
