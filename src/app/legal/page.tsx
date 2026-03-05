import Link from "next/link";

export default function LegalPrivacy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      {/* Page Title */}
      <h1 className="text-3xl tracking-widest font-semibold mb-10">
        Legal & Privacy
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 mb-8 leading-7">
        At Arqene, we respect your privacy and are committed to protecting
        your personal information. This page explains how we collect,
        use, and safeguard your data when you visit our website or
        interact with our services.
      </p>

      {/* Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Information We Collect
        </h2>

        <p className="text-gray-700 leading-7">
          We may collect personal information such as your name, email
          address, shipping address, and payment information when you
          place an order, sign up for newsletters, or contact us.
        </p>
      </section>

      {/* Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          How We Use Your Information
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>To process and deliver your orders</li>
          <li>To improve our website and services</li>
          <li>To communicate with you about updates and promotions</li>
          <li>To ensure security and prevent fraud</li>
        </ul>
      </section>

      {/* Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Data Protection
        </h2>

        <p className="text-gray-700 leading-7">
          We implement industry-standard security measures to protect
          your personal data against unauthorized access, disclosure,
          or misuse.
        </p>
      </section>

      {/* Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          Cookies
        </h2>

        <p className="text-gray-700 leading-7">
          Our website uses cookies to enhance your browsing experience.
          Cookies help us understand how visitors use our site so we
          can improve functionality and performance.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Contact Us
        </h2>

        <p className="text-gray-700">
          If you have any questions about this policy, please contact us at:
        </p>

        <p className="mt-2 font-medium">
          support@arqene.com
        </p>
      </section>

      {/* Back link */}
      <div className="mt-16">
        <Link href="/" className="underline text-sm">
          Back to Home
        </Link>
      </div>

    </main>
  );
}