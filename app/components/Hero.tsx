"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px]">
      {/* Background */}
      <Image
        src="/hero1.png"
        alt="Resort"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Heading */}
        <div className="mb-8 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Find Your Perfect Escape
          </h1>

          <p className="mt-3 text-sm font-medium sm:text-base">
            Relax
            <span className="mx-2 opacity-80">•</span>
            Explore
            <span className="mx-2 opacity-80">•</span>
            Enjoy Your Stay
          </p>
        </div>

        {/* Search Box */}
        <div
          className="
            w-full max-w-6xl
            rounded-2xl
            border border-white/30
            bg-white/85
            p-2
            shadow-2xl
            backdrop-blur-md
            sm:p-3
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1.5fr]">
            {/* Location */}
            <div
              className="
                relative flex min-h-[70px] flex-col justify-center
                px-4 py-3
                after:absolute after:bottom-0 after:left-1/2 after:h-px
                after:w-16 after:-translate-x-1/2 after:bg-gray-300/70
                md:px-5
                md:after:bottom-auto md:after:right-0 md:after:left-auto
                md:after:top-1/2 md:after:h-8 md:after:w-px
                md:after:translate-x-0 md:after:-translate-y-1/2
              "
            >
              <label className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                Location
              </label>

              <select className="w-full cursor-pointer appearance-none bg-transparent text-sm font-medium text-gray-800 outline-none">
                <option>Select resort location</option>
                <option>Maldives</option>
                <option>Bali</option>
                <option>Thailand</option>
              </select>
            </div>

            {/* Check-in */}
            <div
              className="
                relative flex min-h-[70px] flex-col justify-center
                px-4 py-3
                after:absolute after:bottom-0 after:left-1/2 after:h-px
                after:w-16 after:-translate-x-1/2 after:bg-gray-300/70
                md:px-5
                md:after:bottom-auto md:after:right-0 md:after:left-auto
                md:after:top-1/2 md:after:h-8 md:after:w-px
                md:after:translate-x-0 md:after:-translate-y-1/2
              "
            >
              <label className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                Check-in
              </label>

              <input
                type="date"
                className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
              />
            </div>

            {/* Check-out */}
            <div
              className="
                relative flex min-h-[70px] flex-col justify-center
                px-4 py-3
                after:absolute after:bottom-0 after:left-1/2 after:h-px
                after:w-16 after:-translate-x-1/2 after:bg-gray-300/70
                md:px-5
                md:after:bottom-auto md:after:right-0 md:after:left-auto
                md:after:top-1/2 md:after:h-8 md:after:w-px
                md:after:translate-x-0 md:after:-translate-y-1/2
              "
            >
              <label className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                Check-out
              </label>

              <input
                type="date"
                className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
              />
            </div>

            {/* Guests + Search */}
            <div className="flex min-h-[70px] items-center gap-3 px-4 py-3 md:px-5">
              <div className="min-w-0 flex-1">
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                  Guests
                </label>

                <select className="w-full cursor-pointer bg-transparent text-sm font-medium text-gray-800 outline-none">
                  <option>2 Guests, 1 Room</option>
                  <option>3 Guests, 1 Room</option>
                  <option>4 Guests, 2 Rooms</option>
                  <option>5 Guests, 2 Rooms</option>
                </select>
              </div>

              <button
                type="button"
                className="
                  h-11 shrink-0 rounded-xl
                  bg-green-700 px-5
                  text-sm font-semibold text-white
                  shadow-sm
                  transition
                  hover:bg-green-800
                  active:scale-[0.98]
                "
              >
                Search Resorts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
