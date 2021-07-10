import React from "react";
import styled from "styled-components";

const ProjectCard = ({
  name,
  description,
  stargazers_count,
  forks_count,
  language,
}) => {
  return (
    <Card>
      <h4>{name}</h4>
      <p>{description}</p>
      <div>
        Stars:{stargazers_count} Forks:{forks_count} Language:{language}
      </div>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  background: gray;
  min-height: 200px;
  border-radius: 10px;
`;
