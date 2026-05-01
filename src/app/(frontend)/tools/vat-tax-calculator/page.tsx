import type { Metadata } from "next";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Consultant VAT & Tax Calculator (BD)",
  description: "Easily calculate Gross, VAT, and TDS on consultant fees. Supports both Including and Excluding calculation methods as per NBR standard rules.",
  openGraph: {
    title: "Consultant VAT & Tax Calculator (BD)",
    description: "Easily calculate Gross, VAT, and TDS on consultant fees. Supports both Including and Excluding calculation methods as per NBR standard rules.",
    url: "https://mdmahfuz.com/tools/vat-tax-calculator",
  },
};

export default function Page() {
  return <Calculator />;
}
