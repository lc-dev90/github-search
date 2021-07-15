import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

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
  const { loading, error } = profileDetails;

  useEffect(() => {
    dispatch(getProfileDetails(match.params.user));
  }, []);

  return (
    <>
      <Header />
      <Main>
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
            <Fade left>
              <ProfileCard />
            </Fade>
            <Fade right>
              <ProjectList />
            </Fade>
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
  color: #b2b2b2;
  min-height: calc(100vh - 246px);
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
