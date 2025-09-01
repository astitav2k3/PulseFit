import { GlobalContext } from "../App";
import React, { useContext } from "react";

export default function Contact() {
  const { mapLink } = useContext(GlobalContext);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-black tracking-tight">
        Get in touch
      </h1>
      <p className="text-gray-400 mt-2">
        Book a free trial or ask us anything.
      </p>

      {/* Form */}
      <form
        className="card p-6 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        action="https://formsubmit.co/astitavmittal@gmail.com"
        method="POST"
      >
        {/* Name */}
        <div className="grid gap-2">
          <label className="text-sm text-gray-300">Name</label>
          <input
            className="bg-gray-900 rounded-xl p-3 border border-white/10 w-full"
            placeholder="Your full name"
            name="name"
            required
          />
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <label className="text-sm text-gray-300">Email</label>
          <input
            type="email"
            className="bg-gray-900 rounded-xl p-3 border border-white/10 w-full"
            placeholder="you@example.com"
            name="email"
            required
          />
        </div>

        {/* Phone with country code */}
<div className="grid gap-2 md:col-span-2">
  <label className="text-sm text-gray-300">Phone</label>
  <div className="flex flex-col sm:flex-row gap-2">
    <input
      type="text"
      className="bg-gray-900 rounded-xl p-3 border border-white/10 w-full sm:w-32"
      placeholder="Country Code (e.g. 91)"
      name="countryCode"
    />
    <input
      type="tel"
      className="bg-gray-900 rounded-xl p-3 border border-white/10 flex-1 w-full"
      placeholder="Phone Number"
      name="phone"
      required
    />
  </div>
  <p className="text-xs text-gray-500">
    Enter your country code without the + (e.g., 91 for India, 1 for USA).
  </p>
</div>

        {/* Select Plan */}
        <div className="grid gap-2">
          <label className="text-sm text-gray-300">Select Plan</label>
          <select
            className="bg-gray-900 rounded-xl p-3 border border-white/10 w-full"
            name="plan"
            required
          >
            <option value="">Select a plan</option>
            <option value="Basic">Basic</option>
            <option value="PRO">PRO</option>
            <option value="Elite">Elite</option>
          </select>
        </div>

        {/* Choose Class */}
        <div className="grid gap-2">
          <label className="text-sm text-gray-300">Choose Class</label>
          <select
            className="bg-gray-900 rounded-xl p-3 border border-white/10 w-full"
            name="class"
            required
          >
            <option value="">Select a class</option>
            <option value="Yoga">Yoga</option>
            <option value="Zumba">Zumba</option>
            <option value="Strength Training">Strength Training</option>
            <option value="Cardio">Cardio</option>
          </select>
        </div>

        {/* Membership Duration */}
        <div className="grid gap-2">
          <label className="text-sm text-gray-300">Choose Duration Plan</label>
          <select
            className="bg-gray-900 rounded-xl p-3 border border-white/10 w-full"
            name="membership"
            required
          >
            <option value="">Select a plan</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Half-Yearly">Half-Yearly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        {/* Message */}
        <div className="grid gap-2 md:col-span-2">
          <label className="text-sm text-gray-300">Message</label>
          <textarea
            className="bg-gray-900 rounded-xl p-3 border border-white/10 min-h-[120px] w-full"
            placeholder="Tell us your goals…"
            name="message"
          />
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary md:col-span-2 w-full md:w-auto">
          Send Message
        </button>

        <p className="text-xs text-gray-500 md:col-span-2">
          By submitting, you agree to be contacted about your inquiry.
        </p>
      </form>

      {/* Map Embed */}
      <div className="mt-10 card overflow-hidden">
        <iframe
          title="Gym Location"
          src={mapLink.replace("&output=embed", "") + "&output=embed"}
          className="w-full h-72"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
