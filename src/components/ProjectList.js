import React from "react";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";

const ProjectList = ({ repositories }) => {
  return (
    <ListProject>
      {repositories.map((item) => (
        <ProjectCard
          name={item.name}
          description={item.description}
          stargazers_count={item.stargazers_count}
          forks_count={item.forks_count}
          language={item.language}
        />
      ))}
    </ListProject>
  );
};

export default ProjectList;

const ListProject = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  cursor: pointer;
`;
