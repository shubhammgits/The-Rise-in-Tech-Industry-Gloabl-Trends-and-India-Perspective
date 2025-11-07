import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
          Tech Industry Analysis
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-slate-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/global-analysis" className="text-slate-300 hover:text-white transition-colors">
            Global Analysis
          </Link>
          <Link href="/india-analysis" className="text-slate-300 hover:text-white transition-colors">
            India Analysis
          </Link>
          <Link href="/forecast" className="text-slate-300 hover:text-white transition-colors">
            Forecast
          </Link>
          <Link href="/insights" className="text-slate-300 hover:text-white transition-colors">
            Insights
          </Link>
        </nav>
        <button className="md:hidden text-slate-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}