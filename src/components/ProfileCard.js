import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MapMarkerAlt } from "@styled-icons/fa-solid/MapMarkerAlt";
import { BuildingHouse } from "@styled-icons/boxicons-regular/BuildingHouse";
import { PeopleTeam } from "@styled-icons/fluentui-system-regular";
import { PeopleTeam as PeopleTeamFill } from "@styled-icons/fluentui-system-filled";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

import TotalRepo from "../assets/git_total.svg";

const ProfileCard = () => {
  const profileDetails = useSelector((state) => state.profileDetails);
  const { profile, starred, repos } = profileDetails;

  return (
    <Card>
      <div className="card-avatar">
        <img src={profile.avatar_url} alt="avatar" />
      </div>
      <div style={{ flex: "1" }}>
        <h2 style={{ color: "#8752cc", fontSize: "1.6rem" }}>
          {profile.name ? profile.name : profile.user}
        </h2>
        <span>@{profile.twitter ? profile.twitter : profile.login}</span>
        <div className="card-location">
          {profile.location ? (
            <div>
              <LocalIcon />
              <span>{profile.location}</span>
            </div>
          ) : (
            ""
          )}

          {profile.company ? (
            <div>
              <CompanyIcon />
              <span>{profile.company} </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="card-follow-information">
          <div>
            <FollowersIcon /> {profile.followers}
          </div>
          <div>
            <FollowingIcon /> {profile.following}
          </div>
          <div>
            <StarIcon /> {starred.length}
          </div>
        </div>
      </div>
      <div className="total-repositories">
        <h3>Total Repositories </h3>
        <div>
          <div style={{ marginRight: "10px" }}>
            <img src={TotalRepo} alt="total repositories" />
          </div>
          <h3>{profile.public_repos}</h3>
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
