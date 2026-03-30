import { Link } from 'react-router-dom';

/* ── Side nav items ── */
const sideNavItems = [
  { label: 'Canvas',    to: '/canvas',      icon: 'account_tree', active: true  },
  { label: 'Library',   to: '/',            icon: 'folder_open',  active: false },
  { label: 'Variables', to: '#',            icon: 'variables',    active: false },
  { label: 'Deploy',    to: '/deployments', icon: 'rocket_launch',active: false },
  { label: 'Metrics',   to: '/monitoring',  icon: 'analytics',    active: false },
];

/* ── Spec cards ── */
const specCards = [
  {
    borderColor: 'border-primary-container',
    icon: 'schema',
    iconColor: 'text-primary',
    title: 'Authority & Delegation',
    body: "Solid 4px strokes denote vertical parent-child hierarchy. Used for direct instruction sets where the parent node controls execution context.",
    footer: (
      <div className="flex items-center gap-2 bg-surface-container-lowest p-2 rounded border border-outline-variant/10">
        <div className="w-1 h-8 bg-primary rounded-full" />
        <span className="text-[10px] font-mono text-primary uppercase tracking-tighter">Logic: Direct_Sync</span>
      </div>
    ),
  },
  {
    borderColor: 'border-outline-variant',
    icon: 'groups',
    iconColor: 'text-gray-400',
    title: 'Collaboration Mesh',
    body: "Dashed 2px strokes represent peer-to-peer data sharing. These nodes maintain independent states but share contextual memory buffers.",
    footer: (
      <div className="flex items-center gap-2 bg-surface-container-lowest p-2 rounded border border-outline-variant/10">
        <div className="w-8 h-1 border-t-2 border-dashed border-gray-500" />
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">Logic: Async_Notify</span>
      </div>
    ),
  },
  {
    borderColor: 'border-tertiary',
    icon: 'stream',
    iconColor: 'text-tertiary',
    title: 'Kinetic Data Transfer',
    body: "Animated Bezier curves visualize high-frequency telemetry. The dash speed indicates the current throughput of the logic stream.",
    footer: (
      <div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
        <div className="h-full bg-tertiary w-3/4 animate-pulse" />
      </div>
    ),
  },
  {
    borderColor: 'border-error',
    icon: 'report',
    iconColor: 'text-error',
    title: 'Fault Topology',
    body: "Visualizing logic breaks or API timeouts. Connections transition to 'Error' state when response tokens exceed the defined latency window.",
    footer: (
      <button className="text-[10px] font-bold text-error border border-error/30 px-3 py-1 rounded hover:bg-error/10 transition-colors uppercase">
        Debug Connection
      </button>
    ),
  },
];

