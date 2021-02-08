import React from "react";
import Meme from "../Meme/Meme";
import {Switch, Route} from "react-router-dom";
import MemeGenerated from "../MemeGenerated/MemeGenerated";

function App() {
  return (
    <div>
    <h1>The Times of Memes</h1>
      <Switch>
      <Route exact path="/">
        <Meme />
      </Route>
      <Route path="/generated">
        <MemeGenerated />
      </Route>
    </Switch>
    </div>
  );
}

export default App;