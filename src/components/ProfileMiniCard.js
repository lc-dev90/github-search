import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { User } from "@styled-icons/boxicons-regular/User";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";
import Tooltip from "@material-ui/core/Tooltip";

const ProfileMiniCard = ({ user, avatar, url }) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  return (
    <MiniCard darkMode={darkMode}>
      <div>
        <img src={avatar} alt={user} />
      </div>
      <div>
        <Tooltip title={`User: ${user}`} arrow placement="left">
          <span>
            <i>
              <UserIcon />
            </i>
            {user}
          </span>
        </Tooltip>
        <Tooltip title="Click to open the profile user" arrow placement="left">
          <a
            style={{ marginTop: "6px", width: "100%" }}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <i>
                <LinkExternalIcon />
              </i>
              {url.split("//")[1]}
            </span>
          </a>
        </Tooltip>
      </div>
    </MiniCard>
  );
};

export default ProfileMiniCard;
const MiniCard = styled.div`
  border: 5px solid transparent;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => (props.darkMode ? "#d3bdf038" : "#201f1f")};
  box-shadow: 0px 3px 1px -3px rgb(0 0 0 / 49%),
    0px 3px 7px -2px rgb(0 0 0 / 49%);
  padding: 30px;
  height: fit-content;
  cursor: pointer;
  border-radius: 10px;
  font-size: 0.8rem;
  margin-left: 60px;
  @media (max-width: 800px) {
    margin-left: 0px;
    margin-bottom: 40px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 550px) {
  }
  &:hover {
    &:hover {
      box-shadow: 0px 3px 6px -3px rgb(0 0 0 / 49%),
        0px 3px 12px -2px rgb(0 0 0 / 49%);
    }
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    width: 100%;
  }
  div {
    &:nth-of-type(1) {
      margin-bottom: 24px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
    }
    &:nth-of-type(2) {
      flex: 1;
      display: flex;
      flex-direction: column;
      span {
        color: white;
      }
    }
    @media (max-width: 800px) {
      &:nth-of-type(1) {
        margin-bottom: 20px;
        margin-right: 20px;
        width: 50px;
        height: 50px;
      }
    }

    img {
      object-fit: cover;
    }
  }
`;

const UserIcon = styled(User)`
  color: #8752cc;
  width: 22px;
  margin-right: 6px;
`;

const LinkExternalIcon = styled(LinkExternal)`
  color: #8752cc;
  width: 22px;
  margin-right: 6px;
`;
