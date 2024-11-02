
import React, { Fragment } from "react";

export const App = () => {

  return <>
   <NetflixSeries />
   <NetflixSeries />
   <NetflixSeries />
   <NetflixSeries />
   <NetflixSeries />
  </>

};

const NetflixSeries = () => {
  const age=16;
  const name = "Queen of Starts";
  const rating = 8.2;
  const summary = "Summary: Lorem ipsum, dolor sit amet consectetur adipisicing elit Ratione, nihil nemo eaque voluptatibus reprehenderit accusantium omnis! Nisi eveniet similique qui ex, minima ipsum excepturi asperiores commodisunt enim ullam quam quidem expedita assumenda porro optio temporalaudantium aliquam eos velit illo maxime! Atque debitis commodi suscipit.";
  const returnGenre = () =>{
    const genre = "RomCom";
    return genre;
  }


  return (
    <div>
      <div>
        <img src="Slide1.png" alt="img not found" width="30%" height="30%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <h3>Rating: {5+3.2}</h3>
      <h3>Rating: {summary}</h3>
      <h3>Genre: {returnGenre()}</h3>
      <button>{age>18?"watch now":"not available"}</button>
      <p>
      
      </p>
    </div>
  );
};
