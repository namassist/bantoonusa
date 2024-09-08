import Image from "next/image";
import { FormContact } from "./_components/form-contact";

export const Contact = () => {
  return (
    <section className="py-24 bg-[#1D1F22] relative" id="harga">
      <Image
        src="/divider-dark.svg"
        alt={`divider`}
        height={500}
        width={500}
        className="absolute top-0 w-full z-[100] transform -translate-y-[90%]"
      />
      <div className="container mx-auto">
        <div className="text-center space-y-6 sm:space-y-2">
          <h4 className="display-medium text-yellow-500">
            Hubungi Kami dan Dapatkan Layanan Terbaik
          </h4>
          <p className="heading-small text-neutral-50">
            Tim kami siap membantu dalam mewujudkan website impianmu
          </p>
        </div>
        <div className="mt-[72px] w-full flex justify-center">
          <FormContact />
        </div>
      </div>
    </section>
  );
};
