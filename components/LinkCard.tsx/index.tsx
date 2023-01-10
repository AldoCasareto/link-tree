import React from 'react';
import LinksCard from './LinksCard';
import ProfileCard from './ProfileCard';
import SocialsCard from './SocialsCard';
import data from '../../data.json';

const UserCard = () => {
  const { socials, links } = data;
  return (
    <div className='flex items-center justify-center mt-28 flex-col px-40 space-y-4'>
      <ProfileCard image={data.avatar} name={data.name} />
      <LinksCard links={links} />
      <SocialsCard socials={socials} />
    </div>
  );
};

export default UserCard;
