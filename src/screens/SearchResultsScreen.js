import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

//components
import SearchCard from "../components/SearchCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchInput from "../components/SearchInput";
import { listProfiles } from "../redux/actions/profileActions";

const SearchResultsScreen = ({ location }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const searchResults = useSelector((state) => state.profileList);
  const { darkMode } = useSelector((state) => state.darkMode);
  const { totalCount, profiles, loading, previousSearchTerm, error } =
    searchResults;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    setQuery(location.search.split("=")[1]);
  }, [location.search]);

  useEffect(() => {
    if (query && query !== previousSearchTerm) {
      setQuery(location.search.split("=")[1]);
      dispatch(listProfiles(query, page));
    }
  }, [query]);

  const pages =
    Number(Math.ceil(totalCount / 10)) > 100
      ? 100
      : Number(Math.ceil(totalCount / 10));

  const handleChangePagination = (e, v) => {
    setPage(v);
    dispatch(listProfiles(query, v));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <SearchInput
        query={query}
        setQuery={setQuery}
        previousSearchTerm={previousSearchTerm}
      />
      <SearchContainer darkMode={darkMode}>
        {error ? (
          <p>Something went wrong, please try again later.</p>
        ) : loading ? (
          <div style={{ padding: "30px" }}>
            <CircularProgress size={100} />
          </div>
        ) : profiles.length !== 0 ? (
          profiles.map((item) => (
            <SearchCard
              key={item.node_id}
              avatar={item.avatar_url}
              username={item.login}
              url={item.html_url}
            />
          ))
        ) : (
          <p>Sorry, no results.</p>
        )}
        {error ? (
          ""
        ) : loading ? (
          ""
        ) : profiles ? (
          profiles.length !== 0 ? (
            <Pagination
              style={{ marginTop: "20px" }}
              count={pages}
              className="pagination"
              onChange={handleChangePagination}
              page={page}
              defaultPage={page}
              size={"small"}
            />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </SearchContainer>
      <Footer />
    </>
  );
};

export default SearchResultsScreen;

const SearchContainer = styled.main`
  width: 600px;
  max-width: 95%;
  margin: 0 auto;
  color: #b2b2b2;
  min-height: calc(100vh - 378px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
    display: block;
    width: 100%;
  }
  .pagination {
    ul {
      li {
        div {
          color: ${(props) => (props.darkMode ? "black" : "#b2b2b2")};
        }
        button {
          color: ${(props) => (props.darkMode ? "black" : "#b2b2b2")};
        }
      }
    }
  }
`;
