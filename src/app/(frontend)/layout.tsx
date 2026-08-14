import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen pt-4 relative w-full justify-between">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 lg:px-12 mt-4 lg:mt-6 pb-4 flex flex-col justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
