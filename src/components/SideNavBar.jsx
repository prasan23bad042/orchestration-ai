import { Link, useLocation } from 'react-router-dom';

const sideNavItems = [
  { label: 'Canvas',      to: '/canvas',      icon: 'account_tree' },
  { label: 'Library',     to: '/',            icon: 'layers' },
  { label: 'Workflows',   to: '/workflows',   icon: 'device_hub' },
  { label: 'Deployments', to: '/deployments', icon: 'rocket_launch' },
  { label: 'Monitoring',  to: '/monitoring',  icon: 'monitoring' },
  { label: 'Settings',    to: '/settings',    icon: 'tune' },
];

export default function SideNavBar() {
  const { pathname } = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1C1B1C] flex-col py-20 hidden md:flex border-r border-white/5">
      {/* Brand */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="material-symbols-outlined text-[#7C3AED]">account_tree</span>
          <span className="font-headline font-bold text-[#7C3AED]">OrqAI Studio</span>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">v2.4.0-kinetic</p>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-1">
        {sideNavItems.map(({ label, to, icon }) => {
          const isActive = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={
                isActive
                  ? 'flex items-center gap-3 px-6 py-3 bg-[#201F20] text-[#D2BBFF] rounded-r-full border-l-4 border-[#7C3AED]'
                  : 'flex items-center gap-3 px-6 py-3 text-gray-500 hover:text-gray-300 hover:bg-[#2A2A2B] transition-all'
              }
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-label text-sm">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* CTA */}
      <div className="px-6 mt-auto">
        <button className="w-full bg-primary-container text-white py-3 px-4 rounded font-headline font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined">add</span>
          New Workflow
        </button>
      </div>
    </aside>
  );
}
