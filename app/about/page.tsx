

export default function AboutPage() {
  return (
    <>

      <main className="min-h-screen">

        {/* Header */}
        <section className="bg-green-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              About Mariner's
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Experience Nature. Experience Comfort.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Mariner's Resort connects travelers with beautiful
              nature-focused stays across India.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">

              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Stay closer to nature
                </h2>

                <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
                  We carefully select resorts that provide comfort,
                  memorable experiences, and a strong connection with
                  their surroundings.
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
                  From peaceful mountain escapes to relaxing coastal
                  destinations, Mariner's helps you discover your
                  perfect getaway.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src="/resort1.jpg"
                  alt="Mariner's Resort"
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>

            </div>

          </div>
        </section>

      </main>

    </>
  );
}
