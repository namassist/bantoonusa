import { benefits } from "@/lib/data";
import { BenefitItem } from "@/components";

export const Benefits = () => {
  return (
    <section className="py-24 bg-[#1D1F22]" id="tentang-kami">
      <div className="container mx-auto">
        <div className="text-center space-y-6 sm:space-y-2">
          <h4 className="display-medium text-yellow-500">
            Kenalan dengan Bantoonusa
          </h4>
          <p className="heading-small text-neutral-50">
            Yuk, cari tahu manfaat bikin website di Bantoonusa
          </p>
        </div>
        {benefits.map((benefit) => (
          <BenefitItem key={benefit.title} data={benefit} />
        ))}
      </div>
    </section>
  );
};
