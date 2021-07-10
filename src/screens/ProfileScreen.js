import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import ProjectList from "../components/ProjectList";

const ProfileScreen = ({ match }) => {
  const [profile, setProfile] = useState({});
  const [starred, setStarred] = useState({});
  const [repos, setRepos] = useState([]);

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

      const repos = await axios.get(
        `https://api.github.com/users/${match.params.id}/repos`
      );
      setRepos(repos.data);
    };
    fetchData();
  }, [match]);
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
          followers={profile.followers}
          repositories={profile.public_repos}
          starred={starred.length}
        />
        <ProjectList repositories={repos} />
      </Main>
      <Footer />
    </>
  );
};

export default ProfileScreen;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  color: #b2b2b2;
`;
