import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </Router>
    </div>
  );
}

export default App;

