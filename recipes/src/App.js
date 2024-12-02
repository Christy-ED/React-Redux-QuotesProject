// import React from "react";
import Recipes from "./components/recipes/Recipes";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div>
      <Register />
      <Login />
      <Recipes />
    </div>
  );
}

export default App;
