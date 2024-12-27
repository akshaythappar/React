import React, { useState } from "react";
import {Counter} from  "./components/hooks/useState"
import { Challenge } from "./components/hooks/useState/Challenge";
import CounterChallenge from "./components/hooks/useState/ChallengeByThapa";
import { RegistrationFromReact } from "./components/hooks/useState/ReactRegistration";


export const App = () => {

  return (
     <>      
    
    <RegistrationFromReact/>
    </>
  );
};
