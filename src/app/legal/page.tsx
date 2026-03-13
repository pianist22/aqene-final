// import Link from "next/link";

// export default function LegalPrivacy() {
//   return (
//     <main className="max-w-5xl mx-auto px-6 py-20 font-futura">

//       {/* Page Title */}
//       <h1 className="text-3xl tracking-widest font-semibold mb-10">
//         Legal & Privacy
//       </h1>

//       {/* Introduction */}
//       <p className="text-gray-700 mb-8 leading-7">
//         At Arqene, we respect your privacy and are committed to protecting
//         your personal information. This page explains how we collect,
//         use, and safeguard your data when you visit our website or
//         interact with our services.
//       </p>

//       {/* Section */}
//       <section className="mb-10">
//         <h2 className="text-xl font-semibold mb-3">
//           Information We Collect
//         </h2>

//         <p className="text-gray-700 leading-7">
//           We may collect personal information such as your name, email
//           address, shipping address, and payment information when you
//           place an order, sign up for newsletters, or contact us.
//         </p>
//       </section>

//       {/* Section */}
//       <section className="mb-10">
//         <h2 className="text-xl font-semibold mb-3">
//           How We Use Your Information
//         </h2>

//         <ul className="list-disc ml-6 text-gray-700 space-y-2">
//           <li>To process and deliver your orders</li>
//           <li>To improve our website and services</li>
//           <li>To communicate with you about updates and promotions</li>
//           <li>To ensure security and prevent fraud</li>
//         </ul>
//       </section>

//       {/* Section */}
//       <section className="mb-10">
//         <h2 className="text-xl font-semibold mb-3">
//           Data Protection
//         </h2>

//         <p className="text-gray-700 leading-7">
//           We implement industry-standard security measures to protect
//           your personal data against unauthorized access, disclosure,
//           or misuse.
//         </p>
//       </section>

//       {/* Section */}
//       <section className="mb-10">
//         <h2 className="text-xl font-semibold mb-3">
//           Cookies
//         </h2>

//         <p className="text-gray-700 leading-7">
//           Our website uses cookies to enhance your browsing experience.
//           Cookies help us understand how visitors use our site so we
//           can improve functionality and performance.
//         </p>
//       </section>

//       {/* Contact */}
//       <section>
//         <h2 className="text-xl font-semibold mb-3">
//           Contact Us
//         </h2>

//         <p className="text-gray-700">
//           If you have any questions about this policy, please contact us at:
//         </p>

//         <p className="mt-2 font-medium">
//           support@arqene.com
//         </p>
//       </section>

//       {/* Back link */}
//       <div className="mt-16">
//         <Link href="/" className="underline text-sm">
//           Back to Home
//         </Link>
//       </div>

//     </main>
//   );
// }
// "use client";

// // import { useState } from "react";

// // export default function LegalPrivacy() {
// //   const [tab, setTab] = useState("terms");
// "use client";

// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function LegalPage() {

//   const searchParams = useSearchParams();
//   const [tab, setTab] = useState<"terms" | "privacy">("terms");

//   useEffect(() => {
//     const queryTab = searchParams.get("tab");

//     if (queryTab === "privacy") {
//       setTab("privacy");
//     } else {
//       setTab("terms");
//     }
//   }, [searchParams]);

//   return (
//     <main>

//       {/* Toggle Buttons */}

//       <div className="flex gap-6">

//         <button onClick={() => setTab("terms")}>
//           Terms & Conditions
//         </button>

//         <button onClick={() => setTab("privacy")}>
//           Privacy Policy
//         </button>

//       </div>


//       {/* Content */}

//       {tab === "terms" && (
//         <div>
//           Terms & Conditions content
//         </div>
//       )}

//       {tab === "privacy" && (
//         <div>
//           Privacy Policy content
//         </div>
//       )}

//     </main>
//   );
// }
//   return (
//     <main className="bg-[#f3f3f3] py-24 px-6 font-futura">

//       <div className="max-w-5xl mx-auto">

//         {/* Toggle */}
//         <div className="flex justify-center border-b mb-14">

//           <button
//             onClick={() => setTab("terms")}
//             className={`px-8 py-4 text-sm tracking-widest ${
//               tab === "terms"
//                 ? "border-b-2 border-black font-medium"
//                 : "text-gray-500"
//             }`}
//           >
//             TERMS AND CONDITIONS
//           </button>

//           <button
//             onClick={() => setTab("privacy")}
//             className={`px-8 py-4 text-sm tracking-widest ${
//               tab === "privacy"
//                 ? "border-b-2 border-black font-medium"
//                 : "text-gray-500"
//             }`}
//           >
//             PRIVACY POLICY
//           </button>

//         </div>

//         <div className="bg-white p-12 shadow-sm text-[16px] leading-8 text-[#5f5a50] space-y-12">

// {/* ---------------- PRIVACY POLICY ---------------- */}

// {tab === "privacy" && (
// <>
// <section>
// <h2 className="text-xl font-semibold mb-3">
// Your Choices Regarding Personal Information
// </h2>
// <p>
// When you receive newsletters or promotional communications from us,
// you may indicate a preference to stop receiving further communications
// by following the unsubscribe instructions in the email. However,
// service emails related to products, services, or policy updates may
// still be sent.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Personal Data and Third-Party Providers
// </h2>
// <p>
// Arqené is committed to protecting your privacy and ensuring a seamless
// experience. Personal data collected through cookies or similar
// technologies may be used by us or our authorized third-party providers.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Use of Personal Data
// </h2>

