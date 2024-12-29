import React, { useState } from "react";
import {Counter} from  "./components/hooks/useState"
import { Challenge } from "./components/hooks/useState/Challenge";
import CounterChallenge from "./components/hooks/useState/ChallengeByThapa";

import { RegistrationFrom } from "./components/hooks/useState/Registration";
import { LoginForm } from "./components/hooks/useState/LoginForm";
import { ContactForm } from "./components/hooks/useState/ContactForm";



export const App = () => {

  return (
     <>      
    

    <ContactForm/>

    </>
  );
};
