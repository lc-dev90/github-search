import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getProfileDetails } from "../redux/actions/profileActions";

//Components
import ProfileCard from "../components/ProfileCard";
import ProjectList from "../components/ProjectList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfileScreen = ({ match }) => {
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profileDetails);
  const { profile, starred, repos, loading } = profileDetails;

  useEffect(() => {
    dispatch(getProfileDetails(match.params.user));
  }, []);

  return (
    <>
      <Header />
      {
        <Main>
          <ProfileCard
            avatar={profile.avatar_url}
            name={profile.name}
            user={profile.login}
            twitter={profile.twitter_username}
            location={profile.location}
            company={profile.company}
            following={profile.following}
            followers={profile.followers}
            repositories={profile.public_repos}
            starred={starred.length}
          />
          <ProjectList repositories={repos} />
        </Main>
      }
      <Footer />
    </>
  );
};

export default ProfileScreen;

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  color: #b2b2b2;
  min-height: calc(100vh - 246px);
`;
