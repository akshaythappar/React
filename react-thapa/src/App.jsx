import React from "react";
import { Sibling, State } from "./components/State";
import { DerivedState } from "./components/DerivedState";





export const App = () => {
  return (
    <>
      <section className="contianer">
       {/* <State/>
       <Sibling/> */}
       <DerivedState/>
      </section>
    </>
  );
};
