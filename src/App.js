import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

// Components
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";

const App = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  return (
    <Router>
      <Switch>
        <Container darkMode={darkMode}>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/user/:user" exact component={ProfileScreen} />
          <Route path="/search" component={SearchResultsScreen} />
          <Route
            path="/user/:user/:project/"
            component={ProjectDetailsScreen}
          />
        </Container>
      </Switch>
    </Router>
  );
};

const Container = styled.div`
  background: ${(props) => (props.darkMode ? "#d2d1d1" : "#232324")};
`;

export default App;
