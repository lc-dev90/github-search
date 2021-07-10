import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Search } from "@styled-icons/fluentui-system-filled/Search";

// Components
import VerticalLogo from "../assets/logo-vertical.svg";

const HomeScreen = () => {
  const [inputText, setInputText] = useState("");
  return (
    <Main>
      <Container>
        <div>
          <img src={VerticalLogo} alt="Logo" />
        </div>
        <form>
          <div>
            <input
              type="text"
              placeholder="Enter user name"
              onChange={(e) => setInputText(e.target.value)}
              autoCorrect="off"
            />
          </div>
          <Link to={`/search/${inputText}`}>
            <div>
              <button type="submit" value="Search">
                Search
                <span>
                  <SearchIcon />
                </span>
              </button>
            </div>
          </Link>
        </form>
      </Container>
    </Main>
  );
};

export default HomeScreen;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  input {
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Container = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    width: 100%;
    div {
      &:nth-of-type(1) {
        margin: 30px 0 55px;
      }
      input {
        padding: 10px 0;
        width: 100%;
        border: none;
        border-bottom: 4px solid;
        border-color: #8752cc;
        color: white;
        caret-color: #535353;
        font-size: 18px;
        font-weight: 700;
        position: relative;

        &:focus {
          border-bottom: 2px solid;
          padding-bottom: 12px;
          border-color: #8752cc;
        }
        ::placeholder {
          color: #535353;
          font-size: 18px;
          text-align: center;
        }
      }

      button {
        width: 100%;
        font-family: inherit;
        font-weight: 700;
        font-size: inherit;
        background: #8752cc;
        color: white;
        padding: 12px 0;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          background: #64418c;
        }
      }
    }
  }
`;

const SearchIcon = styled(Search)`
  width: 22px;
  font-weight: bold;
  margin-left: 6px;
`;
