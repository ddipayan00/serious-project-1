import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";

function ButtonUsage() {
  return <Button variant="contained">Learn React</Button>;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome Coder! You have successfully created a new application
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonUsage />
        </a>
      </header>
    </div>
  );
}

export default App;
