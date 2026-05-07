"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {

  const pathname = usePathname();
  const handleScrollTop = (
  e: React.MouseEvent<HTMLAnchorElement>,
  path: string
) => {
  if (pathname === path) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
  const [openSocial, setOpenSocial] = useState(false);
  const socialRef = useRef<HTMLDivElement>(null);

  const handleFollowClick = () => {
    setOpenSocial(!openSocial);

    setTimeout(() => {
      socialRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }, 200);
  };

  return (
    <footer className="bg-[#f5f5f5] text-gray-800  border-t">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex justify-end font-futura">

       

      </div>

      {/* Middle Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 font-futura">

        {/* Help */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Help
          </h3>

          <div className="text-sm space-y-0 ">

  <p>
    A Client Advisor is available at{" "}
    <a href="tel:+917017557216" className="underline">
      +91 7017557216
    </a>
    /{" "}
    <a href="tel:+918130287842" className="underline">
      +91 8130287842
    </a>
  </p>

  <p>
    You can also{" "}
    <a
      href="https://wa.me/917017557216"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      chat
    </a>{" "}
    or{" "}
    <a
      href="mailto:info@arqene.com"
      className="underline"
    >
      email us
    </a>.
  </p>

</div>

          <ul className="space-y-2 text-sm">
            <li><Link href="/products">Product</Link></li>
            <li><Link href="/about-us">About</Link></li>
            <li><Link href="/the-prakriya">Process</Link></li>
          </ul>
        </div>


        {/* Manufacturer (CENTER) */}
        {/* <div className="text-center max-w-sm mx-auto">
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Manufacturer Details
          </h4>

          <p className="text-sm leading-6">
            Arqené <br />
            South City I, Sector 30 <br />
            Gurugram, Haryana 122009,India
          </p>

        </div> */}


        {/* Connect (RIGHT) */}
        <div className="text-right">
          {/* <div className="flex gap-6 text-sm"> */}
        

    <div className="text-right space-y-1 text-sm">

  <Link
    href="/legal/privacy"
    onClick={(e) => handleScrollTop(e, "/legal/privacy")}
    className={`block transition ${
      pathname === "/legal/privacy"
        ? "underline font-medium"
        : "hover:underline"
    }`}
  >
    Privacy Policy
  </Link>

  <Link
    href="/legal/terms"
    onClick={(e) => handleScrollTop(e, "/legal/terms")}
    className={`block transition ${
      pathname === "/legal/terms"
        ? "underline font-medium"
        : "hover:underline"
    }`}
  >
    Terms & Conditions
  </Link>

</div>

         
        {/* </div> */}
          <p
            onClick={handleFollowClick}
            className="mt-4 text-sm underline cursor-pointer"
          >
            Follow Us
          </p>
        </div>

      </div>


      {/* SOCIAL SECTION (Expandable) */}


<div
  ref={socialRef}
  className={`overflow-hidden transition-all duration-500 ${
    openSocial ? "max-h-40 py-8 border-t" : "max-h-0"
  }`}
>
  <div className="text-center font-futura">

    <h3 className="mb-6 text-sm tracking-widest">
      Follow Us
    </h3>

    <div className="flex justify-center gap-8 text-xl">

      <Link href="https://www.instagram.com/arqene.india/" target="_blank">
        <FaInstagram className="hover:opacity-70 transition" />
      </Link>

      <Link href="https://www.facebook.com/arqene.india/" target="_blank">
        <FaFacebookF className="hover:opacity-70 transition" />
      </Link>

      <Link href="https://www.linkedin.com/company/arqene-india/" target="_blank">
        <FaLinkedin className="hover:opacity-70 transition" />
      </Link>

    </div>

  </div>
</div>

      


      {/* Bottom Brand Logo */}

      <div className="border-t text-center py-8">
        <Link href="/" className="flex justify-center items-center gap-3">

          <Image
            src="/Arqene_Logo_Dark.png"
            alt="Arqene Logo"
            width={120}
            height={40}
            className="object-contain"
          />

        </Link>
      </div>

    </footer>
  );
}