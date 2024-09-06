import { Card } from "@/components";
import { services } from "@/lib/data";
import Image from "next/image";
import React from "react";

export const Services = () => {
  return (
    <section className="bg-[#F1EFE3] py-20 relative">
      <Image
        src="/divider-light.svg"
        alt={`divider`}
        height={500}
        width={500}
        className="absolute top-0 w-full z-[100] transform -translate-y-[90%]"
      />
      <div className="container mx-auto">
        <div className="text-center space-y-2 text-gray-900">
          <h4 className="display-medium">Beragam Website untuk Anda</h4>
          <p className="heading-small ">
            Temukan jenis dan solusi yang tepat untuk kebutuhan website Anda
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center mt-[72px] gap-6">
          {services.map((service) => (
            <Card key={service.title} data={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
