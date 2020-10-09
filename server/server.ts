const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/movies', (req , res ) => {

  res.send(
    {"Search":[{"Title":"Spider-Man","Year":"2002","imdbID":"tt0145487","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"},{"Title":"The Amazing Spider-Man","Year":"2012","imdbID":"tt0948470","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"},{"Title":"Spider-Man 2","Year":"2004","imdbID":"tt0316654","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Spider-Man: Homecoming","Year":"2017","imdbID":"tt2250912","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"},{"Title":"Spider-Man 3","Year":"2007","imdbID":"tt0413300","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{"Title":"The Amazing Spider-Man 2","Year":"2014","imdbID":"tt1872181","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg"},{"Title":"Spider-Man: Into the Spider-Verse","Year":"2018","imdbID":"tt4633694","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"},{"Title":"Spider-Man: Far from Home","Year":"2019","imdbID":"tt6320628","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"},{"Title":"Along Came a Spider","Year":"2001","imdbID":"tt0164334","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Spider","Year":"2002","imdbID":"tt0278731","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMmY4OGRmNWMtNmIyNS00YWQ5LWJmMGUtMDI3MWRlMmQ0ZDQzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"}],"totalResults":"492","Response":"True"}
  );
});

/*
app.post('/api/world', (req : Request, res : Response) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});
*/
app.listen(port, () => console.log(`Listening on port ${port}`));