import { Link } from 'react-router-dom';

/* ── Sidebar nav ── */
const sideNavItems = [
  { label: 'Workspace',   icon: 'grid_view',     to: '/',            active: false },
  { label: 'Deployments', icon: 'rocket_launch',  to: '/deployments', active: true  },
  { label: 'Models',      icon: 'memory',         to: '#',            active: false },
  { label: 'Secrets',     icon: 'lock',           to: '#',            active: false },
  { label: 'Monitoring',  icon: 'analytics',      to: '/monitoring',  active: false },
];

/* ── Console log entries ── */
const logEntries = [
  {
    time: '10:32:05',
    initial: 'C',
    avatarBg: 'bg-primary-container',
    avatarText: 'text-white',
    content: (
      <>
        <span className="text-primary font-bold">CEO Agent</span>
        {' spawned '}
        <span className="text-secondary">Market Researcher</span>.
      </>
    ),
    rowBg: '',
  },
  {
    time: '10:32:12',
    initial: 'R',
    avatarBg: 'bg-secondary-container',
    avatarText: 'text-white',
    content: (
      <>
        <span className="text-secondary font-bold">Researcher</span>
        {' initiated query to '}
        <span className="italic text-outline">arxiv.org/api/v1/search</span>.
      </>
    ),
    rowBg: '',
  },
  {
    time: '10:32:45',
    initial: 'A',
    avatarBg: 'bg-tertiary-container',
    avatarText: 'text-white',
    content: (
      <>
        <span className="text-tertiary font-bold">Analyst</span>
        {' received data stream (14.2kb) from Researcher.'}
      </>
    ),
    rowBg: '',
  },
  {
    time: '10:33:01',
    initial: 'CR',
    avatarBg: 'bg-error-container',
    avatarText: 'text-white',
    content: (
      <>
        <span className="text-error font-bold">Critic</span>
        {' flagged contradiction: '}
        <span className="bg-error-container/20 px-1">VAL_MISMATCH_ERR</span>
        {' in Agent Communication Layer.'}
      </>
    ),
    rowBg: 'bg-error-container/5',
  },
  {
    time: '10:33:05',
    initial: 'S',
    avatarBg: 'bg-primary-container/20 border border-primary-container',
    avatarText: 'text-primary',
    content: (
      <>
        <span className="text-on-surface-variant font-bold">System</span>
        {' auto-scaling compute resources for Critic verification task...'}
      </>
    ),
    rowBg: '',
  },
];

