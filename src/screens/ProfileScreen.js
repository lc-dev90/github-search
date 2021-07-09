import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

//Components
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import ProjectList from "../components/ProjectList";

const ProfileScreen = ({ match }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${match.params.id}`
      );
      setProfile(data);
    };
    fetchData();
  }, [match]);

  return (
    <>
      <Header />
      <Main>
        <ProfileCard />
        <ProjectList />
      </Main>
    </>
  );
};

export default ProfileScreen;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;
