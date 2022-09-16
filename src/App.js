import React, { useState } from "react";
import "./styles.css";

const moviebk = {
  romcom: [
    { name: "Yeh jawani hai deewani", rating: "4/5" },
    { name: "Ae dil hai Mushkil", rating: "2/5" }
  ],
  comedyDrama: [
    { name: "3-idiots", rating: "5/5" },
    { name: "Chichore", rating: "5/5" }
  ],
  Scifi: [
    { name: "Interstellar", rating: "4/5" },
    { name: "Inception", rating: "5/5" }
  ]
};
var movie = Object.keys(moviebk);

export default function App() {
  const [selectedGenre, setGenre] = useState("romcom");

  function onClickgenre(selectedGenre) {
    setGenre(selectedGenre);
  }
  return (
    <div className="App">
      <h1>good movies</h1>
      <p> Checkout my favourite movies, Select a genre to get started </p>
      <div>
        {movie.map((genre) => (
          <button
            onClick={() => onClickgenre(genre)}
            style={{
              padding: "10px 16px",
              margin: "auto 10px",
              cursor: "pointer",
              border: "0.2rem solid white",
              color: "white",
              background: "black"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviebk[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                background: "black",
                font: "bold",
                textAlign: "left",
                listStyle: "none",
                border: "1px solid white",
                padding: "1rem",
                width: "100%"
              }}
            >
              <div>{movie.name}</div>
              <div>{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
