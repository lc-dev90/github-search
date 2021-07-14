import React from "react";

const ProfileMiniCard = ({ user, avatar, url }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={user} />
        <span>{user}</span>
        <span>{url}</span>
      </div>
    </div>
  );
};

export default ProfileMiniCard;