export default function LiveActivityPage() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-white overflow-hidden h-full flex flex-col">


      <div className="flex flex-1 overflow-hidden">


        {/* ── Main Canvas + Console ── */}
        <main className="flex-1 relative overflow-hidden flex flex-col">

          {/* Canvas dots background */}
          <div className="absolute inset-0 canvas-dots opacity-30 pointer-events-none" />

          {/* Canvas header overlay */}
          <div className="absolute top-6 left-6 z-10">
            <h1 className="font-headline text-2xl font-bold text-white flex items-center gap-3">
              OrqAI Live Runner
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-tertiary-container/20 text-tertiary rounded text-[10px] uppercase tracking-widest font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                Streaming
              </span>
            </h1>
            <p className="text-xs text-outline mt-1 font-mono">
              Job ID: session_9281-xk02 | 4 Agents Active
            </p>
          </div>

          {/* Agent node canvas */}
          <div className="flex-1 relative p-12 overflow-auto">
            {/* SVG connections */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ minWidth: 1200, minHeight: 800 }}
            >
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#4a4455" />
                </marker>
              </defs>
              <path d="M 300 150 L 500 250" fill="none" stroke="#4a4455" strokeWidth="1.5" />
              <path d="M 300 450 L 500 350" fill="none" stroke="#4a4455" strokeWidth="1.5" />
              <path d="M 750 300 L 950 300" fill="none" stroke="#7c3aed" strokeDasharray="4 2" strokeWidth="1.5" />
            </svg>

            {/* ── CEO Node ── */}
            <div className="absolute top-[100px] left-[100px] w-52 bg-surface-container rounded-sm border-t-2 border-primary-container p-3 z-20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">person</span>
                  <span className="font-headline text-xs font-bold text-white uppercase tracking-tight">CEO Agent</span>
                </div>
                <span className="text-[10px] text-tertiary font-mono">IDLE</span>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-sm">
                <p className="text-[10px] text-on-surface-variant font-mono leading-relaxed">
                  Awaiting input from Market Researcher...
                </p>
              </div>
            </div>

            {/* ── Researcher Node (Thinking) ── */}
            <div className="absolute top-[350px] left-[100px] w-64 bg-surface-container rounded-sm border-t-2 border-primary-container p-3 z-30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">search</span>
                  <span className="font-headline text-xs font-bold text-white uppercase tracking-tight">Researcher</span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                  <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
              {/* Thinking bubble */}
              <div className="absolute -top-14 left-0 bg-surface-container-high thinking-bubble px-3 py-2 rounded-xl text-[10px] text-white font-medium border border-outline-variant/30 max-w-[180px] shadow-xl">
                Finding recent AI trends on arXiv...
              </div>
              {/* Node details */}
              <div className="space-y-1.5">
                {[
                  { label: 'Model',  value: 'GPT-4o' },
                  { label: 'Source', value: 'Semantic Scholar' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center bg-surface-container-lowest px-2 py-1 rounded-sm">
                    <span className="text-[9px] text-outline font-medium">{label}</span>
                    <span className="text-[9px] text-on-surface font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Analyst Node (Working) ── */}
            <div className="absolute top-[220px] left-[500px] w-60 bg-surface-container rounded-sm border-t-2 border-primary-container p-3 node-glow-primary z-20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">analytics</span>
                  <span className="font-headline text-xs font-bold text-white uppercase tracking-tight">Analyst</span>
                </div>
                <span className="flex items-center gap-1.5 px-2 py-0.5 bg-primary-container/20 text-primary rounded-[2px] text-[9px] font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Working
                </span>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-sm">
                <div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden mb-2">
                  <div className="bg-primary h-full w-[65%] transition-all" />
                </div>
                <p className="text-[10px] text-on-surface-variant font-mono">Processing data batch #4012...</p>
              </div>
            </div>

            {/* ── Critic Node (Conflict) ── */}
            <div className="absolute top-[220px] left-[850px] w-52 bg-surface-container rounded-sm border-t-2 border-error p-3 node-glow-error z-20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-error text-lg">gavel</span>
                  <span className="font-headline text-xs font-bold text-white uppercase tracking-tight">Critic</span>
                </div>
                <span className="text-[9px] text-error font-bold tracking-widest animate-pulse">CONFLICT</span>
              </div>
              <p className="text-[10px] text-error leading-relaxed bg-error-container/10 p-2 rounded-sm">
                Inconsistency detected in 'Market Growth' metrics from Analyst node.
              </p>
            </div>

            {/* ── Shared Memory Node ── */}
            <div
              className="absolute top-[500px] left-[550px] w-48 bg-surface-container-lowest rounded-sm border border-outline-variant p-2.5 z-10 opacity-80"
              style={{ boxShadow: '0 0 30px rgba(111, 251, 190, 0.15)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-tertiary text-lg">database</span>
                <span className="font-headline text-[10px] font-bold text-outline uppercase tracking-widest">Shared Memory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-tertiary" />
                <span className="text-[9px] text-on-surface font-mono">Writing key: market_vitals</span>
              </div>
            </div>
          </div>

          {/* ── Bottom Console ── */}
          <footer className="h-64 bg-surface-container-low border-t border-outline-variant/20 flex flex-col z-50 flex-shrink-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-6 py-2 border-b border-outline-variant/10 flex-shrink-0">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline text-sm">terminal</span>
                  <span className="font-headline text-xs font-bold uppercase tracking-widest text-white">Live Console</span>
                </div>
                <div className="flex items-center gap-2">
                  {[
                    { label: 'Agent:', value: 'All' },
                    { label: 'Event:', value: 'Info' },
                    { label: 'Time:',  value: 'Real-time' },
                  ].map(({ label, value }) => (
                    <button
                      key={label}
                      className="bg-surface-container-high px-3 py-1 rounded text-[10px] text-on-surface font-medium hover:bg-surface-variant flex items-center gap-2 border border-outline-variant/20"
                    >
                      {label} <span className="text-primary">{value}</span>
                      <span className="material-symbols-outlined text-xs">expand_more</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {['download', 'delete_sweep', 'fullscreen'].map((icon) => (
                  <button key={icon} className="text-outline hover:text-white">
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Log entries */}
            <div className="flex-1 overflow-y-auto font-mono text-[11px] p-4 space-y-2 custom-scrollbar">
              {logEntries.map((entry, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 hover:bg-surface-container-high/40 p-1 group ${entry.rowBg}`}
                >
                  <span className="text-outline-variant shrink-0 w-20">[{entry.time}]</span>
                  <div
                    className={`w-5 h-5 rounded-full ${entry.avatarBg} flex items-center justify-center text-[10px] font-bold ${entry.avatarText} shrink-0`}
                  >
                    {entry.initial}
                  </div>
                  <p className="text-on-surface">{entry.content}</p>
                </div>
              ))}
              {/* Blinking cursor */}
              <div className="flex items-center gap-4 p-1">
                <span className="text-outline-variant shrink-0 w-20">[10:33:12]</span>
                <span className="w-2 h-4 bg-primary animate-pulse" />
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* ── FAB Controls ── */}
      <div className="fixed bottom-72 right-8 flex flex-col gap-3 z-50">
        {[
          { icon: 'add',        bg: 'bg-surface-container-highest border border-outline-variant/30' },
          { icon: 'remove',     bg: 'bg-surface-container-highest border border-outline-variant/30' },
          { icon: 'play_arrow', bg: 'bg-primary-container' },
        ].map(({ icon, bg }) => (
          <button
            key={icon}
            className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center shadow-2xl text-white hover:scale-105 transition-transform`}
          >
            <span className="material-symbols-outlined">{icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
