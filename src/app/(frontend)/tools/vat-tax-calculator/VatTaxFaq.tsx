"use client";

import React, { useState } from "react";
import * as LucideIcons from "lucide-react";

export interface FaqItem {
  id: string;
  question: string;
  rawAnswer: string;
  content: React.ReactNode;
}

export interface FaqStep {
  stepNumber: number;
  stepTitle: string;
  stepSubtitle: string;
  icon: string;
  items: FaqItem[];
}

export const FAQ_STEPS: FaqStep[] = [
  {
    stepNumber: 1,
    stepTitle: "Step 1 — Basic VAT",
    stepSubtitle: "Core fundamentals of Bangladesh VAT & Tax calculation",
    icon: "HelpCircle",
    items: [
      {
        id: "faq-what-is-vat-tax-calculator",
        question: "What is a VAT Tax Calculator in Bangladesh?",
        rawAnswer:
          "A VAT Tax Calculator in Bangladesh is an online financial tool designed for businesses, consultants, vendors, and finance professionals to compute Value Added Tax (VAT), Tax Deducted at Source (TDS), and VAT Deducted at Source (VDS) in compliance with NBR (National Board of Revenue) regulations under the Value Added Tax and Supplementary Duty Act 2012 and Income Tax Act 2023. It accurately calculates the required Gross base, statutory deductions, client billing amount, and net receivable take-home pay.",
        content: (
          <div className="space-y-3 leading-relaxed">
            <p>
              A <strong>VAT Tax Calculator in Bangladesh</strong> is a specialized financial tool designed for accountants, entrepreneurs, corporate vendors, and consultants. It automatically calculates <strong>Value Added Tax (VAT / মূসক)</strong>, <strong>Tax Deducted at Source (TDS)</strong>, and <strong>VAT Deducted at Source (VDS)</strong> based on the statutory tax brackets enforced by the National Board of Revenue (NBR).
            </p>
            <p>
              Under the <em>Value Added Tax and Supplementary Duty Act, 2012</em> and the <em>Income Tax Act, 2023</em>, determining your invoice amount requires balancing both taxes. This calculator eliminates manual calculation errors and enables you to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[14px]">
              <li>Reverse gross-up invoices so income tax deductions at source do not reduce your target take-home pay.</li>
              <li>Break down all-inclusive client budgets into actual gross bills, VAT payable, and TDS deductions.</li>
              <li>Determine standard vendor bill totals for statutory compliance and Mushak-6.6 issuance.</li>
              <li>Avoid ±1 BDT rounding discrepancies common in multi-stage manual accounting.</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    stepNumber: 2,
    stepTitle: "Step 2 — VAT Calculation",
    stepSubtitle: "Formulas and steps for inclusive and exclusive VAT calculation",
    icon: "Calculator",
    items: [
      {
        id: "faq-calculate-vat-exclusive",
        question: "How do I calculate VAT from a VAT-exclusive amount?",
        rawAnswer:
          "To calculate VAT from a VAT-exclusive base amount, multiply the base amount by the VAT rate percentage: VAT Amount = Base Amount × (VAT Rate ÷ 100). The total payable is: Total Payable = Base Amount + VAT Amount. For example, for a base of 100,000 at 15% VAT, VAT is 15,000 and total payable is 115,000.",
        content: (
          <div className="space-y-3 leading-relaxed">
            <p>
              When an amount is <strong>VAT-exclusive</strong>, it represents the pure contract base before VAT is applied. To compute VAT, simply multiply the base amount by the applicable VAT rate:
            </p>
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4 font-mono text-[13.5px] space-y-1">
              <div><strong>VAT Amount</strong> = Base Amount × (VAT Rate ÷ 100)</div>
              <div><strong>Total Payable</strong> = Base Amount + VAT Amount</div>
            </div>
            <div className="bg-emerald-500/10 dark:bg-green-500/10 border border-emerald-500/20 rounded-xl p-4 text-[14px]">
              <div className="font-semibold text-emerald-800 dark:text-green-300 mb-1">Practical Example:</div>
              <p className="text-emerald-900 dark:text-emerald-200">
                If your agreed base service fee is <strong>100,000</strong> and the standard VAT rate is <strong>15%</strong>:
              </p>
              <ul className="list-disc pl-5 mt-1.5 space-y-1 text-[13.5px]">
                <li>VAT Amount = 100,000 × 0.15 = <strong>15,000</strong></li>
                <li>Total Invoice Amount = 100,000 + 15,000 = <strong>115,000</strong></li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "faq-calculate-vat-inclusive",
        question: "How do I calculate VAT from a VAT-inclusive amount?",
        rawAnswer:
          "To calculate VAT from a VAT-inclusive amount, first extract the base amount by dividing the total by (1 + VAT Rate ÷ 100): Base Amount = VAT-Inclusive Amount ÷ (1 + (VAT Rate ÷ 100)). Then subtract the base amount from the total to find the VAT: VAT Amount = VAT-Inclusive Amount − Base Amount. For example, a 115,000 total at 15% VAT yields a base of 100,000 and VAT of 15,000.",
        content: (
          <div className="space-y-3 leading-relaxed">
            <p>
              When a client gives you a <strong>VAT-inclusive total</strong>, VAT is already embedded inside the number. You cannot simply multiply the total by 15%, because VAT is legally levied on the <em>base</em>, not on the total.
            </p>
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4 font-mono text-[13.5px] space-y-1">
              <div><strong>Base Amount</strong> = VAT-Inclusive Amount ÷ (1 + (VAT Rate ÷ 100))</div>
              <div><strong>VAT Amount</strong> = VAT-Inclusive Amount − Base Amount</div>
            </div>
            <div className="bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-[14px]">
              <div className="font-semibold text-blue-900 dark:text-blue-300 mb-1">Practical Example:</div>
              <p className="text-blue-950 dark:text-blue-200">
                If a total invoice is <strong>115,000</strong> inclusive of 15% VAT:
              </p>
              <ul className="list-disc pl-5 mt-1.5 space-y-1 text-[13.5px]">
                <li>Base Amount = 115,000 ÷ 1.15 = <strong>100,000</strong></li>
                <li>VAT Amount = 115,000 − 100,000 = <strong>15,000</strong></li>
              </ul>
              <p className="text-[12.5px] text-[var(--color-text-secondary)] mt-2 italic">
                Notice: Multiplying 115,000 by 15% gives 17,250, which is incorrect. You must always use the division method above.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "faq-vat-in-gross-bill",
        question: "How can I calculate the VAT amount included in a gross bill?",
        rawAnswer:
          "To find the VAT amount included in a gross bill directly in one step, use the VAT Fraction formula: VAT Amount = Gross Bill × [VAT Rate ÷ (100 + VAT Rate)]. For Bangladesh's standard 15% VAT, multiply by 15/115 (or divide by 7.6667). For 10%, multiply by 10/110. For 7.5%, multiply by 7.5/107.5. For 5%, multiply by 5/105.",
        content: (
          <div className="space-y-3 leading-relaxed">
            <p>
              To extract the VAT portion directly from any gross bill in a single calculation step, use the <strong>VAT Fraction formula</strong>:
            </p>
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4 font-mono text-[13.5px]">
              <strong>VAT Amount</strong> = Gross Bill × [VAT Rate ÷ (100 + VAT Rate)]
            </div>
            <p className="text-[14px]">
              Here are the quick multiplier factors for standard NBR VAT rates in Bangladesh:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13.5px]">
              <div className="p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                <span className="font-semibold text-[var(--color-brand-primary)]">15% Standard Rate:</span>
                <div className="font-mono text-[12.5px] mt-0.5">Gross × (15 ÷ 115) ≈ Gross ÷ 7.6667</div>
              </div>
              <div className="p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                <span className="font-semibold text-[var(--color-brand-primary)]">10% Truncated Rate:</span>
                <div className="font-mono text-[12.5px] mt-0.5">Gross × (10 ÷ 110) ≈ Gross ÷ 11.0</div>
              </div>
              <div className="p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                <span className="font-semibold text-[var(--color-brand-primary)]">7.5% Commercial Rate:</span>
                <div className="font-mono text-[12.5px] mt-0.5">Gross × (7.5 ÷ 107.5) ≈ Gross ÷ 14.3333</div>
              </div>
              <div className="p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                <span className="font-semibold text-[var(--color-brand-primary)]">5% Reduced Rate:</span>
                <div className="font-mono text-[12.5px] mt-0.5">Gross × (5 ÷ 105) ≈ Gross ÷ 21.0</div>
              </div>
            </div>
            <div className="text-[13.5px] p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.03]">
              <strong>Example:</strong> On a gross bill of <strong>50,000</strong> inclusive of 15% VAT:
              <br />
              VAT Amount = 50,000 × (15 ÷ 115) = <strong>6,522</strong>. Gross Base = 50,000 − 6,522 = <strong>43,478</strong>.
            </div>
          </div>
        ),
      },
    ],
  },
  {
    stepNumber: 3,
    stepTitle: "Step 3 — Tax & Deduction",
    stepSubtitle: "TDS, VDS, Advance Income Tax, and combined deductions in Bangladesh",
    icon: "Receipt",
    items: [
      {
        id: "faq-difference-vat-tax-tds-vds",
        question: "What is the difference between VAT, TAX, TDS and VDS in Bangladesh?",
        rawAnswer:
          "In Bangladesh: VAT (Value Added Tax) is an indirect consumption tax added onto sales of goods and services (usually 15%). Income Tax / AIT is a direct tax on personal or business profits. TDS (Tax Deducted at Source) is income tax withheld by the client from the supplier's gross payment under the Income Tax Act 2023. VDS (VAT Deducted at Source) is VAT withheld by registered withholding entities at the time of payment under the VAT Act 2012 and deposited to the government treasury via Mushak-6.6 certificate.",
        content: (
          <div className="space-y-3 leading-relaxed">
            <p>
              In Bangladeshi accounting and taxation, these four terms have distinct statutory meanings:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13.5px] mt-2">
              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-1.5">
                <div className="font-semibold text-[var(--color-brand-primary)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)]"></span>
                  1. VAT (Value Added Tax / মূসক)
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  An <strong>indirect tax</strong> on domestic consumption governed by the <em>VAT and Supplementary Duty Act, 2012</em>. It is added on top of the transaction base price and ultimately borne by the consumer.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-1.5">
                <div className="font-semibold text-[var(--color-brand-primary)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)]"></span>
                  2. Income Tax / AIT (আয়কর)
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  A <strong>direct tax</strong> assessed on personal earnings or corporate net profits under the <em>Income Tax Act, 2023</em>. It belongs to the earner and is not passed along as an invoice markup.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-1.5">
                <div className="font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  3. TDS (Tax Deducted at Source / উৎসে কর কর্তন)
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  The client/payer legally withholds income tax directly from the supplier's gross contract payment (e.g., 5%, 7.5%, 10%) and deposits it to the government under the supplier's e-TIN.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-1.5">
                <div className="font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  4. VDS (VAT Deducted at Source / উৎসে মূসক কর্তন)
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  When the buyer is a prescribed withholding entity (e.g., government body, NGO, bank, limited company), they withhold the VAT from the supplier's bill and issue an official <strong>Mushak-6.6 Certificate</strong>.
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "faq-calculate-vat-and-tds-together",
        question: "How do I calculate VAT and TDS together?",
        rawAnswer:
          "To calculate VAT and TDS together under Bangladesh regulations: 1) Identify the Gross Base amount. 2) Deduct TDS only from the Gross Base (TDS = Gross × Tax%). 3) Add VAT only on top of the Gross Base (VAT = Gross × VAT%). Crucially, TDS is never deducted from the VAT amount, and VAT is never applied to the tax deduction. For a 100,000 gross with 7.5% TDS and 15% VAT: Gross = 100,000; VAT (+15%) = 15,000; Total Bill = 115,000; TDS (-7.5%) = 7,500; Net cash paid to vendor = 92,500.",
        content: (
          <div className="space-y-3 leading-relaxed">
            <p>
              A fundamental rule in Bangladesh taxation is: <strong>TDS is deducted from the Gross Base amount, and VAT is added onto the Gross Base amount.</strong> TDS is never calculated on top of VAT.
            </p>
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4 space-y-2 font-mono text-[13px]">
              <div>1. <strong>Gross Base</strong> = Agreed Contract Amount</div>
              <div className="text-emerald-700 dark:text-emerald-400">2. <strong>Add VAT</strong> = Gross Base × (VAT Rate ÷ 100)</div>
              <div>3. <strong>Total Payable by Client</strong> = Gross Base + VAT Amount</div>
              <div className="text-rose-700 dark:text-rose-400">4. <strong>Less TDS</strong> = Gross Base × (Tax Rate ÷ 100)</div>
              <div>5. <strong>Net Payable to Vendor</strong> = Gross Base − TDS Amount</div>
            </div>
            <div className="bg-emerald-500/10 dark:bg-green-500/10 border border-emerald-500/20 rounded-xl p-4 text-[14px]">
              <div className="font-semibold text-emerald-800 dark:text-green-300 mb-1">Step-by-Step Numerical Example:</div>
              <p className="text-emerald-950 dark:text-emerald-200">
                Gross Contract = <strong>100,000</strong>, TDS Rate = <strong>7.5%</strong>, VAT Rate = <strong>15%</strong>:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[13.5px]">
                <li>Gross Base: <strong>100,000</strong></li>
                <li>Add VAT (+15%): +<strong>15,000</strong></li>
                <li>Total Invoice Billed to Client: 100,000 + 15,000 = <strong>115,000</strong></li>
                <li>Less TDS (−7.5% on Gross): −<strong>7,500</strong></li>
                <li>Net Amount Received by Vendor: 100,000 − 7,500 = <strong>92,500</strong></li>
              </ul>
              <p className="text-[12.5px] text-[var(--color-text-secondary)] mt-2">
                <em>Note on VDS:</em> If the client withholds VAT under VDS, the client pays 92,500 cash to the vendor, deposits 7,500 TDS to NBR, and deposits 15,000 VAT to NBR with a Mushak-6.6 certificate.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "faq-calculate-net-payable-after-tds",
        question: "How do I calculate net payable after deducting TDS?",
        rawAnswer:
          "To calculate net payable after deducting TDS: Net Payable = Gross Base − (Gross Base × Tax Rate ÷ 100). If you want to know the required gross contract to guarantee a specific target net take-home pay, reverse gross-up: Required Gross = Desired Net ÷ [1 − (Tax Rate ÷ 100)]. For instance, to take home 100,000 net after 7.5% TDS: Required Gross = 100,000 ÷ (1 - 0.075) = 100,000 ÷ 0.925 = 108,108. TDS withheld is 8,108, leaving exactly 100,000 net.",
        content: (
          <div className="space-y-3 leading-relaxed">
            <p>
              Depending on whether you start with the Gross contract or a target Net take-home, use one of the two formulas below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-1.5">
                <div className="font-semibold text-[var(--color-text-primary)]">A. Standard Deduction (Gross to Net)</div>
                <div className="font-mono text-[12.5px] p-2 bg-black/5 dark:bg-white/5 rounded">
                  Net = Gross − (Gross × Tax Rate%)
                </div>
                <p className="text-[13px] text-[var(--color-text-secondary)]">
                  On a 50,000 gross with 5% TDS: Tax = 2,500. Net Payable = 47,500.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-1.5">
                <div className="font-semibold text-[var(--color-brand-primary)]">B. Reverse Gross-Up (Net to Gross)</div>
                <div className="font-mono text-[12.5px] p-2 bg-black/5 dark:bg-white/5 rounded">
                  Gross = Desired Net ÷ (1 − Tax Rate%)
                </div>
                <p className="text-[13px] text-[var(--color-text-secondary)]">
                  To get 100,000 net after 7.5% TDS: Gross = 100,000 ÷ 0.925 = <strong>108,108</strong>.
                </p>
              </div>
            </div>
            <p className="text-[13.5px] text-[var(--color-text-secondary)]">
              This reverse gross-up is vital when negotiating consultancy contracts, ensuring that after the client deducts statutory TDS, your net bank deposit precisely equals your requested remuneration.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    stepNumber: 4,
    stepTitle: "Step 4 — Calculator Features",
    stepSubtitle: "Understanding the four calculation modes in this calculator",
    icon: "Layers",
    items: [
      {
        id: "faq-four-calculation-modes",
        question: "What are the four calculation modes available in this VAT Tax Calculator?",
        rawAnswer:
          "This calculator offers 4 modes: 1) Excluding VAT & Tax (Net): You enter the net cash you want; it calculates the required gross bill, TDS, and VAT. 2) Including VAT & Tax (Total): You enter the client's all-inclusive budget; it extracts VAT, calculates TDS, and reveals net pay. 3) Exclusive VAT, Inclusive Tax (Base Contract): You enter the base contract; it calculates TDS to withhold, adds VAT on gross, and gives total invoice. 4) Inclusive VAT, Exclusive Tax (Reverse VAT): You enter an amount with VAT where TDS was omitted; it extracts net base and reverse grosses for TDS.",
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>
              Real-world client negotiations in Bangladesh happen under different billing terms. This calculator provides four dedicated calculation modes to match every commercial scenario:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
                <div className="font-semibold text-[var(--color-brand-primary)] text-[14.5px] mb-1">
                  1. Excluding VAT & Tax (Net-to-Gross Mode)
                </div>
                <p className="text-[13.5px] text-[var(--color-text-secondary)]">
                  <strong>Best for:</strong> Freelancers, consultants, and professionals who agree on a fixed "in-hand" payment.
                  <br />
                  <strong>How it works:</strong> You enter the target net amount you want to receive. The calculator computes the required Gross amount so that after the client deducts Tax/TDS at source, your net pay remains 100% intact, and it adds the correct VAT for client billing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
                <div className="font-semibold text-[var(--color-brand-primary)] text-[14.5px] mb-1">
                  2. Including VAT & Tax (Total Budget Mode)
                </div>
                <p className="text-[13.5px] text-[var(--color-text-secondary)]">
                  <strong>Best for:</strong> Corporate procurement and projects with a fixed, lump-sum client budget.
                  <br />
                  <strong>How it works:</strong> You input the total budget. The calculator strips out the VAT portion first to establish the Gross Base, then calculates the TDS deduction to show the vendor's actual net take-home earnings.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
                <div className="font-semibold text-[var(--color-brand-primary)] text-[14.5px] mb-1">
                  3. Exclusive VAT, Inclusive Tax (Base Contract Mode)
                </div>
                <p className="text-[13.5px] text-[var(--color-text-secondary)]">
                  <strong>Best for:</strong> Standard vendor contracts where the agreed price is the gross service fee.
                  <br />
                  <strong>How it works:</strong> You input the base contract amount. The calculator computes the TDS to be deducted from this base, calculates VAT to be added on top, and displays both the final client invoice and your net receivable.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
                <div className="font-semibold text-[var(--color-brand-primary)] text-[14.5px] mb-1">
                  4. Inclusive VAT, Exclusive Tax (Reverse VAT Mode)
                </div>
                <p className="text-[13.5px] text-[var(--color-text-secondary)]">
                  <strong>Best for:</strong> Resolving contract disputes where an initial price was quoted with VAT, but without considering TDS.
                  <br />
                  <strong>How it works:</strong> The calculator extracts the base net from the VAT-inclusive price, then reverse gross-ups that base for Tax/TDS so that your final net income is preserved after withholding.
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function VatTaxFaq() {
  // Track open state for each FAQ item. Step 1 first item is open by default.
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-what-is-vat-tax-calculator": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_STEPS.forEach((step) => {
      step.items.forEach((item) => {
        allOpen[item.id] = true;
      });
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const allCount = FAQ_STEPS.reduce((acc, step) => acc + step.items.length, 0);
  const openCount = Object.values(openItems).filter(Boolean).length;
  const isAllOpen = openCount === allCount;

  return (
    <section
      id="faq-section"
      aria-labelledby="faq-main-heading"
      className="max-w-6xl mx-auto mt-16 pt-8 border-t border-black/10 dark:border-white/10"
    >
      {/* Section Header */}
      <div className="glass-panel p-8 md:p-10 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] text-[12px] font-semibold mb-3">
              <LucideIcons.HelpCircle size={14} />
              <span>Knowledge Base & Accounting Guide</span>
            </div>
            <h2
              id="faq-main-heading"
              className="font-poppins font-bold text-[26px] md:text-[32px] text-[var(--color-text-primary)] leading-tight"
            >
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="font-inter text-[14px] md:text-[15px] text-[var(--color-text-secondary)] mt-2">
              Complete guide on VAT, Tax, TDS, and VDS calculations in Bangladesh. Designed for accountants, vendors, consultants, and procurement teams.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {isAllOpen ? (
              <button
                type="button"
                onClick={collapseAll}
                className="px-4 py-2 text-[13px] font-medium rounded-lg border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-[var(--color-text-secondary)]"
              >
                Collapse All
              </button>
            ) : (
              <button
                type="button"
                onClick={expandAll}
                className="px-4 py-2 text-[13px] font-medium rounded-lg bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/20 transition-colors cursor-pointer"
              >
                Expand All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Step-by-Step FAQ Groups */}
      <div className="space-y-10">
        {FAQ_STEPS.map((step) => {
          return (
            <div key={step.stepNumber} className="space-y-4">
              {/* Step Header */}
              <div className="flex items-center gap-3 pb-2 border-b border-black/10 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center font-bold text-[14px]">
                  {step.stepNumber}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-[18px] md:text-[20px] text-[var(--color-text-primary)]">
                    {step.stepTitle}
                  </h3>
                  <p className="text-[13px] text-[var(--color-text-secondary)] font-inter">
                    {step.stepSubtitle}
                  </p>
                </div>
              </div>

              {/* Questions Accordion */}
              <div className="space-y-3">
                {step.items.map((item) => {
                  const isOpen = !!openItems[item.id];
                  return (
                    <div
                      key={item.id}
                      className={`glass-panel transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "border-[var(--color-brand-primary)]/30 shadow-md"
                          : "hover:border-black/20 dark:hover:border-white/20"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`content-${item.id}`}
                        className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer transition-colors"
                      >
                        <span className="font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] leading-snug">
                          {item.question}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 ${
                            isOpen
                              ? "bg-[var(--color-brand-primary)] text-white rotate-180"
                              : "bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)]"
                          }`}
                        >
                          <LucideIcons.ChevronDown size={16} />
                        </div>
                      </button>

                      {isOpen && (
                        <div
                          id={`content-${item.id}`}
                          className="px-5 pb-6 pt-2 text-[14px] md:text-[15px] text-[var(--color-text-primary)] border-t border-black/5 dark:border-white/5 font-inter"
                        >
                          {item.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Helpful Resources Footer Box */}
      <div className="mt-12 glass-panel p-6 md:p-8 border border-[var(--color-brand-primary)]/20 bg-gradient-to-r from-[var(--color-brand-primary)]/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex-1 min-w-0">
          <h4 className="font-poppins font-semibold text-[17px] text-[var(--color-text-primary)] mb-1">
            Need an Automated Mushak 6.6 Certificate?
          </h4>
          <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed">
            Generate NBR-compliant Mushak-6.6 (Certificate of Tax & VAT Deduction at Source) with automatic calculation and 1-click PDF download.
          </p>
        </div>
        <a
          href="/tools/mushak-6.6"
          className="btn-primary shrink-0 text-center text-[13px] py-2.5 px-6 inline-flex items-center gap-2"
        >
          <span>Open Mushak 6.6 Tool</span>
          <LucideIcons.ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

