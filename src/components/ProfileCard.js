import React from "react";
import styled from "styled-components";
import { MapMarkerAlt } from "@styled-icons/fa-solid/MapMarkerAlt";
import { BuildingHouse } from "@styled-icons/boxicons-regular/BuildingHouse";
import { PeopleTeam } from "@styled-icons/fluentui-system-regular";
import { PeopleTeam as PeopleTeamFill } from "@styled-icons/fluentui-system-filled";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

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
        <h2 style={{ color: "#8752cc", fontSize: "1.6rem" }}>
          {name ? name : user}
        </h2>
        <span>@{twitter ? twitter : "not aplicable"}</span>
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
      <div className="total-repositories">
        <h3>Total Repositories </h3>
        <div>
          <div style={{ marginRight: "10px" }}>
            <img src={TotalRepo} alt="total repositories" />
          </div>
          <h3>{repositories}</h3>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;

const Card = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  .total-repositories {
    background: #201f1f;
    border-radius: 5px;
    padding: 15px 20px;
    text-align: center;
    h3 {
      font-size: 18px;
    }

    div {
      margin-top: 6px;
      h3 {
        font-size: 25px;
      }
      div {
        width: 25px;
      }
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .card-avatar {
    width: 146px;
    height: 146px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 40px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .card-location {
    display: flex;
    margin-top: 24px;
    margin-bottom: 6px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      &:first-child {
        margin-right: 10px;
      }
    }
  }

  .card-follow-information {
    display: flex;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
  }
`;

const LocalIcon = styled(MapMarkerAlt)`
  color: #8752cc;
  width: 14px;
  margin-right: 6px;
`;

const CompanyIcon = styled(BuildingHouse)`
  color: #8752cc;
  width: 22px;
  margin-right: 6px;
`;

const FollowersIcon = styled(PeopleTeamFill)`
  color: #8752cc;
  width: 22px;
  margin-right: 6px;
`;
const FollowingIcon = styled(PeopleTeam)`
  color: #8752cc;
  width: 22px;
  margin-right: 6px;
`;

const StarIcon = styled(StarFill)`
  color: #8752cc;
  width: 20px;
  margin-right: 6px;
`;
