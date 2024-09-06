import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#1D1F22] text-neutral-50 pt-5">
      <div className="container mx-auto space-y-4">
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full lg:w-6/12 flex flex-col justify-between">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/logo-white.png"
                alt="logo"
                width="500"
                height="500"
                className="object-cover w-[32px]"
              />
              <span className="font-semibold text-neutral-100">bantoonusa</span>
            </Link>
            <div className="space-y-4 mt-4 lg:mt-0">
              <p className="heading-small text-yellow-400">Konsultasi gratis</p>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="space-y-1 font-secondary-sans">
                  <p className="font-semibold text-sm">Email</p>
                  <p>bantoonusa@gmail.com</p>
                </div>
                <div className="space-y-1 font-secondary-sans">
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p>(+62) 1234 5678 9012</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-4/12 space-y-4">
              <p className="heading-small text-yellow-400">Media sosial</p>
              <p className="font-secondary-sans">Instagram</p>
              <p className="font-secondary-sans">Facebook</p>
            </div>
            <div className="w-full lg:w-4/12 space-y-4">
              <p className="heading-small text-yellow-400">Program (soon)</p>
              <p className="font-secondary-sans">Youth Social Care Camp</p>
              <p className="font-secondary-sans">Ramadhan Berbagi</p>
              <p className="font-secondary-sans">LMM</p>
            </div>
            <div className="w-full lg:w-4/12 space-y-4">
              <p className="heading-small text-yellow-400">Navigasi</p>
              <p className="font-secondary-sans">Home</p>
              <p className="font-secondary-sans">Layanan</p>
              <p className="font-secondary-sans">Harga</p>
              <p className="font-secondary-sans">Tentang Kami</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center text-sm font-secondary-sans py-5 border-neutral-800 border-t-2">
          <p>
            Bantoonusa: Solusi website Nusantara yang terarah, responsif, dan
            menjadikan pengguna sebagai fokus utama
          </p>
          <p>© Bantoonusa 2023. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};
