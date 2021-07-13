import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/user/:user" component={ProfileScreen} />
      <Route path="/search" component={SearchResultsScreen} />
      <Route path="/user/:user/:project/" component={ProjectDetailsScreen} />
    </Router>
  );
};

export default App;
