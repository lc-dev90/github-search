import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@material-ui/lab";
import { getProfileDetails } from "../redux/actions/profileActions";

import ProjectCard from "./ProjectCard";

const ProjectList = ({ repositories, user }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profileDetails);
  const { profile, starred, repos, loading } = profileDetails;
  const pages = Math.ceil(profile.public_repos / 12);
  /* 
  useEffect(() => {
    dispatch(getProfileDetails(user, page));
  }, [page]); */

  const handleChangePagination = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <ListProject>
        {repositories.map((item) => (
          <ProjectCard
            key={item.id}
            name={item.name}
            description={item.description}
            stargazers_count={item.stargazers_count}
            forks_count={item.forks_count}
            language={item.language}
            user={user}
          />
        ))}
      </ListProject>
      {repos ? (
        repos.length > 0 ? (
          <Pagination
            className="pagination"
            count={pages}
            onChange={handleChangePagination}
            page={page}
            defaultPage={page}
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
`;
