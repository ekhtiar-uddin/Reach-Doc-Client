"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import {
  Maximize,
  MessageSquare,
  Mic,
  MicOff,
  PhoneOff,
  Settings,
  Users,
  Video,
  VideoOff,
} from "lucide-react";
import { useState } from "react";
export function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  return (
    <div className="h-screen w-full bg-gray-950 flex flex-col overflow-hidden font-sans">
      {/* Top Bar */}
      <div className="h-16 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-4">
          <div className="bg-teal/20 p-2 rounded-lg">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
          </div>
          <div>
            <h2 className="text-white font-medium">
              Consultation with Dr. Sarah Jenkins
            </h2>
            <p className="text-gray-400 text-sm">00:14:32</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Users className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <MessageSquare className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Video Area */}
      <div className="flex-1 relative p-4 flex items-center justify-center">
        {/* Doctor Video (Main) */}
        <div className="w-full h-full max-w-6xl max-h-[80vh] bg-gray-900 rounded-3xl overflow-hidden relative shadow-2xl border border-gray-800">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1600"
            alt="Doctor Video Stream"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
            <span className="text-white font-medium">Dr. Sarah Jenkins</span>
          </div>
          <button className="absolute top-6 right-6 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/10 text-white hover:bg-black/70 transition-colors">
            <Maximize className="w-5 h-5" />
          </button>
        </div>

        {/* Patient Video (PiP) */}
        <motion.div
          drag
          dragConstraints={{
            left: -100,
            right: 100,
            top: -100,
            bottom: 100,
          }}
          className="absolute bottom-8 right-8 w-64 aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700 cursor-move z-20"
        >
          {isVideoOff ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-2xl text-white font-medium">
                You
              </div>
            </div>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
              alt="Your Video Stream"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white">
            You
          </div>
          {isMuted && (
            <div className="absolute top-2 right-2 bg-red-500/80 backdrop-blur-sm p-1.5 rounded-lg text-white">
              <MicOff className="w-3 h-3" />
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom Controls */}
      <div className="h-24 bg-gradient-to-t from-gray-950 to-transparent flex items-center justify-center gap-6 pb-6 z-10">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`p-4 rounded-2xl flex items-center justify-center transition-all ${isMuted ? "bg-red-500/20 text-red-500 hover:bg-red-500/30" : "bg-gray-800 text-white hover:bg-gray-700"}`}
        >
          {isMuted ? (
            <MicOff className="w-6 h-6" />
          ) : (
            <Mic className="w-6 h-6" />
          )}
        </button>

        <button
          onClick={() => setIsVideoOff(!isVideoOff)}
          className={`p-4 rounded-2xl flex items-center justify-center transition-all ${isVideoOff ? "bg-red-500/20 text-red-500 hover:bg-red-500/30" : "bg-gray-800 text-white hover:bg-gray-700"}`}
        >
          {isVideoOff ? (
            <VideoOff className="w-6 h-6" />
          ) : (
            <Video className="w-6 h-6" />
          )}
        </button>

        <button className="p-4 rounded-2xl flex items-center justify-center bg-red-500 text-white hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 px-8">
          <PhoneOff className="w-6 h-6 mr-2" />
          <span className="font-medium">End Call</span>
        </button>
      </div>
    </div>
  );
}
