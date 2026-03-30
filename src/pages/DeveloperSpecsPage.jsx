import { Link } from 'react-router-dom';

/* ── Side Nav Items ── */
const sideNavItems = [
  { label: 'Canvas',      icon: 'account_tree',  to: '/canvas',      active: true  },
  { label: 'Templates',   icon: 'layers',        to: '#',            active: false },
  { label: 'Deployments', icon: 'rocket_launch', to: '/deployments', active: false },
  { label: 'Monitoring',  icon: 'monitoring',    to: '/monitoring',  active: false },
  { label: 'Settings',    icon: 'tune',          to: '/settings',    active: false },
];

export default function DeveloperSpecsPage() {
  return (
    <div className="bg-surface text-on-surface h-full overflow-x-hidden selection:bg-primary-container selection:text-white font-body">

      {/* ── Main Content Canvas ── */}
      <main className="min-h-full flex flex-col">

        {/* Documentation View */}
        <div className="p-8 max-w-7xl mx-auto flex-1">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-headline tracking-tighter text-on-surface mb-2">
              Kinetic Blueprint Specs
            </h2>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Member 1 Technical documentation for the OrqAI design system. High-density
              component specifications and visual logic patterns.
            </p>
          </div>

          {/* Bento Grid Sections */}
          <div className="grid grid-cols-12 gap-6">

            {/* 1. Node Base Spec */}
            <section className="col-span-12 lg:col-span-5 bg-surface-container-low p-6 border-l-2 border-primary-container">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold font-headline text-primary">01. Node Base</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary-container/20 text-primary uppercase tracking-widest">
                  Core
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Visual Sample */}
                <div className="bg-[#1C1B1C] border border-[#7C3AED]/20 rounded-lg p-3 w-[200px] shadow-xl hover:shadow-[#7C3AED]/10 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container" />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-xs">bolt</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface/80">LLM Node</span>
                  </div>
                  <div className="h-10 bg-surface-container-lowest rounded-sm mb-2 border border-white/5 flex items-center px-2">
                    <div className="w-full h-1.5 bg-primary-container/20 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-primary-container" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[9px] text-gray-500 font-mono">
                    <span>TYPE: GPT-4</span>
                    <span>v1.2</span>
                  </div>
                </div>

                {/* Code Snippet */}
                <div className="flex-1 w-full">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-2">
                    Tailwind Classes
                  </label>
                  <div className="bg-surface-container-lowest p-4 rounded-sm border border-white/5 font-mono text-[12px] text-primary-fixed-dim leading-relaxed group relative">
                    <code className="block whitespace-pre-wrap">bg-[#1C1B1C] border border-[#7C3AED]/20 rounded-lg p-3 w-[200px] shadow-xl hover:shadow-[#7C3AED]/10 transition-all duration-300</code>
                    <button className="absolute top-2 right-2 text-gray-600 hover:text-white">
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Connection System */}
            <section className="col-span-12 lg:col-span-7 bg-surface-container-low p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold font-headline text-primary">02. Connection System</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-tertiary/20 text-tertiary uppercase tracking-widest">
                  Logic
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Solid (Delegation) */}
                <div className="space-y-4">
                  <div className="h-24 bg-surface-container-lowest rounded-sm flex flex-col items-center justify-center p-4 relative overflow-hidden">
                    <div className="w-full h-0.5 bg-[#7C3AED]" />
                    <span className="text-[10px] mt-2 font-bold uppercase text-gray-500">Solid (Delegation)</span>
                  </div>
                  <div className="text-[11px] space-y-1">
                    <p className="text-on-surface-variant"><span className="text-primary font-bold">Stroke:</span> 2px</p>
                    <p className="text-on-surface-variant"><span className="text-primary font-bold">Hex:</span> #7C3AED</p>
                  </div>
                </div>

                {/* Dashed (Collaboration) */}
                <div className="space-y-4">
                  <div className="h-24 bg-surface-container-lowest rounded-sm flex flex-col items-center justify-center p-4 relative">
                    <div className="w-full border-t-2 border-dashed border-[#3b82f6]" />
                    <span className="text-[10px] mt-2 font-bold uppercase text-gray-500">Dashed (Collaboration)</span>
                  </div>
                  <div className="text-[11px] space-y-1">
                    <p className="text-on-surface-variant"><span className="text-primary font-bold">Dash Array:</span> 4 4</p>
                    <p className="text-on-surface-variant"><span className="text-primary font-bold">Hex:</span> #3b82f6</p>
                  </div>
                </div>

                {/* Animated Flow */}
                <div className="space-y-4">
                  <div className="h-24 bg-surface-container-lowest rounded-sm flex flex-col items-center justify-center p-4 relative group">
                    <div className="w-full h-0.5 bg-gray-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ef4444] to-transparent w-1/2 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-linear" />
                    </div>
                    <span className="text-[10px] mt-2 font-bold uppercase text-gray-500">Animated (Active)</span>
                  </div>
                  <div className="text-[11px] space-y-1">
                    <p className="text-on-surface-variant"><span className="text-primary font-bold">Anim:</span> CSS Dash-Offset</p>
                    <p className="text-on-surface-variant"><span className="text-primary font-bold">Hex:</span> #ef4444</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. UI Elements & Densities */}
            <section className="col-span-12 lg:col-span-8 bg-surface-container-low p-6">
              <h3 className="text-lg font-bold font-headline text-primary mb-6">03. UI Elements &amp; Density</h3>
              <div className="space-y-8">
                {/* Activity Feed Rows */}
                <div className="bg-surface-container-lowest rounded-sm border border-white/5">
                  <div className="px-4 py-2 border-b border-white/5 flex justify-between items-center">
                    <span className="text-[11px] font-bold uppercase text-gray-500 tracking-widest">
                      Activity Feed (gap-3, p-4)
                    </span>
                    <span className="text-[10px] font-mono text-primary">Inter 12px</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-sm transition-colors cursor-pointer group">
                      <div className="w-2 h-2 rounded-full bg-tertiary group-hover:ring-4 ring-tertiary/20" />
                      <div className="flex-1 text-sm font-medium">Node <span className="text-primary">Agent_01</span> processed request</div>
                      <div className="text-[10px] font-mono text-gray-600">12:45:01</div>
                    </div>
                    <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-sm transition-colors cursor-pointer group">
                      <div className="w-2 h-2 rounded-full bg-error group-hover:ring-4 ring-error/20" />
                      <div className="flex-1 text-sm font-medium">Validation failed in <span className="text-primary">Schema_Parser</span></div>
                      <div className="text-[10px] font-mono text-gray-600">12:44:58</div>
                    </div>
                  </div>
                </div>

                {/* Properties Panel Input Densities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Inputs &amp; Labels</label>
                    <div className="relative bg-surface-container-lowest p-4 rounded-sm border border-white/5">
                      <span className="absolute top-2 left-4 text-[9px] font-bold text-primary-fixed-dim uppercase">Model Parameter</span>
                      <input
                        className="w-full bg-transparent border-none text-xl font-bold font-headline pt-4 pb-0 focus:ring-0 text-on-surface outline-none"
                        type="text"
                        defaultValue="0.725"
                      />
                    </div>
                    <div className="relative bg-surface-container-lowest p-4 rounded-sm border border-white/5">
                      <span className="absolute top-2 left-4 text-[9px] font-bold text-primary-fixed-dim uppercase">Stream Latency</span>
                      <input
                        className="w-full bg-transparent border-none text-xl font-bold font-headline pt-4 pb-0 focus:ring-0 text-on-surface outline-none"
                        type="text"
                        defaultValue="45ms"
                      />
                    </div>
                  </div>

                  {/* Typography Hierarchy */}
                  <div className="space-y-4">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Typography Hierarchy</label>
                    <div className="space-y-4 p-4 bg-surface-container-lowest rounded-sm border border-white/5">
                      <div>
                        <p className="text-[10px] text-gray-600 mb-1">Space Grotesk 24px Bold</p>
                        <h4 className="text-2xl font-bold font-headline">Agent Orq_A</h4>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-600 mb-1">Inter 14px Medium</p>
                        <p className="text-sm font-medium">Standard body text for component descriptions and system outputs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Global Tokens (Quick Reference) */}
            <section className="col-span-12 lg:col-span-4 bg-surface-container-low p-6 flex flex-col">
              <h3 className="text-lg font-bold font-headline text-primary mb-6">04. Global Tokens</h3>
              <div className="flex-1 space-y-6">
                
                {/* Color Palette */}
                <div>
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-3">Color Palette</span>
                  <div className="flex gap-2">
                    <div className="w-full h-12 bg-primary-container rounded-sm flex items-end p-2">
                      <span className="text-[8px] font-bold text-white">#7C3AED</span>
                    </div>
                    <div className="w-full h-12 bg-[#3b82f6] rounded-sm flex items-end p-2">
                      <span className="text-[8px] font-bold text-white">#3B82F6</span>
                    </div>
                    <div className="w-full h-12 bg-tertiary rounded-sm flex items-end p-2">
                      <span className="text-[8px] font-bold text-surface">#4EDE83</span>
                    </div>
                    <div className="w-full h-12 bg-surface-container-highest rounded-sm flex items-end p-2">
                      <span className="text-[8px] font-bold text-white">#353436</span>
                    </div>
                  </div>
                </div>

                {/* Corner Radius */}
                <div>
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-3">Corner Radius</span>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded-sm border border-white/5">
                      <span className="text-xs font-medium">rounded-sm (0.125rem)</span>
                      <div className="w-6 h-6 bg-primary-container rounded-sm" />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded-lg border border-white/5">
                      <span className="text-xs font-medium">rounded-lg (0.25rem)</span>
                      <div className="w-6 h-6 bg-primary-container rounded-lg" />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded-xl border border-white/5">
                      <span className="text-xs font-medium">rounded-xl (0.5rem)</span>
                      <div className="w-6 h-6 bg-primary-container rounded-xl" />
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-surface-container-highest rounded-sm">
                      <span className="material-symbols-outlined text-primary">terminal</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Developer Focus</p>
                      <p className="text-[10px] text-gray-500">System optimized for CRT-levels of density and focus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer Stats */}
        <footer className="p-8 border-t border-white/5 flex flex-wrap gap-12 bg-[#0E0E0F]">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Active Components</p>
            <p className="text-2xl font-bold font-headline">142</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Canvas Performance</p>
            <p className="text-2xl font-bold font-headline text-tertiary">60 FPS</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Last Deployment</p>
            <p className="text-2xl font-bold font-headline">2m ago</p>
          </div>
        </footer>

      </main>
    </div>
  );
}
