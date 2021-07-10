import React from "react";
import styled from "styled-components";
import { MapMarkerAlt } from "@styled-icons/fa-solid/MapMarkerAlt";
import { BuildingHouse } from "@styled-icons/boxicons-regular/BuildingHouse";
import { PeopleTeam, BranchFork } from "@styled-icons/fluentui-system-regular";
import { PeopleTeam as PeopleTeamFill } from "@styled-icons/fluentui-system-filled";
import {
  StarFill,
  FileEarmarkCodeFill,
} from "@styled-icons/bootstrap/StarFill";
import TotalRepo from "../assets/git_total.svg";

const ProfileCard = ({
  avatar,
  name,
  user,
  twitter,
  location,
  company,
  following,
  followers,
  repositories,
  starred,
}) => {
  return (
    <Card>
      <div className="card-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div style={{ flex: "1" }}>
        <h2>{name}</h2>
        <span>@{twitter}</span>
        <div className="card-location">
          <div>
            <LocalIcon />
            {location}
          </div>
          <div>
            <CompanyIcon />
            {company}
          </div>
        </div>
        <div className="card-follow-information">
          <div>
            <FollowersIcon /> {followers}
          </div>
          <div>
            <FollowingIcon /> {following}
          </div>
          <div>
            <StarIcon /> {starred}
          </div>
        </div>
      </div>
      <div>
        <h3>Total Repositories </h3>
        <div style={{ width: "18px", display: "flex" }}>
          <img src={TotalRepo} alt="total repositories" />
          <h3>{repositories}</h3>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;

const Card = styled.div`
  max-width: 750px;
  margin: 0 auto;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  .card-avatar {
    width: 200px;
    overflow: hidden;
    border-radius: 50%;
  }

  .card-location {
    display: flex;
  }

  .card-follow-information {
    display: flex;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const LocalIcon = styled(MapMarkerAlt)`
  color: #8752cc;
  width: 13px;
`;

const CompanyIcon = styled(BuildingHouse)`
  color: #8752cc;
  width: 18px;
`;

const FollowersIcon = styled(PeopleTeamFill)`
  color: #8752cc;
  width: 18px;
`;
const FollowingIcon = styled(PeopleTeam)`
  color: #8752cc;
  width: 18px;
`;

const StarIcon = styled(StarFill)`
  color: #8752cc;
  width: 18px;
`;
