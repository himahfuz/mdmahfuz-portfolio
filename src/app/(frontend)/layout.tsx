import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen pt-[100px] lg:pb-[100px] relative w-full">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
