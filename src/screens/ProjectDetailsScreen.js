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
import { PeopleTeam } from "@styled-icons/fluentui-system-regular";
import { PeopleTeam as PeopleTeamFill } from "@styled-icons/fluentui-system-filled";
import { StarFill } from "@styled-icons/bootstrap/StarFill";
import { EyeFill } from "@styled-icons/bootstrap/EyeFill";
import { BranchFork } from "@styled-icons/fluentui-system-regular";
import Tooltip from "@material-ui/core/Tooltip";

const formatDate = (dateString) => {
  if (dateString) {
    const data = new Date(Date.parse(dateString));
    return data.toLocaleString("en-GB", {
      timeZone: "UTC",
      dateStyle: "short",
      timeStyle: "short",
    });
  }
};

const ProjectDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state) => state.projectDetails);
  const { project, loading } = projectDetails;

  useEffect(() => {
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
                <div>
                  <h2>project Details</h2>
                  <div className="details__project_info">
                    <span>
                      <i>
                        <Tooltip title="Stars" arrow placement="top">
                          <StarIcon />
                        </Tooltip>
                      </i>
                      <span>{project.stargazers_count}</span>
                    </span>
                    <span>
                      <i>
                        <Tooltip title="Watchers" arrow placement="top">
                          <EyeIcon />
                        </Tooltip>
                      </i>
                      <span>{project.watchers_count}</span>
                    </span>
                    <span>
                      <i>
                        <Tooltip title="Forks" arrow placement="top">
                          <BranchForkIcon />
                        </Tooltip>
                      </i>
                      <span>{project.forks}</span>
                    </span>
                    <span>
                      <i>
                        <Tooltip title="Subscribers" arrow placement="top">
                          <FollowersIcon />
                        </Tooltip>
                      </i>
                      <span>{project.subscribers_count} </span>
                    </span>
                  </div>
                </div>

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
                {project.homepage ? (
                  <span>
                    Homepage: <span>{project.homepage}</span>
                  </span>
                ) : (
                  ""
                )}
                {project.license ? (
                  <span>
                    License:
                    <span>{project.license.name}</span>
                  </span>
                ) : (
                  ""
                )}
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
                {project.language ? (
                  <span>
                    Language: <span>{project.language}</span>
                  </span>
                ) : (
                  ""
                )}
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
      border: 5px solid transparent;
      cursor: pointer;
      &:hover {
        border-color: #83838312;
      }
      .details__main {
        margin-bottom: 28px;
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 30px;
          div {
            padding-bottom: 0;
          }
          h2 {
            font-size: 1.2rem;
            text-transform: uppercase;
            color: #8752cc;
          }
        }
        h3 {
          margin-bottom: 0rem;
          color: white;
          font-weight: 900;
          font-size: 1.6rem;
        }
        span {
          text-transform: none;
          font-size: 0.9rem;
          color: #b2b2b2;
          font-weight: 400;
        }
      }
      .details__links {
        margin-bottom: 15px;
        span {
          display: block;
          font-weight: 100;
          margin-bottom: 20px;
          margin-top: 5px;
          color: white;
          span {
            display: block;
            color: white;
            font-weight: 400;
          }
        }
      }
      .details__other-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        span {
          display: block;
          span {
          }
        }
      }
      .details__project_info {
        display: flex;
        align-items: center;
        justify-content: left;
        flex-wrap: wrap;
        span {
          display: inline-block;
          margin-right: 10px;
          span {
          }
        }
      }

      span {
        font-size: 0.7rem;
        display: block;
        text-transform: uppercase;
        color: white;
        font-weight: 100;

        span {
          font-size: 0.9rem;
          text-transform: none;
          color: white;
          font-weight: 400;
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

const LinkExternalIcon = styled(LinkExternal)`
  color: #8752cc;
`;

const StarIcon = styled(StarFill)`
  color: #8752cc;
  width: 20px;
  margin-right: 6px;
`;

const FollowersIcon = styled(PeopleTeamFill)`
  color: #8752cc;
  width: 22px;
  margin-right: 6px;
`;
const EyeIcon = styled(EyeFill)`
  color: #8752cc;
  width: 22px;
  margin-right: 6px;
`;
const BranchForkIcon = styled(BranchFork)`
  color: #8752cc;
  width: 22px;
  margin-right: 6px;
`;
