import React, { useState } from "react";
import { createContext, useContext } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState({
    value: "light",
    mode: { color: "black" ,background:"white"},
  });


  
  const toggleTheme = () => {
    if (theme.value === "light") {
      setTheme({
        value:"black",
        mode:{
            color:"white", background:"black"
        }
      });
    } else {
        setTheme({value:"light", mode:{
            color:"black" , background:"white"
        }});
    }
  };



  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
