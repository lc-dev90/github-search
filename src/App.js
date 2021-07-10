import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/search/:id" component={ProfileScreen} />
      </Router>
    </>
  );
};

export default App;
