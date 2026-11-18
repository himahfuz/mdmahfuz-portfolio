import type { Metadata } from "next";

const title = "Privacy Policy — VAT Tax Calculator";
const description = "Privacy policy for the VAT Tax Calculator Chrome extension, including local storage, permissions, and data handling.";
const url = "/extensions/vat-tax-calculator/privacy-policy";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website" },
};

export default function ExtensionPrivacyPolicyPage() {
  return (
    <article className="glass-panel mx-auto mb-8 w-full max-w-3xl p-6 sm:p-10">
      <header className="border-b border-brand-primary/20 pb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">Chrome Extension</p>
        <h1 className="font-poppins text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-text-secondary"><strong>Last Updated:</strong> <time dateTime="2026-11-17">November 17, 2026</time></p>
      </header>
      <section className="mt-8 space-y-3 leading-relaxed">
        <h2 className="font-poppins text-xl font-semibold break-words">Overview</h2>
        <p><strong>VAT Tax Calculator</strong> is a standalone, offline-capable Chrome browser extension designed to calculate mathematical breakdowns for Gross Base, VAT, Tax / Withholding Tax (TDS), Net Payable, and Client Billing amounts.</p>
        <p>We respect your privacy completely. This extension <strong>does not collect, transmit, store on external servers, sell, or share any personal or financial data</strong>.</p>
      </section>
      <section className="mt-8 space-y-3 leading-relaxed">
        <h2 className="font-poppins text-xl font-semibold break-words">Data Collection &amp; Network Activity</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>No Personal Data Collected:</strong> We do not collect names, email addresses, IP addresses, browsing history, cookies, analytics, telemetry, or usage logs.</li>
          <li><strong>No External Network Requests:</strong> All calculations run 100% locally inside your browser. No transaction amounts, rates, notes, or calculation results are ever sent to any external server or third party.</li>
          <li><strong>No Third-Party Scripts or Trackers:</strong> The extension contains zero third-party SDKs, ad networks, analytics libraries, or remote code.</li>
        </ul>
      </section>
      <section className="mt-8 space-y-3 leading-relaxed">
        <h2 className="font-poppins text-xl font-semibold break-words">Local Storage Usage (<code>chrome.storage.local</code>)</h2>
        <p>The extension uses Chrome&apos;s built-in local storage API (<code>chrome.storage.local</code>) strictly on your device to save:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Your last-used calculator settings (calculation mode, amount, VAT/Tax rates, rounding preference, and light/dark theme).</li>
          <li>Calculations you explicitly choose to save to your local History list (including any optional note you add).</li>
        </ol>
        <p>This data remains strictly inside your local browser profile. You can delete individual saved entries or clear your entire history at any time from inside the extension, or remove all stored data immediately by uninstalling the extension.</p>
      </section>
      <section className="mt-8 space-y-3 leading-relaxed">
        <h2 className="font-poppins text-xl font-semibold break-words">Permissions Explanation</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong><code>storage</code>:</strong> Used solely to save your preferences, theme, and saved calculation history locally on your device.</li>
          <li><strong><code>sidePanel</code>:</strong> Used solely to let you open the calculator inside Google Chrome&apos;s Side Panel alongside your open documents or spreadsheets.</li>
        </ul>
        <p>The extension requests <strong>no website host permissions</strong> and cannot read or modify any web pages you visit.</p>
      </section>
      <section className="mt-8 space-y-3 leading-relaxed">
        <h2 className="font-poppins text-xl font-semibold break-words">Disclaimer</h2>
        <p>This extension performs mathematical calculations based strictly on user-supplied amounts and percentage rates. It does not provide legal, accounting, or tax advice and does not determine statutory or jurisdiction-specific tax rates. Always verify applicable VAT, sales tax, or withholding tax rates with your local tax authority or a qualified tax professional.</p>
      </section>
      <section className="mt-8 space-y-3 leading-relaxed">
        <h2 className="font-poppins text-xl font-semibold break-words">Changes to This Policy</h2>
        <p>If this privacy policy is updated in future versions of the extension, the revised policy and updated date will be published alongside the extension listing.</p>
      </section>
      <section className="mt-8 space-y-3 leading-relaxed">
        <h2 className="font-poppins text-xl font-semibold break-words">Contact</h2>
        <p>For questions or support regarding this extension, please use the Support tab on the Chrome Web Store listing page.</p>
      </section>
    </article>
  );
}
