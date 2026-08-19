import Image from "next/image";
import Link from "next/link";

export default function Popularresort() {
  interface Resort {
    image: string;
    price: string;
    location: string;
    rating: number;
    button: string;
    link: string;
  }

  const resorts: Resort[] = [
    {
      image: "/resort1.jpg",
      price: "₹5,000/night",
      location: "Goa",
      rating: 4.5,
      button: "Book Now",
      link: "/property/resort1",
    },
    {
      image: "/resort2.jpg",
      price: "₹7,000/night",
      location: "Kerala",
      rating: 4.8,
      button: "Book Now",
      link: "/property/resort2",
    },
    {
      image: "/resort3.jpg",
      price: "₹6,000/night",
      location: "Ooty",
      rating: 4.6,
      button: "Book Now",
      link: "/property/resort3",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-6 sm:mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-500 sm:text-xs">Our Recommendations</p>

          <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Popular Resorts
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {resorts.map((resort) => (
            <div
              key={resort.location}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-52 w-full sm:h-56 lg:h-60">
                <Image
                  src={resort.image}
                  alt={`${resort.location} resort`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">

                {/* Location + Rating */}
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {resort.location}
                  </h2>

                  <span className="shrink-0 rounded-full bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-700">
                    ⭐ {resort.rating}
                  </span>
                </div>

                {/* Price + Button */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-gray-700 sm:text-base">
                    <span className="block text-xs font-normal text-gray-500">
                      Starting
                    </span>
                    {resort.price}
                  </p>

                  <Link
                    href={resort.link}
                    className="shrink-0 rounded-lg bg-green-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-green-800"
                  >
                    {resort.button}
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
