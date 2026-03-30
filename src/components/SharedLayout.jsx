import { Link, Outlet, useLocation } from 'react-router-dom';

/* 
 * User Requested 10 Menu Items:
 * 1) Design System Foundation
 * 2) Node Component Design
 * 3) Canvas Interface Layout
 * 4) Connection & Flow Design
 * 5) Real-Time Activity Visualization
 * 6) Demo Mode UI States
 * 7) Responsive Component Specs
 * 8) Icon System
 * 9) Auto-Layout Visualization
 * 10) Final Polish & Micro-Interactions
 */

const navItems = [
  { id: 1,  label: 'Design System Foundation',         icon: 'brush',             path: '/developer-specs' },
  { id: 2,  label: 'Node Component Design',            icon: 'extension',         path: '/' },
  { id: 3,  label: 'Canvas Interface Layout',          icon: 'grid_view',         path: '/canvas' },
  { id: 4,  label: 'Connection & Flow Design',         icon: 'moving',            path: '/connection-specs' },
  { id: 5,  label: 'Real-Time Activity',               icon: 'monitoring',        path: '/live-activity' },
  { id: 6,  label: 'Demo Mode UI States',              icon: 'smart_display',     path: '/demo' },
  { id: 7,  label: 'Responsive Component Specs',       icon: 'devices',           path: '/responsive-specs' },
  { id: 8,  label: 'Icon System',                      icon: 'emoji_symbols',     path: '/icons' },
  { id: 9,  label: 'Auto-Layout Visualization',        icon: 'dynamic_feed',      path: '/smart-canvas' },
  { id: 10, label: 'Final Polish & Interactions',      icon: 'auto_awesome',      path: '/final-polish' },
];

export default function SharedLayout() {
  const location = useLocation();

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-white flex h-screen overflow-hidden">
      
      {/* ── UNIFIED SIDEBAR ── */}
      <aside className="w-72 flex-shrink-0 bg-[#1C1B1C] border-r border-white/5 flex flex-col pt-6 pb-6 z-50 overflow-y-auto">
        
        {/* Brand */}
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-container to-on-primary-fixed-variant rounded-lg flex items-center justify-center shadow-lg shadow-primary-container/20 border border-primary/20">
            <span className="material-symbols-outlined text-white text-lg">token</span>
          </div>
          <div>
            <h1 className="font-bold text-white leading-none font-headline tracking-tight text-lg">OrqAI Studio</h1>
            <p className="text-[10px] text-primary mt-1 uppercase tracking-widest font-medium font-mono">v3.0.0-unified</p>
          </div>
        </div>

        {/* Navigation Map */}
        <nav className="flex-1 space-y-1 mt-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/library');
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-4 px-6 py-3.5 transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-[#201F20]'
                    : 'hover:bg-[#2A2A2B]'
                }`}
              >
                {/* Active Indicator Line */}
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7C3AED] rounded-r-full" />}
                
                <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center transition-colors ${
                  isActive ? 'bg-primary-container/20 text-[#D2BBFF]' : 'text-gray-500 group-hover:text-gray-300'
                }`}>
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                </div>
                
                <div className="flex-1 flex items-center justify-between">
                  <span className={`text-[13px] font-medium tracking-tight ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                  }`}>
                    {item.label}
                  </span>
                  <span className="text-[9px] font-mono text-outline-variant font-bold opacity-50">
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Global Action Button */}
        <div className="px-6 mt-8">
          <button className="w-full bg-surface-container-high hover:bg-white text-gray-300 hover:text-surface border border-white/10 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Workspace
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-background">
        
        {/* ── UNIFIED TOP NAV BAR ── */}
        <header className="flex justify-between items-center w-full px-8 py-4 bg-[#131314]/90 backdrop-blur-md border-b border-white/5 z-40 shrink-0">
          
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight text-[#7C3AED] font-headline hidden md:block">
              // ORCHESTRATION_AI
            </span>
            <nav className="flex items-center gap-6 border-l border-white/10 pl-6 h-6">
              {['Nodes', 'Agents', 'Workflows', 'Deployments'].map((link, idx) => (
                <a key={link} href="#" className={`text-sm font-medium transition-colors ${idx === 0 ? 'text-[#D2BBFF]' : 'text-gray-500 hover:text-white'}`}>
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-5">
            {/* Global Search */}
            <div className="hidden md:flex items-center bg-surface-container-low border border-white/5 rounded-full px-3 py-1.5 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all group w-64">
               <span className="material-symbols-outlined text-[18px] text-gray-500 group-focus-within:text-primary">search</span>
               <input type="text" placeholder="Search system logs, agents..." className="bg-transparent border-none text-xs text-white placeholder-gray-600 focus:ring-0 w-full ml-2 outline-none h-5" />
               <div className="px-1.5 py-0.5 bg-surface-container-high rounded text-[9px] font-mono text-gray-400 border border-white/10 ml-2">⌘K</div>
            </div>

            <button className="relative text-gray-400 hover:text-white transition-colors scale-95 active:scale-90">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full ring-2 ring-[#131314]" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors scale-95 active:scale-90">
              <span className="material-symbols-outlined text-[20px]">settings</span>
            </button>
            
            <div className="w-9 h-9 rounded-full bg-surface-container-high border-2 border-primary/20 overflow-hidden cursor-pointer hover:border-primary transition-colors">
              <img
                alt="User Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVSerhEj5-4oMBvj3GITgp54rD36Qggm9GyZlT9XSR2JzXxsYowxwhYspBeX1Y6sGWkXLlRBIVyuw32rtTmEkDlYdfH-m2hLlWVkjr8eQEySTX4pP-BcAMpmao_wCz0U06i-znetcXITUc8D1CwG5G0YtBP8c1dWacDX-wsdu7E3nmhj6Jtjv_GgNoFdpasJNm0yVpEZSUeBaRdCiz2M8nYy85cBt8n0IYfpn3rzTI8m0G5fPs0New9Fr9rTI6UeNxXGLdVc6cFL_V"
              />
            </div>
          </div>
        </header>

        {/* ── THE ROUTE OUTLET (Renders the selected Page inside here) ── */}
        <main className="flex-1 relative overflow-auto custom-scrollbar">
          <Outlet />
        </main>
        
      </div>
    </div>
  );
}
