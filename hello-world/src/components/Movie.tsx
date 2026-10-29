import type { Movie as MovieTypes} from "../interfaces";

export function Movie({ plakat, tytul, rok, rating }: MovieTypes) {
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