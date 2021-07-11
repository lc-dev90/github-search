import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import styled from "styled-components";
import axios from "axios";

//components
import SearchCard from "../components/SearchCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchInput from "../components/SearchInput";

const SearchResultsScreen = ({ location }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const pages =
    Number(Math.ceil(totalCount / 10)) > 100
      ? 100
      : Number(Math.ceil(totalCount / 10)) > 100;

  const handleChangePagination = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };

  const query = location.search.split("=")[1];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}&per_page=10`
      );
      setSearchResults(data.items);
      setTotalCount(data.total_count);
    };
    fetchData();
  }, [query, searchResults]);

  useEffect(() => {
    if (page) {
      const fetchData = async () => {
        const { data } = await axios.get(
          `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`
        );
        setSearchResults(data.items);
      };
      fetchData();
    }
  }, [page, query]);
  return (
    <>
      <Header />
      <SearchInput
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <SearchContainer>
        {searchResults
          ? searchResults.map((item) => (
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
