export default function Home(){
  return (
    <main className="page-content-wrapper">
      <section className="pt-12 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide">
            LUXURY FURNITURE
            <span className="block italic font-normal text-luxury-600">
              Collection
            </span>
          </h1>

          <div className="w-24 h-0.5 bg-linear-to-r from-luxury-900 to-luxury-400" />

          <p className="text-xl md:text-2xl text-luxury-700 max-w-3xl font-light">
            Experience the epitome of elegance and craftsmanship.
          </p>
        </div>
      </section>
    </main>
  )
}
