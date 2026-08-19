import Image from "next/image";
import Link from "next/link";

interface Resort {
  id: string;
  name: string;
  image: string;
  price: string;
  location: string;
  rating: number;
  description: string;
  guests: string;
  rooms: string;
}

const resorts: Resort[] = [
  {
    id: "resort1",
    name: "Mariner's Goa Resort",
    image: "/resort1.jpg",
    price: "₹5,000/night",
    location: "Goa, India",
    rating: 4.5,
    description:
      "Enjoy a peaceful tropical escape surrounded by nature. Our Goa resort offers comfortable rooms, beautiful views, and a relaxing atmosphere for your perfect holiday.",
    guests: "2-4 Guests",
    rooms: "2 Rooms",
  },
  {
    id: "resort2",
    name: "Mariner's Kerala Resort",
    image: "/resort2.jpg",
    price: "₹7,000/night",
    location: "Kerala, India",
    rating: 4.8,
    description:
      "Experience the beauty of Kerala with a comfortable stay surrounded by greenery, peaceful surroundings, and modern hospitality.",
    guests: "2-4 Guests",
    rooms: "2 Rooms",
  },
  {
    id: "resort3",
    name: "Mariner's Ooty Resort",
    image: "/resort3.jpg",
    price: "₹6,000/night",
    location: "Ooty, India",
    rating: 4.6,
    description:
      "Relax in the beautiful hills of Ooty. Enjoy cool weather, scenic views, comfortable accommodation, and a peaceful nature experience.",
    guests: "2-4 Guests",
    rooms: "2 Rooms",
  },
];

export default async function ResortDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const resort = resorts.find((item) => item.id === id);

  if (!resort) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Resort Not Found
        </h1>

        <p className="mt-3 text-gray-600">
          The resort you are looking for does not exist.
        </p>

        <Link
          href="/property"
          className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
        >
          Back to Resorts
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full">

      {/* Hero Image */}
      <section className="relative h-[300px] w-full sm:h-[400px] lg:h-[500px]">
        <Image
          src={resort.image}
          alt={resort.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">

            <p className="text-sm font-medium text-white ">
              {resort.location}
            </p>

            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {resort.name}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-gray-900">
                ⭐ {resort.rating}
              </span>

              <span className="text-sm text-white">
                Excellent Resort
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-10 sm:py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_350px] lg:px-8">

          {/* Left Content */}
          <div>

            {/* About */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                About this resort
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                {resort.description}
              </p>
            </div>

            {/* Resort Details */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Guests
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {resort.guests}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Rooms
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {resort.rooms}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Location
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {resort.location}
                </p>
              </div>

            </div>

            {/* Amenities */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold text-gray-900">
                Amenities
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">

                <div className="rounded-lg border border-gray-200 p-4">
                  🌿 Nature View
                </div>

                <div className="rounded-lg border border-gray-200 p-4">
                  🏊 Swimming Pool
                </div>

                <div className="rounded-lg border border-gray-200 p-4">
                  📶 Free Wi-Fi
                </div>

                <div className="rounded-lg border border-gray-200 p-4">
                  🍽️ Restaurant
                </div>

                <div className="rounded-lg border border-gray-200 p-4">
                  🚗 Free Parking
                </div>

                <div className="rounded-lg border border-gray-200 p-4">
                  🛎️ Room Service
                </div>

              </div>

            </div>

          </div>

          {/* Booking Card */}
          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-md sm:p-6 lg:sticky lg:top-24">

            <p className="text-sm text-gray-500">
              Starting from
            </p>

            <div className="mt-1 flex items-end gap-1">
              <span className="text-2xl font-bold text-gray-900">
                {resort.price}
              </span>
            </div>

            <div className="my-5 border-t border-gray-200" />

            {/* Check In */}
            <div>
              <label className="text-xs font-semibold text-gray-600">
                Check-in
              </label>

              <input
                type="date"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600"
              />
            </div>

            {/* Check Out */}
            <div className="mt-4">
              <label className="text-xs font-semibold text-gray-600">
                Check-out
              </label>

              <input
                type="date"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600"
              />
            </div>

            {/* Guests */}
            <div className="mt-4">
              <label className="text-xs font-semibold text-gray-600">
                Guests
              </label>

              <select className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
              </select>
            </div>

            {/* Book Button */}
            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-green-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Book Now
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">
              You won`t be charged yet
            </p>

          </aside>

        </div>
      </section>

    </main>
  );
}
