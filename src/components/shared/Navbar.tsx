import { HeartPulse, Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-teal p-2 rounded-xl">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <span className="font-serif font-bold text-xl text-navy">
              PH-Health-Care
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-navy/80 hover:text-teal font-medium transition-colors"
            >
              Home
            </Link>
            <a
              href="/#doctors"
              className="text-navy/80 hover:text-teal font-medium transition-colors"
            >
              Doctors
            </a>
            <a
              href="/#services"
              className="text-navy/80 hover:text-teal font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="/#about"
              className="text-navy/80 hover:text-teal font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-navy/80 hover:text-teal font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-navy font-medium hover:text-teal transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-teal hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-navy hover:text-teal p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
