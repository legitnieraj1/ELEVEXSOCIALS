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
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: "1.2" }}
          >
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-text-secondary">
            Ready to transform your digital presence? Let&apos;s talk.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                {...register("name")}
                placeholder="Your Name *"
                className={inputStyles}
              />
              {errors.name && (
                <p className={errorStyles}>{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email *"
                className={inputStyles}
              />
              {errors.email && (
                <p className={errorStyles}>{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className={inputStyles}
            />
            <input
              {...register("company")}
              placeholder="Company Name"
              className={inputStyles}
            />
          </div>

          <div>
            <select
              {...register("service")}
              className={`${inputStyles} cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled>
                Select a service *
              </option>
              <option value="web-dev">Custom Web Development</option>
              <option value="ai-automation">AI Automations</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="seo">SEO & Growth</option>
              <option value="apps-crms">Next-Gen Apps & CRMs</option>
              <option value="other">Other</option>
            </select>
            {errors.service && (
              <p className={errorStyles}>{errors.service.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register("message")}
              rows={6}
              placeholder="Tell us about your project *"
              className={`${inputStyles} resize-none`}
            />
            {errors.message && (
              <p className={errorStyles}>{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>

          {submitSuccess && (
            <div className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
