import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";

const App = () => {
  window.addEventListener("resize", () => console.log(window.innerWidth));
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/user/:user" exact component={ProfileScreen} />
        <Route path="/search" component={SearchResultsScreen} />
        <Route path="/user/:user/:project/" component={ProjectDetailsScreen} />
      </Switch>
    </Router>
  );
};

export default App;
