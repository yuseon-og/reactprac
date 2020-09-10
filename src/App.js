import React from "react";
import Movie from "./Movie";
import "./App.css";

const moviesTitles = ["matrix", "iron man", "Hulk"];

const movieImages = [
  "https://post-phinf.pstatic.net/MjAxOTA4MjFfMjg0/MDAxNTY2MzQ4ODYxNjM2.dhCDfrjD4gmQAMpqTU2OoPI8Bpbpz--hlO6cWaJXJs0g.Spmg8TZy1V5fFRNhcrRwV5Y6TXvM7JcEJlcRBjAjHAEg.JPEG/81.jpg?type=w1200",
  "https://i.ytimg.com/vi/sL1yJZFBXdY/maxresdefault.jpg",
  "https://post-phinf.pstatic.net/MjAxODA3MjdfMjAx/MDAxNTMyNjYwMzM0NzU4.hoB63-LGxdAXf-EdDf2Lpg1480mbPxUej-ycGj91gEwg.OZo9Je9ygtStegsDnnT8frqUK2KcoOlZiqCuRdls0Vog.JPEG/%ED%97%90%ED%81%AC.jpg?type=w1200",
];

function App() {
  return (
    <div className="App">
      <Movie title={moviesTitles[0]} poster={movieImages[0]} />
      <Movie title={moviesTitles[1]} poster={movieImages[1]} />
      <Movie title={moviesTitles[2]} poster={movieImages[2]} />
    </div>
  );
}

export default App;
