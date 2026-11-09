export interface FaqItemData {
  id: string;
  question: string;
  rawAnswer: string;
}

export interface FaqStepData {
  stepNumber: number;
  stepTitle: string;
  stepSubtitle: string;
  items: FaqItemData[];
}

export const FAQ_STEPS: FaqStepData[] = [
  {
    stepNumber: 1,
    stepTitle: "Step 1 — Basic VAT",
    stepSubtitle: "Core fundamentals of Bangladesh VAT & Tax calculation",
    items: [
      {
        id: "faq-what-is-vat-tax-calculator",
        question: "What is a VAT Tax Calculator in Bangladesh?",
        rawAnswer:
          "A VAT Tax Calculator in Bangladesh is an online financial tool designed for businesses, consultants, vendors, and finance professionals to compute Value Added Tax (VAT), Tax Deducted at Source (TDS), and VAT Deducted at Source (VDS) in compliance with NBR regulations under the Value Added Tax and Supplementary Duty Act 2012 and Income Tax Act 2023. It accurately calculates the required Gross base, statutory deductions, client billing amount, and net receivable take-home pay.",
      },
    ],
  },
  {
    stepNumber: 2,
    stepTitle: "Step 2 — VAT Calculation",
    stepSubtitle: "Formulas and steps for inclusive and exclusive VAT calculation",
    items: [
      {
        id: "faq-calculate-vat-exclusive",
        question: "How do I calculate VAT from a VAT-exclusive amount?",
        rawAnswer:
          "To calculate VAT from a VAT-exclusive base amount, multiply the base amount by the VAT rate percentage: VAT Amount = Base Amount × (VAT Rate ÷ 100). The total payable is: Total Payable = Base Amount + VAT Amount. For example, for a base of 100,000 at 15% VAT, VAT is 15,000 and total payable is 115,000.",
      },
      {
        id: "faq-calculate-vat-inclusive",
        question: "How do I calculate VAT from a VAT-inclusive amount?",
        rawAnswer:
          "To calculate VAT from a VAT-inclusive amount, first extract the base amount by dividing the total by (1 + VAT Rate ÷ 100): Base Amount = VAT-Inclusive Amount ÷ (1 + (VAT Rate ÷ 100)). Then subtract the base amount from the total to find the VAT: VAT Amount = VAT-Inclusive Amount − Base Amount. For example, a 115,000 total at 15% VAT yields a base of 100,000 and VAT of 15,000.",
      },
      {
        id: "faq-vat-in-gross-bill",
        question: "How can I calculate the VAT amount included in a gross bill?",
        rawAnswer:
          "To find the VAT amount included in a gross bill directly in one step, use the VAT Fraction formula: VAT Amount = Gross Bill × [VAT Rate ÷ (100 + VAT Rate)]. For Bangladesh's standard 15% VAT, multiply by 15/115 (or divide by 7.6667). For 10%, multiply by 10/110. For 7.5%, multiply by 7.5/107.5. For 5%, multiply by 5/105.",
      },
    ],
  },
  {
    stepNumber: 3,
    stepTitle: "Step 3 — Tax & Deduction",
    stepSubtitle: "TDS, VDS, Advance Income Tax, and combined deductions in Bangladesh",
    items: [
      {
        id: "faq-difference-vat-tax-tds-vds",
        question: "What is the difference between VAT, TAX, TDS and VDS in Bangladesh?",
        rawAnswer:
          "In Bangladesh: VAT (Value Added Tax) is an indirect consumption tax added onto sales of goods and services (usually 15%). Income Tax / AIT is a direct tax on personal or business profits. TDS (Tax Deducted at Source) is income tax withheld by the client from the supplier's gross payment under the Income Tax Act 2023. VDS (VAT Deducted at Source) is VAT withheld by registered withholding entities at the time of payment under the VAT Act 2012 and deposited to the government treasury via Mushak-6.6 certificate.",
      },
      {
        id: "faq-calculate-vat-and-tds-together",
        question: "How do I calculate VAT and TDS together?",
        rawAnswer:
          "To calculate VAT and TDS together under Bangladesh regulations: 1) Identify the Gross Base amount. 2) Deduct TDS only from the Gross Base (TDS = Gross × Tax%). 3) Add VAT only on top of the Gross Base (VAT = Gross × VAT%). Crucially, TDS is never deducted from the VAT amount, and VAT is never applied to the tax deduction. For a 100,000 gross with 7.5% TDS and 15% VAT: Gross = 100,000; VAT (+15%) = 15,000; Total Bill = 115,000; TDS (-7.5%) = 7,500; Net cash paid to vendor = 92,500.",
      },
      {
        id: "faq-calculate-net-payable-after-tds",
        question: "How do I calculate net payable after deducting TDS?",
        rawAnswer:
          "To calculate net payable after deducting TDS: Net Payable = Gross Base − (Gross Base × Tax Rate ÷ 100). If you want to know the required gross contract to guarantee a specific target net take-home pay, reverse gross-up: Required Gross = Desired Net ÷ [1 − (Tax Rate ÷ 100)]. For instance, to take home 100,000 net after 7.5% TDS: Required Gross = 100,000 ÷ (1 - 0.075) = 100,000 ÷ 0.925 = 108,108. TDS withheld is 8,108, leaving exactly 100,000 net.",
      },
    ],
  },
  {
    stepNumber: 4,
    stepTitle: "Step 4 — Calculator Features",
    stepSubtitle: "Understanding the four calculation modes in this calculator",
    items: [
      {
        id: "faq-four-calculation-modes",
        question: "What are the four calculation modes available in this VAT Tax Calculator?",
        rawAnswer:
          "This calculator offers 4 modes: 1) Excluding VAT & Tax (Net): You enter the net cash you want; it calculates the required gross bill, TDS, and VAT. 2) Including VAT & Tax (Total): You enter the client's all-inclusive budget; it extracts VAT, calculates TDS, and reveals net pay. 3) Exclusive VAT, Inclusive Tax (Base Contract): You enter the base contract; it calculates TDS to withhold, adds VAT on gross, and gives total invoice. 4) Inclusive VAT, Exclusive Tax (Reverse VAT): You enter an amount with VAT where TDS was omitted; it extracts net base and reverse grosses for TDS.",
      },
    ],
  },
];

