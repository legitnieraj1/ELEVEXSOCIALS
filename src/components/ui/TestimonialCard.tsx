"use client";

import { Star } from "lucide-react";

interface TestimonialCardProps {
  company: string;
  rating: number;
  tags: string[];
  content: string;
}

export default function TestimonialCard({
  company,
  rating,
  tags,
  content,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-jade/10 rounded-2xl p-6 hover:bg-jade/5 hover:border-primary/50 transition-all duration-300 group">
      {/* Company name and rating */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">
              {company.charAt(0)}
            </span>
          </div>
          <h3 className="text-lg font-bold text-text-primary">{company}</h3>
        </div>
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <p className="text-text-secondary leading-relaxed mb-4">{content}</p>

      {/* Orange accent line */}
      <div className="w-12 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
