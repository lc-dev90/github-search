import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BranchFork } from "@styled-icons/fluentui-system-regular";
import { StarFill } from "@styled-icons/bootstrap/StarFill";
import { FileEarmarkCodeFill } from "@styled-icons/bootstrap/FileEarmarkCodeFill";
import Tooltip from "@material-ui/core/Tooltip";

const ProjectCard = ({
  name,
  description,
  stargazers_count,
  forks_count,
  language,
  user,
}) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  return (
    <Link to={`/user/${user}/${name}`}>
      <Card darkMode={darkMode}>
        <h4>{name}</h4>
        <p>{description ? description : "No description"}</p>
        <div>
          <Tooltip title={`Stars: ${stargazers_count}`} arrow placement="top">
            <div>
              <div>
                <StarFillIcon darkMode={darkMode} />
              </div>
              <span>{stargazers_count}</span>
            </div>
          </Tooltip>
          <Tooltip title={`Forks: ${forks_count}`} arrow placement="top">
            <div>
              <div>
                <BranchForkIcon darkMode={darkMode} />
              </div>
              <span> {forks_count}</span>
            </div>
          </Tooltip>
          {language ? (
            <Tooltip title={`Language: ${language}`} arrow placement="top">
              <div>
                <div>
                  <FileEarmarkCodeFillIcon darkMode={darkMode} />
                </div>
                <span>{language}</span>
              </div>
            </Tooltip>
          ) : (
            ""
          )}
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;

const Card = styled.div`
  background: ${(props) => (props.darkMode ? "#d3bdf038" : "#201f1f")};
  background: ;
  min-height: 170px;
  border-radius: 10px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.darkMode ? "#400794" : "#b2b2b2")};
  box-shadow: 0px 3px 1px -3px rgb(0 0 0 / 49%),
    0px 3px 7px -2px rgb(0 0 0 / 49%);
  &:hover {
    box-shadow: ${(props) =>
      props.darkMode
        ? "0px 2px 8px 1px #777777b0"
        : "0px 0px 7px 2px #a1a1a112"};
  }
  div {
    display: flex;
    div {
      margin-right: 16px;
      span {
        font-size: 0.9rem;
        color: ${(props) => (props.darkMode ? "white" : "#b2b2b2")};
      }
      div {
        margin-right: 5px;
      }
    }
  }
  h4 {
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #ffffffd1;
    text-shadow: 2px 2px 4px #0000003b;
  }
  p {
    font-size: 0.9rem;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const BranchForkIcon = styled(BranchFork)`
  width: 18px;
  color: #8752cc;
`;
const StarFillIcon = styled(StarFill)`
  width: 18px;
  color: #8752cc;
`;
const FileEarmarkCodeFillIcon = styled(FileEarmarkCodeFill)`
  width: 18px;
  color: #8752cc;
`;
