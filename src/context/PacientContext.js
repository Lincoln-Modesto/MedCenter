  
import React, { createContext, useContext, useState } from 'react';

import api from '../services/randomUser';

// Context
const PacientContext = createContext({});

//Provider
function PacientProvider({children}){

    const [pacients, setPacients] = useState([]);

    async function loadPacients() {
        try {
            const response = await api.get('/?results=50');
            const res = response.data?.results;
            Array.prototype.unshift.apply(res, pacients);
            setPacients(res);
        } catch (err) {
            console.log(err.message);
        }
    }

  return (
    <PacientContext.Provider
      value={{ loadPacients, pacients }}
    >
      {children}
    </PacientContext.Provider>
  );
} 

//Hook
const usePacientContext = () => {
    const context = useContext(PacientContext);
    return context;
  };
  
  export { usePacientContext, PacientProvider };