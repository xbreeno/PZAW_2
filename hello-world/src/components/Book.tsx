import type { Book as BookTypes } from "../interfaces";

export function Book({ plakat, tytul, rok, strony }: BookTypes) {
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