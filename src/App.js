import "./App.css";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import { Router, Switch } from "react-router";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
