
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>

      <main className="min-h-screen">

        {/* Header */}
        <section className="bg-green-50 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              Get In Touch
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600 sm:text-base">
              Have a question about a resort or your next getaway?
              We`d love to hear from you.
            </p>

          </div>
        </section>

        {/* Contact */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Let`s talk
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Contact our team and we`ll help you find the right
                  resort for your trip.
                </p>

                <div className="mt-8 space-y-5">

                  <div className="flex gap-4">
                    <Mail className="text-green-700" size={20} />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Email
                      </h3>

                      <p className="text-sm text-gray-600">
                        contact@mariners.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-green-700" size={20} />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Phone
                      </h3>

                      <p className="text-sm text-gray-600">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="text-green-700" size={20} />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Location
                      </h3>

                      <p className="text-sm text-gray-600">
                        Main Road, Yelagiri, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Form */}
              <form className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600"
                    placeholder="Your name"
                  />
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600"
                    placeholder="Your email"
                  />
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full rounded-lg bg-green-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>
        </section>

      </main>

    </>
  );
}
