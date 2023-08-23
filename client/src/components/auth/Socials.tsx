import React from 'react';
import { SocialType } from '../../type';

interface SocialsProps {
  data: SocialType[]; // Array of objects of type "Social"
  AuthWith: (authwith: string) => void;
}

export const Socials: React.FC<SocialsProps> = ({ data, AuthWith }) => {
  return (
    <div className="flex w-[90%] m-auto justify-around items-center ">
      {data.map((e: SocialType, i: number) => (
        <img
          key={i}
          src={e.icon}
          alt={e.altIcons}
          draggable="false"
          className={`gap-x-24 cursor-pointer ${e.className}`}
          onClick={() => AuthWith(e.altIcons)}
        />
      ))}
    </div>
  );
};

export default Socials;
