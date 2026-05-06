"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { Activity, Search, ShieldCheck, Sparkles, Users } from "lucide-react";
export function Hero() {
  return (
    <section className="relative pt-20 pb-28 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 font-medium text-sm mb-6 border border-teal-100">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Healthcare</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-navy leading-[1.1] mb-6">
              Find Your Perfect Doctor —{" "}
              <span className="text-teal">Powered by AI</span>
            </h1>

            <p className="text-lg text-navy/70 mb-10 leading-relaxed max-w-xl">
              Describe your symptoms in your own words, and our advanced AI will
              instantly match you with the right specialist for your specific
              needs.
            </p>

            {/* AI Search Input */}
            <motion.div
              className="relative max-w-xl mb-10"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(29, 158, 117, 0)",
                  "0 0 20px rgba(29, 158, 117, 0.2)",
                  "0 0 0px rgba(29, 158, 117, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Sparkles className="h-5 w-5 text-teal" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-32 py-4 border-2 border-gray-100 rounded-2xl text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-0 transition-colors shadow-soft text-lg"
                placeholder="Describe your symptoms..."
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button className="bg-teal hover:bg-teal-600 text-white p-2.5 rounded-xl transition-colors flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  <span className="hidden sm:inline font-medium pr-2">
                    Search
                  </span>
                </button>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-teal hover:bg-teal-600 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md text-lg">
                Get Started
              </button>
              <button className="bg-white hover:bg-gray-50 text-navy border-2 border-gray-200 px-8 py-3.5 rounded-full font-medium transition-all text-lg">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Image & Badges */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                alt="Friendly female doctor smiling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal/10 mix-blend-multiply"></div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 -left-8 bg-white p-4 rounded-2xl shadow-soft flex items-center gap-4 border border-gray-50"
            >
              <div className="bg-blue-50 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Verified</p>
                <p className="font-bold text-navy">Top Specialists</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 -right-8 bg-white p-4 rounded-2xl shadow-soft flex items-center gap-4 border border-gray-50"
            >
              <div className="bg-teal-50 p-3 rounded-full">
                <Users className="w-6 h-6 text-teal" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Active Network
                </p>
                <p className="font-bold text-navy">500+ Doctors</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-1/2 -left-12 bg-white p-3 rounded-full shadow-soft border border-gray-50"
            >
              <div className="bg-rose-50 p-3 rounded-full">
                <Activity className="w-6 h-6 text-rose-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
