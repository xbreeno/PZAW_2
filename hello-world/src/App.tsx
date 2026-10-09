function Okladka({plakat, tytul, rok}){
  return(
    <div>
      <img src={plakat} alt={tytul}/>
      <p>{tytul}</p>
      <p>{rok}</p>
    </div>
  );
}

function App(){
  return(
    <div>
      <Okladka plakat="straszny_film.jpg" tytul="Straszny film" rok={2026} />
    </div>
  );
}

export default App
  
