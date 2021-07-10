import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

//Components
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import ProjectList from "../components/ProjectList";

const ProfileScreen = ({ match }) => {
  const [profile, setProfile] = useState({});
  const [starred, setStarred] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${match.params.id}`
      );
      setProfile(data);

      const starred = await axios.get(
        `https://api.github.com/users/${match.params.id}/starred`
      );
      setStarred(starred.data);
    };
    fetchData();
  }, [match]);
  console.log(starred);
  return (
    <>
      <Header />
      <Main>
        <ProfileCard
          avatar={profile.avatar_url}
          name={profile.name}
          user={profile.login}
          twitter={profile.twitter_username}
          location={profile.location}
          company={profile.company}
          following={profile.following}
          followers={profile.follower}
          repositories={profile.public_repos}
          starred={starred.length}
        />
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
