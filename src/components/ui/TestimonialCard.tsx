"use client";

import { Star } from "lucide-react";

interface TestimonialCardProps {
  company: string;
  rating: number;
  tags: string[];
  content: string;
  results?: string[];
  flexTag?: string;
}

export default function TestimonialCard({
  company,
  rating,
  tags,
  content,
  results,
  flexTag,
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

      {/* Results */}
      {results && results.length > 0 && (
        <ul className="space-y-1.5 mb-4">
          {results.map((result) => (
            <li key={result} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="text-primary mt-0.5">&#10003;</span>
              {result}
            </li>
          ))}
        </ul>
      )}

      {/* Flex tag */}
      {flexTag && (
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-jade/10 to-aqua/10 text-jade text-xs font-semibold rounded-full border border-jade/20">
          {flexTag}
        </span>
      )}
    </div>
  );
}
