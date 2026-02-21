"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!; // 🔁 replace with real number

  const message = encodeURIComponent(
    "Hello Arqene, I am interested in your furniture collection."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        top-24
        right-0
        z-50
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-110
        transition
        duration-300
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
}
