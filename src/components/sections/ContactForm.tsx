"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    "w-full bg-white border border-jade/15 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors";
  const errorStyles = "text-red-500 text-sm mt-1";

  return (
    <section className="py-24 bg-[#050A0B] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-jade/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-6xl md:text-8xl leading-none tracking-tighter mb-8">
                CONTACT
                <br />
                <span className="text-jade">US</span>
              </h2>

              <div className="w-20 h-1 bg-jade mb-12" />

              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 max-w-md">
                Let&apos;s unlock together the next level of <span className="text-white font-medium">possibilities!</span>
                <br />
                <span className="text-jade font-medium">Reach out.</span>
              </p>
            </div>

            <div className="mt-16 space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Social Media</h3>
                <div className="flex gap-4">
                  {[
                    "instagram"
                  ].map((social) => (
                    <a
                      key={social}
                      href="https://www.instagram.com/elevexsocials/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-jade hover:border-jade transition-colors cursor-pointer"
                    >
                      <span className="sr-only">{social}</span>
                      {/* Instagram Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Get In Touch</h3>
                  <p className="text-white font-medium">elevexsocials@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Location</h3>
                  <p className="text-white font-medium">Coimbatore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-500">Name</label>
                  <input
                    {...register("name")}
                    id="name"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-jade transition-colors"
                  />
                  {errors.name && (
                    <p className={errorStyles}>{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-gray-500">Phone Number</label>
                  <input
                    {...register("phone")}
                    id="phone"
                    placeholder="Your Phone Number"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-jade transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-500">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="Your Email Address"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-jade transition-colors"
                  />
                  {errors.email && (
                    <p className={errorStyles}>{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm text-gray-500">Service</label>
                  <select
                    {...register("service")}
                    id="service"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-jade transition-colors appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-black text-gray-500">Select</option>
                    <option value="web-dev" className="bg-black">Custom Web Development</option>
                    <option value="ai-automation" className="bg-black">AI Automations</option>
                    <option value="social-media" className="bg-black">Social Media Marketing</option>
                    <option value="seo" className="bg-black">SEO & Growth</option>
                    <option value="apps-crms" className="bg-black">Next-Gen Apps & CRMs</option>
                    <option value="other" className="bg-black">Other</option>
                  </select>
                  {errors.service && (
                    <p className={errorStyles}>{errors.service.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-500">Message</label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={1}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/20 focus:outline-none focus:border-jade transition-colors resize-none"
                  style={{ minHeight: '3rem' }}
                />
                {errors.message && (
                  <p className={errorStyles}>{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-end pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-4 text-white font-bold text-2xl hover:text-jade transition-colors"
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT"}
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-jade group-hover:scale-110 transition-all duration-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>

              {submitSuccess && (
                <div className="flex items-center gap-2 text-jade mt-4">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
