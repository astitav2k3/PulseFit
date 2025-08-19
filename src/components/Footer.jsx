import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react'
import { GlobalContext } from "../App";
import React, { useContext } from "react";  // ✅ Add useContext here

export default function Footer() {
  const { mapLink } = useContext(GlobalContext);
  return (
    <footer className="border-t border-white/5 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.svg" className="h-7 w-7" alt="PulseFit" />
            <span className="font-black text-lg">PulseFit</span>
          </div>
          <p className="text-gray-400 text-sm">
            Premium fitness studio with science-backed training, personal coaching, and community.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a
              href="https://wa.me/+917009171767?text=Hi%2C%20I%20want%20to%20inquire%20about%20this%20gym."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/classes" className="hover:text-white">Classes</Link></li>
            <li><Link to="/trainers" className="hover:text-white">Trainers</Link></li>
            <li><Link to="/membership" className="hover:text-white">Membership</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>+91 98765 43210</li>
            <li>hello@pulsefit.studio</li>
            <li>Mon–Sun: 6am – 10pm</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Location</h3>
          <p className="text-gray-400 text-sm">
            Elante Mall,<br /> Industrial Area Phase 1,<br /> Chandigarh, India 
          </p>
          <a
            href={mapLink.replace("&output=embed", "")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost mt-3"
          >
            Open in Maps
          </a>

        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PulseFit Gym. All rights reserved.
      </div>
    </footer>
  )
}
