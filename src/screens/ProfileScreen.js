import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getProfileDetails } from "../redux/actions/profileActions";

//Components
import ProfileCard from "../components/ProfileCard";
import ProjectList from "../components/ProjectList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProfileScreen = ({ match }) => {
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profileDetails);
  const { darkMode } = useSelector((state) => state.darkMode);
  const { loading, error } = profileDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProfileDetails(match.params.user));
  }, []);

  return (
    <>
      <Header />
      <Main darkMode={darkMode}>
        {error ? (
          <div className="message">
            Something went wrong, please, try again later.
          </div>
        ) : loading ? (
          <div className="loader">
            <CircularProgress size={100} />
          </div>
        ) : (
          <>
            <ProfileCard />

            <ProjectList />
          </>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default ProfileScreen;

const Main = styled.main`
  width: 900px;
  max-width: 95%;
  margin: 0 auto;
  color: ${(props) => (props.darkMode ? "#400794" : "#b2b2b2")};
  min-height: calc(100vh - 246px);
  .pagination {
    ul {
      li {
        button {
          color: ${(props) => (props.darkMode ? "black" : "#b2b2b2")};
        }
      }
    }
  }
  .message {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 130px;
    font-size: 20px;
  }
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 45vh;
  }
`;
