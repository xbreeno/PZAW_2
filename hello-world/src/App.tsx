import { useState } from "react";

interface Song {
  songTitle: string;
  duration: string;
}

interface Movie {
  plakat: string;
  tytul: string;
  rok: number;
  rating:number;
}

interface Book {
  plakat: string;
  tytul: string;
  rok: number;
  strony: number;
}

interface Album {
  plakat: string;
  tytul: string;
  rok: number;
  autor: string;
  songs?: Song[];
}

interface CollapsibleSection{
  title: string;
  children: React.ReactNode
}

function Movie({ plakat, tytul, rok, rating }: Movie) {
  return (
    <div className="card h-100" style={{ width: "14rem" }} onClick={() => console.log(`Wybrano film: ${tytul}`)}>
      <img src={plakat} className="card-img-top mt-4" alt={tytul} style={{ height: "250px", objectFit: "contain"}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fs-6">{tytul}</h5>
        <p className="card-text mb-2">Ocena: {rating}</p>
        <p className="card-text mb-1 text-muted">{rok}</p>
        <button className="btn btn-primary mt-auto mb-2" onClick={(event) => {
          event.stopPropagation();
          console.log(`Pokaż szczegóły dla ${tytul}`);
        }}>
          Pokaż szczegóły
        </button>
        {rating >= 8 && <span className="badge bg-success mt-auto">Polecany</span>}
      </div>
    </div>
  );
}

function Book({ plakat, tytul, rok, strony }: Book) {
  return (
    <div className="card h-100" style={{ width: "14rem" }}>
      <img src={plakat} className="card-img-top mt-4" alt={tytul} style={{ height: "250px", objectFit: "contain"}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fs-6">{tytul}</h5>
        <p className="card-text mb-1 text-muted">{rok}</p>
        <p className="card-text mb-2">Strony: {strony}</p>
        {rok < 2000 && <span className="badge bg-secondary mt-auto">Klasyka</span>}
      </div>
    </div>
  );
}

function Album({ plakat, tytul, rok, autor, songs }: Album) {

  
  // Różnica polega na tym ,że zwykła funkcja ma swoje własne 'this', 
  // a strzałkowa nie ma i bierze je z otoczenia. 
  // Dodatkowo zwykłą funkcję można wywołać zanim się ją w ogóle napisało w kodzie (hoisting), 
  // a strzałkowa tak nie potrafi i wyrzuca błąd.
  
  function handleSongClick(songTitle: string) {
    console.log(`Wybrano utwór: ${songTitle} z ${tytul}`)
  }

  return (
    <div className="card h-100">
      <img src={plakat} className="card-img-top mt-4" alt={tytul} style={{ height: "250px", objectFit: "contain"}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fs-6">{tytul}</h5>
        <p className="card-text mb-1 text-muted">{rok}</p>
        <p className="card-text mb-2">{autor}</p>

        {!songs || songs.length === 0 ? (
          <div className="alert alert-warning p-2 text-center" role="alert">
            Brak utworów
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th className="text-end">Duration</th>
                </tr>
              </thead>
              <tbody>
                {songs.map((song, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td onClick={() => handleSongClick(song.songTitle)} style={{cursor: "pointer"}}>{song.songTitle}</td>
                    <td className="text-end">{song.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function CollapsibleSection({ title, children }: CollapsibleSection) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4 w-100">
      <h2 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: "pointer" }}
        className="fs-4 mb-3"
      >
        {isOpen ? "▾ " : "▸ "} {title}
      </h2>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");
  const [albumSearch, setAlbumSearch] = useState("");

  const movies: Movie[] = [
    {
      plakat: "https://fwcdn.pl/fpo/14/16/1416/7519120_1.8.webp",
      tytul: "Straszny film",
      rok: 2026,
      rating: 5
    },
    {
      plakat: "https://media.upflix.pl/renditions/4845/v0/poster_detail@1.webp",
      tytul: "Matrix",
      rok: 1999,
      rating: 9
    },
    {
      plakat: "https://cdng.europosters.eu/pod_public/1300/263129.jpg",
      tytul: "Incepcja",
      rok: 2012,
      rating: 8
    },
    {
      plakat: "https://fwcdn.pl/fpo/01/87/187/7885890_1.3.jpg",
      tytul: "Titanic",
      rok: 1997,
      rating: 2
    },
    {
      plakat: "https://fwcdn.pl/fpo/09/36/936/8143567.3.jpg",
      tytul: "Gladiator",
      rok: 2000,
      rating: 8
    },
    {
      plakat: "https://fwcdn.pl/fpo/56/29/375629/7670122_2.8.webp",
      tytul: "Interstellar",
      rok: 2014,
      rating: 9
    }
  ];

  const books: Book[] = [
    {
      plakat: "https://www.bellona.pl/wp-content/uploads/lalka.jpg", 
      tytul: "Lalka", 
      rok: 1890, 
      strony: 520
    },
    {
      plakat: "https://ecsmedia.pl/c/ostatnie-zyczenie-wiedzmin-tom-1-ebook-epub-b-iext219952429.jpg", 
      tytul: "Wiedźmin: Ostatnie życzenie", 
      rok: 1993, 
      strony: 332
    },
    {
      plakat: "https://ecsmedia.pl/c/w-pustyni-i-w-puszczy-b-iext151573987.jpg", 
      tytul: "W pustyni i w puszczy", 
      rok: 1911, 
      strony: 320
    },
    {
      plakat: "https://ecsmedia.pl/cir/b/bieguni-ZDJECIE_OKLADKI_PRZOD_DUZY/3909/15717499031183909.webp", 
      tytul: "Bieguni",
      rok: 2007,
      strony: 400
    },
    {
      plakat: "https://ecsmedia.pl/cir/b/sezon-burz-wiedzmin-tom-8-ZDJECIE_OKLADKI_PRZOD_DUZY/1910/14715248858591910.webp",
      tytul: "Sezon burz",
      rok: 2013,
      strony: 350,
    }
  ];

  const albums: Album[] = [
    {
      plakat: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F30395b8b24fac05515fc57c9f5d40b6a.1000x1000x1.png",
      tytul: "FF Deluxe",
      rok: 2026,
      autor: "Młody West",
      songs: [
        { songTitle: "Pierwszy dzień miesiąca", duration: "2:14" },
        { songTitle: "Philipp Plein", duration: "3:38" },
        { songTitle: "Kto", duration: "2:11" },
        { songTitle: "Ostatni Don", duration: "2:03" },
        { songTitle: "FF DLX: Rebirth Interlude", duration: "1:57" },
        { songTitle: "Długa droga", duration: "2:11" },
        { songTitle: "Złe dziecko (KLT Anthem)", duration: "4:18" },
        { songTitle: "Zostań bogaty albo zginąć próbując", duration: "1:57" },
        { songTitle: "Netflix", duration: "1:39" },
        { songTitle: "Pieniądze dragi s*x", duration: "1:51" },
        { songTitle: "Prawda", duration: "1:58" },
        { songTitle: "Bora Bora (Bonus Track)", duration: "2:35" },
        { songTitle: "Bonnie & Clyde (Bonus Track)", duration: "2:06" },
        { songTitle: "FF DLX: REBIRTH LIVE PERFORMANCE (Bonus Track)", duration: "5:39" }
      ]
    },
    {
      plakat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1W6J_2sq9Tyj8e8ksJyXlttmjC0v5_jG7Q167AjWk40HAVBES1Gli8hQ&s=10",
      tytul: "Najdłuższe Wakacje Życia",
      rok: 2025,
      autor: "Monday Waxie",
      songs: [
        { songTitle: "z ostatniej ławki", duration: "1:42" },
        { songTitle: "rap shit", duration: "1:53" },
        { songTitle: "bitch face", duration: "2:05" },
        { songTitle: "ed, edd i eddy", duration: "1:53" },
        { songTitle: "dance, dance, dance", duration: "2:15" },
        { songTitle: "billie", duration: "1:52" }
      ]
    },
    {
      plakat: "https://ecsmedia.pl/cir/m/fryderyk-chopin-geniusz-muzyczny-ZDJECIE_OKLADKI_PRZOD_DUZY/9353/14702666150099353.webp",
      tytul: "Dzieła Wszystkie",
      rok: 1835,
      autor: "Fryderyk Chopin",
      songs: []
    }
  ];

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
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
          {sortedMovies.map((movie) => (
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
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
          {sortedBooks.map((book) => (
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
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
          {sortedAlbums.map((album) => (
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

      {/* POZOSTAŁE SEKCJE */}
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
