export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-blue-400">Tech Industry Analysis</h3>
            <p className="text-slate-400 mt-2">Global Trends and Indian Perspective</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Data Sources
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Methodology
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-6 pt-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Tech Industry Analysis Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}