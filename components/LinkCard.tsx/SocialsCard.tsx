import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

type SocialsProps = {
  socials: {
    title: string;
    href: string;
    icon: IconType;
  }[];
};

const SocialsCard = ({ socials }: SocialsProps) => {
  const socialIcons: any = {
    Twitter: FaTwitter,
    Instagram: FaInstagram,
    Github: FaGithub,
  };
  return (
    <>
      {socials.map((social) => {
        const Icon = socialIcons[social.title];
        return (
          <Link key={social.title} className='w-full' href={social.href}>
            <div className='bg-black hover:scale-105 relative flex items-center cursor-pointer text-white p-4 rounded-lg ease-in-out shadow-xl transition'>
              <Icon />
              <p className='absolute text-center left-0 right-0'>{social.title}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default SocialsCard;
