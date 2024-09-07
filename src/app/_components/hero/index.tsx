import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export const Hero = () => {
  return (
    <div className="w-full bg-hero bg-center bg-cover aspect-[16/9] h-screen lg:h-auto flex flex-col items-center justify-center gap-4 pt-20 sm:pt-0">
      <h1 className="px-4 sm:px-0 display-large max-w-3xl text-center text-gray-900">
        Bangun Identitas Online Anda dengan Web yang Memukau
      </h1>
      <h4 className="px-4 sm:px-0 heading-large text-gray-500 max-w-2xl lg:max-w-3xl text-center">
        Solusi Profesional untuk Situs Web yang Menarik dan Terjangkau
      </h4>
      <Button className="p-8 bg-yellow-400 font-semibold rounded-full text-button-cta text-gray-900">
        Pelajari Lebih Lanjut
        <ArrowRight className="w-6 h-6 ml-3" />
      </Button>
    </div>
  );
};
