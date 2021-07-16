import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Search } from "@styled-icons/fluentui-system-filled/Search";
import { clearListProfiles } from "../redux/actions/profileActions";

// Components
import VerticalLogo from "../assets/logo-vertical.svg";
import TogglerDarkTheme from "../components/TogglerDarkTheme";

const HomeScreen = () => {
  const [inputText, setInputText] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.darkMode);

  const changeHandler = (e) => {
    setInputText(e.target.value);
    setError(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      dispatch(clearListProfiles());
      history.push(`/search?q=${inputText}`);
    } else {
      setError(true);
      setMsg("Please, enter some value");
    }
  };

  return (
    <Main darkMode={darkMode}>
      <TogglerDarkTheme />
      <Container darkMode={darkMode}>
        <div>
          <img src={VerticalLogo} alt="Logo" />
        </div>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter user name"
              onChange={changeHandler}
              autoCorrect="off"
              value={inputText}
            />
            {error ? <span className="msg">{msg}</span> : ""}
          </div>
          <div>
            <button type="submit" value="Search">
              Search
              <span>
                <SearchIcon />
              </span>
            </button>
          </div>
        </form>
      </Container>
    </Main>
  );
};

export default HomeScreen;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  input {
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Container = styled.div`
  width: 300px;
  max-width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    width: 100%;
    max-width: 95%;
    .form-control {
      color: ${(props) => (props.error ? "red" : "transparent")};
    }
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
      @keyframes error {
        0% {
        }
        20% {
          transform: translateX(-20px);
        }
        40% {
          transform: translateX(20px);
        }
        60% {
          transform: translateX(-20px);
        }
        80% {
          transform: translateX(20px);
        }
        100% {
          transform: translateX(0);
        }
      }
      &:nth-of-type(1) {
        margin: 30px 0 55px;
      }
      input {
        padding: 10px 0;
        width: 100%;

        margin: 0 auto;
        border: none;
        border-bottom: 4px solid;
        border-color: #8752cc;
        color: ${(props) => (props.darkMode ? "#232324" : " white")};
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
          color: ${(props) => (props.darkMode ? "white" : "#535353 ")};
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
