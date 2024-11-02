import React, { Fragment } from "react";

export const App = () => {
  // return (
  //   <div>
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //   </div>
  // );
  // Instead of above code we can do this 

  // Method->1 
  // return ([<NetflixSeries key={1}/>,<NetflixSeries key={2}/>])

  //Method->2
  // return (<React.Fragment>
  //    <NetflixSeries />
  //   <NetflixSeries />
  //   <NetflixSeries />
  //   <NetflixSeries />
  //   <NetflixSeries />
  // </React.Fragment>);

  // OR 

  // return (<Fragment>
  //    <NetflixSeries />
  //   <NetflixSeries />
  //   <NetflixSeries />
  //   <NetflixSeries />
  //   <NetflixSeries />
  // </Fragment>) ; // fro this you can deireclty write import {Fragment} from 'react' this is array destructuring;

  //Method->3
  return <>
   <NetflixSeries />
   <NetflixSeries />
   <NetflixSeries />
   <NetflixSeries />
   <NetflixSeries />
  </>




};

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src="Slide1.png" alt="img not found" width="30%" height="30%" />
      </div>
      <h2>Name: Queen of Starts</h2>
      <h3>Rating: 8.3</h3>
      <p>
        Summary: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ratione, nihil nemo eaque voluptatibus reprehenderit accusantium omnis!
        Nisi eveniet similique qui ex, minima ipsum excepturi asperiores commodi
        sunt enim ullam quam quidem expedita assumenda porro optio tempora
        laudantium aliquam eos velit illo maxime! Atque debitis commodi
        suscipit.
      </p>
    </div>
  );
};
