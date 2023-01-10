import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LinksProps = {
  links: {
    title: string;
    href: string;
    image?: string;
  }[];
};

const LinksCard = ({ links }: LinksProps) => {
  console.log(links);
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.title} className='w-full' href={link.href}>
            <div className='bg-black hover:scale-105 cursor-pointer text-white p-4 text-center rounded-lg ease-in-out shadow-xl transition'>
              {link.title}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default LinksCard;
