import { Link } from 'react-router-dom';

/* ── Sidebar Nav Items ── */
const sideNavItems = [
  { label: 'Canvas',      icon: 'account_tree',  to: '/canvas',      active: false, pulse: false },
  { label: 'Templates',   icon: 'layers',        to: '#',            active: true,  pulse: true  },
  { label: 'Deployments', icon: 'rocket_launch', to: '/deployments', active: false, pulse: false },
  { label: 'Monitoring',  icon: 'monitoring',    to: '/monitoring',  active: false, pulse: false },
  { label: 'Settings',    icon: 'tune',          to: '/settings',    active: false, pulse: false },
];

export default function DemoModePage() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container overflow-hidden h-full flex flex-col">

      {/* ── Main Canvas Area ── */}
      <main className="h-full relative bg-surface overflow-hidden flex-1">
        
        {/* Background grid decoration */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        {/* ── Empty State overlay ── */}
        <div className="absolute inset-8 dashed-canvas rounded-xl flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center">
            <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
              <span className="material-symbols-outlined text-4xl text-outline">drag_indicator</span>
            </div>
            <h1 className="text-4xl font-headline font-bold text-white tracking-tight mb-2">Drag your first AI agent here</h1>
            <p className="text-outline text-lg max-w-md mx-auto">
              Start building your collaborative intelligence workflow by selecting a template from the sidebar.
            </p>
          </div>
        </div>

        {/* ── SUCCESS STATE OVERLAY ── */}
        <div className="absolute inset-0 z-30 flex items-center justify-center p-8 confetti-overlay custom-blur bg-background/40">
          <div className="max-w-4xl w-full bg-surface-container rounded-xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Success Header */}
            <div className="bg-gradient-to-r from-primary-container to-on-primary-fixed-variant px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl">check_circle</span>
                </div>
                <div>
                  <h2 className="text-2xl font-headline font-bold text-white">Workflow Complete</h2>
                  <p className="text-white/70 text-sm">Execution finished in 42.8s</p>
                </div>
              </div>
              <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            {/* Output Preview */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold text-outline uppercase tracking-widest">Final Output Preview</h3>
                <div className="flex gap-2">
                  <button className="text-[10px] bg-surface-container-high text-on-surface px-3 py-1 rounded border border-white/5">JSON</button>
                  <button className="text-[10px] bg-primary text-on-primary px-3 py-1 rounded">Markdown</button>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest p-6 rounded-lg border border-white/5 font-body text-sm leading-relaxed text-on-surface-variant max-h-[300px] overflow-y-auto">
                <h4 className="text-white font-bold mb-4 text-lg">Market Summary: Q3 AI Infrastructure Trends</h4>
                <p className="mb-4">
                  Analysis of global data center expansion reveals a 24% increase in GPU-dense clusters across Northern Europe. 
                  Hyperscalers are prioritizing energy-efficient cooling logic nodes.
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>NVDA H200 adoption is outpacing H100 by 3:1 in new deployments.</li>
                  <li>Ethical AI frameworks are now a mandatory gate for 68% of enterprise procurement.</li>
                  <li>Edge computing latency reduced by 14ms on average through decentralized vector caching.</li>
                </ul>
                <div className="p-4 bg-surface-container rounded border-l-4 border-tertiary">
                  <p className="text-xs text-tertiary font-bold mb-1">STRATEGIC INSIGHT</p>
                  <p className="text-on-surface italic">
                    "The move toward 'Small Language Models' at the edge is creating a secondary market for specialized inference hardware."
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-primary text-on-primary font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Export Assets
                </button>
                <button className="flex-1 bg-surface-container-highest text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 border border-white/10 transition-transform active:scale-95">
                  <span className="material-symbols-outlined text-lg">share</span>
                  Share Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── ERROR STATE TOAST ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 w-[500px]">
          <div className="bg-surface-container-high border-2 border-error-container p-4 rounded-xl shadow-2xl flex items-center justify-between gap-6 custom-blur">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-error text-2xl">wifi_off</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Connection Failed</h4>
                <p className="text-error text-xs">Node '<span className="font-mono">Market Analyst</span>' timed out (Error 504)</p>
              </div>
            </div>
            <button className="bg-error text-on-error font-bold px-6 py-2 rounded-lg text-sm transition-transform active:scale-90 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">refresh</span>
              Retry
            </button>
          </div>
        </div>
      </main>

      {/* ── Presentation Context Markers ── */}
      <div className="fixed bottom-4 right-4 z-[60] flex gap-2">
        <div className="px-3 py-1 bg-surface-container-highest/80 text-[10px] text-primary border border-primary/20 rounded-full font-mono uppercase tracking-tighter">
          Demo Mode: ACTIVE
        </div>
        <div className="px-3 py-1 bg-surface-container-highest/80 text-[10px] text-outline border border-white/5 rounded-full font-mono uppercase tracking-tighter">
          Press [F] for Fullscreen
        </div>
      </div>

    </div>
  );
}
