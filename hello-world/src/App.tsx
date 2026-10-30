import { useState } from "react";

import type { Movie as MovieTypes, Book as BookTypes, Album as AlbumTypes } from "./interfaces";
import { Movie } from "./components/Movie";
import { Book } from "./components/Book";
import { Album } from "./components/Album";
import { CollapsibleSection } from "./components/CollapsibleSection";

import data from "./data/data.json";

const movies: MovieTypes[] = data.movies;
const books: BookTypes[] = data.books;
const albums: AlbumTypes[] = data.albums;


function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");
  const [albumSearch, setAlbumSearch] = useState("");



  const sortedMovies = [...movies].sort((a, b) => a.tytul.localeCompare(b.tytul, 'pl'));
  const sortedBooks = [...books].sort((a, b) => a.tytul.localeCompare(b.tytul, 'pl'));
  const sortedAlbums = [...albums].sort((a, b) => a.tytul.localeCompare(b.tytul, 'pl'));

  const moviesAfter2010 = sortedMovies.filter((movie) => movie.rok > 2010);
  const booksByYear = [...books].sort((a, b) => b.rok - a.rok);

  let max = sortedAlbums[0].songs?.length || 0;
  for (const album of sortedAlbums) {
    if ((album.songs?.length || 0) > max) {
      max = album.songs?.length || 0;
    }
  }

  const albumWithTheMostSongs = sortedAlbums.filter((album) => (album.songs?.length || 0) == max);


  const filteredMovies = sortedMovies.filter((movie) =>
    movie.tytul.toLowerCase().includes(movieSearch.toLowerCase())
  );
  const filteredBooks = sortedBooks.filter((book) =>
    book.tytul.toLowerCase().includes(bookSearch.toLowerCase())
  );
  const filteredAlbums = sortedAlbums.filter((album) =>
    album.tytul.toLowerCase().includes(albumSearch.toLowerCase())
  );

  return (
    <div className="container my-4">
      <CollapsibleSection title="Filmy">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Wpisz tytuł"
          id="movie-search"
          value={movieSearch}
          onChange={(event) => {
            const value = event.target.value;
            console.log(value);
            setMovieSearch(value);
          }}
        />
        <p className="text-muted">Szukasz filmu: {movieSearch}</p>

        {filteredMovies.length === 0 ? (
          <div className="alert alert-warning text-center">
            Nie znaleziono filmów
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
            {filteredMovies.map((movie) => (
              <div className="col" key={movie.tytul}>
                <Movie 
                  plakat={movie.plakat} 
                  tytul={movie.tytul} 
                  rok={movie.rok}
                  rating={movie.rating}
                />
              </div>
            ))}
          </div>
        )}
      </CollapsibleSection>

      <CollapsibleSection title="Książki">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Wpisz tytuł"
          id="book-search"
          value={bookSearch}
          onChange={(event) => {
            const value = event.target.value;
            console.log(value);
            setBookSearch(value);
          }}
        />
        <p className="text-muted">Szukasz książki: {bookSearch}</p>

        {filteredBooks.length === 0 ? (
          <div className="alert alert-warning text-center">
            Nie znaleziono książek
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
            {filteredBooks.map((book) => (
              <div className="col" key={book.tytul}>
                <Book
                  plakat={book.plakat} 
                  tytul={book.tytul}
                  rok={book.rok} 
                  strony={book.strony}
                />
              </div>
            ))}
          </div>
        )}
      </CollapsibleSection>

      <CollapsibleSection title="Albumy">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Wpisz tytuł"
          id="album-search"
          value={albumSearch}
          onChange={(event) => {
            const value = event.target.value;
            console.log(value);
            setAlbumSearch(value);
          }}
        />
        <p className="text-muted">Szukasz albumu: {albumSearch}</p>

        {filteredAlbums.length === 0 ? (
          <div className="alert alert-warning text-center">
            Nie znaleziono albumów
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
            {filteredAlbums.map((album) => (
              <div className="col" key={album.tytul}>
                <Album 
                  plakat={album.plakat}
                  tytul={album.tytul}
                  rok={album.rok}
                  autor={album.autor}
                  songs={album.songs}
                />
              </div>
            ))}
          </div>
        )}
      </CollapsibleSection>

      <CollapsibleSection title="Filmy wydane po 2010 roku">
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
          {moviesAfter2010.map((movie) => (
            <div className="col" key={movie.tytul}>
              <Movie 
                plakat={movie.plakat} 
                tytul={movie.tytul} 
                rok={movie.rok}
                rating={movie.rating}
              />
            </div>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Książki posortowane według roku wydania">
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
          {booksByYear.map((book) => (
            <div className="col" key={book.tytul}>
              <Book
                plakat={book.plakat} 
                tytul={book.tytul}
                rok={book.rok} 
                strony={book.strony}
              />
            </div>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Album z największą liczbą utworów">
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
          {albumWithTheMostSongs.map((album) => (
            <div className="col" key={album.tytul}>
              <Album 
                plakat={album.plakat}
                tytul={album.tytul}
                rok={album.rok}
                autor={album.autor}
                songs={album.songs}
              />
            </div>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );
}

export default App;
