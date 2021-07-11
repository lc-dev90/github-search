import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "@styled-icons/fluentui-system-filled/Search";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  return (
    <SearchInputContainer>
      <form onSubmit={submitHandler} action={`/search?q=${searchTerm}`}>
        <div>
          <input type="text" placeholder="Search..." autoCorrect="off" />
          <button type="submit">
            <div>
              <SearchIcon />
            </div>
          </button>
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
        box-shadow: 0px 3px 8px -3px rgb(0 0 0 / 49%),
          0px 3px 11px -2px rgb(0 0 0 / 49%);
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