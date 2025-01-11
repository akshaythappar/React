import React, { useState } from "react";
import {Counter} from  "./components/hooks/useState"
import { Challenge } from "./components/hooks/useEffect/EffectChallenge";
import CounterChallenge from "./components/hooks/useState/ChallengeByThapa";

import { RegistrationFrom } from "./components/hooks/useState/Registration";
import { LoginForm } from "./components/hooks/useState/LoginForm";
import { ContactForm } from "./components/hooks/useState/ContactForm";
import { ReactuseEffect } from "./components/hooks/useEffect";
import { HowNotToFetchApi } from "./components/hooks/useEffect/HowNotToFetchApi";
import { MainComponent } from "./components/Projects/Pokemon/main";
import { UseRef } from "./components/hooks/useRefs";
import { ForwardRefs } from "./components/hooks/useRefs/forwardRef";
import { UseID } from "./components/hooks/useId";
import { ParnetComponent } from "./components/PropDrilling";
import { BioProvider } from "./components/hooks/ContextAPI";
import { Home } from "./components/hooks/ContextAPI/Home";
import { About } from "./components/hooks/ContextAPI/About";



export const App = () => {

  return (
     <>      
  
 <BioProvider>

    <Home/>
    <About/>

 </BioProvider>

    

    </>
  );
};
