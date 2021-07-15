import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Search } from "@styled-icons/fluentui-system-filled/Search";
import { clearListProfiles } from "../redux/actions/profileActions";

const SearchInput = ({ query, setQuery, previousSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (error) {
      setError(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm !== previousSearchTerm && searchTerm) {
      setSearchTerm(e.target.value || searchTerm);
      dispatch(clearListProfiles());
      setQuery(searchTerm || e.target.value);
      history.push(`/search?q=${searchTerm}`);
    } else if (searchTerm === previousSearchTerm) {
      setError(true);
      setMsg("Please, enter another value");
    } else {
      setError(true);
      setMsg("Please, enter some value");
    }
  };

  return (
    <SearchInputContainer>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="Search..."
            autoCorrect="off"
            onChange={handleChange}
            value={searchTerm}
          />

          <button type="submit">
            <div>
              <SearchIcon />
            </div>
          </button>
          {error ? <span className="msg">{msg}</span> : ""}
        </div>
      </form>
    </SearchInputContainer>
  );
};

export default SearchInput;

const SearchInputContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 20px 0 60px;

  form {
    div {
      position: relative;
      .msg {
        position: absolute;
        left: 2px;
        bottom: -22px;
        color: #d64646de;
        font-size: 0.85rem;
        font-style: italic;
        animation-duration: 0.3s;
        animation-name: error;
      }
      button {
        position: absolute;
        height: 100%;
        width: 50px;
        z-index: 1;
        top: 0;
        right: 0;
        border: none;
        background: #8752cc;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        outline: none;
        &:hover {
          background: #8752cca1;
        }
        &:focus {
          background: #8752cca1;
        }
        &:active {
          transform: scale(0.96);
        }
        div {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 300ms ease;
        }
      }
      input {
        width: 100%;
        outline: none;
        border: none;
        background: #0000005e;
        color: #b2b2b2;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        font-size: 1rem;
        box-shadow: 0px 3px 6px -3px rgb(0 0 0 / 49%),
          0px 3px 7px -2px rgb(0 0 0 / 49%);
        border: 1px solid transparent;
        &:focus {
          box-shadow: 0px 1px 4px -3px rgb(0 0 0 / 49%),
            0px 1px 5px -2px rgb(0 0 0 / 49%);
          border-color: #ffffff12;
        }
        &:hover {
          border-color: #ffffff12;
          box-shadow: 0px 1px 4px -3px rgb(0 0 0 / 49%),
            0px 1px 5px -2px rgb(0 0 0 / 49%);
        }
        &::placeholder {
          color: #b2b2b2;
        }
      }
    }
  }
`;

const SearchIcon = styled(Search)`
  width: 2rem;
  font-weight: bold;
`;
