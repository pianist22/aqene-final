// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { name, phone, email, details } = await req.json();

//     if (!name || !phone) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     await resend.emails.send({
//       from: `Arqene Support <${process.env.EMAIL_FROM}>`,
//       to: process.env.SUPPORT_EMAIL!,
//       replyTo: email || undefined,
//       subject: "New Inquiry from Arqene Website",
//       html: `
//         <div style="font-family: Arial, sans-serif; padding:20px;">
//           <h2>New Website Inquiry</h2>
//           <hr />
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Email:</strong> ${email || "Not Provided"}</p>
//           <br/>
//           <p><strong>Message:</strong></p>
//           <p>${details || "No additional details"}</p>
//         </div>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email error:", error);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { Resend } from "resend";
import prisma from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, details } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Extract IP Address
    // console.log(req);
    const forwarded = req.headers.get("x-forwarded-for");
    const ipAddress = forwarded?.split(",")[0] || "unknown";

    // Extract User Agent
    const userAgent = req.headers.get("user-agent") || "unknown";

    // Start of today
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    // Count submissions today (IP OR Email)
    const submissionCount = await prisma.contactSubmission.count({
      where: {
        createdAt: {
          gte: startOfDay,
        },
        OR: [
          { ipAddress },
          email ? { email } : undefined,
        ].filter(Boolean) as any,
      },
    });

    if (submissionCount >= 2) {
      return NextResponse.json(
        { error: "Daily submission limit reached." },
        { status: 429 }
      );
    }

    // Store submission
    await prisma.contactSubmission.create({
      data: {
        name,
        phone,
        email,
        ipAddress,
        userAgent,
      },
    });

    // Send Email
    await resend.emails.send({
      from: `Arqene Support <${process.env.EMAIL_FROM}>`,
      to: process.env.SUPPORT_EMAIL!,
      replyTo: email || undefined,
      subject: "New Inquiry from Arqene Website",
      html: `
        <h2>New Website Inquiry</h2>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not Provided"}</p>

        <br/>
        <p><strong>Message:</strong> ${details || ""}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}