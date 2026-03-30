import { Link } from 'react-router-dom';

/* ── Side Nav Items ── */
const sideNavItems = [
  { label: 'Canvas',      icon: 'account_tree',  to: '/canvas',      active: true  },
  { label: 'Templates',   icon: 'layers',        to: '#',            active: false },
  { label: 'Deployments', icon: 'rocket_launch', to: '/deployments', active: false },
  { label: 'Monitoring',  icon: 'monitoring',    to: '/monitoring',  active: false },
  { label: 'Settings',    icon: 'tune',          to: '/settings',    active: false },
];

export default function SmartCanvasPage() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-hidden h-full flex">
      
      {/* ── Main Content Canvas ── */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-surface">
        <div className="flex-1 relative canvas-grid overflow-hidden">
          
          {/* Connection Lines (Simulated SVG Layer) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            {/* CEO to Research Team Connector */}
            <path className="bezier-path" d="M 500 120 C 500 180, 500 180, 500 220" />
            {/* CEO to Direct Node */}
            <path className="bezier-path" d="M 500 120 C 500 180, 800 180, 800 240" strokeDasharray="0" />
          </svg>

          {/* 1. Auto-Layout Hierarchy (Top Node) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 z-20">
            <div className="bg-surface-container border border-outline-variant/30 rounded-lg w-56 p-3 node-accent shadow-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase">Orchestrator</span>
                <span className="material-symbols-outlined text-xs text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <div>
                  <p className="font-headline font-semibold text-sm">CEO Node</p>
                  <p className="text-[10px] text-gray-500">System.Global.Root</p>
                </div>
              </div>
            </div>
            {/* Ghost Outlines for Animating Movement */}
            <div className="absolute -left-4 -top-4 w-64 h-24 border-2 border-primary/10 rounded-xl pointer-events-none border-dashed" />
          </div>

          {/* 2. Smart Grouping: Research Team */}
          <div className="absolute left-[15%] top-[250px] z-10">
            <div className="bg-primary-container/5 border border-primary-container/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <h3 className="font-headline text-xs font-bold text-primary tracking-widest uppercase">Research Team Group</h3>
                </div>
                <button className="bg-surface-container-high rounded p-1 hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-xs text-gray-400">unfold_less</span>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {/* Group Node 1 */}
                <div className="bg-surface-container border border-outline-variant/20 rounded-lg w-48 p-2 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">search</span>
                  <div className="flex-1">
                    <p className="text-[11px] font-medium">Scraper Agent</p>
                    <div className="h-1 w-full bg-surface-container-low rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-tertiary w-3/4" />
                    </div>
                  </div>
                </div>
                {/* Group Node 2 */}
                <div className="bg-surface-container border border-outline-variant/20 rounded-lg w-48 p-2 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">summarize</span>
                  <div className="flex-1">
                    <p className="text-[11px] font-medium">Synthesis Engine</p>
                    <div className="h-1 w-full bg-surface-container-low rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-primary w-1/2" />
                    </div>
                  </div>
                </div>
                {/* Group Node 3 */}
                <div className="bg-surface-container border border-outline-variant/20 rounded-lg w-48 p-2 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">auto_awesome</span>
                  <div>
                    <p className="text-[11px] font-medium">Creative Writer</p>
                    <div className="flex gap-1 mt-1">
                      <span className="text-[8px] bg-surface-container-high px-1 rounded text-gray-400">GPT-4o</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Micro-Interactions: Hover & Connecting & Context Menu */}
          {/* Hover Node */}
          <div className="absolute right-[20%] top-[240px] z-20 group">
            <div className="relative z-10 bg-surface-container border border-primary/60 rounded-lg w-56 p-3 node-accent shadow-[0_0_30px_rgba(124,58,237,0.3)] -translate-y-2 transition-transform duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">Status: Active</span>
                <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <p className="font-headline font-semibold text-sm">Deployment Handler</p>
              <div className="mt-3 flex gap-2">
                <div className="w-full h-8 bg-surface-container-lowest rounded flex items-center px-2">
                  <span className="text-[9px] text-gray-500 font-mono">cluster: eu-west-1</span>
                </div>
              </div>
            </div>

            {/* Pulsing Green Port (Connecting State) */}
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 z-20">
              <div className="w-3 h-3 bg-tertiary rounded-full shadow-[0_0_10px_rgba(78,222,163,0.8)] animate-pulse border border-white/20" />
            </div>

            {/* Right-Click Context Menu */}
            <div className="absolute left-full ml-4 top-0 w-40 bg-surface-container-highest/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl p-1.5 z-50 transition-opacity">
              <div className="flex flex-col">
                <button className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-primary-container hover:text-white rounded transition-colors text-on-surface">
                  <span className="material-symbols-outlined text-sm">play_arrow</span>
                  Run Node
                </button>
                <button className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-surface-container-high rounded transition-colors text-on-surface">
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  Clone
                </button>
                <div className="h-px bg-white/5 my-1 mx-2" />
                <button className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-error/20 hover:text-error rounded transition-colors text-on-surface">
                  <span className="material-symbols-outlined text-sm">delete</span>
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Canvas Navigation Controls (Floating) */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1 bg-surface-container-low/80 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl z-40">
            <button className="p-2 hover:bg-surface-container-high rounded-lg text-gray-400 hover:text-white transition-all">
              <span className="material-symbols-outlined">zoom_in</span>
            </button>
            <div className="h-4 w-px bg-white/10" />
            <div className="px-3 text-[10px] font-mono text-gray-500">84%</div>
            <div className="h-4 w-px bg-white/10" />
            <button className="p-2 hover:bg-surface-container-high rounded-lg text-gray-400 hover:text-white transition-all">
              <span className="material-symbols-outlined">zoom_out</span>
            </button>
            <button className="p-2 bg-primary-container text-white rounded-lg transition-all shadow-lg shadow-primary-container/30 ml-2">
              <span className="material-symbols-outlined">fit_screen</span>
            </button>
          </div>

          {/* Mini Map (Bento Style) */}
          <div className="absolute bottom-8 right-8 w-48 h-32 bg-surface-container-low border border-white/10 rounded-xl overflow-hidden shadow-2xl opacity-80 hover:opacity-100 transition-opacity z-40">
            <div className="p-2 border-b border-white/5 flex justify-between items-center">
              <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Global View</span>
              <span className="material-symbols-outlined text-[10px] text-gray-600">drag_pan</span>
            </div>
            <div className="relative w-full h-full p-2 bg-surface-container-lowest">
              {/* Mini nodes representation */}
              <div className="absolute w-4 h-2 bg-primary/40 rounded-sm top-4 left-1/2 -translate-x-1/2" />
              <div className="absolute w-8 h-6 bg-primary-container/20 rounded-sm top-12 left-4" />
              <div className="absolute w-6 h-3 bg-primary/30 rounded-sm top-14 right-4" />
              {/* Viewport frame */}
              <div className="absolute inset-2 border border-primary/50 bg-primary/5" />
            </div>
          </div>

          {/* Notification Toast (Subtle bottom-left) */}
          <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-surface-container-highest border border-white/5 rounded-lg px-4 py-2 shadow-2xl z-40">
            <div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
            <span className="text-[11px] font-medium text-gray-300">Auto-layout synchronized across 4 nodes</span>
          </div>

        </div>

        {/* Visual Polish: Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-150 mix-blend-overlay z-50 flex items-center justify-center">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full object-cover">
            <filter id="noise">
              <feTurbulence baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" type="fractalNoise" />
            </filter>
            <rect filter="url(#noise)" height="100%" width="100%" />
          </svg>
        </div>

      </main>
    </div>
  );
}
