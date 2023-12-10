import React from 'react';
import { ProfilePic } from '../assets/images';

const ProfileDetails = () => {
  return (
    <div className="flex gap-4 p-4">
      <img src={ProfilePic} className="w-[150px]" alt="profile picture" />
      <div>
        <p className="text-4xl font-bold text-red-600">Balamurugan</p>
        <p className="text-xs">BE Computer Science Engineer</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
