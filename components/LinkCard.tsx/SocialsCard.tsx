import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type SocialsProps = {
  socials: {
    title: string;
    href: string;
  }[];
};

const SocialsCard = ({ socials }: SocialsProps) => {
  return (
    <>
      {socials.map((social) => {
        return (
          <Link key={social.title} className='w-full' href={social.href}>
            <div className='bg-black hover:scale-105 cursor-pointer text-white p-4 text-center rounded-lg ease-in-out shadow-xl transition'>
              {social.title}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default SocialsCard;
