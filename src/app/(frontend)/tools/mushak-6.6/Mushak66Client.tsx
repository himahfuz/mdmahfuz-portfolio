"use client";

import React, { useState, useRef } from "react";
import { Plus, Trash2, Printer, FileText } from "lucide-react";
import { useReactToPrint } from "react-to-print";

// --- Types ---
interface Invoice {
  id: string;
  supplierName: string;
  supplierBin: string;
  invoiceNo: string;
  issueDate: string;
  supplyPrice: number;
  vatAmount: number;
  vatDeducted: number;
}

interface DeductingEntity {
  name: string;
  address: string;
  bin: string;
  certificateDate: string;
  certificateNo: string;
}

interface Signatory {
  name: string;
  designation: string;
}

// --- Helpers ---
function numberToWords(num: number): string {
  if (!num || num === 0) return "Zero";
  
  const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function convertTens(n: number): string {
    if (n < 20) return a[n];
    return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
  }

  let words = "";
  
  const crore = Math.floor(num / 10000000);
  num %= 10000000;
  
  const lac = Math.floor(num / 100000);
  num %= 100000;
  
  const thousand = Math.floor(num / 1000);
  num %= 1000;
  
  const hundred = Math.floor(num / 100);
  num %= 100;
  
  if (crore > 0) words += convertTens(crore) + " Crore ";
  if (lac > 0) words += convertTens(lac) + " Lac ";
  if (thousand > 0) words += convertTens(thousand) + " Thousand ";
  if (hundred > 0) words += convertTens(hundred) + " Hundred ";
  
  if (num > 0) {
    if (words !== "") words += "and ";
    words += convertTens(num);
  }
  
  return words.trim() + " Taka Only";
}

