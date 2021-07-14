import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

//actions
import { getProjectDetails } from "../redux/actions/projectActions";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProfileMiniCard from "../components/ProfileMiniCard";

const ProjectDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state) => state.projectDetails);
  const { project, loading } = projectDetails;

  /* `https://api.github.com/repos/${user}/${project}/languages` */
  /* `https://api.github.com/repos/${user}/${project}/contributors` */

  useEffect(() => {
    /*    setUser(match.params.user);
    setProject(match.params.project); */
    dispatch(getProjectDetails(match.params.user, match.params.project));
    console.log(project);
  }, []);

  return (
    <>
      <Header />
      <Main>
        {loading ? (
          <div className="loader">
            <CircularProgress size={100} />
          </div>
        ) : (
          <div>
            <ProfileMiniCard
              user={project.owner.login}
              avatar={project.owner.avatar_url}
              url={project.owner.html_url}
            />
            <h3>Project name: {project.name}</h3>
            <hr />
            <span>Creation date: {project.created_at}</span>
            <span>Last Update: {project.updated_at}</span>
            <span>Url: {project.url}</span>
            <span>Description: {project.description}</span>
            <span>Git Url: {project.git_url}</span>
            <span>SSH Url: {project.ssh_url}</span>
            <span>Homepage: {project.homepage}</span>
            <span>Size: {project.size} kb</span>
            <span>Language: {project.language}</span>
            <span>Stars: {project.stargazers_count}</span>
            <span>Watchers: {project.watchers_count}</span>
            <span>License: {project.license.name}</span>
            <span>Forks: {project.forks}</span>
            <span>Network: {project.network_count}</span>
            <span>Subscribers: {project.subscribers_count} </span>
          </div>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default ProjectDetailsScreen;

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  color: #b2b2b2;
  min-height: calc(100vh - 246px);
  div {
    span {
      display: block;
    }
  }
  .loader {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 35vh;
  }
`;
