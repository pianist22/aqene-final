// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#f5f5f5] text-gray-800 mt-20 border-t">

//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between">

//         {/* Manufacturer */}
       

//         {/* Legal Links */}
//         <div className="flex gap-6 text-sm mt-6 md:mt-0">
//           <Link href="/sitemap" className="hover:underline">
//             Sitemap
//           </Link>

//           <Link href="/legal" className="hover:underline">
//             Legal & Privacy
//           </Link>

//           <Link href="/cookies" className="hover:underline">
//             Cookies
//           </Link>
//         </div>
//       </div>

//       {/* Middle Footer */}
//       <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

//         {/* Help */}
//         <div>
//           <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
//             Help
//           </h3>

//           <p className="text-sm mb-3">
//             A Client Advisor is available at{" "}
//             <span className="underline">1800 103 9988</span>.
//           </p>

//           <ul className="space-y-2 text-sm">
//             <li><Link href="/products">Product</Link></li>
//             <li><Link href="/abut-us">About</Link></li>
//             <li><Link href="/the-prakriya">Stores</Link></li>
//           </ul>
//         </div>

//         {/* Services */}
//        <div className="max-w-sm">
//           <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
//             Manufacturer Details
//           </h4>

//           <p className="text-sm leading-6">
//             Your Company Name <br />
//             Street Address <br />
//             City, Country
//           </p>

//           <p className="text-xs text-gray-500 mt-3">
//             Please refer to the product label for specific country of origin.
//           </p>
//         </div>

//         {/* About */}
       

//         {/* Connect */}
//         <div>
//           <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
//             Connect
//           </h3>

//           <p className="text-sm mb-4">
//             Sign up to receive the latest news, launches, and updates.
//           </p>

//           <button className="border px-4 py-2 text-sm hover:bg-black hover:text-white transition">
//             Connect
//           </button>

//           <p className="mt-4 text-sm underline cursor-pointer">
//             Follow Us
//           </p>
//         </div>
//       </div>

//       {/* Bottom Brand Logo */}
//       <div className="border-t text-center py-8">
//         <Link href="/" className="flex justify-center items-center gap-3">

//           {/* SVG Logo Space */}
//           <div className="w-8 h-8">
//             {/* Replace with your SVG */}
//             <svg
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-full h-full"
//             >
//               <circle cx="12" cy="12" r="10" />
//             </svg>
//           </div>

//           {/* Brand Name */}
//           <span className="text-lg tracking-widest font-semibold">
//             YOUR BRAND
//           </span>

//         </Link>
//       </div>

//     </footer>
//   );
// }
"use client";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Footer() {

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
    <footer className="bg-[#f5f5f5] text-gray-800 mt-20 border-t">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex justify-end">

        <div className="flex gap-6 text-sm">
        

          <Link href="/legal" className="hover:underline">
            Legal & Privacy
          </Link>

         
        </div>

      </div>

      {/* Middle Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">

        {/* Help */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Help
          </h3>

          <p className="text-sm mb-3">
  A Client Advisor is available at{" "}
  <a href="tel:+9118001039988" className="underline">
    1800 103 9988
  </a>.
</p>

          <ul className="space-y-2 text-sm">
            <li><Link href="/products">Product</Link></li>
            <li><Link href="/about-us">About</Link></li>
            <li><Link href="/the-prakriya">Stores</Link></li>
          </ul>
        </div>


        {/* Manufacturer (CENTER) */}
        <div className="text-center max-w-sm mx-auto">
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Manufacturer Details
          </h4>

          <p className="text-sm leading-6">
            Your Company Name <br />
            Street Address <br />
            City, Country
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Please refer to the product label for specific country of origin.
          </p>
        </div>


        {/* Connect (RIGHT) */}
        <div className="text-right">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Connect
          </h3>

          <p className="text-sm mb-4">
            Sign up to receive the latest news, launches, and updates.
          </p>
    <Link href="/contact-us">
     <button className="border px-4 py-2 text-sm hover:bg-black hover:text-white transition" >
            Connect
          </button>
    </Link>
         

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
  <div className="text-center">

    <h3 className="mb-6 text-sm tracking-widest">
      Follow Us
    </h3>

    <div className="flex justify-center gap-8 text-xl">

      <Link href="https://instagram.com/arqene">
        <FaInstagram className="hover:opacity-70 transition" />
      </Link>

      <Link href="https://facebook.com/arqene">
        <FaFacebookF className="hover:opacity-70 transition" />
      </Link>

      <Link href="https://x.com/arqene">
        <FaXTwitter className="hover:opacity-70 transition" />
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