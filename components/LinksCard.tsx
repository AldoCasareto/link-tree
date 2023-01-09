import Link from 'next/link';
import React from 'react';

const LinksCard = (data: any) => {
  return (
    <>
      <h1 className='bold text-2xl'>{data[0].name}</h1>
      {Object.entries(data[0].socials).map(([key, value]) => (
        <Link className='w-full' href={value as string}>
          <div className='bg-black hover:scale-105 cursor-pointer text-white p-4 text-center rounded-lg ease-in-out shadow-xl transition'>
            {key}
          </div>
        </Link>
      ))}
      {Object.entries(data[0].work).map(([key, value]) => (
        <Link className='w-full' href={value as string}>
          <div className='bg-black hover:scale-105 cursor-pointer text-white p-4 text-center rounded-lg ease-in-out shadow-xl transition'>
            {key}
          </div>
        </Link>
      ))}
    </>
  );
};

export default LinksCard;
