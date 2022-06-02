import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import Playlistdetail from "./routes/PlaylistDetail";
import "./bootstrap.min.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/playlist/:id">
          <Playlistdetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
