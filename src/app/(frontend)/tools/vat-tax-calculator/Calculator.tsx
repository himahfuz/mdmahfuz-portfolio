"use client";

import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";

export default function Calculator() {
  const [mode, setMode] = useState<"net" | "total">("net");
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

  useEffect(() => {
    calculate();
  }, [mode, amount, taxRate, vatRate]);

  const calculate = () => {
    const amt = parseFloat(amount.toString()) || 0;
    const taxR = parseFloat(taxRate.toString()) || 0;
    const vatR = parseFloat(vatRate.toString()) || 0;

    let grossAmount = 0;
    let taxAmount = 0;
    let vatAmount = 0;
    let totalPayable = 0;
    let netPayable = 0;

    if (mode === "net") {
      // Mode 1: Excluding VAT & Tax (Net)
      grossAmount = amt / (1 - taxR / 100);
      taxAmount = grossAmount * (taxR / 100);
      vatAmount = grossAmount * (vatR / 100);
      totalPayable = grossAmount + vatAmount;
      netPayable = amt;
    } else {
      // Mode 2: Including VAT & Tax (Total)
      grossAmount = amt / (1 + vatR / 100);
      taxAmount = grossAmount * (taxR / 100);
      vatAmount = grossAmount * (vatR / 100);
      netPayable = grossAmount - taxAmount;
      totalPayable = amt;
    }

    setResults({
      grossAmount: Math.round(grossAmount),
      taxAmount: Math.round(taxAmount),
      vatAmount: Math.round(vatAmount),
      totalPayable: Math.round(totalPayable),
      netPayable: Math.round(netPayable),
    });
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="glass-panel p-10 md:p-12 w-full mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
          <div className="w-12 h-12 bg-[var(--color-brand-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-brand-primary)]">
            <LucideIcons.Calculator size={24} />
          </div>
          <h1 className="font-poppins font-bold text-[30px] md:text-[36px] text-[var(--color-text-primary)] leading-tight">
            Consultant VAT & Tax Calculator
          </h1>
        </div>
        <p className="font-inter text-[15px] text-[var(--color-text-secondary)] mt-4">
          Calculate Gross, VAT, and Tax amounts based on standard professional services rates in Bangladesh.
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
            {/* Mode Toggle */}
            <div className="space-y-3">
              <label className="block text-[14px] font-medium text-[var(--color-text-secondary)]">Calculation Mode</label>
              <div className="flex flex-col sm:flex-row gap-3 bg-white/5 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setMode("net")}
                  className={`flex-1 py-3 px-4 text-[14px] font-medium rounded-lg transition-all duration-200 ${
                    mode === "net"
                      ? "bg-[var(--color-brand-primary)] text-white shadow-md"
                      : "text-[var(--color-text-secondary)] hover:bg-white/5"
                  }`}
                >
                  Excluding VAT & Tax (Net)
                </button>
                <button
                  onClick={() => setMode("total")}
                  className={`flex-1 py-3 px-4 text-[14px] font-medium rounded-lg transition-all duration-200 ${
                    mode === "total"
                      ? "bg-[var(--color-brand-primary)] text-white shadow-md"
                      : "text-[var(--color-text-secondary)] hover:bg-white/5"
                  }`}
                >
                  Including VAT & Tax (Total)
                </button>
              </div>
            </div>

            {/* Amount Input */}
            <div className="space-y-2">
              <label className="block text-[14px] font-medium text-[var(--color-text-secondary)]">
                {mode === "net" ? "Net Amount you want to receive (BDT)" : "Total Budget/Inclusive Amount (BDT)"}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-[var(--color-text-secondary)] font-medium">৳</span>
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 focus:border-[var(--color-brand-primary)] rounded-xl py-3 pl-10 pr-4 text-[var(--color-text-primary)] font-medium outline-none transition-colors"
                  placeholder="e.g. 100000"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Tax Rate Input */}
              <div className="space-y-2">
                <label className="block text-[14px] font-medium text-[var(--color-text-secondary)]">Tax/TDS Rate (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 focus:border-[var(--color-brand-primary)] rounded-xl py-3 px-4 text-[var(--color-text-primary)] font-medium outline-none transition-colors"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="text-[var(--color-text-secondary)]">%</span>
                  </div>
                </div>
              </div>

              {/* VAT Rate Input */}
              <div className="space-y-2">
                <label className="block text-[14px] font-medium text-[var(--color-text-secondary)]">VAT Rate (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={vatRate}
                    onChange={(e) => setVatRate(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 focus:border-[var(--color-brand-primary)] rounded-xl py-3 px-4 text-[var(--color-text-primary)] font-medium outline-none transition-colors"
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
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 md:p-8 h-full flex flex-col border-t-4 border-t-[var(--color-brand-primary)] shadow-lg bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <h2 className="font-poppins font-bold text-[22px] text-[var(--color-text-primary)]">
                Calculation Summary
              </h2>
              <span className="text-[12px] font-medium px-3 py-1 bg-white/10 rounded-full text-[var(--color-text-secondary)]">
                {mode === "net" ? "Net-to-Gross Mode" : "Gross-to-Net Mode"}
              </span>
            </div>

            <div className="space-y-6 flex-1 font-mono text-[15px]">
              {/* Gross Amount */}
              <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
                <span className="text-[var(--color-text-secondary)] flex items-center gap-2">
                  <LucideIcons.FileText size={16} />
                  Gross Amount
                </span>
                <span className="font-semibold text-[var(--color-text-primary)]">
                  ৳ {results.grossAmount.toLocaleString('en-IN')}
                </span>
              </div>

              {/* VAT Addition */}
              <div className="flex justify-between items-center p-3 bg-green-500/5 rounded-lg border border-green-500/20">
                <span className="text-green-600 dark:text-green-400 flex items-center gap-2">
                  <LucideIcons.PlusCircle size={16} />
                  Add: VAT ({taxRate === "" ? "0" : vatRate}%)
                </span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  + ৳ {results.vatAmount.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Gross + VAT */}
              <div className="flex justify-between items-center p-3 border-t border-white/10">
                <span className="font-medium text-[var(--color-text-primary)]">
                  Total Value (Gross + VAT)
                </span>
                <span className="font-bold text-[16px] text-[var(--color-text-primary)]">
                  ৳ {(results.grossAmount + results.vatAmount).toLocaleString('en-IN')}
                </span>
              </div>

              {/* Tax Deduction */}
              <div className="flex justify-between items-center p-3 bg-red-500/5 rounded-lg border border-red-500/20 mt-4">
                <span className="text-red-500 flex items-center gap-2">
                  <LucideIcons.MinusCircle size={16} />
                  Less: Tax/TDS ({taxRate === "" ? "0" : taxRate}%)
                </span>
                <span className="font-semibold text-red-500">
                  - ৳ {results.taxAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Final Totals */}
            <div className="mt-8 pt-6 border-t-2 border-white/10">
              <div className="bg-[var(--color-brand-primary)]/10 rounded-xl p-6 border border-[var(--color-brand-primary)]/20">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-[var(--color-text-secondary)]">
                    Net Payable to Consultant
                  </span>
                  <span className="font-bold text-[24px] text-[var(--color-text-primary)]">
                    ৳ {results.netPayable.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[var(--color-brand-primary)]/10">
                  <span className="font-medium text-[var(--color-text-secondary)]">
                    Total Payable by Client (Budget)
                  </span>
                  <span className="font-bold text-[20px] text-[var(--color-brand-primary)]">
                    ৳ {results.totalPayable.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 flex items-start gap-2 text-[12px] text-[var(--color-text-secondary)] opacity-80">
              <LucideIcons.Info size={14} className="mt-0.5 shrink-0" />
              <p>
                Calculations based on standard accounting practices. Please verify with the latest NBR Statutory Rules and Orders (SROs) for applicable rates for your specific service category.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
