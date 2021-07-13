import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getProfileDetails } from "../redux/actions/profileActions";

//Components
import ProfileCard from "../components/ProfileCard";
import ProjectList from "../components/ProjectList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Pagination } from "@material-ui/lab";

const ProfileScreen = ({ match }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profileDetails);
  const { profile, starred, repos, loading } = profileDetails;

  useEffect(() => {
    dispatch(getProfileDetails(match.params.user, page));
  }, []);
  /* useEffect(() => {
    dispatch(getProfileDetails(match.params.user, page));
  }, [page]); */

  /*  const pages = Math.ceil(profile.public_repos / 12); */

  /*  const handleChangePagination = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  }; */

  return (
    <>
      <Header />
      <Main>
        {loading ? (
          <div
            style={{
              padding: "30px",
              textAlign: "center",
              paddingTop: "80px",
            }}
          >
            <CircularProgress size={100} />
          </div>
        ) : (
          <>
            <ProfileCard
              avatar={profile.avatar_url}
              name={profile.name}
              twitter={profile.twitter_username}
              location={profile.location}
              company={profile.company}
              following={profile.following}
              followers={profile.followers}
              repositories={profile.public_repos}
              starred={starred.length}
            />
            <ProjectList repositories={repos} user={profile.login} />
          </>
        )}
        {/* {repos ? (
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
        )} */}
      </Main>

      <Footer />
    </>
  );
};

export default ProfileScreen;

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  color: #b2b2b2;
  min-height: calc(100vh - 246px);
  /* .pagination {
    margin-top: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      li {
        div {
          color: white;
        }
        button {
          color: white;
        }
      }
    }
  } */
`;
