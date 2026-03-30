import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Nodes',     to: '/nodes' },
  { label: 'Workflows', to: '/workflows' },
  { label: 'Agents',    to: '/agents' },
  { label: 'Library',   to: '/' },
];

export default function TopNavBar() {
  const { pathname } = useLocation();

  return (
    <header className="bg-[#131314] flex justify-between items-center w-full px-6 py-3 border-b border-white/5 fixed top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-xl font-bold tracking-tight text-[#D2BBFF] font-headline">
          OrqAI
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ label, to }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={
                  isActive
                    ? 'text-[#D2BBFF] border-b-2 border-[#7C3AED] pb-1 font-label'
                    : 'text-gray-400 font-medium hover:text-white transition-colors duration-200 font-label'
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-gray-400 hover:text-white transition-transform scale-95 active:scale-90">
          notifications
        </button>
        <button className="material-symbols-outlined text-gray-400 hover:text-white transition-transform scale-95 active:scale-90">
          settings
        </button>
        <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/30">
          <img
            alt="User profile avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL1BIGydk083LaiJf37U-TypA4MhHQlNFifFyj0IiRinWFWDr-C5l5XyjCloxdjwdPHcWkBNxvjuQgCCRfuK3ylatqRpqybtRSCOJvM-mvmtPA1-_HG5ILbBrp6fKrLcybsUdPMSNss517HavnaEsCO99fidX7w03w0DqlPq6nnnYp4u9XIySHa3MCgchwnuWQxdHaUUhJOOUSB9W0dWyK_YrqZLET_w7YAieP31OFTo5EaU6TDXENGnfvmnoODQ8iMOGgurLn1BUl"
          />
        </div>
      </div>
    </header>
  );
}