// --- Main Component ---
export default function Mushak66Client() {
  const [entity, setEntity] = useState<DeductingEntity>({
    name: "",
    address: "",
    bin: "",
    certificateDate: "",
    certificateNo: "",
  });

  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: crypto.randomUUID(),
      supplierName: "",
      supplierBin: "",
      invoiceNo: "",
      issueDate: "",
      supplyPrice: 0,
      vatAmount: 0,
      vatDeducted: 0,
    },
  ]);

  const [signatory, setSignatory] = useState<Signatory>({
    name: "",
    designation: "",
  });

  const contentRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: entity.name ? `Mushak_6.6_${entity.name}` : "Mushak_6.6",
  });

  const addInvoice = () => {
    setInvoices([
      ...invoices,
      {
        id: crypto.randomUUID(),
        supplierName: "",
        supplierBin: "",
        invoiceNo: "",
        issueDate: "",
        supplyPrice: 0,
        vatAmount: 0,
        vatDeducted: 0,
      },
    ]);
  };

  const removeInvoice = (id: string) => {
    setInvoices(invoices.filter((inv) => inv.id !== id));
  };

  const updateInvoice = (id: string, field: keyof Invoice, value: string | number) => {
    setInvoices(
      invoices.map((inv) => (inv.id === id ? { ...inv, [field]: value } : inv))
    );
  };

  const updateEntity = (field: keyof DeductingEntity, value: string) => {
    setEntity({ ...entity, [field]: value });
  };

  const updateSignatory = (field: keyof Signatory, value: string) => {
    setSignatory({ ...signatory, [field]: value });
  };

  const totalSupplyPrice = invoices.reduce((sum, inv) => sum + (Number(inv.supplyPrice) || 0), 0);
  const totalVatAmount = invoices.reduce((sum, inv) => sum + (Number(inv.vatAmount) || 0), 0);
  const totalVatDeducted = invoices.reduce((sum, inv) => sum + (Number(inv.vatDeducted) || 0), 0);

  return (
    <div className="w-full bg-neutral-50 p-4 md:p-8 pt-10 md:pt-14 rounded-[2rem]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <FileText className="h-8 w-8 text-blue-600" />
            Mushak 6.6 Online Form - VDS Certificate
          </h1>
          <p className="text-gray-500 mt-2 text-base">
            Generate NBR standard Mushak 6.6 (Certificate of Tax Deduction at Source) in one click. Auto formats for A4 landscape printing.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* Section A: Data Input Form */}
          <div className="xl:col-span-5 space-y-6">
            
            {/* 1. Deducting Entity */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 h-6 w-6 rounded-full flex items-center justify-center text-sm">1</span>
                Deducting Entity Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Entity Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 border p-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    value={entity.name}
                    onChange={(e) => updateEntity("name", e.target.value)}
                    placeholder="e.g. ABC Corporation Ltd."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 border p-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    value={entity.address}
                    onChange={(e) => updateEntity("address", e.target.value)}
                    placeholder="Company Address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">BIN (Business Identification Number)</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 border p-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    value={entity.bin}
                    onChange={(e) => updateEntity("bin", e.target.value)}
                    placeholder="13-digit BIN"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Certificate No.</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 border p-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                      value={entity.certificateNo}
                      onChange={(e) => updateEntity("certificateNo", e.target.value)}
                      placeholder="e.g. 001/2023"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
                    <input
                      type="date"
                      className="w-full rounded-lg border-gray-300 border p-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                      value={entity.certificateDate}
                      onChange={(e) => updateEntity("certificateDate", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Invoices */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 h-6 w-6 rounded-full flex items-center justify-center text-sm">2</span>
                  Invoices & Deductions
                </h2>
                <button
                  onClick={addInvoice}
                  className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg"
                >
                  <Plus className="w-4 h-4" /> Add Row
                </button>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {invoices.map((inv, index) => (
                  <div key={inv.id} className="p-4 border border-gray-200 rounded-xl bg-gray-50/50 relative group">
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => removeInvoice(inv.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors"
                        title="Remove Invoice"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Invoice #{index + 1}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1 uppercase tracking-wider">Supplier Name</label>
                        <input
                          type="text"
                          className="w-full rounded-md border-gray-300 border p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                          value={inv.supplierName}
                          onChange={(e) => updateInvoice(inv.id, "supplierName", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1 uppercase tracking-wider">Supplier BIN</label>
                        <input
                          type="text"
                          className="w-full rounded-md border-gray-300 border p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                          value={inv.supplierBin}
                          onChange={(e) => updateInvoice(inv.id, "supplierBin", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1 uppercase tracking-wider">Mushak 6.3 No.</label>
                        <input
                          type="text"
                          className="w-full rounded-md border-gray-300 border p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                          value={inv.invoiceNo}
                          onChange={(e) => updateInvoice(inv.id, "invoiceNo", e.target.value)}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1 uppercase tracking-wider">Issue Date</label>
                        <input
                          type="date"
                          className="w-full rounded-md border-gray-300 border p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                          value={inv.issueDate}
                          onChange={(e) => updateInvoice(inv.id, "issueDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1 uppercase tracking-wider">Supply Price (Tk)</label>
                        <input
                          type="number"
                          className="w-full rounded-md border-gray-300 border p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                          value={inv.supplyPrice || ""}
                          onChange={(e) => updateInvoice(inv.id, "supplyPrice", parseFloat(e.target.value) || 0)}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1 uppercase tracking-wider">Total VAT (Tk)</label>
                        <input
                          type="number"
                          className="w-full rounded-md border-gray-300 border p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                          value={inv.vatAmount || ""}
                          onChange={(e) => updateInvoice(inv.id, "vatAmount", parseFloat(e.target.value) || 0)}
                        />
                      </div>
                      <div className="sm:col-span-2 mt-1">
                        <label className="block text-xs font-bold text-blue-700 mb-1">Deducted VAT Amount (Tk)</label>
                        <input
                          type="number"
                          className="w-full rounded-md border-blue-300 bg-blue-50/50 border p-2.5 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                          value={inv.vatDeducted || ""}
                          onChange={(e) => updateInvoice(inv.id, "vatDeducted", parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Authorized Signatory */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 h-6 w-6 rounded-full flex items-center justify-center text-sm">3</span>
                Authorized Signatory
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 border p-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    value={signatory.name}
                    onChange={(e) => updateSignatory("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 border p-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                    value={signatory.designation}
                    onChange={(e) => updateSignatory("designation", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Print Button */}
            <button
              onClick={() => handlePrint()}
              className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all font-bold text-lg active:scale-[0.98]"
            >
              <Printer className="w-6 h-6" />
              Print Mushak 6.6
            </button>
          </div>

          {/* Section B: Print Preview (A4 Size) */}
          <div className="xl:col-span-7 bg-gray-200/50 rounded-2xl p-4 md:p-8 overflow-x-auto block border border-gray-200 shadow-inner max-w-full">
            <div 
              ref={contentRef}
              className="bg-white shadow-2xl mx-auto print:shadow-none w-[297mm] min-h-[210mm] p-[20mm] text-black print:w-full print:p-[15mm] shrink-0 print:overflow-hidden"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              {/* Header */}
              <div className="relative mb-8 text-center pt-2">
                <div className="absolute top-0 left-0">
                  <img src="/Government_Seal_of_Bangladesh.svg.webp" alt="Government Seal" className="w-28 h-28 object-contain" />
                </div>
                <div className="absolute top-8 right-8 border border-black px-4 py-1">
                  <p className="font-bold text-[14px]">MUSHAK 6.6</p>
                </div>
                <div className="pt-2">
                  <p className="text-[15px] leading-tight">Government of People's Republic of Bangladesh</p>
                  <p className="font-bold text-[16px] leading-tight mt-1">National Board of Revenue</p>
                  <p className="font-bold text-[16px] mt-6">Certificate of tax deduction at source</p>
                  <p className="text-[14px]">Note clause(f) of sub-rule(1) of rule 40</p>
                </div>
              </div>

              {/* Top Info */}
              <div className="mb-10 space-y-1.5 text-[14px]">
                <div className="flex items-start">
                  <span className="w-[380px] text-left">Name of the entity that deducts tax at source</span>
                  <span className="w-[10px]">:</span>
                  <span className="flex-1 ml-2">{entity.name}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-[380px] text-left">Address of the tax deductible entity at source</span>
                  <span className="w-[10px]">:</span>
                  <span className="flex-1 ml-2">{entity.address}</span>
                </div>
                <div className="flex items-start">
                  <span className="w-[380px] text-left">BIN of the tax deductible entity at source(where applicable)</span>
                  <span className="w-[10px]">:</span>
                  <span className="flex-1 ml-2">{entity.bin}</span>
                </div>
              </div>

              {/* Sub-header */}
              <div className="flex justify-between items-end mb-4 text-[14px] font-bold">
                <div>Source Tax Deduction Certificate No: {entity.certificateNo}</div>
                <div>Date of Issue: {entity.certificateDate ? new Date(entity.certificateDate).toLocaleDateString('en-GB') : ''}</div>
              </div>

              <p className="mb-6 text-[13px] leading-relaxed text-justify">
                This is to certified that VAT has been deducted at source from the supplier having VAT deductitble at Source in accordance with section 49 of the Act. The VAT so deducted has been deposited in the government treasury by book transfer/treasury challan/increasing adjustment in the return. A copy has been attached. (If Applicable)
              </p>

              {/* Table */}
              <div className="mb-8">
                <table className="w-full text-[13px] border-collapse border-2 border-black">
                  <thead>
                    <tr>
                      <th rowSpan={2} className="border-2 border-black p-2 w-12 text-center align-middle font-bold">SL. No.</th>
                      <th colSpan={2} className="border-2 border-black p-2 text-center align-middle font-bold">Supplier</th>
                      <th colSpan={2} className="border-2 border-black p-2 text-center align-middle font-bold">Corresponding tax Invoice</th>
                      <th rowSpan={2} className="border-2 border-black p-2 w-28 text-center align-middle font-bold">Supply Price(in<br/>Taka)</th>
                      <th rowSpan={2} className="border-2 border-black p-2 w-28 text-center align-middle font-bold">Amount of<br/>VAT(Money)</th>
                      <th rowSpan={2} className="border-2 border-black p-2 w-28 text-center align-middle font-bold">Amount of VAT<br/>deducted at<br/>source</th>
                    </tr>
                    <tr>
                      <th className="border-2 border-black p-2 text-center align-middle font-bold">Name</th>
                      <th className="border-2 border-black p-2 text-center align-middle font-bold">BIN</th>
                      <th className="border-2 border-black p-2 w-16 text-center align-middle font-bold">No.</th>
                      <th className="border-2 border-black p-2 w-24 text-center align-middle font-bold">Issue Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((inv, idx) => (
                      <tr key={inv.id} className="break-inside-avoid">
                        <td className="border-2 border-black p-1.5 text-right pr-2">{idx + 1}</td>
                        <td className="border-2 border-black p-1.5 text-left">{inv.supplierName}</td>
                        <td className="border-2 border-black p-1.5 text-center">{inv.supplierBin}</td>
                        <td className="border-2 border-black p-1.5 text-center">{inv.invoiceNo}</td>
                        <td className="border-2 border-black p-1.5 text-center">{inv.issueDate ? new Date(inv.issueDate).toLocaleDateString('en-GB') : ''}</td>
                        <td className="border-2 border-black p-1.5 text-right">{inv.supplyPrice ? Number(inv.supplyPrice).toLocaleString('en-IN') : ''}</td>
                        <td className="border-2 border-black p-1.5 text-right">{inv.vatAmount ? Number(inv.vatAmount).toLocaleString('en-IN') : ''}</td>
                        <td className="border-2 border-black p-1.5 text-right">{inv.vatDeducted ? Number(inv.vatDeducted).toLocaleString('en-IN') : ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Signatures */}
              <div className="text-[14px] font-bold break-inside-avoid mt-8">
                <div className="mb-1">Authorised Officer-</div>
                <div className="flex mb-1">
                  <span className="w-24">Signature</span>
                  <span className="w-[10px]">:</span>
                  <span className="flex-1 ml-2"></span>
                </div>
                <div className="flex">
                  <span className="w-24">Name</span>
                  <span className="w-[10px]">:</span>
                  <span className="flex-1 ml-2 font-normal">
                    {signatory.name ? `${signatory.name}${signatory.designation ? `, ${signatory.designation}` : ''}${entity.name ? `, ${entity.name}` : ''}` : ''}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Print and Scrollbar Styling */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8; 
        }
      `}} />
    </div>
  );
}