// <ul className="list-disc ml-6 space-y-2">
// <li>Enhance your website experience.</li>
// <li>Create personalized experiences based on your interests.</li>
// </ul>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Sharing with Third Parties
// </h2>

// <p>
// We may transfer relevant personal data to third parties to create
// personalized messages or advertisements on platforms such as:
// </p>

// <ul className="list-disc ml-6 space-y-2">
// <li>Facebook</li>
// <li>Instagram</li>
// <li>Pinterest</li>
// <li>Google</li>
// <li>YouTube</li>
// </ul>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Third-Party Service Providers
// </h2>

// <p>
// Our partners are carefully selected and may process your data only
// for authorized purposes while complying with our privacy standards.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Disclosure of Information
// </h2>

// <p>
// Personal information will not be disclosed to third parties unless
// required by law, court order, or necessary to prevent harm or
// illegal activity.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Cookie Policy
// </h2>

// <p>
// Cookies are small text files stored on your device that help the
// website recognize returning users and improve browsing experience.
// Disabling cookies may affect website functionality.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Safeguarding Your Information
// </h2>

// <p>
// We implement administrative, technical and physical safeguards to
// protect personal information against unauthorized access, misuse
// or alteration.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Privacy Policy Updates
// </h2>

// <p>
// This policy may be updated periodically. Any significant changes
// will be announced on this page.
// </p>
// </section>
// </>
// )}

// {/* ---------------- TERMS & CONDITIONS ---------------- */}

// {tab === "terms" && (
// <>
// <section>
// <h2 className="text-xl font-semibold mb-3">General</h2>

// <p>
// These Terms constitute an agreement between Arqene Designs Pvt.
// Limited and any individual accessing the arqené platform. By
// using the platform, you agree to these Terms.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Registration of Your Account
// </h2>

// <p>
// Users may register or checkout as guests. You are responsible for
// maintaining the confidentiality of login credentials and all
// activities performed through your account.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Communication and Unsubscription
// </h2>

// <p>
// By using the platform you consent to receive communications such
// as updates, offers, and notifications via SMS, email or other
// digital channels.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Disclaimer of Warranties
// </h2>

// <p>
// The platform and services are provided “as-is”. We do not guarantee
// the accuracy, completeness or reliability of any information on
// the platform.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Intellectual Property
// </h2>

// <p>
// All website content including text, graphics and trademarks are
// owned by Arqene or licensed to it. Unauthorized use or reproduction
// is prohibited.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// User Responsibilities
// </h2>

// <p>
// Users must not upload harmful software, misuse the platform, or
// violate any laws while using the services.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Limitation of Liability
// </h2>

// <p>
// Arqene will not be responsible for indirect losses including loss
// of profits, data, goodwill, or business interruption arising from
// use of the platform.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Governing Law
// </h2>

// <p>
// These terms are governed by the laws of India and any disputes
// shall fall under the jurisdiction of courts located in
// Gurugram, Haryana.
// </p>
// </section>

// <section>
// <h2 className="text-xl font-semibold mb-3">
// Grievance Officer
// </h2>

// <p>
// Mehul Singhal  
// <br/>
// Email: mehul@arqene.com  
// <br/>
// Customer Care: +91-7017557216  
// <br/>
// Address: B-92, South City I, Sector 30, Gurugram, Haryana 122009
// </p>
// </section>
// </>
// )}

//         </div>
//       </div>

//     </main>
//   );

export default function LegalPage({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {

  const tab = searchParams?.tab === "privacy" ? "privacy" : "terms";

  return (
    <main className="bg-[#f3f3f3] py-24 px-6 font-futura">

      <div className="max-w-5xl mx-auto">

        {/* Toggle */}
        <div className="flex justify-center border-b mb-14">

          <a
            href="/legal?tab=terms"
            className={`px-8 py-4 text-sm tracking-widest ${
              tab === "terms"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
          >
            TERMS AND CONDITIONS
          </a>

          <a
            href="/legal?tab=privacy"
            className={`px-8 py-4 text-sm tracking-widest ${
              tab === "privacy"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
          >
            PRIVACY POLICY
          </a>

        </div>

        <div className="bg-white p-12 shadow-sm text-[16px] leading-8 text-[#5f5a50] space-y-12">

{/* ---------------- PRIVACY POLICY ---------------- */}

{tab === "privacy" && (
<>
<section>
<h2 className="text-xl font-semibold mb-3">
Your Choices Regarding Personal Information
</h2>
<p>
When you receive newsletters or promotional communications from us,
you may indicate a preference to stop receiving further communications
by following the unsubscribe instructions in the email.
</p>
</section>
</>
)}

{/* ---------------- TERMS & CONDITIONS ---------------- */}

{tab === "terms" && (
<>
<section>
<h2 className="text-xl font-semibold mb-3">General</h2>

<p>
These Terms constitute an agreement between Arqene Designs Pvt.
Limited and any individual accessing the arqené platform.
</p>

</section>
</>
)}

        </div>

      </div>

    </main>
  );
}