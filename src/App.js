import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import ArticlePage from "./containers/ArticlePage";
import ArticleListing from "./containers/ArticleListing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/ArticlePage/:id">
          <ArticlePage />
        </Route>
        <Route path = "/">
          <ArticleListing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
