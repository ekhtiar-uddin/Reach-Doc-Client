"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
const reviews = [
  {
    id: 1,
    name: "James Wilson",
    role: "Patient",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    quote:
      "The AI symptom checker is incredible. It matched me with a specialist who diagnosed an issue I've been struggling with for years. Booking was seamless.",
  },
  {
    id: 2,
    name: "Amanda Foster",
    role: "Patient",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    quote:
      "I love how easy it is to find doctors and read real reviews. The interface is clean, and I found a fantastic pediatrician for my daughter within minutes.",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Patient",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    quote:
      "Finally, a healthcare platform that feels modern and puts the patient first. The virtual consultation feature saved me a trip to the clinic.",
  },
];
export function PatientReviews() {
  return (
    <section className="py-24 bg-slate-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-navy/70">
            Don't just take our word for it. Hear from thousands of patients who
            found their perfect doctor through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-white p-8 rounded-2xl shadow-soft relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal/10" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed italic">
                {review.quote}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-50"
                />
                <div>
                  <h4 className="font-bold text-navy">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
