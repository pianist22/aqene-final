"use client";

import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import z from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    ,
  phone: z
    .string()
    .optional(),
  email: z
    .string()
    .min(2,"Email is Required")
    .refine(
      (val) => !val || z.string().email().safeParse(val).success,
      {
        message: "Invalid email address format",
      }
    ),

  details: z.string().optional(),
});

// const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function ConnectToggle() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [loading,setLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null);

  // Close panel when mouse leaves container
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () =>
      document.removeEventListener("mousemove", handleMouseMove);
  }, [open]);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const name = formData.get("name")?.toString().trim() || "";
//     const phone = formData.get("phone")?.toString().trim() || "";
//     const email = formData.get("email")?.toString().trim() || "";
//     const details = formData.get("details")?.toString().trim() || "";

//     if (!name || !phone) {
//       toast.error("Please fill required fields");
//       return;
//     }

//     const message = `
// New Inquiry from Arqene Website

// Name: ${name}
// Phone: ${phone}
// Email: ${email || "Not Provided"}

// Details:
// ${details || "No additional details"}
// `;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(url, "_blank");

//     toast.success(
//       "Your message has been sent successfully. We will connect with you soon."
//     );

//     e.currentTarget.reset();
//     setOpen(false);
//   };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget; // store reference immediately

  const formData = new FormData(form);

  const name = formData.get("name")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const details = formData.get("details")?.toString().trim() || "";

  // ZOD VALIDATION
  const result = contactSchema.safeParse({
    name,
    phone: phone || undefined,
    email: email,
    details,
  });

  if (!result.success) {
    const firstError =
      result.error.issues[0]?.message || "Invalid form data";
    toast.error(firstError);
    return;
  }

  try {
    setLoading(true);
    const res = await axios.post("/api/contact", {
      name,
      phone,
      email,
      details,
    });
    // console.log(res);

    if (res.status === 200) {
      toast.success(
        "Your message has been sent successfully. We will connect with you soon."
      );
      setLoading(false);

      form.reset(); // use stored reference
      setOpen(false);
    }

  } catch (error:any) {
    setLoading(false);
    // console.error("Frontend error:", error);
    if (error.response?.status === 429) {
      toast.error("You have reached the daily limit (2 submissions per day).");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }
};

  return (
    <div
      ref={containerRef}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center"
    >
      {/* ===================== */}
      {/* CONNECT BUTTON */}
      {/* ===================== */}
      {!collapsed && (
        <div
          onMouseEnter={() => setOpen(true)}
          className="relative"
        >
          <div
            className="
              w-[56px]                    /* slimmer width */
              relative
              h-[100px]
              bg-white
              rounded-l-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              flex
              flex-col
              items-center
              justify-between
              py-10
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
          >
            {/* Arrow fixed at top */}
            <button
              onClick={() => setCollapsed(true)}
              className="
               absolute
                w-14
                h-9
                bg-black
                text-white
                flex
                items-center
                justify-center
                rounded-t-md
                shadow-md
                -top-7.5
                hover:opacity-90
                transition
              "
            >
              ←
            </button>

            {/* Vertical Text */}
            <span
              className="
                text-[12px]
                tracking-[0.2em]
                rotate-270
                font-serif
                writing-mode-vertical-rl
                
              "
            >
              Connect
            </span>
          </div>
        </div>
      )}

      {/* ===================== */}
      {/* COLLAPSED ARROW ONLY */}
      {/* ===================== */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="
            w-9
            h-9
            bg-black
            text-white
            flex
            items-center
            justify-center
            rounded-l-md
            shadow-xl
            transition
            hover:opacity-90
          "
        >
          →
        </button>
      )}

      {/* ===================== */}
      {/* SLIDE PANEL */}
      {/* ===================== */}
      <div
        className={`
          absolute
          right-[56px]
          top-21
          -translate-y-1/2
          w-[260px]
          xs:w-[320px]
          sm:w-[360px]
          md:w-[420px]
          
          bg-white
          rounded-2xl
          shadow-[0_40px_120px_rgba(0,0,0,0.25)]
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          overflow-y-auto
          ${
            open && !collapsed
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-6 pointer-events-none"
          }
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute
            top-4
            right-4
            text-gray-500
            text-xl
            hover:text-black
            transition
            z-10
          "
        >
          ✕
        </button>

        <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <h2 className="text-lg sm:text-md md:text-xl font-medium mb-1">
            Connect With Us
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-1 sm:space-y-2 md:space-y-3"
          >
            <input
              name="name"
              placeholder="Name *"
              required
              className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4"
            />

            <input
              name="phone"
              placeholder="Phone Number (Optional)"
              required
              className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4"
            />

            <input
              name="email"
              placeholder="Email *"
              className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4"
            />

            <textarea
              name="details"
              placeholder="Tell Us More"
              rows={3}
              className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4 resize-none"
            />

            <button
              type="submit"
              className="
                w-full
                bg-black
                text-white
                py-3 sm:py-4 md:py-4
                rounded-full
                tracking-wide
                uppercase
                text-xs sm:text-sm
                hover:opacity-90
                transition
              "
            >
              {loading? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
