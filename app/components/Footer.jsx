import Link from "next/link";
import {
	Leaf,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="w-full bg-[#0f5a32] text-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:py-12">
					<div>
						<Link href="/" className="flex items-center gap-2">
							<Leaf size={19} className="text-yellow-400" />
							<h2 className="text-sm font-bold sm:text-base">
								 Mariner`s Resort
							</h2>
						</Link>
						<p className="mt-4 max-w-sm text-xs leading-5 text-green-100/70 sm:text-sm">
							Immerse yourself in handpicked nature escapes across India.
							Modern hospitality designed around local ecology, sustainability,
							and absolute comfort.
						</p>
					</div>

					<div>
						<h3 className="text-xs font-semibold sm:text-sm">Quick Links</h3>
						<ul className="mt-4 space-y-2 text-xs text-green-100/70">
							<li><Link href="/" className="hover:text-white">Home</Link></li>
							<li><Link href="/property" className="hover:text-white">Resorts</Link></li>
							<li><Link href="/about" className="hover:text-white">About</Link></li>
							<li><Link href="/contact" className="hover:text-white">Contact</Link></li>
							<li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
						</ul>
					</div>

					<div>
						<h3 className="text-xs font-semibold sm:text-sm">Contact Us</h3>
						<div className="mt-4 space-y-3 text-xs text-green-100/70">
							<a href="mailto:contact@mariners.com" className="flex items-start gap-2 hover:text-white">
								<Mail size={13} className="mt-0.5 shrink-0 text-yellow-400" />
								<span>contact@mariners.com</span>
							</a>
							<a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white">
								<Phone size={13} className="shrink-0 text-yellow-400" />
								<span>+91 98765 43210</span>
							</a>
							<div className="flex items-start gap-2">
								<MapPin size={13} className="mt-0.5 shrink-0 text-yellow-400" />
								<span>Main Road, Yelagiri, Tamil Nadu, India</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-green-100/10 py-6">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<p className="text-[11px] text-green-100/60 sm:text-xs">
							  © 2026  Mariner`s Resort. All rights reserved.
						</p>
						<div className="flex items-center gap-4 text-green-100/60">
							<a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF size={14} /></a>
							<a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram size={15} /></a>
							<a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter size={15} /></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
