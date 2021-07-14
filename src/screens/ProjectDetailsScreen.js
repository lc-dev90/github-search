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
            <div className="details">
              <div className="details__main">
                <h2>project Details</h2>
                <h3>{project.name}</h3>
                <span>
                  {project.description ? project.description : "None"}
                </span>
              </div>
              <div className="details__links">
                <span>
                  Link: <span>{project.html_url}</span>
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
              </div>
              <div className="details__other-info">
                <span>
                  Created: <span>{formatDate(project.created_at)}</span>
                </span>
                <span>
                  Updated: <span>{formatDate(project.updated_at)}</span>
                </span>
                <span>
                  Size: <span>{project.size} kb</span>
                </span>
                <span>
                  Language: <span>{project.language}</span>
                </span>
              </div>
              <div className="details__project_info">
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
                  Subscribers: <span>{project.subscribers_count} </span>
                </span>

                <span>
                  {project.license ? `License: ${project.license.name}` : ""}
                </span>
              </div>
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
  max-width: 1024px;
  margin: 0 auto;
  color: #b2b2b2;
  min-height: calc(100vh - 246px);

  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: space-evenly;

    .details {
      display: flex;
      flex: 1;
      flex-direction: column;
      background: #201f1f;
      padding: 30px;
      border-radius: 10px;

      .details__main {
        h2 {
          font-size: 0.9rem;
          text-transform: uppercase;
          color: #8752cc;
          margin-bottom: 1rem;
        }
        h3 {
          margin-bottom: 0.7rem;
        }
        span {
          text-transform: none;
          font-size: 0.9rem;
          color: #b2b2b2;
          margin-bottom: 20px;
        }
      }
      .details__links {
        margin-bottom: 15px;
        span {
          display: block;
          margin-bottom: 10px;
          span {
            display: block;
          }
        }
      }
      .details__other-info {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        span {
          display: block;
          margin-bottom: 10px;
          span {
          }
        }
      }
      .details__project_info {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: left;
        flex-wrap: wrap;
        span {
          display: inline-block;

          span {
          }
        }
      }

      span {
        font-size: 0.7rem;
        display: block;
        text-transform: uppercase;
        color: white;

        span {
          font-size: 0.9rem;
          text-transform: none;
          color: #b2b2b2;
        }
      }
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
