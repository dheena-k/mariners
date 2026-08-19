'use client'
import {
  Award,
  CalendarDays,
  Tag,
  PhoneCall,
} from "lucide-react";

export default function Expereince() {
  interface Experience {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

  const experiences: Experience[] = [
    {
      icon: <Award size={18} strokeWidth={1.8} />,
      title: "Best Resorts",
      description:
        "Handpicked premium resorts across India curated for high comfort and local connection.",
    },
    {
      icon: <CalendarDays size={18} strokeWidth={1.8} />,
      title: "Easy Booking",
      description:
        "Simple, hassle-free booking experience in minutes with flexible options.",
    },
    {
      icon: <Tag size={18} strokeWidth={1.8} />,
      title: "Best Prices",
      description:
        "Competitive rates with completely transparent terms and no hidden charges.",
    },
    {
      icon: <PhoneCall size={18} strokeWidth={1.8} />,
      title: "24/7 Support",
      description:
        "Round-the-clock friendly customer assistance for all your hospitality needs.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-500 sm:text-xs">
            Experience Meets Nature
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Why Choose Us
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              {/* Icon */}
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f8f2] text-green-700">
                {experience.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                {experience.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
