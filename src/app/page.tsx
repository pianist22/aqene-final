// export default function Home(){
//   return (
//     <main className="page-content-wrapper">
//       <section className="pt-12 pb-20 px-6 md:px-12 lg:px-20">
//         <div className="max-w-7xl mx-auto space-y-8">
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide">
//             <span className="block italic font-normal text-luxury-600">
//             </span>
//           </h1>
//           <div className="w-24 h-0.5 bg-linear-to-r from-luxury-900 to-luxury-400" />
//           <p className="text-xl md:text-2xl text-luxury-700 max-w-3xl font-light">
//           </p>
//         </div>
//       </section>
//     </main>
//   )
// }
// app/page.tsx
import Hero from "@/components/hero";
import WhyArchitectsChooseUs from "@/components/whychooseus";
import CraftsmanshipSection from "@/components/craftmanship";
import ProjectsSection from "@/components/theshaile";
import TestimonialsSection from "@/components/Testimonilas";
import TheShilpSection from "@/components/theshilp";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhyArchitectsChooseUs />
      <TheShilpSection />
      <CraftsmanshipSection />
      <ProjectsSection />
      < TestimonialsSection />
    </main>
  );
}
