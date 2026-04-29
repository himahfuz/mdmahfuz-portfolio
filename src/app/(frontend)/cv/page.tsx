"use client";

import { MapPin, Phone, Mail, Link2, Download, User, Briefcase, GraduationCap, List, Award, ChevronDown, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import portraitCv from "../../../../public/images/portrait-cv.jpeg";

export default function CV() {
  const [certOpen, setCertOpen] = useState<number | null>(null);

  const toggleCert = (index: number) => {
    setCertOpen(certOpen === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 pb-10 min-h-screen lg:min-h-0 overflow-x-hidden">
      
      {/* LEFT SIDEBAR */}
      <div className="w-full lg:w-[350px] shrink-0">
        <div className="glass-panel p-7 lg:sticky lg:top-5">
          <div className="w-40 h-40 mx-auto rounded-full border-[3px] border-white/70 overflow-hidden mb-5">
            <Image 
              src={portraitCv} 
              alt="MD Mahfuzur Rahman" 
              width={160} 
              height={160} 
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="font-poppins font-bold text-[22px] text-[var(--color-text-primary)] text-center whitespace-pre-line leading-tight">
            MD Mahfuzur{"\n"}Rahman
          </h2>
          <p className="font-inter font-medium text-[14px] text-[var(--color-brand-primary)] text-center mt-1">
            Auditor (Articleship Student)
          </p>

          <div className="w-full h-[1px] bg-white/50 my-4"></div>

          <div className="flex flex-col gap-3 mb-5">
            <div className="flex items-center gap-2.5">
              <MapPin size={16} className="text-[var(--color-brand-primary)]" />
              <span className="text-[13px] text-[var(--color-text-primary)]">Gazipur, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-[var(--color-brand-primary)]" />
              <span className="text-[13px] text-[var(--color-text-primary)]">+8801303819419</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-[var(--color-brand-primary)]" />
              <span className="text-[13px] text-[var(--color-text-primary)]">contact.mdmahfuz@gmail.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Link2 size={16} className="text-[var(--color-brand-primary)]" />
              <span className="text-[13px] text-[var(--color-text-primary)]">linkedin.com/in/mdmahfuzurali</span>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="font-semibold text-[14px] text-[var(--color-text-primary)] mb-3">Skills Overview</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-pill">📊 Accounting</span>
              <span className="skill-pill">VAT</span>
              <span className="skill-pill">Excel</span>
              <span className="skill-pill">📈 Data Analysis</span>
              <span className="skill-pill">Power BI</span>
              <span className="skill-pill">🤖 AI Tools</span>
            </div>
          </div>

          <button className="btn-primary w-full flex justify-center mt-5">
            <Download size={16} className="mr-2" /> Download CV (PDF)
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 flex flex-col gap-6">
        
        {/* A. Career Objective */}
        <section>
          <h3 className="font-poppins font-semibold text-[20px] text-[var(--color-text-primary)] flex items-center gap-2 mb-3">
            <User size={20} className="text-[var(--color-brand-primary)]" /> Career Objective
          </h3>
          <div className="glass-panel p-6">
            <p className="text-[15px] leading-[1.7] text-[var(--color-text-secondary)]">
              Dynamic and detail-oriented accounts professional with a solid foundation in financial reporting and current experience in a CA firm. I aim to contribute my skills in audit and data analysis to a forward-thinking organization while completing my Articleship and pursuing my goal of becoming a Chartered Accountant.
            </p>
          </div>
        </section>

        {/* B. Work Experience */}
        <section>
          <h3 className="font-poppins font-semibold text-[20px] text-[var(--color-text-primary)] flex items-center gap-2 mb-3">
            <Briefcase size={20} className="text-[var(--color-brand-primary)]" /> Work Experience
          </h3>
          <div className="glass-panel p-6 relative">
            <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-[var(--color-brand-accent)] hidden md:block"></div>
            
            <div className="flex gap-4 md:gap-6 mb-8 relative">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-[var(--color-brand-primary)] bg-white mt-2 shrink-0 hidden md:block relative -left-[18px] z-10"></div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                  <h4 className="font-bold text-[16px] text-[var(--color-text-primary)]">
                    <a href="https://qsibd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-primary)] transition-colors">
                      Islam Quazi Shafique & Co.
                    </a>
                  </h4>
                  <span className="badge mt-2 md:mt-0 w-max text-[12px]">Apr 2024 – Present</span>
                </div>
                <div className="font-semibold text-[13px] text-[var(--color-brand-primary)] mb-3">Auditor (Articleship Student)</div>
                <ul className="list-disc list-outside ml-4 text-[14px] leading-[1.6] text-[var(--color-text-secondary)] space-y-1">
                  <li>Reviewed organization invoices/vouchers, receives and payments, transactions, bank statements, cash books, ledger books, income statements, cash flow, advance payments and receipts.</li>
                  <li>Prepared audit report & financial statement as per IAS – 1.</li>
                  <li>Experienced in statutory audit.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 relative">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-[var(--color-brand-primary)] bg-white mt-2 shrink-0 hidden md:block relative -left-[18px] z-10"></div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                  <h4 className="font-bold text-[16px] text-[var(--color-text-primary)]">
                    <a href="https://www.daraz.com.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-primary)] transition-colors">
                      Daraz Bangladesh Limited
                    </a>
                  </h4>
                  <span className="badge mt-2 md:mt-0 w-max text-[12px]">Sep 2022 – Feb 2024</span>
                </div>
                <div className="font-semibold text-[13px] text-[var(--color-brand-primary)] mb-3">Team Lead & Customer Support</div>
                <ul className="list-disc list-outside ml-4 text-[14px] leading-[1.6] text-[var(--color-text-secondary)] space-y-1">
                  <li>Analyzed customer experience data to identify and report on key performance metrics.</li>
                  <li>Led a quality assurance team, providing training and implementing new processes to improve team efficiency.</li>
                  <li>Resolved complex seller issues and contributed to projects aimed at process improvement.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* C. Education */}
        <section>
          <h3 className="font-poppins font-semibold text-[20px] text-[var(--color-text-primary)] flex items-center gap-2 mb-3">
            <GraduationCap size={20} className="text-[var(--color-brand-primary)]" /> Education Qualification
          </h3>
          <div className="glass-panel p-6 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <tbody>
                <tr className="border-b border-white/40">
                  <td className="py-3 font-semibold text-[14px] text-[var(--color-brand-primary)] w-[25%]">BBA (2021)</td>
                  <td className="py-3 text-[14px] text-[var(--color-text-primary)] w-[35%]">Accounting</td>
                  <td className="py-3 text-[13px] text-[var(--color-text-secondary)]">National University (Siddheswari College)</td>
                </tr>
                <tr className="border-b border-white/40">
                  <td className="py-3 font-semibold text-[14px] text-[var(--color-brand-primary)]">HSC (2017)</td>
                  <td className="py-3 text-[14px] text-[var(--color-text-primary)]">Business Studies</td>
                  <td className="py-3 text-[13px] text-[var(--color-text-secondary)]">Milestone College, Dhaka</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[14px] text-[var(--color-brand-primary)]">SSC (2015)</td>
                  <td className="py-3 text-[14px] text-[var(--color-text-primary)]">Business Studies</td>
                  <td className="py-3 text-[13px] text-[var(--color-text-secondary)]">Security Printing Corporation High School, Gazipur</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* D. Skills */}
        <section>
          <h3 className="font-poppins font-semibold text-[20px] text-[var(--color-text-primary)] flex items-center gap-2 mb-3">
            <List size={20} className="text-[var(--color-brand-primary)]" /> Skills
          </h3>
          <div className="glass-panel p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[14px] text-[var(--color-brand-primary)] mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-technical">Financial Statement</span>
                <span className="badge badge-technical">VAT</span>
                <span className="badge badge-technical">Microsoft Excel</span>
                <span className="badge badge-technical">Data Analysis</span>
                <span className="badge badge-technical">Artificial Intelligence</span>
                <span className="badge badge-technical">G-suite</span>
                <span className="badge badge-technical">Power BI</span>
                <span className="badge badge-technical">Bookkeeping Software</span>
                <span className="badge badge-technical">CRM Software</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[14px] text-[var(--color-brand-primary)] mb-3">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-soft">Team Management</span>
                <span className="badge badge-soft">Communication</span>
                <span className="badge badge-soft">Adaptability</span>
                <span className="badge badge-soft">Organizational Skills</span>
                <span className="badge badge-soft">Time Management</span>
                <span className="badge badge-soft">Collaboration</span>
              </div>
            </div>
          </div>
        </section>

        {/* E. Certifications */}
        <section>
          <h3 className="font-poppins font-semibold text-[20px] text-[var(--color-text-primary)] flex items-center gap-2 mb-3">
            <Award size={20} className="text-[var(--color-brand-primary)]" /> Course & Certificate
          </h3>
          <div className="glass-panel p-6 flex flex-col gap-4">
            
            <div className="border border-white/50 rounded-lg overflow-hidden accordion-item bg-white/20">
              <button 
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleCert(0)}
              >
                <div className="flex items-center gap-3">
                  <Award size={18} className="text-[var(--color-brand-primary)]" />
                  <span className="font-semibold text-[15px] text-[var(--color-text-primary)]">Business Intelligence with Excel (Ostad)</span>
                </div>
                <ChevronDown size={18} className={`transition-transform duration-300 ${certOpen === 0 ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-4 text-[13px] text-[var(--color-text-secondary)] transition-all duration-300 overflow-hidden ${certOpen === 0 ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                Manage Data Model | Data relationship | Advance formula (Vlookup, Index, Match etc) | Power Pivot | Power Query
              </div>
            </div>

            <div className="border border-white/50 rounded-lg overflow-hidden accordion-item bg-white/20">
              <button 
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleCert(1)}
              >
                <div className="flex items-center gap-3">
                  <Award size={18} className="text-[var(--color-brand-primary)]" />
                  <span className="font-semibold text-[15px] text-[var(--color-text-primary)]">Power BI for Professionals (Ostad)</span>
                </div>
                <ChevronDown size={18} className={`transition-transform duration-300 ${certOpen === 1 ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-4 text-[13px] text-[var(--color-text-secondary)] transition-all duration-300 overflow-hidden ${certOpen === 1 ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                Data transform | DAX Calculation | Interactive Reporting
              </div>
            </div>

          </div>
        </section>

        {/* F. Achievements */}
        <section>
          <h3 className="font-poppins font-semibold text-[20px] text-[var(--color-text-primary)] flex items-center gap-2 mb-3">
            <Trophy size={20} className="text-[var(--color-brand-primary)]" /> Achievement & Award
          </h3>
          <div className="glass-panel p-6">
            <div className="flex gap-4 mb-5">
              <span className="text-[#f59e0b] text-[24px] leading-none">★</span>
              <div>
                <h4 className="font-semibold text-[15px] text-[var(--color-text-primary)]">Awarded Employee of the Q3 FY23</h4>
                <p className="text-[13px] text-[var(--color-text-secondary)] italic mt-1">"Daraz Bangladesh Ltd" for consistently innovate and exceeding team performance metric. – Feb 2023</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Trophy size={24} className="text-[var(--color-brand-primary)] shrink-0" />
              <div>
                <h4 className="font-semibold text-[15px] text-[var(--color-text-primary)]">Top performers</h4>
                <p className="text-[13px] text-[var(--color-text-secondary)] italic mt-1">"Genex Infosys" (Airtel Process) – Jan 2022</p>
              </div>
            </div>
          </div>
        </section>


        {/* H. Reference */}
        <section>
          <h3 className="font-poppins font-semibold text-[20px] text-[var(--color-text-primary)] flex items-center gap-2 mb-3">
            <Users size={20} className="text-[var(--color-brand-primary)]" /> Reference
          </h3>
          <div className="glass-panel p-6 flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full bg-[#e6efe9] overflow-hidden shrink-0 flex items-center justify-center relative">
              <Image src="/images/avatars/avatar-tanveer.jpg" alt="Tanveer Hossain" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-[16px] text-[var(--color-text-primary)]">Tanveer Hossain</h4>
              <p className="text-[13px] text-[var(--color-text-secondary)] mb-1">Head of Customer Experience, Cartup (US-Bangla)</p>
              <div className="flex items-center gap-2 text-[13px] text-[var(--color-text-primary)]">
                <Phone size={14} className="text-[var(--color-brand-primary)]" />
                <span>+8801711506533</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
