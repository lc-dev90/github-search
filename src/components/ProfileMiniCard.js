import React from "react";
import styled from "styled-components";

import { User } from "@styled-icons/boxicons-regular/User";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";
import Tooltip from "@material-ui/core/Tooltip";

const ProfileMiniCard = ({ user, avatar, url }) => {
  return (
    <MiniCard>
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
  background: #201f1f;
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
    flex-direction: column;
  }
  &:hover {
    border-color: #83838312;
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
      overflow: auto;
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 800px) {
      &:nth-of-type(1) {
        margin-bottom: 0px;
        margin-right: 20px;
      }
    }
    @media (max-width: 550px) {
      &:nth-of-type(1) {
        margin-bottom: 20px;
        margin-right: 0px;
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
