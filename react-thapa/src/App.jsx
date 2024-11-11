import React from "react";
// import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css";
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
import {EventPropgation} from "./components/EventPropagation"



export const App = () => {
  return (
    <>
      <section className="contianer">
        {/* <h1 className="card-heading">List of best netflix series</h1> */}
        {/* <NetflixSeries /> */}
        {/* <EventHandling/> */}
        {/* <EventProps/> */}
        <EventPropgation/>
      </section>
    </>
  );
};
