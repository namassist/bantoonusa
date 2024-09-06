import React from "react";
import Image from "next/image";

interface BenefitItemProps {
  data: {
    title: string;
    desc: string;
    image: string;
    reverse: boolean;
  };
}

export const BenefitItem = ({ data }: BenefitItemProps) => {
  return (
    <div
      className={`w-full flex justify-center items-center gap-2 mt-[72px] ${
        data.reverse
          ? "flex-col-reverse sm:flex-row-reverse"
          : "flex-col sm:flex-row"
      }`}
    >
      <div className="w-full sm:w-6/16 lg:w-5/12 flex items-center gap-2">
        <div className="space-y-2">
          <h5 className="display-small text-yellow-500">{data.title}</h5>
          <p className="text-neutral-50">{data.desc}</p>
        </div>
      </div>
      <div className="w-full sm:w-6/16 lg:w-5/12 flex items-center gap-2">
        <Image
          src={data.image}
          alt={`ilustrasi ${data.title}`}
          height={500}
          width={500}
          className="object-cover"
        />
      </div>
    </div>
  );
};
