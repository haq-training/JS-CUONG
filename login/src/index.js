import React from "react";
import ReactDOM from "react-dom";
import BasicForm from "./BasicForm";

function App() {
  return (
    <>
      <BasicForm />
      
      <br/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
