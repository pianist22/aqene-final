
// export default function ProductInfo({
//   name,
//   description,
//   category,
// }: {
//   name: string;
//   description: string;
//   category?: string;
// }) {
//   return (
//     <div className="space-y-10">
//       {/* CATEGORY */}
//       {category && (
//         <div className="space-y-2 md:mt-20">
//           <p
//             className="
//               text-sm
//               uppercase
//               tracking-[0.2em]
//               text-gray-400
//               font-sans
//               italic
//             "
//           >
//             {category}
//           </p>

//           {/* SUBTLE DIVIDER */}
//           <div className="w-12 h-px bg-gray-300" />
//         </div>
//       )}

//       {/* PRODUCT NAME */}
//       <h1
//         className="
//           text-3xl
//           md:text-5xl
//           font-serif
//           italic
//           tracking-wide
//           text-[#2e2e2e]
//           leading-tight
//         "
//       >
//         {name}
//       </h1>

//       {/* DESCRIPTION */}
//       <div className="max-w-2xl pt-2">
//         <p
//           className="
//             text-base
//             md:text-lg
//             leading-relaxed
//             text-[#4a4a4a]
//             font-light
//             font-serif
//             italic
//           "
//         >
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }


import Link from "next/link";

export default function ProductInfo({
  name,
  description,
  category,
  categoryId,
}: {
  name: string;
  description: string;
  category?: string;
  categoryId?: number;
}) {
  return (
    <div className="space-y-10">
      {/* CATEGORY */}
      {category && categoryId && (
        <div className="space-y-2 md:mt-20">
          <Link
            href={`/products/furniture?category=${categoryId}`}
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-gray-400
              font-serif
              italic
              transition-colors
              hover:text-[#2e2e2e]
              cursor-pointer
            "
          >
            {category}
          </Link>

          <div className="w-12 h-px bg-gray-300" />
        </div>
      )}

      {/* PRODUCT NAME */}
      <h1
        className="
          text-3xl
          md:text-5xl
          font-serif
          italic
          tracking-wide
          text-[#2e2e2e]
          leading-tight
        "
      >
        {name}
      </h1>

      {/* DESCRIPTION */}
      <div className="max-w-2xl pt-2">
        <p
          className="
            text-base
            md:text-lg
            leading-relaxed
            text-[#4a4a4a]
            font-light
            font-serif
            italic
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}