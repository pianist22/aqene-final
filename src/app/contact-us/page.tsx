// app/contact/page.tsx
"use client";

import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[0-9+\-\s()]{7,}$/.test(val),
      { message: "Invalid phone number" }
    ),

  email: z
    .email("Please enter a valid email address"),

  details: z.string().optional(),
});

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const details = formData.get("details")?.toString().trim() || "";

    const result = contactSchema.safeParse({
      name,
      phone,
      email: email || undefined,
      details,
    });

    if (!result.success) {
      toast.error(result.error.issues[0]?.message);
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

      if (res.status === 200) {
        toast.success(
          "Your message has been sent successfully. We will connect with you soon."
        );
        form.reset();
      }
    } catch (error: any) {
      if (error.response?.status === 429) {
        toast.error(
          "You have reached the daily limit (2 submissions per day)."
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f8f6] pt-28 pb-20 px-6 md:px-16">
      
      {/* ===== Hero Section ===== */}
      <div className="max-w-5xl mx-auto text-center mb-5">
        <h1 className="text-3xl md:text-4xl font-serif italic text-[#2e2e2e] mb-6">
          Contact Us
        </h1>
      </div>

      {/* ===== Form Section ===== */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.08)] p-6 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-serif italic tracking-widest mb-3">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              name="name"
              placeholder="Enter your full name"
              className="h-12 rounded-md border-b border-gray-300 focus-visible:ring-0"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-serif italic tracking-widest mb-3">
              Phone Number
            </label>
            <Input
              name="phone"
              placeholder="Enter your phone number"
              className="h-12 rounded-md border-b border-gray-300 focus-visible:ring-0"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-serif italic tracking-widest mb-3">
            Email <span className="text-red-500">*</span>
            </label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-md border-b border-gray-300 focus-visible:ring-0"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-serif italic tracking-widest mb-3">
              Tell Us More
            </label>
            <Textarea
              name="details"
              rows={5}
              placeholder="Share your requirements..."
              className="rounded-md border border-gray-300 focus-visible:ring-0"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-12 py-6 rounded-full bg-black text-white uppercase tracking-wider hover:opacity-90 transition"
            >
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}