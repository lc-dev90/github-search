import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MapMarkerAlt } from "@styled-icons/fa-solid/MapMarkerAlt";
import { BuildingHouse } from "@styled-icons/boxicons-regular/BuildingHouse";
import { PeopleTeam } from "@styled-icons/fluentui-system-regular";
import { PeopleTeam as PeopleTeamFill } from "@styled-icons/fluentui-system-filled";
import { StarFill } from "@styled-icons/bootstrap/StarFill";
import Tooltip from "@material-ui/core/Tooltip";

import TotalRepo from "../assets/git_total.svg";

const ProfileCard = () => {
  const profileDetails = useSelector((state) => state.profileDetails);
  const { profile, starred } = profileDetails;

  return (
    <Card>
      <div className="box">
        <div className="card-avatar">
          <img src={profile.avatar_url} alt="avatar" />
        </div>
        <div className="total-repositories mobile">
          <h3>Total Repositories </h3>
          <div>
            <div style={{ marginRight: "10px" }}>
              <img src={TotalRepo} alt="total repositories" />
            </div>
            <h3>{profile.public_repos}</h3>
          </div>
        </div>
      </div>

      <div className="box-divisor-main" style={{ flex: "1" }}>
        <div className="box-divisor">
          <h2 style={{ color: "#8752cc", fontSize: "1.6rem" }}>
            {profile.name ? profile.name : profile.user}
          </h2>
          <span
            style={{
              color: "white",
              fontWeight: "900",
            }}
          >
            @{profile.twitter ? profile.twitter : profile.login}
          </span>
        </div>
        <div className="box-divisor">
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
            <Tooltip title="Followers" arrow placement="bottom">
              <div>
                <FollowersIcon /> {profile.followers}
              </div>
            </Tooltip>
            <Tooltip title="Following" arrow placement="bottom">
              <div>
                <FollowingIcon /> {profile.following}
              </div>
            </Tooltip>
            <Tooltip title="Stars" arrow placement="bottom">
              <div>
                <StarIcon /> {starred.length}
              </div>
            </Tooltip>
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
  @media (max-width: 700px) {
    flex-direction: column;
  }
  .box-divisor-main {
    @media (max-width: 700px) {
      display: flex;
      align-items: center;
      .box-divisor {
        &:nth-of-type(1) {
          margin-right: 50px;
          @media (max-width: 435px) {
            margin-right: 0px;
            margin-bottom: 20px;
          }
        }
      }
    }
    @media (max-width: 435px) {
      flex-direction: column;
    }
  }
  .box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 435px) {
      flex-direction: column;
    }
  }
  .total-repositories.mobile {
    display: none;
    @media (max-width: 700px) {
      display: block;
    }
    @media (max-width: 435px) {
      display: none;
    }
  }

  .total-repositories {
    @media (max-width: 700px) {
      display: none;
    }
    @media (max-width: 435px) {
      display: block;
    }
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
    @media (max-width: 435px) {
      margin-right: 0px;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .card-location {
    display: flex;
    margin-top: 24px;
    @media (max-width: 700px) {
      margin-top: 0;
    }
    @media (max-width: 435px) {
      align-items: center;
      justify-content: center;
    }
    margin-bottom: 6px;
    flex-wrap: wrap;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 3px;
      span {
        max-width: 280px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }

  .card-follow-information {
    display: flex;
    @media (max-width: 435px) {
      margin-bottom: 24px;
    }
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
