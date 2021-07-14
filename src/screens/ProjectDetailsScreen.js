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
import { User } from "@styled-icons/boxicons-regular/User";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";

const formatDate = (dateString) => {
  if (dateString) {
    const data = new Date(Date.parse(dateString));
    return data.toLocaleString("en-GB", { timeZone: "UTC" });
  }
};

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
          <div className="container">
            <ProfileMiniCard
              user={project.owner.login}
              avatar={project.owner.avatar_url}
              url={project.owner.html_url}
            />
            <div>
              <h3>
                Project title: <span>{project.name}</span>
              </h3>

              <span>
                Description:
                <span>
                  {project.description ? project.description : "None"}
                </span>
              </span>
              <span>
                Url: <span>{project.html_url}</span>
              </span>
              <span>
                Creation: <span>{formatDate(project.created_at)}</span>
              </span>
              <span>
                Last Update: <span>{formatDate(project.updated_at)}</span>
              </span>
              <span>
                Git Url: <span>{project.git_url}</span>
              </span>
              <span>
                SSH Url: <span>{project.ssh_url}</span>
              </span>
              <span>
                {project.homepage ? `Homepage: ${project.homepage}` : ""}
              </span>
              <span>
                Size: <span>{project.size} kb</span>
              </span>
              <span>
                Language: <span>{project.language}</span>
              </span>
              <div>
                <span>
                  Stars: <span>{project.stargazers_count}</span>
                </span>
                <span>
                  Watchers: <span>{project.watchers_count}</span>
                </span>
                <span>
                  Forks: <span>{project.forks}</span>
                </span>
                <span>
                  Network: <span>{project.network_count}</span>
                </span>
                <span>
                  Subscribers: <span>{project.subscribers_count} </span>
                </span>
              </div>

              <span>
                {project.license ? `License: ${project.license.name}` : ""}
              </span>
            </div>
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

  .container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    div {
      div {
        display: flex;
      }
    }
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

const UserIcon = styled(User)`
  color: #8752cc;
  width: 22px;
  margin-right: 6px;
`;

const LinkExternalIcon = styled(LinkExternal)`
  color: #8752cc;
`;
