"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Upload, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
type Role = "patient" | "doctor" | "admin";
export function Register() {
  const [role, setRole] = useState<Role>("patient");
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            Create an Account
          </h2>
          <p className="text-gray-500">
            Join PH-Health-Care to manage your healthcare journey
          </p>
        </div>

        {/* Role Selector */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <button
            onClick={() => setRole("patient")}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${role === "patient" ? "border-teal bg-teal/5 text-teal" : "border-gray-200 bg-white text-gray-500 hover:border-teal/50"}`}
          >
            <User
              className={`w-8 h-8 ${role === "patient" ? "text-teal" : "text-gray-400"}`}
            />
            <span className="font-medium">Patient</span>
          </button>

          <button
            onClick={() => setRole("doctor")}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${role === "doctor" ? "border-teal bg-teal/5 text-teal" : "border-gray-200 bg-white text-gray-500 hover:border-teal/50"}`}
          >
            <Stethoscope
              className={`w-8 h-8 ${role === "doctor" ? "text-teal" : "text-gray-400"}`}
            />
            <span className="font-medium">Doctor</span>
          </button>

          <button
            onClick={() => setRole("admin")}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${role === "admin" ? "border-teal bg-teal/5 text-teal" : "border-gray-200 bg-white text-gray-500 hover:border-teal/50"}`}
          >
            <ShieldCheck
              className={`w-8 h-8 ${role === "admin" ? "text-teal" : "text-gray-400"}`}
            />
            <span className="font-medium">Admin</span>
          </button>
        </div>

        {/* Dynamic Form */}
        <motion.div
          key={role}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Common Fields */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {/* Role Specific Fields */}
              {role === "admin" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-navy mb-2">
                      Profile Photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-teal transition-colors cursor-pointer">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <span className="relative rounded-md font-medium text-teal hover:text-teal-600">
                            Upload a file
                          </span>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {role === "patient" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="123 Main St, City"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-navy mb-2">
                      Profile Photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-teal transition-colors cursor-pointer">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <span className="relative rounded-md font-medium text-teal hover:text-teal-600">
                            Upload a file
                          </span>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {role === "doctor" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="MED-123456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Gender
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors bg-white">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Experience (Years)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Appointment Fee ($)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="150"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Qualification
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="MD, MBBS"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Current Working Place
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="City Hospital"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Designation
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="Senior Consultant"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-navy mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                      placeholder="Clinic Address"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-navy mb-2">
                      Specialties (Select multiple)
                    </label>
                    <select
                      multiple
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors bg-white min-h-[100px]"
                    >
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="dermatology">Dermatology</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Hold Cmd/Ctrl to select multiple
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-teal hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal transition-colors"
              >
                Create {role.charAt(0).toUpperCase() + role.slice(1)} Account
              </button>
            </div>
          </form>
        </motion.div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-teal hover:text-teal-600"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
