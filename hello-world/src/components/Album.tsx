import type { Album as AlbumTypes } from "../interfaces";

export function Album({ plakat, tytul, rok, autor, songs }: AlbumTypes) {

  
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