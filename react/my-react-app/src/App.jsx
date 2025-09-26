import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      {/* <Rule></Rule> */}
      <Interpolation></Interpolation>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
