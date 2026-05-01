import type { Metadata } from "next";
import { ShieldCheck, Mail, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | MD Mahfuzur Rahman",
  description:
    "Read the Privacy Policy for mdmahfuz.com. Learn how your data is handled when you visit this professional portfolio and use tools like the Consultant VAT & Tax Calculator.",
};

const sections = [
  {
    number: "01",
    title: "Introduction",
    content: (
      <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
        Welcome to <strong className="text-[var(--color-text-primary)]">mdmahfuz.com</strong>. This
        Privacy Policy explains how your information is collected, used, and protected when you visit
        this website and use its professional tools.
      </p>
    ),
  },
  {
    number: "02",
    title: "Information Collection and Use",
    content: (
      <div className="space-y-4 text-[15px]">
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          This website serves as a professional portfolio and a hub for accounting and tax
          calculation tools.
        </p>
        <div className="space-y-3">
          <div className="flex gap-3 p-4 rounded-xl bg-[var(--color-brand-primary)]/5 border border-[var(--color-brand-primary)]/15">
            <span className="text-[var(--color-brand-primary)] mt-0.5 shrink-0">✦</span>
            <div>
              <p className="font-semibold text-[var(--color-text-primary)] mb-1">
                Calculators &amp; Tools
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                All calculations (such as the VAT &amp; Tax Calculator) are performed strictly on
                your local browser (client-side). We{" "}
                <strong className="text-[var(--color-text-primary)]">
                  DO NOT collect, store, or transmit
                </strong>{" "}
                any financial data, input amounts, or calculation results to our servers.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[var(--color-text-secondary)] mt-0.5 shrink-0">✦</span>
            <div>
              <p className="font-semibold text-[var(--color-text-primary)] mb-1">
                Automatically Collected Data
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We may use basic analytics and security services (like Cloudflare) that temporarily
                log standard internet data (such as IP addresses and browser types) to ensure site
                security and monitor performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Cookies",
    content: (
      <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
        This website may use essential cookies to ensure the site functions properly and to enhance
        your user experience. We{" "}
        <strong className="text-[var(--color-text-primary)]">do not</strong> use tracking cookies
        for targeted advertising.
      </p>
    ),
  },
  {
    number: "04",
    title: "Third-Party Services",
    content: (
      <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
        We may link to third-party services or professional profiles (like LinkedIn or GitHub).
        Please note that these external sites have their own privacy policies, and we do not hold
        responsibility for their practices.
      </p>
    ),
  },
  {
    number: "05",
    title: "Changes to This Policy",
    content: (
      <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
        We reserve the right to update this Privacy Policy at any time. Any changes will be
        reflected on this page with an updated{" "}
        <strong className="text-[var(--color-text-primary)]">&ldquo;Effective Date.&rdquo;</strong>
      </p>
    ),
  },
  {
    number: "06",
    title: "Contact Information",
    content: (
      <div className="text-[15px] space-y-3">
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          If you have any questions or concerns regarding this Privacy Policy or the tools provided,
          please contact me directly:
        </p>
        <a
          href="mailto:hello@mdmahfuz.com"
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)] font-medium hover:bg-[var(--color-brand-primary)]/20 transition-colors duration-200"
        >
          <Mail size={16} />
          hello@mdmahfuz.com
        </a>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      {/* Page Header */}
      <div className="glass-panel p-8 md:p-12 mb-8 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
          <div className="w-12 h-12 bg-[var(--color-brand-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-brand-primary)]">
            <ShieldCheck size={24} />
          </div>
          <h1 className="font-poppins font-bold text-[28px] md:text-[36px] text-[var(--color-text-primary)] leading-tight">
            Privacy Policy
          </h1>
        </div>
        <p className="font-inter text-[15px] text-[var(--color-text-secondary)] mt-2">
          Effective Date:{" "}
          <span className="font-medium text-[var(--color-text-primary)]">May 2026</span>
        </p>
        <p className="font-inter text-[14px] text-[var(--color-text-secondary)] mt-4 leading-relaxed w-full">
          Your privacy matters. This document outlines what data is collected, how it is used, and
          how it is protected when you interact with this site and its tools.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-5">
        {sections.map((section) => (
          <section key={section.number} className="glass-panel p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="font-poppins font-bold text-[13px] text-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 rounded-lg px-2.5 py-1 shrink-0 mt-0.5 tracking-wide">
                {section.number}
              </span>
              <h2 className="font-poppins font-semibold text-[18px] md:text-[20px] text-[var(--color-text-primary)] leading-snug">
                {section.title}
              </h2>
            </div>
            <div className="pl-0 md:pl-12">{section.content}</div>
          </section>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-8 flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-white/3 text-[13px] text-[var(--color-text-secondary)]">
        <Info size={15} className="shrink-0 mt-0.5 text-[var(--color-text-secondary)]" />
        <p className="leading-relaxed">
          This privacy policy applies solely to{" "}
          <strong className="text-[var(--color-text-primary)]">mdmahfuz.com</strong>. By continuing
          to use this website, you acknowledge and agree to this policy.
        </p>
      </div>
    </div>
  );
}
