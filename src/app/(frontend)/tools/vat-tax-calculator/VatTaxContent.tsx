import React from "react";
import * as LucideIcons from "lucide-react";

export default function VatTaxContent() {
  return (
    <article className="max-w-6xl mx-auto space-y-16 mt-8 font-inter">
      {/* 1. How to Use This VAT Tax Calculator */}
      <section aria-labelledby="how-to-use-heading" className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-black/10 dark:border-white/10">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center font-bold">
            <LucideIcons.ListOrdered size={22} />
          </div>
          <div>
            <h2
              id="how-to-use-heading"
              className="font-poppins font-bold text-[22px] md:text-[26px] text-[var(--color-text-primary)]"
            >
              How to Use This VAT Tax Calculator
            </h2>
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Follow three simple steps to compute bills, deductions, and receivables accurately.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 flex flex-col justify-between">
            <div>
              <span className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] text-white text-[14px] font-bold flex items-center justify-center mb-4">
                1
              </span>
              <h3 className="font-poppins font-semibold text-[17px] text-[var(--color-text-primary)] mb-2">
                Select Your Mode
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
                Choose the calculation mode matching your contract: Excluding VAT & Tax, Including VAT & Tax, Exclusive VAT, Inclusive Tax, or Inclusive VAT, Exclusive Tax.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 text-[12.5px] text-[var(--color-brand-primary)] font-medium">
              4 Commercial Calculation Modes
            </div>
          </div>

          <div className="glass-panel p-6 flex flex-col justify-between">
            <div>
              <span className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] text-white text-[14px] font-bold flex items-center justify-center mb-4">
                2
              </span>
              <h3 className="font-poppins font-semibold text-[17px] text-[var(--color-text-primary)] mb-2">
                Enter Amount & Rates
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
                Input your transaction amount (BDT), followed by the specific Tax/TDS rate (%) and VAT rate (%) applicable to your service or supply.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 text-[12.5px] text-[var(--color-brand-primary)] font-medium">
              Fully Customizable Percentage Inputs
            </div>
          </div>

          <div className="glass-panel p-6 flex flex-col justify-between">
            <div>
              <span className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] text-white text-[14px] font-bold flex items-center justify-center mb-4">
                3
              </span>
              <h3 className="font-poppins font-semibold text-[17px] text-[var(--color-text-primary)] mb-2">
                Review Breakdown
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
                Examine the instant itemized summary showing Gross Base, Tax Deduction, VAT addition, Total Client Invoice, and Net Take-Home Pay.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 text-[12.5px] text-[var(--color-brand-primary)] font-medium">
              Reconciled Without ±1 BDT Discrepancy
            </div>
          </div>
        </div>
      </section>

      {/* 2. How to Calculate VAT in Bangladesh (4 Modes with Formulas & Calculation Examples) */}
      <section aria-labelledby="how-to-calc-vat-heading" className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-black/10 dark:border-white/10">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center font-bold">
            <LucideIcons.Calculator size={22} />
          </div>
          <div>
            <h2
              id="how-to-calc-vat-heading"
              className="font-poppins font-bold text-[22px] md:text-[26px] text-[var(--color-text-primary)]"
            >
              How to Calculate VAT in Bangladesh
            </h2>
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Mathematical formulas and practical calculation examples for the 4 commercial calculation modes.
            </p>
          </div>
        </div>

        <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
          Depending on the contractual terms agreed with your client or supplier, commercial calculations follow one of the four specific modes below. <em>(Note: Percentage rates shown in examples are purely illustrative).</em>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mode 1 */}
          <div className="glass-panel p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] text-[12px] font-semibold mb-2">
                Mode 1
              </div>
              <h3 className="font-poppins font-semibold text-[18px] text-[var(--color-text-primary)] mb-1">
                1. Excluding VAT & Tax
              </h3>
              <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed mb-3">
                Used when you know the desired net cash amount you want to receive, and need to reverse-calculate the required gross contract and VAT so tax deductions do not reduce your take-home pay.
              </p>

              <div className="bg-black/5 dark:bg-white/5 p-3.5 rounded-xl font-mono text-[13px] space-y-1.5 border border-black/5 dark:border-white/5">
                <div><strong>Gross Base</strong> = Net ÷ (1 − Tax Rate ÷ 100)</div>
                <div><strong>Tax Deduction</strong> = Gross Base × (Tax Rate ÷ 100)</div>
                <div><strong>VAT Amount</strong> = Gross Base × (VAT Rate ÷ 100)</div>
                <div><strong>Total Client Invoice</strong> = Gross Base + VAT Amount</div>
                <div><strong>Net Take-Home</strong> = Gross Base − Tax Deduction</div>
              </div>
            </div>

            <div className="bg-emerald-500/10 dark:bg-green-500/10 p-4 rounded-xl border border-emerald-500/20 text-[13px] space-y-1.5 mt-2">
              <div className="font-semibold text-emerald-800 dark:text-green-300">
                Illustrative Calculation Example:
              </div>
              <p className="text-emerald-950 dark:text-emerald-200">
                Desired Net = <strong>100,000</strong>, Tax Rate = <strong>7.5%</strong>, VAT Rate = <strong>15%</strong>:
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900 dark:text-emerald-300 font-mono text-[12.5px]">
                <li>Gross Base: 100,000 ÷ (1 − 0.075) = <strong>108,108</strong></li>
                <li>Tax Deduction: 108,108 × 7.5% = <strong>8,108</strong></li>
                <li>VAT Addition: 108,108 × 15% = <strong>16,216</strong></li>
                <li>Total Billed to Client: 108,108 + 16,216 = <strong>124,324</strong></li>
                <li>Net Received: 108,108 − 8,108 = <strong>100,000</strong></li>
              </ul>
            </div>
          </div>

          {/* Mode 2 */}
          <div className="glass-panel p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] text-[12px] font-semibold mb-2">
                Mode 2
              </div>
              <h3 className="font-poppins font-semibold text-[18px] text-[var(--color-text-primary)] mb-1">
                2. Including VAT & Tax
              </h3>
              <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed mb-3">
                Used when a client provides a fixed all-inclusive total budget, and you need to separate the VAT portion, calculate tax deductions, and determine your actual net earnings.
              </p>

              <div className="bg-black/5 dark:bg-white/5 p-3.5 rounded-xl font-mono text-[13px] space-y-1.5 border border-black/5 dark:border-white/5">
                <div><strong>Gross Base</strong> = Total Budget ÷ (1 + VAT Rate ÷ 100)</div>
                <div><strong>VAT Amount</strong> = Total Budget − Gross Base</div>
                <div><strong>Tax Deduction</strong> = Gross Base × (Tax Rate ÷ 100)</div>
                <div><strong>Net Take-Home</strong> = Gross Base − Tax Deduction</div>
                <div><strong>Total Client Budget</strong> = Gross Base + VAT Amount</div>
              </div>
            </div>

            <div className="bg-blue-500/10 dark:bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 text-[13px] space-y-1.5 mt-2">
              <div className="font-semibold text-blue-900 dark:text-blue-300">
                Illustrative Calculation Example:
              </div>
              <p className="text-blue-950 dark:text-blue-200">
                Total Budget = <strong>100,000</strong>, VAT Rate = <strong>15%</strong>, Tax Rate = <strong>7.5%</strong>:
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-blue-900 dark:text-blue-300 font-mono text-[12.5px]">
                <li>Gross Base: 100,000 ÷ (1 + 0.15) = <strong>86,957</strong></li>
                <li>VAT Portion: 100,000 − 86,957 = <strong>13,043</strong></li>
                <li>Tax Deduction: 86,957 × 7.5% = <strong>6,522</strong></li>
                <li>Net Take-Home Pay: 86,957 − 6,522 = <strong>80,435</strong></li>
                <li>Total Payable by Client: <strong>100,000</strong></li>
              </ul>
            </div>
          </div>

          {/* Mode 3 */}
          <div className="glass-panel p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] text-[12px] font-semibold mb-2">
                Mode 3
              </div>
              <h3 className="font-poppins font-semibold text-[18px] text-[var(--color-text-primary)] mb-1">
                3. Exclusive VAT, Inclusive Tax
              </h3>
              <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed mb-3">
                Used in standard service contracts where the agreed amount is the gross contract base (includes income tax liability, excludes VAT). Tax is deducted, and VAT is added on top.
              </p>

              <div className="bg-black/5 dark:bg-white/5 p-3.5 rounded-xl font-mono text-[13px] space-y-1.5 border border-black/5 dark:border-white/5">
                <div><strong>Gross Base</strong> = Entered Contract Base Amount</div>
                <div><strong>Tax Deduction</strong> = Gross Base × (Tax Rate ÷ 100)</div>
                <div><strong>Net Receivable</strong> = Gross Base − Tax Deduction</div>
                <div><strong>VAT Amount</strong> = Gross Base × (VAT Rate ÷ 100)</div>
                <div><strong>Total Client Invoice</strong> = Gross Base + VAT Amount</div>
              </div>
            </div>

            <div className="bg-amber-500/10 dark:bg-amber-500/10 p-4 rounded-xl border border-amber-500/20 text-[13px] space-y-1.5 mt-2">
              <div className="font-semibold text-amber-900 dark:text-amber-300">
                Illustrative Calculation Example:
              </div>
              <p className="text-amber-950 dark:text-amber-200">
                Contract Base = <strong>100,000</strong>, Tax Rate = <strong>7.5%</strong>, VAT Rate = <strong>15%</strong>:
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900 dark:text-amber-300 font-mono text-[12.5px]">
                <li>Gross Base: <strong>100,000</strong></li>
                <li>Tax Deduction: 100,000 × 7.5% = <strong>7,500</strong></li>
                <li>Net Receivable: 100,000 − 7,500 = <strong>92,500</strong></li>
                <li>VAT Addition: 100,000 × 15% = <strong>15,000</strong></li>
                <li>Total Billed to Client: 100,000 + 15,000 = <strong>115,000</strong></li>
              </ul>
            </div>
          </div>

          {/* Mode 4 */}
          <div className="glass-panel p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] text-[12px] font-semibold mb-2">
                Mode 4
              </div>
              <h3 className="font-poppins font-semibold text-[18px] text-[var(--color-text-primary)] mb-1">
                4. Inclusive VAT, Exclusive Tax
              </h3>
              <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed mb-3">
                Used when an initial deal was quoted with VAT included, but Tax/TDS was overlooked. It extracts the base net, then reverse gross-ups for tax so your net receipt remains intact.
              </p>

              <div className="bg-black/5 dark:bg-white/5 p-3.5 rounded-xl font-mono text-[13px] space-y-1.5 border border-black/5 dark:border-white/5">
                <div><strong>Base Net</strong> = Entered Amount ÷ (1 + VAT Rate ÷ 100)</div>
                <div><strong>Gross Base</strong> = Base Net ÷ (1 − Tax Rate ÷ 100)</div>
                <div><strong>Tax Deduction</strong> = Gross Base × (Tax Rate ÷ 100)</div>
                <div><strong>VAT Amount</strong> = Gross Base × (VAT Rate ÷ 100)</div>
                <div><strong>Total Client Invoice</strong> = Gross Base + VAT Amount</div>
              </div>
            </div>

            <div className="bg-purple-500/10 dark:bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 text-[13px] space-y-1.5 mt-2">
              <div className="font-semibold text-purple-900 dark:text-purple-300">
                Illustrative Calculation Example:
              </div>
              <p className="text-purple-950 dark:text-purple-200">
                Amount with VAT = <strong>115,000</strong>, VAT Rate = <strong>15%</strong>, Tax Rate = <strong>7.5%</strong>:
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-purple-900 dark:text-purple-300 font-mono text-[12.5px]">
                <li>Target Base Net: 115,000 ÷ (1 + 0.15) = <strong>100,000</strong></li>
                <li>Grossed-up Gross Base: 100,000 ÷ (1 − 0.075) = <strong>108,108</strong></li>
                <li>Tax Deduction: 108,108 × 7.5% = <strong>8,108</strong> (Net = 100,000)</li>
                <li>VAT Addition on Gross: 108,108 × 15% = <strong>16,216</strong></li>
                <li>Total Billed to Client: 108,108 + 16,216 = <strong>124,324</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Understanding VAT, TDS and VDS */}
      <section aria-labelledby="understanding-heading" className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-black/10 dark:border-white/10">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center font-bold">
            <LucideIcons.BookOpen size={22} />
          </div>
          <div>
            <h2
              id="understanding-heading"
              className="font-poppins font-bold text-[22px] md:text-[26px] text-[var(--color-text-primary)]"
            >
              Understanding VAT, TDS and VDS in Bangladesh
            </h2>
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Key differences, statutory roles, and the mathematical framework used by this calculator.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[16px] text-[var(--color-text-primary)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-primary)]"></span>
              VAT (Value Added Tax)
            </div>
            <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed">
              Governed by the <em>Value Added Tax and Supplementary Duty Act, 2012</em>. VAT is an indirect tax on domestic consumption collected by suppliers on taxable goods or services and remitted to the NBR.
            </p>
          </div>

          <div className="glass-panel p-6 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[16px] text-[var(--color-text-primary)]">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              TDS (Tax Deducted at Source)
            </div>
            <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed">
              Governed by the <em>Income Tax Act, 2023</em>. TDS is direct income tax withheld by the paying entity from the vendor’s gross contract payment and deposited under the vendor’s TIN.
            </p>
          </div>

          <div className="glass-panel p-6 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[16px] text-[var(--color-text-primary)]">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              VDS (VAT Deducted at Source)
            </div>
            <p className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed">
              A statutory withholding mechanism where prescribed withholding entities (e.g. government bodies, banks, listed firms) deduct the VAT from the bill and issue a Mushak-6.6 certificate.
            </p>
          </div>
        </div>

        <div className="glass-panel p-6 border-l-4 border-l-[var(--color-brand-primary)] space-y-2">
          <h3 className="font-poppins font-semibold text-[16px] text-[var(--color-text-primary)]">
            Mathematical Model Clarification
          </h3>
          <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
            This calculator implements a clean mathematical model where <strong>Tax/TDS is calculated on the Gross Base amount</strong> and <strong>VAT is added onto the Gross Base amount</strong>. In real-world commercial transactions, statutory withholding responsibilities, advance taxes, and payment flows depend on specific procurement rules, supplier registration status, and current NBR SROs.
          </p>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (Native details/summary for 100% crawlable initial HTML) */}
      <section aria-labelledby="faq-section-heading" className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-black/10 dark:border-white/10">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center font-bold">
            <LucideIcons.HelpCircle size={22} />
          </div>
          <div>
            <h2
              id="faq-section-heading"
              className="font-poppins font-bold text-[22px] md:text-[26px] text-[var(--color-text-primary)]"
            >
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Authoritative answers to common questions regarding VAT and Tax calculation in Bangladesh.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {/* FAQ 1 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden" open>
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>What is a VAT Tax Calculator in Bangladesh?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <p>
                A VAT Tax Calculator in Bangladesh is an online financial tool designed for businesses, consultants, vendors, and finance professionals to compute mathematical breakdowns of bills, applicable tax deductions, and net amounts across 4 commercial modes.
              </p>
              <p>
                The user inputs the relevant amount and the specific Tax and VAT percentage rates applicable to their transaction. The tool then calculates the Gross Base, Tax/TDS deduction, VAT additions, total invoice, and net take-home pay, eliminating rounding discrepancies.
              </p>
            </div>
          </details>

          {/* FAQ 2 - Primary Search Intent */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>How do I calculate VAT in Bangladesh?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <p>
                To calculate VAT in Bangladesh, follow these steps:
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Identify the specific statutory VAT rate applicable to your supply or service under the current NBR schedules or SROs.</li>
                <li><strong>If adding VAT to a base price:</strong> Multiply the base amount by the VAT rate (e.g., Base × Rate ÷ 100).</li>
                <li><strong>If extracting VAT from a total bill:</strong> Divide the total by (1 + Rate ÷ 100) to find the base, then subtract the base from the total to get the VAT amount.</li>
              </ol>
            </div>
          </details>

          {/* FAQ 3 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>How do I calculate VAT from a VAT-exclusive amount?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <p>
                To calculate VAT from a VAT-exclusive base amount, apply the standard formula:
              </p>
              <div className="p-2.5 rounded bg-black/5 dark:bg-white/5 font-mono text-[13px]">
                VAT Amount = Base Amount × (VAT Rate ÷ 100)
              </div>
              <p>
                For example, if your base service fee is 100,000 and the applicable rate for your service is 15%, the VAT amount is 15,000, and the total billing invoice is 115,000.
              </p>
            </div>
          </details>

          {/* FAQ 4 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>How do I calculate VAT from a VAT-inclusive amount?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <p>
                When a price includes VAT, you cannot simply multiply the total by the VAT rate. Instead, extract the base first:
              </p>
              <div className="p-2.5 rounded bg-black/5 dark:bg-white/5 font-mono text-[13px]">
                Base = Total Inclusive Amount ÷ [1 + (VAT Rate ÷ 100)]
              </div>
              <p>
                Then, VAT Amount = Total Inclusive Amount − Base. For an inclusive figure of 115,000 at a 15% rate, the base is 115,000 ÷ 1.15 = 100,000, and VAT is 15,000.
              </p>
            </div>
          </details>

          {/* FAQ 5 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>How can I calculate the VAT amount included in a gross bill?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <p>
                You can extract VAT directly from any gross bill using the <strong>VAT Fraction formula</strong>:
              </p>
              <div className="p-2.5 rounded bg-black/5 dark:bg-white/5 font-mono text-[13px]">
                VAT Amount = Gross Bill × [VAT Rate ÷ (100 + VAT Rate)]
              </div>
              <p>
                For example, for an illustrative 15% rate, multiply the gross bill by 15/115 (or divide by 7.6667). For a 10% rate, multiply by 10/110. For a 5% rate, multiply by 5/105.
              </p>
            </div>
          </details>

          {/* FAQ 6 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>Is 15% VAT applicable to all goods and services in Bangladesh?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <p>
                <strong>No.</strong> While 15% is the standard rate under Section 15 of the <em>Value Added Tax and Supplementary Duty Act, 2012</em>, it is by no means universal.
              </p>
              <p>
                Depending on the specific H.S. code or service code defined by the NBR, supplies may be subject to reduced rates (such as 5%, 7.5%, or 10%), specific fixed duty amounts, or complete exemptions under the First Schedule or specific SROs. Traders and manufacturers should always verify applicable rates in the current Finance Act and relevant NBR orders.
              </p>
            </div>
          </details>

          {/* FAQ 7 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>What is the difference between VAT, TAX, TDS and VDS in Bangladesh?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>VAT (Value Added Tax):</strong> An indirect consumption tax on supplies of goods and services governed by the 2012 VAT Act.</li>
                <li><strong>Income Tax / AIT:</strong> A direct tax assessed on personal or corporate net income under the Income Tax Act 2023.</li>
                <li><strong>TDS (Tax Deducted at Source):</strong> Advance income tax withheld by the payer from the supplier’s bill.</li>
                <li><strong>VDS (VAT Deducted at Source):</strong> VAT withheld at source by registered withholding entities and credited via Mushak-6.6.</li>
              </ul>
            </div>
          </details>

          {/* FAQ 8 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>How do I calculate VAT and TDS together?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <p>
                In standard accounting practice, <strong>TDS is deducted from the Gross Base amount</strong>, while <strong>VAT is added onto the Gross Base amount</strong>.
              </p>
              <p>
                For example, on a contract base of 100,000 with 7.5% TDS and 15% VAT:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gross Base: 100,000</li>
                <li>VAT (+15% on Gross): +15,000 (Total Client Bill = 115,000)</li>
                <li>TDS (−7.5% on Gross): −7,500</li>
                <li>Net Amount Received: 100,000 − 7,500 = 92,500</li>
              </ul>
            </div>
          </details>

          {/* FAQ 9 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>How do I calculate net payable after deducting TDS?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <p>
                To calculate net payable after TDS deduction:
              </p>
              <div className="p-2.5 rounded bg-black/5 dark:bg-white/5 font-mono text-[13px]">
                Net Payable = Gross Base − (Gross Base × Tax Rate ÷ 100)
              </div>
              <p>
                If you need to know the required gross contract value to secure a target net amount, use the reverse gross-up formula: <code className="font-mono text-[13px]">Gross = Target Net ÷ [1 − (Tax Rate ÷ 100)]</code>.
              </p>
            </div>
          </details>

          {/* FAQ 10 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>Can this calculator automatically determine the applicable VAT and TDS rates?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <p>
                <strong>No.</strong> This calculator is a mathematical modeling tool. The user provides the applicable VAT and Tax/TDS rates for their particular transaction.
              </p>
              <p>
                Statutory rates in Bangladesh vary depending on supplier registration, withholding entity classification, and specific service/goods schedules under the Income Tax Act 2023 and VAT & SD Act 2012. Users should look up their legal rates through official NBR gazettes or consult an accredited tax practitioner.
              </p>
            </div>
          </details>

          {/* FAQ 11 */}
          <details className="group glass-panel rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-poppins font-semibold text-[15px] md:text-[16px] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              <span>What are the four calculation modes available in this VAT Tax Calculator?</span>
              <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 text-[var(--color-text-secondary)] group-open:bg-[var(--color-brand-primary)] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180">
                <LucideIcons.ChevronDown size={16} />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1 text-[14px] text-[var(--color-text-secondary)] border-t border-black/5 dark:border-white/5 leading-relaxed space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Excluding VAT & Tax:</strong> You input desired net cash; it reverse-calculates gross invoice, tax deduction, and VAT.</li>
                <li><strong>Including VAT & Tax:</strong> You input total client budget; it extracts VAT and deducts tax to reveal net take-home pay.</li>
                <li><strong>Exclusive VAT, Inclusive Tax:</strong> You input gross contract base; it calculates tax deduction and adds VAT.</li>
                <li><strong>Inclusive VAT, Exclusive Tax:</strong> You input an amount with VAT; it extracts net base and reverse grosses for tax.</li>
              </ul>
            </div>
          </details>
        </div>
      </section>
    </article>
  );
}
