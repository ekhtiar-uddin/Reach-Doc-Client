"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { MapPin, Star, Stethoscope } from "lucide-react";
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 128,
    location: "New York Medical Center",
    experience: "15+ years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 94,
    location: "Westside Health Clinic",
    experience: "12+ years",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 5.0,
    reviews: 215,
    location: "Children's Hospital",
    experience: "10+ years",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
  },
];
export function TopDoctors() {
  return (
    <section className="py-24 bg-white" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            Meet Our Top Rated Doctors
          </h2>
          <p className="text-lg text-navy/70">
            Book appointments with the best specialists in your area, highly
            rated by thousands of patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-white rounded-2xl border border-gray-100 shadow-soft overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-sm text-navy">
                    {doctor.rating}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({doctor.reviews})
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-medium mb-4">
                  <Stethoscope className="w-4 h-4" />
                  {doctor.specialty}
                </div>

                <h3 className="text-xl font-serif font-bold text-navy mb-2">
                  {doctor.name}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {doctor.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Star className="w-4 h-4 text-gray-400" />
                    {doctor.experience} Experience
                  </div>
                </div>

                <button className="w-full bg-teal hover:bg-teal-600 text-white py-3 rounded-xl font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-teal font-medium hover:text-teal-600 flex items-center gap-2 mx-auto">
            View All Doctors
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
