import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://mdmahfuz.com/tools/financial-statement-audit-reviewer";
const repositoryUrl = "https://github.com/himahfuz/Financial-Statement-Audit-Reviewer";
const downloadUrl = "https://github.com/himahfuz/Financial-Statement-Audit-Reviewer/raw/refs/heads/main/plugin.zip";

export const metadata: Metadata = {
  title: "Financial Statement Audit Reviewer | AI Pre-Sign Review Tool",
  description:
    "Download the AI-assisted Financial Statement Audit Reviewer by MD Mahfuzur Rahman. Review PDF and Excel financial statements for calculation errors, cross-statement inconsistencies, schedules and disclosures.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Financial Statement Audit Reviewer | MD Mahfuzur Rahman",
    description:
      "An AI-assisted pre-sign review tool for financial statements, with English and Bangla-English report options.",
    url: pageUrl,
    siteName: "MD Mahfuzur Rahman",
    type: "website",
  },
};

export default function FinancialStatementAuditReviewerPage() {
  return (
    <article className="w-full max-w-4xl mx-auto pb-20">
      <header className="glass-panel p-8 md:p-12 mb-8">
        <p className="text-sm font-semibold tracking-wide uppercase text-[var(--color-brand-primary)] mb-3">
          Accounting · Auditing · AI Automation
        </p>
        <h1 className="font-poppins font-bold text-3xl md:text-5xl text-[var(--color-text-primary)] leading-tight mb-5">
          Financial Statement Audit Reviewer
        </h1>
        <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4">
          An AI-assisted pre-sign review tool designed to help accounting and audit
          professionals identify calculation issues, inconsistencies and presentation
          concerns in financial statements before finalisation.
        </p>
        <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-7">
          This is a downloadable AI assistant/plugin bundle for your ChatGPT workspace,
          not a web tool that runs directly in your browser. Download the ZIP package
          and follow the setup guide below.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={downloadUrl} className="btn-glass" download>
            Download Plugin ZIP
          </a>
          <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="btn-glass">
            View GitHub Repository
          </a>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mt-4 leading-relaxed">
          The package contains the skill configuration files. See the{" "}
          <Link
            href="/blog/financial-statement-audit-reviewer"
            className="font-semibold text-[var(--color-brand-primary)] underline underline-offset-2 hover:opacity-80"
          >
            step-by-step installation guide
          </Link>{" "}
          to set it up in your ChatGPT workspace.
        </p>
      </header>

      <section className="glass-panel p-7 md:p-9 mb-6">
        <h2 className="font-poppins font-bold text-2xl text-[var(--color-text-primary)] mb-4">
          What does it review?
        </h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
          Upload a financial statement in PDF or Excel format and run the relevant
          command. The reviewer checks the information it can access in the file and
          highlights potential issues for professional follow-up.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-secondary)]">
          <li>Mathematical accuracy, totals and subtotals</li>
          <li>Consistency between financial statements</li>
          <li>Opening and closing balance continuity</li>
          <li>Supporting schedules, fixed assets and depreciation</li>
          <li>Notes, cross-references, dates and reporting periods</li>
          <li>Disclosure, wording, grammar and presentation concerns</li>
        </ul>
      </section>

      <section className="glass-panel p-7 md:p-9 mb-6">
        <h2 className="font-poppins font-bold text-2xl text-[var(--color-text-primary)] mb-4">
          Available review commands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/40 p-5">
            <h3 className="font-semibold text-lg text-[var(--color-text-primary)] mb-2">/audit</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Generates the pre-review report in English.</p>
          </div>
          <div className="rounded-xl border border-white/40 p-5">
            <h3 className="font-semibold text-lg text-[var(--color-text-primary)] mb-2">/auditbd</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Generates the pre-review report in Bangla-English.</p>
          </div>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-5">
          The workflow produces a DOCX report containing findings, suggested corrective
          actions and a 100-mark scorecard.
        </p>
      </section>

      <section className="glass-panel p-7 md:p-9 mb-6">
        <h2 className="font-poppins font-bold text-2xl text-[var(--color-text-primary)] mb-4">
          Who is it for?
        </h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The tool is intended as a productivity aid for Chartered Accountancy students,
          accountants and audit professionals who prepare or review financial statements.
          It can help organise a preliminary review and make potential exceptions easier
          to investigate.
        </p>
      </section>

      <section className="glass-panel p-7 md:p-9 mb-8">
        <h2 className="font-poppins font-bold text-2xl text-[var(--color-text-primary)] mb-4">
          Important professional limitation
        </h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          This is an AI-assisted preliminary review aid. It is not an audit opinion,
          assurance engagement or certification, and it does not replace audit procedures
          or professional judgment. Findings must be independently evaluated by the
          responsible professional before any financial statement is finalised or signed.
        </p>
      </section>

      <footer className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
        Developed by{" "}
        <Link href="/" className="text-[var(--color-brand-primary)] font-semibold hover:underline">
          MD Mahfuzur Rahman
        </Link>
        . Explore more{" "}
        <Link href="/tools" className="text-[var(--color-brand-primary)] hover:underline">
          accounting, VAT and tax tools
        </Link>
        {" "}or view the project source and updates on{" "}
        <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-primary)] hover:underline">
          GitHub
        </a>
        .
      </footer>
    </article>
  );
}
