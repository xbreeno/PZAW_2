interface Song {
  songTitle: string;
  duration: string;
}

interface Film {
  plakat: string;
  tytul: string;
  rok: number;
  rating:number;
}

interface Ksiazka {
  plakat: string;
  tytul: string;
  rok: number;
  strony: number;
}

interface Muzyka {
  plakat: string;
  tytul: string;
  rok: number;
  autor: string;
  songs?: Song[];
}

function Film({ plakat, tytul, rok, rating}: Film) {
  return (
    <div>
      <img src={plakat} alt={tytul} height="200px" />
      <p>{tytul}</p>
      <p>{rok}</p>
      <p>Ocena: {rating}</p>
      {rating >= 8 && <p><strong>Polecany</strong></p>}
    </div>
  );
}

function Ksiazka({ plakat, tytul, rok, strony }: Ksiazka) {
  return (
    <div>
      <img src={plakat} alt={tytul} height="200px" />
      <p>{tytul}</p>
      <p>{rok}</p>
      <p>Strony: {strony}</p>
      {rok < 2000 && <p><strong>Klasyka</strong></p>}
    </div>
  );
}

function Muzyka({ plakat, tytul, rok, autor, songs }: Muzyka) {
  return (
    <div>
      <img src={plakat} alt={tytul} height="200px" />
      <p>{tytul}</p>
      <p>{rok}</p>
      <p>{autor}</p>
      {!songs || songs.length === 0 ? (
        <p>Brak utworów</p>
      ) : (
        <table border={1} cellPadding="5">
          <thead>
            <tr>
              <th>#</th>
              <th>Song Title</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{song.songTitle}</td>
                <td>{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function App() {
  const movies: Film[] = [
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

const books: Ksiazka[] = [
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

  const albums: Muzyka[] = [
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
    <div>
      <h2>Filmy</h2>
      <section style={{ display: "flex", gap: "20px" }}>
        {sortedMovies.map((movie) => (
          <Film
            plakat={movie.plakat} 
            tytul={movie.tytul} 
            rok={movie.rok}
            rating={movie.rating}
          />
        ))}
      </section>

      <h2>Książki</h2>
      <section style={{ display: "flex", gap: "20px" }}>
        {sortedBooks.map((book) => (
          <Ksiazka
            plakat={book.plakat} 
            tytul={book.tytul}
            rok={book.rok} 
            strony={book.strony}
          />
        ))}
        
      </section>

      <h2>Muzyka</h2>
      <section style={{ display: "flex", gap: "20px" }}>
        {sortedAlbums.map((album) => (
          <Muzyka 
            plakat = {album.plakat}
            tytul = {album.tytul}
            rok = {album.rok}
            autor = {album.autor}
            songs = {album.songs}
          />
        ))}
      </section>

      <h2>Filmy wydane po 2010 roku</h2>
      <section style={{ display: "flex", gap: "20px" }}>
        {moviesAfter2010.map((movie) => (
          <Film
            plakat={movie.plakat} 
            tytul={movie.tytul} 
            rok={movie.rok}
            rating={movie.rating}
          />
        ))}
      </section>

      <h2>Książki posortowane według roku wydania</h2>
      <section style={{ display: "flex", gap: "20px" }}>
        {booksByYear.map((book) => (
          <Ksiazka
            plakat={book.plakat} 
            tytul={book.tytul}
            rok={book.rok} 
            strony={book.strony}
          />
        ))}
      </section>

      <h2>Album z największą liczbą utworów</h2>
      <section style={{ display: "flex", gap: "20px" }}>
        {albumWithTheMostSongs.map((album) => (
          <Muzyka 
            plakat = {album.plakat}
            tytul = {album.tytul}
            rok = {album.rok}
            autor = {album.autor}
            songs = {album.songs}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
