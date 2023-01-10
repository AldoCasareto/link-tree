import Image from 'next/image';
import React from 'react';

type ProfileCardProps = {
  name: string;
  image: string;
};

const ProfileCard = ({ name, image }: ProfileCardProps) => {
  return (
    <>
      {image && <Image src={image} alt={name} width={200} height={200} className='rounded-full' />}
      <h1 className='bold text-2xl'>{name}</h1>
    </>
  );
};

export default ProfileCard;
