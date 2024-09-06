import Image from "next/image";

export const Contact = () => {
  return (
    <section className="py-20 bg-[#1D1F22] relative">
      <Image
        src="/divider-dark.svg"
        alt={`divider`}
        height={500}
        width={500}
        className="absolute -top-5 w-full z-[100]"
      />
      <div className="container mx-auto">
        <div className="text-center space-y-2">
          <h4 className="display-medium text-yellow-500">
            Hubungi Kami dan Dapatkan Layanan Terbaik
          </h4>
          <p className="heading-small text-neutral-50">
            Tim kami siap membantu dalam mewujudkan website impianmu
          </p>
        </div>
      </div>
    </section>
  );
};
