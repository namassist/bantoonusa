import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Consultant = () => {
  return (
    <section className="py-24 bg-[#1D1F22] relative">
      <Image
        src="/divider-dark.svg"
        alt={`divider`}
        height={500}
        width={500}
        className="absolute top-0 w-full z-[100] transform -translate-y-[90%]"
      />
      <div className="container mx-auto">
        <div className="text-center space-y-6 sm:space-y-2">
          <h4 className="display-medium text-yellow-500">Masih Bingung?</h4>
          <p className="heading-small text-neutral-50">
            Hubungi kami untuk konsultasi gratis sebelum memesan layanan kami
          </p>
        </div>
        <Link
          href="https://api.whatsapp.com/send/?phone=6282126859543&type=phone_number&app_absent=0"
          target="_blank"
          className="mt-[72px] flex justify-center items-center"
        >
          <Button
            variant="outline"
            className="text-neutral-50 button-cta font-semibold rounded-full p-8"
          >
            <Image
              src="/whatsapp.svg"
              alt="icon whatsapp"
              height={500}
              width={500}
              className="w-6 h-6 object-cover mr-2"
            />
            (+62) 821 2685 9543
          </Button>
        </Link>
        <div className="mt-[36px] text-neutral-50 text-center w-full flex justify-center">
          <p className="body-large max-w-xl">
            Dapatkan konsultasi gratis dengan tim Bantoonusa untuk memulai
            proyek website Anda (pemesanan dilakukan melalui WhatsApp)
          </p>
        </div>
      </div>
    </section>
  );
};
