// // app/projects/page.tsx  (App Router)
// // or use as <ProjectsPage /> inside any page

// "use client";

// const PROJECTS = [
//   {
//     id: 1,
//     name: "Eclectic Minimalism",
//     image: "/projects/eclectic-minimalism.jpg",
//   },
//   {
//     id: 2,
//     name: "Modern Classic",
//     image: "/projects/modern-classic.jpg",
//   },
//   {
//     id: 3,
//     name: "Modern Artistry",
//     image: "/projects/modern-artistry.jpg",
//   },
//   {
//     id: 4,
//     name: "Modern Contemporary",
//     image: "/projects/modern-contemporary.jpg",
//   },
//   {
//     id: 5,
//     name: "Neo Modern Classic",
//     image: "/projects/neo-modern-classic.jpg",
//   },
//   {
//     id: 6,
//     name: "Classic Contemporary",
//     image: "/projects/classic-contemporary.jpg",
//   },
// ];

// export default function Projects() {
//   return (
//     <main className="min-h-screen w-full bg-[#f4f4f5]">
//       <section className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10 py-20">
//         {/* Heading + intro text */}
//         <header className="mb-12">
//           <h1 className="text-2xl md:text-3xl tracking-[0.35em] uppercase text-[#a3a3a3]">
//   OUR PROJECTS
// </h1>

//           <p className="mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-[#6b6458] max-w-4xl">
//             From the warmth of residential spaces to the sophistication of
//             corporate offices, our studio designs and crafts spaces that
//             seamlessly integrate into a myriad of environments. Each project is
//             a bespoke composition—functional, beautiful, and rooted in a strong
//             sense of place.
//           </p>
//         </header>

//         {/* Grid of project cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-14">
//   {PROJECTS.map((project) => (
//     <article key={project.id} className="flex flex-col">
//       <div className="overflow-hidden rounded-3xl bg-[#d4d4d8]">
//         <img
//           src={project.image}
//           alt={project.name}
//           className="w-full aspect-[4/3] md:aspect-[16/9] object-cover transition-transform duration-500 ease-out hover:scale-105"
//         />
//       </div>
//       <p className="mt-4 text-sm md:text-base text-[#3b342c]">
//         {project.name}
//       </p>
//     </article>
//   ))}
// </div>

//       </section>
//     </main>
//   );
// }
// app/projects/page.tsx

"use client";

import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    name: "Eclectic Minimalism",
    image: "/projects/eclectic-minimalism.jpg",
    slug: "eclectic-minimalism", // route: /projects/eclectic-minimalism
  },
  {
    id: 2,
    name: "Modern Classic",
    image: "/projects/modern-classic.jpg",
    slug: "modern_classic",
  },
  {
    id: 3,
    name: "Modern Artistry",
    image: "/projects/modern-artistry.jpg",
    slug: "modernartisry",
  },
  {
    id: 4,
    name: "Modern Contemporary",
    image: "/projects/modern-contemporary.jpg",
    slug: "moderncontemporary",
  },
  {
    id: 5,
    name: "Neo Modern Classic",
    image: "/projects/neo-modern-classic.jpg",
    slug: "neomodernclassic",
  },
  {
    id: 6,
    name: "Classic Contemporary",
    image: "/projects/classic-contemporary.jpg",
    slug: "classiccontemporary",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen w-full bg-[#f4f4f5]">
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10 py-20">
        {/* Heading + intro text */}
        <header className="mb-12 pt-20">
          <h1 className="text-2xl md:text-3xl tracking-[0.35em] uppercase text-[#2f2a25]">
            OUR PROJECTS
          </h1>

          <p className="mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-[#6b6458] max-w-4xl">
            From the warmth of residential spaces to the sophistication of
            corporate offices, our studio designs and crafts spaces that
            seamlessly integrate into a myriad of environments. Each project is
            a bespoke composition—functional, beautiful, and rooted in a strong
            sense of place.
          </p>
        </header>

        {/* Grid of project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-14">
          {PROJECTS.map((project) => {
            const card = (
              <article className="flex flex-col">
                <div className="overflow-hidden rounded-3xl bg-[#d4d4d8]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full aspect-[4/3] md:aspect-[16/9] object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-sm md:text-base text-[#3b342c]">
                  {project.name}
                </p>
              </article>
            );

            // If slug is defined, make the whole card clickable
            return project.slug ? (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="block"
              >
                {card}
              </Link>
            ) : (
              <div key={project.id}>{card}</div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
