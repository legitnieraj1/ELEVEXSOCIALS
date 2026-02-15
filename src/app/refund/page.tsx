import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "ELEVEXSOCIALS refund policy. Learn about our commitment to client satisfaction and our clear, fair refund process.",
};

export default function RefundPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: "1.2" }}
          >
            Refund <span className="text-primary">Policy</span>
          </h1>
          <div className="w-24 h-1 bg-primary rounded-full mb-12" />

          <div className="space-y-10 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                1. Satisfaction Guarantee
              </h2>
              <p>
                At ELEVEXSOCIALS, client satisfaction is our top priority. We
                are committed to delivering high-quality digital solutions that
                meet your expectations. If you are not satisfied with our work,
                we will work with you to make it right.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                2. Eligibility for Refund
              </h2>
              <p className="mb-3">
                Refund requests are evaluated on a case-by-case basis. You may
                be eligible for a full or partial refund under the following
                conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  The project has not yet entered the development phase.
                </li>
                <li>
                  The delivered work significantly deviates from the agreed-upon
                  scope without prior approval.
                </li>
                <li>
                  The project is cancelled by ELEVEXSOCIALS due to unforeseen
                  circumstances.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                3. Non-Refundable Services
              </h2>
              <p className="mb-3">
                The following services are generally non-refundable:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Completed and delivered projects that meet the agreed scope.</li>
                <li>Third-party software licenses, domain registrations, or hosting fees.</li>
                <li>Consultation and strategy sessions that have already taken place.</li>
                <li>Rush or expedited service fees.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                4. Refund Process
              </h2>
              <p className="mb-3">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-2">
                <li>
                  Contact us at{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    our contact page
                  </Link>{" "}
                  or email us with your project details.
                </li>
                <li>
                  Provide the reason for the refund request along with any
                  supporting documentation.
                </li>
                <li>
                  Our team will review your request within 5-7 business days.
                </li>
                <li>
                  If approved, the refund will be processed within 10-14
                  business days.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                5. Dispute Resolution
              </h2>
              <p>
                If you are not satisfied with the outcome of your refund
                request, we encourage open communication to resolve any
                disputes. Our team is available to discuss and find a mutually
                agreeable solution. We believe in maintaining transparency and
                fairness in all our dealings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                6. Contact Us
              </h2>
              <p>
                For any questions regarding this refund policy or to initiate a
                refund request, please{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                . We are here to help.
              </p>
            </div>

            <div className="pt-8 border-t border-jade/10">
              <p className="text-text-muted text-sm">
                Last updated: February 2025
              </p>
              <p className="text-text-muted text-sm mt-1">
                This policy is subject to change. Please check back periodically
                for updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
