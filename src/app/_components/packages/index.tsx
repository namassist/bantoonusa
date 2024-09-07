import { Button } from "@/components/ui/button";
import { packages } from "@/lib/data";
import Image from "next/image";
import React from "react";

export const Packages = () => {
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
        <div className="text-center text-gray-900 space-y-6 sm:space-y-2">
          <h4 className="display-medium">Paket Khusus yang Tidak Terbatas</h4>
          <p className="heading-small ">
            Buat website Anda sepenuh hati dengan layanan pembuatan website
            custom kami
          </p>
        </div>
        <div className="mt-[72px] w-full flex justify-center">
          <div className="w-full lg:w-10/12 flex flex-wrap justify-center items-center gap-5">
            {packages.map((p) => (
              <div
                key={p.title}
                className="w-full sm:w-[calc(50%_-_1rem)] flex items-center text-gray-900 gap-2"
              >
                <Image
                  src={p.icon}
                  alt={`${p.title} icon`}
                  height={500}
                  width={500}
                  className="w-8 h-8"
                />
                <p className="body-large">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[72px] w-full flex justify-center">
          <Button className="w-full lg:w-10/12 text-button-cta text-yellow-400 bg-gray-900 button-cta font-semibold rounded-full p-8">
            Paket spesial mulai dari Rp 15 jt+
          </Button>
        </div>
        <div className="mt-[72px] text-gray-900 text-center w-full flex justify-center">
          <p className="body-large max-w-xl">
            Buat website impianmu dengan paket custom kami, yang menawarkan
            konsultasi intensif, 6 bulan pemeliharaan, dan fleksibilitas biaya
            dan waktu
          </p>
        </div>
      </div>
    </section>
  );
};
