import Image from "next/image";
import React from "react";

interface CardProps {
  data: {
    title: string;
    desc: string;
    icon: string;
  };
}

export const Card = ({ data }: CardProps) => {
  return (
    <div className="w-full sm:w-3/12 space-y-4">
      <div className="h-[274px] w-full flex items-center justify-center bg-[#1D1F22] rounded-2xl">
        <Image
          src={data.icon}
          alt={`${data.title} icon`}
          height={500}
          width={500}
          className="w-14 h-14 object-cover"
        />
      </div>
      <h5 className="heading-large text-gray-900">{data.title}</h5>
      <p className="subheading-large text-gray-900">{data.desc}</p>
    </div>
  );
};
