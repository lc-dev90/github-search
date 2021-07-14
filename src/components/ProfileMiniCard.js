import React from "react";
import styled from "styled-components";

import { User } from "@styled-icons/boxicons-regular/User";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";

const ProfileMiniCard = ({ user, avatar, url }) => {
  return (
    <MiniCard>
      <div>
        <img src={avatar} alt={user} />
      </div>
      <span>
        <i>
          <UserIcon />
        </i>
        {user}
      </span>
      <a
        style={{ marginTop: "6px" }}
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
    </MiniCard>
  );
};

export default ProfileMiniCard;
const MiniCard = styled.div`
  border: 5px solid transparent;
  width: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #201f1f;
  padding: 10px;
  height: fit-content;
  cursor: pointer;
  border-radius: 10px;
  font-size: 0.8rem;
  margin-left: 30px;
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
    margin-bottom: 24px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;

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
