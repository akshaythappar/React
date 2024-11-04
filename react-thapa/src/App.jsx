import React from "react";
import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";

export const App = () => {
  return (
    <>
      <section className="contianer">
        <h1 className="card-heading">List of best netflix series</h1>
        <NetflixSeries />
      </section>
    </>
  );
};
