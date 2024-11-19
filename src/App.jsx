
function App() {
  const movies = ["primero", "segundo", "tercero", "cuarto", "quinto"]

  const HTMLmovies = movies.map((movie, index) => {
    return <p key={index}>{movie}</p>
  });

  return (
    <div>
      <h1>Renderizando la lista</h1>
      {HTMLmovies}
    </div>
  )
}

export default App
