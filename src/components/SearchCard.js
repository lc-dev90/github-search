import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchCard = ({ avatar, username, url }) => {
  return (
    <Card>
      <div>
        <img src={avatar} alt={username} />
      </div>
      <div>
        <p>
          @User: <span>{username}</span>
        </p>
        <p>
          Link:{" "}
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </p>
      </div>
    </Card>
  );
};

export default SearchCard;

const Card = styled.div`
  margin-bottom: 20px;
  display: flex;
  background: #201f1f;
  border-radius: 10px;
  padding: 30px;
  width: 600px;
  div {
    &:nth-of-type(1) {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
    }
    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-size: 12px;
        text-transform: uppercase;
        span {
          text-transform: none;
          font-size: 1.5rem;
          color: #8752cc;
        }
        a {
          text-transform: none;
          font-size: 1rem;
        }
      }
    }
  }
`;
