import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@material-ui/lab";
import styled from "styled-components";

//components
import SearchCard from "../components/SearchCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchInput from "../components/SearchInput";
import { listProfiles } from "../redux/actions/profileActions";

const SearchResultsScreen = ({ location }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(location.search.split("=")[1]);
  const searchResults = useSelector((state) => state.profileList);
  const { totalCount, profiles } = searchResults;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(listProfiles(query, page));
  }, [query, page, dispatch]);

  const pages =
    Number(Math.ceil(totalCount / 10)) > 100
      ? 100
      : Number(Math.ceil(totalCount / 10)) > 100;

  const handleChangePagination = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <SearchInput />
      <SearchContainer>
        {profiles
          ? profiles.map((item) => (
              <SearchCard
                key={item.node_id}
                avatar={item.avatar_url}
                username={item.login}
                url={item.html_url}
              />
            ))
          : "Loading..."}
        <Pagination
          style={{ marginTop: "20px" }}
          count={pages}
          className="pagination"
          onChange={handleChangePagination}
        />
      </SearchContainer>

      <Footer />
    </>
  );
};

export default SearchResultsScreen;

const SearchContainer = styled.main`
  max-width: 900px;
  margin: 0 auto;
  color: #b2b2b2;
  min-height: calc(100vh - 246px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .pagination {
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
  }
`;
