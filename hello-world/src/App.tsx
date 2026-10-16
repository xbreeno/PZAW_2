interface Song {
  songTitle: string;
  duration: string;
}

interface Film {
  plakat: string;
  tytul: string;
  rok: number;
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

function Film({ plakat, tytul, rok }: Film) {
  return (
    <div>
      <img src={plakat} alt={tytul} />
      <p>{tytul}</p>
      <p>{rok}</p>
    </div>
  );
}

function Ksiazka({ plakat, tytul, rok, strony }: Ksiazka) {
  return (
    <div>
      <img src={plakat} alt={tytul} />
      <p>{tytul}</p>
      <p>{rok}</p>
      <p>Strony: {strony}</p>
    </div>
  );
}

function Muzyka({ plakat, tytul, rok, autor, songs }: Muzyka) {
  return (
    <div>
      <img src={plakat} alt={tytul} />
      <p>{tytul}</p>
      <p>{rok}</p>
      <p>{autor}</p>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>#</th>
            <th>Song Title</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {songs?.map((song, index) => (
            <tr>
              <td>{index}</td>
              <td>{song.songTitle}</td>
              <td>{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Filmy</h2>
      <section style={{ display: "flex", gap: "20px" }}>
        <Film 
          plakat="https://fwcdn.pl/fpo/14/16/1416/7519120_1.8.webp" 
          tytul="Straszny film" 
          rok={2026} 
        />
        <Film 
          plakat="https://media.upflix.pl/renditions/4845/v0/poster_detail@1.webp" 
          tytul="Matrix" 
          rok={1999} 
        />
        <Film 
          plakat="https://cdng.europosters.eu/pod_public/1300/263129.jpg" 
          tytul="Incepcja" 
          rok={2010} 
        />
      </section>

      <h2>Książki</h2>
      <section style={{ display: "flex", gap: "20px" }}>
        <Ksiazka 
          plakat="https://www.bellona.pl/wp-content/uploads/lalka.jpg" 
          tytul="Lalka" 
          rok={1890} 
          strony={520}
        />
        <Ksiazka 
          plakat="https://ecsmedia.pl/c/ostatnie-zyczenie-wiedzmin-tom-1-ebook-epub-b-iext219952429.jpg" 
          tytul="Wiedźmin: Ostatnie życzenie" 
          rok={1993} 
          strony={332}
        />
        <Ksiazka 
          plakat="https://ecsmedia.pl/c/w-pustyni-i-w-puszczy-b-iext151573987.jpg" 
          tytul="W pustyni i w puszczy" 
          rok={1911} 
          strony={320}
        />
      </section>

      <h2>Muzyka</h2>
      <section style={{ display: "flex", gap: "20px" }}>
        <Muzyka 
          plakat="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F30395b8b24fac05515fc57c9f5d40b6a.1000x1000x1.png"
          tytul="Fortuna Flips Deluxe"
          rok={2024}
          autor="Młody West"
          songs={[
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
          ]}
        />
      </section>
    </div>
  );
}

export default App;
