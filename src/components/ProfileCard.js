import React from "react";
import styled from "styled-components";

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
  console.log(
    avatar,
    name,
    user,
    twitter,
    location,
    company,
    following,
    followers,
    repositories,
    starred
  );
  return <Card>Hello from profile card</Card>;
};

export default ProfileCard;

const Card = styled.div``;
