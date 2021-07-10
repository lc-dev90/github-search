import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

//components
import SearchCard from "../components/SearchCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SearchResultsScreen = ({ location }) => {
  const [searchResults, setSearchResults] = useState([]);

  const query = location.search.split("=")[1];

  /*  `https://api.github.com/search/users?q=${query}&page=2` */
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
      setSearchResults(data.items);
    };
    fetchData();
  }, []);
  console.log(searchResults);
  return (
    <>
      <Header />
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
`;
