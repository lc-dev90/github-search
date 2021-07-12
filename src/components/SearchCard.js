import React from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { User } from "@styled-icons/boxicons-regular/User";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";
import { Info } from "@styled-icons/evaicons-solid/Info";

const SearchCard = ({ avatar, username, url }) => {
  return (
    <Link to={`user/${username}`}>
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
            <Link
              to={{ pathname: url }}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              {url}
            </Link>
          </p>
          <span className="information">
            <i>
              <InfoIcon />
            </i>
            <span>Details</span>
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default SearchCard;

const Card = styled.div`
  margin-bottom: 20px;
  position: relative;
  display: flex;
  background: #201f1f;
  border-radius: 10px;
  padding: 30px;
  width: 600px;
  cursor: pointer;
  box-shadow: 0px 3px 17px -3px rgba(0, 0, 0, 0.49),
    0px 3px 17px -2px rgba(0, 0, 0, 0.49);
  &:hover {
    box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.49),
      0px 1px 7px -2px rgba(0, 0, 0, 0.49);
    div {
      &:nth-of-type(2) {
        .information {
          opacity: 1;
          background: rgba(10, 10, 10, 0.79);
        }
      }
    }
  }
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
      .information {
        position: absolute;
        height: 100%;
        z-index: 1;
        right: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        opacity: 0;
        transition: opacity ease-in-out 0.25s;
        box-shadow: 0px 0px 7px -1px rgb(0 0 0 / 49%),
          0px 0px 7px -2px rgb(0 0 0 / 49%);
        span {
          font-size: 8px;
          color: white;
          margin-top: 8px;
          text-transform: uppercase;
        }
        i {
          width: 30px;
          display: inline-block;
        }
      }
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
const InfoIcon = styled(Info)`
  color: #8752cc;
`;
