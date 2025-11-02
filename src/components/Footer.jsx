import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-black text-gray-300 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {currentYear} Vardhan Mistry. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 justify-center md:justify-start">
              Built with <Heart size={12} className="text-red-500" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all text-sm font-medium hover:text-blue-400 group"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}