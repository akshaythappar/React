import React, { useState } from "react";
import {Counter} from  "./components/hooks/useState"
import { Challenge } from "./components/hooks/useEffect/EffectChallenge";
import CounterChallenge from "./components/hooks/useState/ChallengeByThapa";

import { RegistrationFrom } from "./components/hooks/useState/Registration";
import { LoginForm } from "./components/hooks/useState/LoginForm";
import { ContactForm } from "./components/hooks/useState/ContactForm";
import { ReactuseEffect } from "./components/hooks/useEffect";



export const App = () => {

  return (
     <>      
    

    <Challenge/>

    </>
  );
};
