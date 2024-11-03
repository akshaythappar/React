
import React, { Fragment } from "react";
// import NetflixSeries  from "./components/NetflixSeries"; // for default export 
// import {NetflixSeries,Footer}  from "./components/NetflixSeries";  // have to add curly braces for named export 
import NetflixSeries,{Header,Footer} from "./components/NetflixSeries"; // mixed named and default export 

export const App = () => {

  return <>
   <Header/>
   <NetflixSeries />
   <NetflixSeries />
   <NetflixSeries />
   <NetflixSeries />
   <NetflixSeries />
   <Footer/>
  </>

};


