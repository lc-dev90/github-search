import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@material-ui/lab";
import { getMoreProjectsFromProfile } from "../redux/actions/profileActions";

import ProjectCard from "./ProjectCard";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProjectList = ({ repositories, user }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profileDetails);
  const { profile, repos, loading_projects } = profileDetails;
  const pages = Math.ceil(profile.public_repos / 12);

  const handleChangePagination = (e, v) => {
    setPage(v);
    dispatch(getMoreProjectsFromProfile(profile.login, v));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ListProject>
        {loading_projects ? (
          <div className="loading">
            <CircularProgress size={100} />
          </div>
        ) : (
          repos.map((item) => (
            <ProjectCard
              key={item.id}
              name={item.name}
              description={item.description}
              stargazers_count={item.stargazers_count}
              forks_count={item.forks_count}
              language={item.language}
              user={item.owner.login}
            />
          ))
        )}
      </ListProject>
      {repos ? (
        repos.length > 0 ? (
          <Pagination
            className="pagination"
            count={pages}
            onChange={handleChangePagination}
            page={page}
            defaultPage={page}
            size={"small"}
            siblingCount={window.innerWidth < 300 ? 0 : 1}
          />
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
};

export default ProjectList;

const ListProject = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 40px;
  cursor: pointer;
  @media (max-width: 561px) {
    margin: 0 auto;
    margin-top: 80px;
    grid-template-columns: 300px;
    justify-content: center;
  }
  @media (max-width: 350px) {
    grid-template-columns: 95%;
  }
  .loading {
    align-items: flex-start;
    justify-content: center;
    display: flex;
    height: calc(100vh - 585px);
    width: 100%;
    grid-column: 1/-1;
  }
`;