export default function ConnectionSpecsPage() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen">

      {/* ── Main Content ── */}
      <main className="p-8 relative min-h-screen canvas-grid">
        {/* Page header */}
        <div className="mb-10 max-w-4xl">
          <h1 className="text-3xl font-headline font-bold text-white mb-2">
            Connection System Specification
          </h1>
          <p className="text-on-surface-variant font-body text-sm max-w-2xl leading-relaxed">
            Visualizing the semantic layer between AI entities. Our Orq Kinetic protocol defines flow logic,
            authority levels, and state awareness through architectural line primitives.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">

          {/* ── SVG Canvas Showcase ── */}
          <div className="col-span-12 lg:col-span-8 relative min-h-[700px] border border-outline-variant/10 rounded-xl overflow-hidden bg-surface-container-lowest shadow-2xl">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">

              {/* 1. Solid Line — Delegation */}
              <path d="M 120 120 L 120 220" stroke="#7C3AED" strokeLinecap="round" strokeWidth="4" />
              <text fontFamily="monospace" x="125" y="175" fill="#d2bbff" fontSize="10">delegates_to</text>

              {/* 2. Dashed Line — Collaboration */}
              <path d="M 160 300 L 300 300" stroke="#958DA1" strokeDasharray="6,4" strokeWidth="2" />
              <text fontFamily="monospace" x="180" y="295" fill="#958DA1" fontSize="10">collaborates_with</text>

              {/* 3. Animated Flow — fixed color (#4EDEA3, was #4EDE A3 with typo) */}
              <path
                className="connection-active-flow"
                d="M 380 120 C 450 120, 450 250, 520 250"
                fill="transparent"
                stroke="#4EDEA3"
                strokeWidth="3"
              />
              <circle className="animate-pulse" cx="520" cy="250" r="4" fill="#4EDEA3" />

              {/* 4. Selected State */}
              <path
                d="M 120 420 L 400 420"
                stroke="#D2BBFF"
                strokeLinecap="round"
                strokeWidth="6"
                filter="drop-shadow(0 0 8px rgba(210,187,255,0.6))"
              />

              {/* 5. Error State */}
              <path d="M 120 550 L 520 550" stroke="#FFB4AB" strokeWidth="2" />
              <rect x="280" y="538" width="120" height="24" rx="4" fill="#93000a" />
              <text x="315" y="555" fill="#ffdad6" fontSize="10" fontWeight="bold">CONNECTION FAILED</text>

              {/* 6. Smart Routing (ghost paths) */}
              <path d="M 550 400 C 650 400, 650 500, 750 500" fill="transparent" opacity="0.4" stroke="#D2BBFF" strokeWidth="1.5" />
              <path d="M 550 500 C 650 500, 650 400, 750 400" fill="transparent" opacity="0.4" stroke="#D2BBFF" strokeWidth="1.5" />
            </svg>

            {/* ── Canvas Nodes ── */}

            {/* Manager Node */}
            <div className="absolute top-[80px] left-[60px] w-32 bg-surface-container border-t-2 border-primary-container p-3 rounded-sm shadow-lg">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold text-primary tracking-widest uppercase">Manager</span>
                <span className="material-symbols-outlined text-tertiary" style={{ fontSize: 12 }}>bolt</span>
              </div>
              <p className="text-xs font-bold text-white">Strategy_Gen</p>
            </div>

            {/* Subordinate Node */}
            <div className="absolute top-[220px] left-[60px] w-32 bg-surface-container border-t-2 border-outline-variant/30 p-3 rounded-sm shadow-lg">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">Executor</span>
              </div>
              <p className="text-xs font-bold text-white">Task_Handler_A</p>
            </div>

            {/* Researcher_01 */}
            <div className="absolute top-[280px] left-[20px] w-32 bg-surface-container border-t-2 border-outline-variant/30 p-3 rounded-sm shadow-lg">
              <p className="text-xs font-bold text-white">Researcher_01</p>
            </div>

            {/* Researcher_02 */}
            <div className="absolute top-[280px] left-[300px] w-32 bg-surface-container border-t-2 border-outline-variant/30 p-3 rounded-sm shadow-lg">
              <p className="text-xs font-bold text-white">Researcher_02</p>
            </div>

            {/* Global Router (circle) */}
            <div className="absolute top-[430px] left-[620px] w-24 h-24 rounded-full bg-surface-container-high border border-primary/20 flex items-center justify-center flex-col text-center p-2 shadow-2xl">
              <span className="material-symbols-outlined text-primary mb-1">hub</span>
              <p className="text-[10px] font-bold text-white">Global Router</p>
            </div>

            {/* Source Stream */}
            <div className="absolute top-[100px] left-[320px] w-24 bg-surface-container-lowest border border-outline-variant/20 p-2 rounded-sm text-center">
              <p className="text-[10px] text-gray-500">Source_Stream</p>
            </div>

            {/* Live Sink */}
            <div className="absolute top-[230px] left-[520px] w-24 bg-surface-container-lowest border border-outline-variant/20 p-2 rounded-sm text-center">
              <p className="text-[10px] text-gray-500">Live_Sink</p>
            </div>

            {/* Bottom status bar */}
            <div className="absolute bottom-4 left-4 right-4 h-8 glass-panel rounded border border-outline-variant/10 flex items-center px-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-tertiary" />
                  <span className="text-[10px] text-on-surface-variant font-medium">6 Connections Active</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-error" />
                  <span className="text-[10px] text-on-surface-variant font-medium">1 Connection Failed</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-outline-variant tracking-tighter">RENDER_ENGINE: WEBGL_2.0</span>
            </div>
          </div>

          {/* ── Documentation Sidebar ── */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {specCards.map((card) => (
              <div
                key={card.title}
                className={`bg-surface-container-low p-5 rounded-lg border-l-2 ${card.borderColor}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`material-symbols-outlined text-lg ${card.iconColor}`}>{card.icon}</span>
                  <h4 className="text-sm font-headline font-bold text-white">{card.title}</h4>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-4">{card.body}</p>
                {card.footer}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Floating Global Constraints Panel ── */}
      <div className="fixed bottom-8 right-8 w-80 glass-panel rounded-xl shadow-2xl border border-outline-variant/20 p-6 z-50">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xs font-bold text-white uppercase tracking-widest">Global Constraints</h5>
          <span className="material-symbols-outlined text-primary text-sm">settings_input_component</span>
        </div>
        <div className="space-y-3">
          {/* Bezier Curve Tension */}
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-gray-400">Bezier Curve Tension</span>
            <span className="text-primary font-mono">0.45</span>
          </div>
          <div className="w-full bg-surface-container-lowest h-1 rounded-full">
            <div className="bg-primary-container h-full w-[45%]" />
          </div>

          {/* Avoidance Padding */}
          <div className="flex justify-between items-center text-[10px] pt-2">
            <span className="text-gray-400">Avoidance Padding</span>
            <span className="text-primary font-mono">24px</span>
          </div>
          <div className="w-full bg-surface-container-lowest h-1 rounded-full">
            <div className="bg-primary-container h-full w-[24%]" />
          </div>

          {/* Smart Pathfinding toggle */}
          <div className="pt-4 border-t border-outline-variant/10">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-4 h-4 rounded border border-primary flex items-center justify-center bg-primary">
                <span className="material-symbols-outlined text-on-primary" style={{ fontSize: 10 }}>check</span>
              </div>
              <span className="text-[11px] text-white group-hover:text-primary transition-colors">
                Smart Pathfinding
              </span>
            </label>
          </div>
        </div>
      </div>

    </div>
  );
}
