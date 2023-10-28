import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Switch } from "@mui/material";
import PizzaSlice from "../assets/PizzaSlice.jpeg"; 

const Switcher = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(useTheme())

//   console.log(theme);

  return (
    <div className='h-3' style={theme.mode}>
      <h2 className="m-4 text-center">
        Little Lemon <img src={require('../assets/PizzaSlice.jpeg')} style={{ width: 30 }} />
      </h2>
      <Switch className="float-end" defaultChecked onChange={toggleTheme} />
      <h3 className="ms-5">When it comes to dough</h3>
      <p className="ms-5 p-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default Switcher;
