import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { User } from "@styled-icons/boxicons-regular/User";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";

const SearchCard = ({ avatar, username, url }) => {
  return (
    <Card>
      <div>
        <img src={avatar} alt={username} />
      </div>
      <div>
        <p>
          <i>
            <UserIcon />
          </i>
          <span>{username}</span>
        </p>
        <p>
          <i>
            <LinkExternalIcon />
          </i>
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
      margin-right: 40px;
    }
    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      p {
        font-size: 12px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        i {
          width: 30px;
          display: inline-block;
          margin-right: 8px;
        }
        span {
          text-transform: none;
          font-size: 1.5rem;
        }
        a {
          text-transform: none;
          font-size: 1rem;
        }
      }
    }
  }
`;

const UserIcon = styled(User)`
  color: #8752cc;
`;
const LinkExternalIcon = styled(LinkExternal)`
  color: #8752cc;
`;
