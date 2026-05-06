"use client";

import { motion } from "framer-motion";
import { HeartPulse, Lock, Mail } from "lucide-react";
import Link from "next/link";
export function Login() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow-soft border border-gray-100"
      >
        <div className="text-center mb-8">
          <div className="inline-flex bg-teal p-3 rounded-2xl mb-4">
            <HeartPulse className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-navy">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2">
            Sign in to your account to continue
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-teal focus:ring-teal border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-teal hover:text-teal-600">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal transition-colors"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-teal hover:text-teal-600"
            >
              Register here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
