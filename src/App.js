import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/profile/:id" component={ProfileScreen} />
      </Router>
    </div>
  );
};

export default App;
