import React from "react";
import "./App.css";
import SparkleNavbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <SparkleNavbar
  items={["Home", "About", "Services", "Contact", "Sign in", "Sign Out"]}
  color="#FF5733"
/>

    </div>
  );
}

export default App;
