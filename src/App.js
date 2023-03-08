import React from "react";
import Grid from "./components/Grid";
import "./App.css";

export const ROWS = 5;
export const COLS = 5;

function App() {
  return (
    <main>
      <Grid rows={ROWS} cols={COLS} />
    </main>
  );
}

export default App;
