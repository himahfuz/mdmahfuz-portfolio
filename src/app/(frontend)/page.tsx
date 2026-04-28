import { Briefcase } from "lucide-react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import Image from "next/image";
import portraitHome from "../../../public/images/portrait-home.jpg";

export default function Home() {
  const testimonials = [
    {
      name: "Tanveer Hussain",
      designation: "Head of Customer Experience at cartup | A concern of US-Bangla Airlines | xDaraz AIDC | xGrameenphone",
      review: "I am pleased to recommend MD Mahfuzur Rahman, a talented professional with a proven track record in quality assurance and customer service.\n\nHaving worked closely with Mahfuzur at Daraz, where he served as an Assistant Team Lead in Quality Assurance, I've witnessed firsthand his exceptional problem-solving skills and quick-thinking abilities. Mahfuzur consistently demonstrates a keen eye for detail and a dedication to ensuring top-notch quality in all aspects of his work.\n\nPrior to his role at Daraz, Mahfuzur served as a Customer Service Officer at Genex Infosys, where he honed his expertise in customer support and experience. His ability to effectively navigate complex customer issues and provide timely solutions has been commendable.\n\nMahfuzur is not only a valuable asset to any team due to his technical skills but also possesses strong leadership qualities. His natural ability to inspire and motivate his peers positions him as a true leadership material.\n\nFurthermore, Mahfuzur's analytical mindset and proficiency in handling data make him adept at identifying patterns and trends that contribute to continuous improvement and optimization.\n\nIt's been a pleasure collaborating with Mahfuzur, and I have no doubt that he will continue to excel in his career. I highly recommend Mahfuzur Rahman and wish him all the best in his future endeavors.\n\nCheers!",
      avatarSrc: "/images/avatars/avatar-tanveer.jpg",
    },
    {
      name: "Rezwan Nabi Tazin",
      designation: "Founder, Managing Director- Sparrow Fleet Courier | Ex-Daraz | Ex-Hungrynaki | Ex-Grameenphone",
      review: "I am delighted to recommend Mahfuz based on his outstanding contributions during his tenure at Daraz. As Mahfuz's line manager, I had the pleasure of witnessing his exceptional skills firsthand, and I can confidently attest to his sharp intellect, creativity, and expertise in Excel and report submission.\n\nMahfuz's role as a Team Leader in Daraz Quality Assurance and Learning & Development departments was marked by his remarkable ability to lead his team with precision and efficiency. His strategic thinking and problem-solving skills were evident in the innovative solutions he implemented to streamline processes and improve overall performance.\n\nAs Mahfuz moves forward in his career, I have no doubt that he will continue to achieve great success. It was a pleasure working with Mahfuz, and I wholeheartedly recommend him for any opportunity he pursues. He is truly a standout professional with a bright future ahead.",
      avatarSrc: "/images/avatars/avatar-tazin.jpg",
    },
  ];

  return (
    <div className="w-full min-h-screen lg:min-h-0 lg:h-[calc(100vh-200px)] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-x-hidden lg:overflow-hidden relative mt-8 lg:mt-0 pb-10 lg:pb-0">
      
      {/* Left Column */}
      <div className="flex-1 lg:flex-[0.3] flex flex-col justify-center hero-left z-10 w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-[2px] bg-[var(--color-brand-primary)]"></div>
          <span className="uppercase text-[12px] font-medium tracking-[0.1em] text-[var(--color-brand-primary)]">
            CA Student
          </span>
        </div>
        
        <h1 className="font-poppins font-extrabold text-5xl lg:text-[72px] leading-[1.1] text-[var(--color-text-primary)]">
          MD<br/>
          <span className="text-[var(--color-brand-primary)]">Mahfuzur</span><br/>
          Rahman
        </h1>
        
        <div className="w-10 h-[2px] bg-[var(--color-brand-primary)] my-6"></div>
        
        <p className="text-[var(--color-text-secondary)] text-[16px] max-w-[300px] leading-relaxed">
          <strong className="font-bold text-[var(--color-brand-primary)]">Innovation</strong> Anything for <strong className="font-bold text-[var(--color-brand-primary)]">Automation</strong> Everything
        </p>
        
        <button className="btn-glass mt-8 w-max">
          <Briefcase size={18} /> Available for Job
        </button>
      </div>

      {/* Center Column */}
      <div className="flex-1 lg:flex-[0.35] relative flex items-center justify-center h-[400px] lg:h-full w-full max-w-[400px] lg:max-w-none mx-auto hero-center">
        {/* Glow */}
        <div className="absolute w-[320px] h-[320px] rounded-full bg-[image:var(--background-image-glow)] z-0"></div>
        
        {/* Portrait Card */}
        <div className="glass-panel w-full lg:w-[340px] h-[400px] lg:h-[480px] z-10 overflow-hidden relative">
          <Image 
            src={portraitHome}
            alt="MD Mahfuzur Rahman"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Dot Matrix Pattern */}
        <div className="absolute top-0 right-0 lg:-right-5 w-[100px] h-[100px] z-20"
             style={{
               backgroundImage: "radial-gradient(circle, rgba(31,122,99,0.25) 1px, transparent 1px)",
               backgroundSize: "10px 10px"
             }}>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 lg:flex-[0.3] flex flex-col gap-3 justify-center w-full hero-right lg:max-h-full pb-8 lg:pb-0">
        <div className="flex flex-col gap-3 lg:overflow-y-auto lg:pr-2 hide-scrollbar">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
      
    </div>
  );
}
