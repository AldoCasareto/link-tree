import React from 'react';
import LinksCard from './LinksCard';
import ProfileCard from './ProfileCard';
import SocialsCard from './SocialsCard';
import data from '../../data.json';

const UserCard = () => {
  const { socials, links } = data;
  return (
    <>
      <ProfileCard image={data.avatar} name={data.name} />
      <LinksCard links={links} />
      <SocialsCard socials={socials} />
    </>
  );
};

export default UserCard;
