import Popularresort from "../components/Popularresort";

export default function PropertyPage() {
  return (
    <>

      <main className="min-h-screen">

        <section className="bg-green-50 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              Explore Our Properties
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Find Your Perfect Resort
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600 sm:text-base">
              Discover beautiful stays in some of India`s most
              peaceful destinations.
            </p>

          </div>
        </section>

        <Popularresort />

      </main>

    </>
  );
}
