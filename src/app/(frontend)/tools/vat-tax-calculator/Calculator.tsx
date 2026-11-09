"use client";

import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";

export type Mode = "net" | "total" | "excl_vat_incl_tax" | "incl_vat_excl_tax";

interface ModeOption {
  id: Mode;
  label: string;
  badge: string;
  inputLabel: string;
}

const MODES: ModeOption[] = [
  {
    id: "net",
    label: "Excluding VAT & Tax (Net)",
    badge: "Net-to-Gross Mode",
    inputLabel: "Net Amount you want to receive (BDT)",
  },
  {
    id: "total",
    label: "Including VAT & Tax (Total)",
    badge: "Gross-to-Net Mode",
    inputLabel: "Total Budget / Inclusive Amount (BDT)",
  },
  {
    id: "excl_vat_incl_tax",
    label: "Exclusive VAT, Inclusive Tax",
    badge: "Base Contract Mode",
    inputLabel: "Base Bill / Contract Amount (Excl. VAT) (BDT)",
  },
  {
    id: "incl_vat_excl_tax",
    label: "Inclusive VAT, Exclusive Tax",
    badge: "Reverse VAT & Tax Mode",
    inputLabel: "Net Amount with VAT (Excl. Tax) (BDT)",
  },
];

export default function Calculator() {
  const [mode, setMode] = useState<Mode>("net");
  const [amount, setAmount] = useState<number | string>(100000);
  const [taxRate, setTaxRate] = useState<number | string>(7.5);
  const [vatRate, setVatRate] = useState<number | string>(15);

  const [results, setResults] = useState({
    grossAmount: 0,
    taxAmount: 0,
    vatAmount: 0,
    totalPayable: 0,
    netPayable: 0,
  });

  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    calculate();
  }, [mode, amount, taxRate, vatRate]);

  const calculate = () => {
    const amt = Math.max(0, parseFloat(amount.toString()) || 0);
    const taxR = Math.max(0, parseFloat(taxRate.toString()) || 0);
    const vatR = Math.max(0, parseFloat(vatRate.toString()) || 0);

    let grossAmount = 0;
    let taxAmount = 0;
    let vatAmount = 0;

    const taxFactor = 1 - taxR / 100;
    const vatFactor = 1 + vatR / 100;

    if (mode === "net") {
      // Mode 1: "net" (Excluding VAT & Tax / Net Amount)
      grossAmount = taxFactor > 0 ? amt / taxFactor : 0;
      taxAmount = grossAmount * (taxR / 100);
      vatAmount = grossAmount * (vatR / 100);
    } else if (mode === "total") {
      // Mode 2: "total" (Including VAT & Tax / Total Budget)
      grossAmount = vatFactor > 0 ? amt / vatFactor : 0;
      taxAmount = grossAmount * (taxR / 100);
      vatAmount = grossAmount * (vatR / 100);
    } else if (mode === "excl_vat_incl_tax") {
      // Mode 3: "excl_vat_incl_tax" (Exclusive VAT, Inclusive Tax)
      grossAmount = amt;
      taxAmount = grossAmount * (taxR / 100);
      vatAmount = grossAmount * (vatR / 100);
    } else if (mode === "incl_vat_excl_tax") {
      // Mode 4: "incl_vat_excl_tax" (Inclusive VAT, Exclusive Tax)
      const netBase = vatFactor > 0 ? amt / vatFactor : 0;
      grossAmount = taxFactor > 0 ? netBase / taxFactor : 0;
      taxAmount = grossAmount * (taxR / 100);
      vatAmount = grossAmount * (vatR / 100);
    }

    // Careful rounding of base components
    const roundedGross = Math.round(grossAmount);
    const roundedTax = Math.round(taxAmount);
    const roundedVat = Math.round(vatAmount);

    // Compute totalPayable and netPayable using rounded values to eliminate ±1 BDT disparity
    const finalTotalPayable = roundedGross + roundedVat;
    const finalNetPayable = roundedGross - roundedTax;

    setResults({
      grossAmount: roundedGross,
      taxAmount: roundedTax,
      vatAmount: roundedVat,
      totalPayable: finalTotalPayable,
      netPayable: finalNetPayable,
    });
  };

  const amtNum = parseFloat(amount.toString()) || 0;
  const taxRNum = parseFloat(taxRate.toString()) || 0;
  const vatRNum = parseFloat(vatRate.toString()) || 0;
  const taxFactor = 1 - taxRNum / 100;
  const taxComplement = Number((100 - taxRNum).toFixed(2));
  const currentModeConfig = MODES.find((m) => m.id === mode) || MODES[0];

  return (
    <div className="pb-10">
      {/* Hero Section */}
      <div className="glass-panel p-10 md:p-12 w-full mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
          <div className="w-12 h-12 bg-[var(--color-brand-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-brand-primary)]">
            <LucideIcons.Calculator size={24} />
          </div>
          <h1 className="font-poppins font-bold text-[30px] md:text-[36px] text-[var(--color-text-primary)] leading-tight">
            VAT Tax Calculator (Bangladesh)
          </h1>
        </div>
        <p className="font-inter text-[15px] text-[var(--color-text-secondary)] mt-4">
          Calculate Gross, VAT, and Tax amounts based on standard rates for various services and supplies in Bangladesh.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        {/* Input Section */}
        <div className="lg:col-span-5 glass-panel p-6 md:p-8">
          <h2 className="font-poppins font-semibold text-[20px] text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
            <LucideIcons.Settings2 size={20} className="text-[var(--color-brand-primary)]" />
            Calculation Settings
          </h2>

          <div className="space-y-6">
            {/* Mode Toggle (Responsive 2x2 Grid) */}
            <div className="space-y-3">
              <label className="block text-[14px] font-medium text-[var(--color-text-secondary)]">
                Calculation Mode
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-black/[0.04] dark:bg-white/5 p-1.5 rounded-xl border border-black/10 dark:border-white/10">
                {MODES.map((item) => {
                  const isActive = mode === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMode(item.id)}
                      className={`py-3 px-3 text-[13px] sm:text-[13.5px] font-medium rounded-lg transition-all duration-200 text-center flex items-center justify-center leading-snug cursor-pointer ${
                        isActive
                          ? "bg-[var(--color-brand-primary)] text-white shadow-md font-semibold"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Amount Input */}
            <div className="space-y-2">
              <label className="block text-[14px] font-medium text-[var(--color-text-secondary)]">
                {currentModeConfig.inputLabel}
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-white/60 dark:bg-white/5 border border-black/15 dark:border-white/20 focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 rounded-xl py-3 px-4 text-[var(--color-text-primary)] font-medium outline-none transition-all"
                placeholder="e.g. 100000"
                min="0"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Tax Rate Input */}
              <div className="space-y-2">
                <label className="block text-[14px] font-medium text-[var(--color-text-secondary)]">
                  Tax/TDS Rate (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className="w-full bg-white/60 dark:bg-white/5 border border-black/15 dark:border-white/20 focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 rounded-xl py-3 px-4 text-[var(--color-text-primary)] font-medium outline-none transition-all"
                    placeholder="e.g. 7.5"
                    min="0"
                    step="0.1"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="text-[var(--color-text-secondary)]">%</span>
                  </div>
                </div>
              </div>

              {/* VAT Rate Input */}
              <div className="space-y-2">
                <label className="block text-[14px] font-medium text-[var(--color-text-secondary)]">
                  VAT Rate (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={vatRate}
                    onChange={(e) => setVatRate(e.target.value)}
                    className="w-full bg-white/60 dark:bg-white/5 border border-black/15 dark:border-white/20 focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 rounded-xl py-3 px-4 text-[var(--color-text-primary)] font-medium outline-none transition-all"
                    placeholder="e.g. 15"
                    min="0"
                    step="0.1"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="text-[var(--color-text-secondary)]">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass-panel p-6 md:p-8 flex-1 flex flex-col border-t-4 border-t-[var(--color-brand-primary)] shadow-lg bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10 dark:border-white/10">
              <h2 className="font-poppins font-bold text-[22px] text-[var(--color-text-primary)]">
                Calculation Summary
              </h2>
              <span className="text-[12px] font-medium px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-[var(--color-text-secondary)] border border-black/5 dark:border-white/10">
                {currentModeConfig.badge}
              </span>
            </div>

            <div className="space-y-4 flex-1 font-mono text-[15px]">
              {mode === "net" && (
                <>
                  {/* Step 1: Given Amount */}
                  <div className="flex justify-between items-center gap-4 p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
                    <span className="text-[var(--color-text-secondary)] flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.FileText size={16} className="shrink-0 text-[var(--color-brand-primary)]" />
                      Your given amount (Desired Net)
                    </span>
                    <span className="font-semibold text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.netPayable.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 2: Add TAX */}
                  <div className="flex justify-between items-center gap-4 p-3 bg-emerald-500/10 dark:bg-green-500/10 rounded-lg border border-emerald-500/20">
                    <span className="text-emerald-700 dark:text-green-400 font-medium flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.PlusCircle size={16} className="shrink-0" />
                      Add: TAX/TDS ({taxRNum}%)
                    </span>
                    <span className="font-semibold text-emerald-700 dark:text-green-400 whitespace-nowrap shrink-0">
                      + {results.taxAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 3: Gross Base Amount (Excl. VAT) */}
                  <div className="flex justify-between items-center gap-4 p-3 border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] rounded-lg">
                    <span className="font-medium text-[var(--color-text-primary)] min-w-0 font-sans">
                      Gross Base Amount (Excl. VAT)
                    </span>
                    <span className="font-bold text-[16px] text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.grossAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 4: Add VAT */}
                  <div className="flex justify-between items-center gap-4 p-3 bg-emerald-500/10 dark:bg-green-500/10 rounded-lg border border-emerald-500/20">
                    <span className="text-emerald-700 dark:text-green-400 font-medium flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.PlusCircle size={16} className="shrink-0" />
                      Add: VAT ({vatRNum}%)
                    </span>
                    <span className="font-semibold text-emerald-700 dark:text-green-400 whitespace-nowrap shrink-0">
                      + {results.vatAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 5: Final Total */}
                  <div className="flex justify-between items-center gap-4 p-3 border-t border-black/10 dark:border-white/10">
                    <span className="font-medium text-[var(--color-text-primary)] min-w-0 font-sans">
                      Total Amount Payable by Client
                    </span>
                    <span className="font-bold text-[16px] text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.totalPayable.toLocaleString("en-IN")}
                    </span>
                  </div>
                </>
              )}

              {mode === "total" && (
                <>
                  {/* Step 1: Given Amount */}
                  <div className="flex justify-between items-center gap-4 p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
                    <span className="text-[var(--color-text-secondary)] flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.FileText size={16} className="shrink-0 text-[var(--color-brand-primary)]" />
                      Your given amount (Total Budget)
                    </span>
                    <span className="font-semibold text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.totalPayable.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 2: Less VAT */}
                  <div className="flex justify-between items-center gap-4 p-3 bg-rose-500/10 dark:bg-red-500/10 rounded-lg border border-rose-500/20">
                    <span className="text-rose-700 dark:text-red-400 font-medium flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.MinusCircle size={16} className="shrink-0" />
                      Less: VAT ({vatRNum}%)
                    </span>
                    <span className="font-semibold text-rose-700 dark:text-red-400 whitespace-nowrap shrink-0">
                      - {results.vatAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 3: Gross Base Amount (Excl. VAT) */}
                  <div className="flex justify-between items-center gap-4 p-3 border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] rounded-lg">
                    <span className="font-medium text-[var(--color-text-primary)] min-w-0 font-sans">
                      Gross Base Amount (Excl. VAT)
                    </span>
                    <span className="font-bold text-[16px] text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.grossAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 4: Less TAX */}
                  <div className="flex justify-between items-center gap-4 p-3 bg-rose-500/10 dark:bg-red-500/10 rounded-lg border border-rose-500/20">
                    <span className="text-rose-700 dark:text-red-400 font-medium flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.MinusCircle size={16} className="shrink-0" />
                      Less: TAX/TDS ({taxRNum}%)
                    </span>
                    <span className="font-semibold text-rose-700 dark:text-red-400 whitespace-nowrap shrink-0">
                      - {results.taxAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 5: Final Net */}
                  <div className="flex justify-between items-center gap-4 p-3 border-t border-black/10 dark:border-white/10">
                    <span className="font-medium text-[var(--color-text-primary)] min-w-0 font-sans">
                      Net Payable Amount (to receive)
                    </span>
                    <span className="font-bold text-[16px] text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.netPayable.toLocaleString("en-IN")}
                    </span>
                  </div>
                </>
              )}

              {mode === "excl_vat_incl_tax" && (
                <>
                  {/* Step 1: Given Amount */}
                  <div className="flex justify-between items-center gap-4 p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
                    <span className="text-[var(--color-text-secondary)] flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.FileText size={16} className="shrink-0 text-[var(--color-brand-primary)]" />
                      Gross Base / Contract Amount (Excl. VAT)
                    </span>
                    <span className="font-semibold text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.grossAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 2: Less TAX */}
                  <div className="flex justify-between items-center gap-4 p-3 bg-rose-500/10 dark:bg-red-500/10 rounded-lg border border-rose-500/20">
                    <span className="text-rose-700 dark:text-red-400 font-medium flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.MinusCircle size={16} className="shrink-0" />
                      Less: TAX/TDS ({taxRNum}%)
                    </span>
                    <span className="font-semibold text-rose-700 dark:text-red-400 whitespace-nowrap shrink-0">
                      - {results.taxAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 3: Net Payable */}
                  <div className="flex justify-between items-center gap-4 p-3 border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] rounded-lg">
                    <span className="font-medium text-[var(--color-text-primary)] min-w-0 font-sans">
                      Net Payable Amount (to receive)
                    </span>
                    <span className="font-bold text-[16px] text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.netPayable.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 4: Add VAT */}
                  <div className="flex justify-between items-center gap-4 p-3 bg-emerald-500/10 dark:bg-green-500/10 rounded-lg border border-emerald-500/20">
                    <span className="text-emerald-700 dark:text-green-400 font-medium flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.PlusCircle size={16} className="shrink-0" />
                      Add: VAT ({vatRNum}% on Gross Base)
                    </span>
                    <span className="font-semibold text-emerald-700 dark:text-green-400 whitespace-nowrap shrink-0">
                      + {results.vatAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 5: Final Total */}
                  <div className="flex justify-between items-center gap-4 p-3 border-t border-black/10 dark:border-white/10">
                    <span className="font-medium text-[var(--color-text-primary)] min-w-0 font-sans">
                      Total Amount Payable by Client (Gross + VAT)
                    </span>
                    <span className="font-bold text-[16px] text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.totalPayable.toLocaleString("en-IN")}
                    </span>
                  </div>
                </>
              )}

              {mode === "incl_vat_excl_tax" && (
                <>
                  {/* Step 1: Given Amount */}
                  <div className="flex justify-between items-center gap-4 p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
                    <span className="text-[var(--color-text-secondary)] flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.FileText size={16} className="shrink-0 text-[var(--color-brand-primary)]" />
                      Your given amount (Net + VAT)
                    </span>
                    <span className="font-semibold text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {Math.round(amtNum).toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 2: Base Net Amount */}
                  <div className="flex justify-between items-center gap-4 p-3 bg-black/[0.02] dark:bg-white/[0.02] rounded-lg">
                    <span className="text-[var(--color-text-secondary)] flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.CheckCircle2 size={16} className="shrink-0 text-[var(--color-brand-primary)]" />
                      Base Net Amount (Excl. VAT & Tax)
                    </span>
                    <span className="font-semibold text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.netPayable.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 3: Add TAX to Gross Up */}
                  <div className="flex justify-between items-center gap-4 p-3 bg-emerald-500/10 dark:bg-green-500/10 rounded-lg border border-emerald-500/20">
                    <span className="text-emerald-700 dark:text-green-400 font-medium flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.PlusCircle size={16} className="shrink-0" />
                      Add: TAX/TDS ({taxRNum}% Grossed Up)
                    </span>
                    <span className="font-semibold text-emerald-700 dark:text-green-400 whitespace-nowrap shrink-0">
                      + {results.taxAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 4: Gross Base Amount (Excl. VAT) */}
                  <div className="flex justify-between items-center gap-4 p-3 border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] rounded-lg">
                    <span className="font-medium text-[var(--color-text-primary)] min-w-0 font-sans">
                      Gross Base Amount (Excl. VAT)
                    </span>
                    <span className="font-bold text-[16px] text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.grossAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 5: Add VAT on Gross Base */}
                  <div className="flex justify-between items-center gap-4 p-3 bg-emerald-500/10 dark:bg-green-500/10 rounded-lg border border-emerald-500/20">
                    <span className="text-emerald-700 dark:text-green-400 font-medium flex items-center gap-2 min-w-0 font-sans">
                      <LucideIcons.PlusCircle size={16} className="shrink-0" />
                      Add: VAT ({vatRNum}% on Gross Base)
                    </span>
                    <span className="font-semibold text-emerald-700 dark:text-green-400 whitespace-nowrap shrink-0">
                      + {results.vatAmount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Step 6: Total Payable */}
                  <div className="flex justify-between items-center gap-4 p-3 border-t border-black/10 dark:border-white/10">
                    <span className="font-medium text-[var(--color-text-primary)] min-w-0 font-sans">
                      Total Amount Payable by Client
                    </span>
                    <span className="font-bold text-[16px] text-[var(--color-text-primary)] whitespace-nowrap shrink-0">
                      {results.totalPayable.toLocaleString("en-IN")}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Final Totals */}
            <div className="mt-8 pt-6 border-t-2 border-black/10 dark:border-white/10">
              <div className="bg-[var(--color-brand-primary)]/10 rounded-xl p-6 border border-[var(--color-brand-primary)]/20">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-[var(--color-text-secondary)] font-sans">
                    Net Payable Amount
                  </span>
                  <div className="font-bold text-xl md:text-2xl text-[var(--color-text-primary)] whitespace-nowrap font-mono">
                    {results.netPayable.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[var(--color-brand-primary)]/15">
                  <span className="font-medium text-[var(--color-text-secondary)] font-sans">
                    Total Payable by Client (Budget)
                  </span>
                  <div className="font-bold text-lg md:text-xl text-[var(--color-brand-primary)] whitespace-nowrap font-mono">
                    {results.totalPayable.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 flex items-start gap-2 text-[12px] text-[var(--color-text-secondary)] opacity-85">
              <LucideIcons.Info size={14} className="mt-0.5 shrink-0" />
              <p>
                Calculations based on standard Bangladesh accounting practices. Please verify with the latest NBR Statutory Rules and Orders (SROs) for applicable rates for your specific service or supply category.
              </p>
            </div>
          </div>

          {/* Explanation Block */}
          <div className="bg-blue-50/70 dark:bg-slate-800/60 rounded-xl border border-blue-100 dark:border-slate-700/60 overflow-hidden shadow-sm transition-all duration-300">
            <button
              type="button"
              onClick={() => setShowExplanation(!showExplanation)}
              className="w-full p-4 flex items-center justify-between hover:bg-blue-100/50 dark:hover:bg-slate-700/50 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-[20px]">💡</span>
                <span className="font-poppins font-semibold text-[15px] text-blue-900 dark:text-blue-50">
                  How did we calculate this? (Understand the Math)
                </span>
              </div>
              <LucideIcons.ChevronDown
                size={20}
                className={`text-blue-600 dark:text-blue-400 transition-transform duration-300 shrink-0 ${
                  showExplanation ? "rotate-180" : ""
                }`}
              />
            </button>

            {showExplanation && (
              <div className="p-5 border-t border-blue-100 dark:border-slate-700/60 text-[14px] text-blue-900 dark:text-slate-300 space-y-3 font-inter leading-relaxed">
                {mode === "net" && (
                  <>
                    {taxFactor <= 0 ? (
                      <p className="text-amber-600 dark:text-amber-400 font-medium">
                        Tax/TDS rate must be less than 100% to calculate the gross-up amount.
                      </p>
                    ) : (
                      <>
                        <p>
                          You requested a net amount of <strong>{amtNum.toLocaleString("en-IN")}</strong>. Under Bangladesh tax regulations, TDS (Tax Deducted at Source) must be deducted from the <em>Gross</em> base amount, not the Net amount. Therefore, your requested Net amount represents <strong>{taxComplement}%</strong> (100% - {taxRNum}%) of the total Gross base.
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 mt-3">
                          <li>
                            <strong>Gross Base Amount (Excl. VAT)</strong> = {amtNum.toLocaleString("en-IN")} ÷ (100% - {taxRNum}%) = {amtNum.toLocaleString("en-IN")} ÷ {taxComplement}% = <strong>{results.grossAmount.toLocaleString("en-IN")}</strong>
                          </li>
                          <li>
                            <strong>Tax/TDS ({taxRNum}%)</strong> = {results.grossAmount.toLocaleString("en-IN")} × {taxRNum}% = <strong>{results.taxAmount.toLocaleString("en-IN")}</strong>
                            <div className="text-[13px] opacity-80 mt-0.5">
                              Verification: Gross ({results.grossAmount.toLocaleString("en-IN")}) - Tax ({results.taxAmount.toLocaleString("en-IN")}) = Desired Net ({results.netPayable.toLocaleString("en-IN")})
                            </div>
                          </li>
                          <li>
                            <strong>VAT ({vatRNum}%)</strong> = {results.grossAmount.toLocaleString("en-IN")} × {vatRNum}% = <strong>{results.vatAmount.toLocaleString("en-IN")}</strong>
                            <div className="text-[13px] opacity-80 mt-0.5">
                              (VAT is calculated on top of the Gross base amount)
                            </div>
                          </li>
                          <li>
                            <strong>Total Payable by Client</strong> = Gross ({results.grossAmount.toLocaleString("en-IN")}) + VAT ({results.vatAmount.toLocaleString("en-IN")}) = <strong>{results.totalPayable.toLocaleString("en-IN")}</strong>
                          </li>
                        </ol>
                      </>
                    )}
                  </>
                )}

                {mode === "total" && (
                  <>
                    <p>
                      You entered a total inclusive budget of <strong>{amtNum.toLocaleString("en-IN")}</strong>. This budget already includes VAT ({vatRNum}%) and Tax/TDS ({taxRNum}%). We first extract the Gross base amount by removing VAT, then calculate the Tax deduction and final net payable.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 mt-3">
                      <li>
                        <strong>Gross Base Amount (Excl. VAT)</strong> = {amtNum.toLocaleString("en-IN")} ÷ (100% + {vatRNum}%) = <strong>{results.grossAmount.toLocaleString("en-IN")}</strong>
                      </li>
                      <li>
                        <strong>VAT ({vatRNum}%)</strong> = Total Budget ({results.totalPayable.toLocaleString("en-IN")}) - Gross Base ({results.grossAmount.toLocaleString("en-IN")}) = <strong>{results.vatAmount.toLocaleString("en-IN")}</strong>
                      </li>
                      <li>
                        <strong>Tax/TDS ({taxRNum}%)</strong> = {results.grossAmount.toLocaleString("en-IN")} × {taxRNum}% = <strong>{results.taxAmount.toLocaleString("en-IN")}</strong>
                      </li>
                      <li>
                        <strong>Net Payable Amount</strong> = Gross Base ({results.grossAmount.toLocaleString("en-IN")}) - Tax ({results.taxAmount.toLocaleString("en-IN")}) = <strong>{results.netPayable.toLocaleString("en-IN")}</strong>
                      </li>
                    </ol>
                  </>
                )}

                {mode === "excl_vat_incl_tax" && (
                  <>
                    <p>
                      You entered a base bill / contract amount of <strong>{amtNum.toLocaleString("en-IN")}</strong>. This figure represents the Gross Base (it includes Tax/TDS which will be deducted at source, but excludes VAT which must be added on top).
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 mt-3">
                      <li>
                        <strong>Gross Base Amount (Excl. VAT)</strong> = <strong>{results.grossAmount.toLocaleString("en-IN")}</strong>
                      </li>
                      <li>
                        <strong>Tax/TDS ({taxRNum}%)</strong> = {results.grossAmount.toLocaleString("en-IN")} × {taxRNum}% = <strong>{results.taxAmount.toLocaleString("en-IN")}</strong>
                      </li>
                      <li>
                        <strong>Net Payable Amount</strong> = Gross Base ({results.grossAmount.toLocaleString("en-IN")}) - Tax ({results.taxAmount.toLocaleString("en-IN")}) = <strong>{results.netPayable.toLocaleString("en-IN")}</strong>
                      </li>
                      <li>
                        <strong>VAT ({vatRNum}%)</strong> = {results.grossAmount.toLocaleString("en-IN")} × {vatRNum}% = <strong>{results.vatAmount.toLocaleString("en-IN")}</strong>
                      </li>
                      <li>
                        <strong>Total Payable by Client</strong> = Gross Base ({results.grossAmount.toLocaleString("en-IN")}) + VAT ({results.vatAmount.toLocaleString("en-IN")}) = <strong>{results.totalPayable.toLocaleString("en-IN")}</strong>
                      </li>
                    </ol>
                  </>
                )}

                {mode === "incl_vat_excl_tax" && (
                  <>
                    {taxFactor <= 0 ? (
                      <p className="text-amber-600 dark:text-amber-400 font-medium">
                        Tax/TDS rate must be less than 100% to calculate the gross-up amount.
                      </p>
                    ) : (
                      <>
                        <p>
                          You entered an amount of <strong>{amtNum.toLocaleString("en-IN")}</strong> which includes VAT ({vatRNum}%), but Tax/TDS ({taxRNum}%) has not been factored in yet. We first extract the base net amount by removing VAT, then calculate the required Gross amount so that after deducting Tax/TDS at source, your net receipt remains intact.
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 mt-3">
                          <li>
                            <strong>Target Net Base</strong> = {amtNum.toLocaleString("en-IN")} ÷ (100% + {vatRNum}%) = <strong>{results.netPayable.toLocaleString("en-IN")}</strong>
                          </li>
                          <li>
                            <strong>Gross Base Amount (Excl. VAT)</strong> = Target Net ({results.netPayable.toLocaleString("en-IN")}) ÷ (100% - {taxRNum}%) = {results.netPayable.toLocaleString("en-IN")} ÷ {taxComplement}% = <strong>{results.grossAmount.toLocaleString("en-IN")}</strong>
                          </li>
                          <li>
                            <strong>Tax/TDS ({taxRNum}%)</strong> = {results.grossAmount.toLocaleString("en-IN")} × {taxRNum}% = <strong>{results.taxAmount.toLocaleString("en-IN")}</strong>
                            <div className="text-[13px] opacity-80 mt-0.5">
                              Verification: Gross ({results.grossAmount.toLocaleString("en-IN")}) - Tax ({results.taxAmount.toLocaleString("en-IN")}) = Target Net ({results.netPayable.toLocaleString("en-IN")})
                            </div>
                          </li>
                          <li>
                            <strong>VAT ({vatRNum}%)</strong> = {results.grossAmount.toLocaleString("en-IN")} × {vatRNum}% = <strong>{results.vatAmount.toLocaleString("en-IN")}</strong>
                          </li>
                          <li>
                            <strong>Total Payable by Client</strong> = Gross Base ({results.grossAmount.toLocaleString("en-IN")}) + VAT ({results.vatAmount.toLocaleString("en-IN")}) = <strong>{results.totalPayable.toLocaleString("en-IN")}</strong>
                          </li>
                        </ol>
                      </>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
