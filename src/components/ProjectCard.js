import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BranchFork } from "@styled-icons/fluentui-system-regular";
import { StarFill } from "@styled-icons/bootstrap/StarFill";
import { FileEarmarkCodeFill } from "@styled-icons/bootstrap/FileEarmarkCodeFill";

const ProjectCard = ({
  name,
  description,
  stargazers_count,
  forks_count,
  language,
  user,
}) => {
  return (
    <Link to={`/${user}/${name}`}>
      <Card>
        <h4>{name}</h4>
        <p>{description ? description : "No description"}</p>
        <div>
          <div>
            <div>
              <StarFillIcon />
            </div>
            <span>{stargazers_count}</span>
          </div>
          <div>
            <div>
              <BranchForkIcon />
            </div>
            <span> {forks_count}</span>
          </div>
          <div>
            <div>
              <FileEarmarkCodeFillIcon />
            </div>
            <span>{language}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;

const Card = styled.div`
  background: #201f1f;
  min-height: 170px;
  border-radius: 10px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0px 0px 7px 2px #a1a1a112;
  }
  div {
    display: flex;

    div {
      margin-right: 16px;
      span {
        font-size: 0.9rem;
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
