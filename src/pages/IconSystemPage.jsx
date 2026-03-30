import { Link } from 'react-router-dom';

/* ── Sidebar Nav Items ── */
const sideNavItems = [
  { label: 'Canvas',      icon: 'account_tree',  to: '/canvas',      active: false },
  { label: 'Templates',   icon: 'layers',        to: '#',            active: false },
  { label: 'Deployments', icon: 'rocket_launch', to: '/deployments', active: false },
  { label: 'Monitoring',  icon: 'monitoring',    to: '/monitoring',  active: false },
  { label: 'Settings',    icon: 'tune',          to: '/settings',    active: true  },
];

/* ── Agent Types Array ── */
const agentTypes = [
  { icon: 'crown',          label: 'CEO',        active: false },
  { icon: 'search',         label: 'Researcher', active: false },
  { icon: 'bar_chart',      label: 'Analyst',    active: true,  fill: 1 },
  { icon: 'edit_note',      label: 'Writer',     active: false },
  { icon: 'visibility_off', label: 'Critic',     active: false },
  { icon: 'code',           label: 'Developer',  active: false },
  { icon: 'palette',        label: 'Designer',   active: false },
  { icon: 'map',            label: 'PM',         active: false },
  { icon: 'campaign',       label: 'Marketing',  active: false },
  { icon: 'attach_money',   label: 'Finance',    active: false },
];

/* ── System Actions Array ── */
const systemActions = [
  { icon: 'play_arrow',     code: '0x01', label: 'Run',      desc: 'EXEC_PROCESS',   color: 'text-tertiary', hoverClass: 'group-hover:scale-110 transition-transform' },
  { icon: 'pause',          code: '0x02', label: 'Pause',    desc: 'SUSPEND_IO',     color: 'text-white/60', hoverClass: 'group-hover:text-white transition-colors' },
  { icon: 'stop',           code: '0x03', label: 'Stop',     desc: 'KILL_THREAD',    color: 'text-error/60', hoverClass: 'group-hover:text-error transition-colors' },
  { icon: 'add',            code: '0x04', label: 'Add',      desc: 'INSTANTIATE',    color: 'text-white/60', hoverClass: 'group-hover:text-white transition-colors' },
  { icon: 'delete',         code: '0x05', label: 'Delete',   desc: 'PURGE_NODE',     color: 'text-white/60', hoverClass: 'group-hover:text-white transition-colors' },
  { icon: 'link',           code: '0x06', label: 'Connect',  desc: 'BIND_PIPELINE',  color: 'text-primary',  hoverClass: 'group-hover:scale-110 transition-transform' },
  { icon: 'settings',       code: '0x07', label: 'Settings', desc: 'CONFIG_SCHEMA',  color: 'text-white/60', hoverClass: 'group-hover:text-white transition-colors' },
  { icon: 'auto_awesome',   code: '0x08', label: 'Spawn',    desc: 'FORK_AGENT',     color: 'text-primary',  hoverClass: 'group-hover:scale-110 transition-transform' },
  { icon: 'psychology',     code: '0x09', label: 'Memory',   desc: 'VEC_STORE',      color: 'text-white/60', hoverClass: 'group-hover:text-white transition-colors' },
  { icon: 'public',         code: '0x0A', label: 'Search',   desc: 'GLOBAL_QUERY',   color: 'text-white/60', hoverClass: 'group-hover:text-white transition-colors' },
];

export default function IconSystemPage() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container h-full">
      {/* ── Main Content Canvas ── */}
      <main className="p-8 min-h-full bg-surface">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
              <span className="material-symbols-outlined text-sm">terminal</span>
              <span>SYSTEM_RESOURCE / ASSETS / ICON_SYSTEM</span>
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight mb-4">ORQAI ICON SYSTEM</h1>
            <p className="text-gray-400 max-w-2xl font-body leading-relaxed">
              A specialized vector library engineered for AI orchestration. 2px stroke weight,
              geometric precision, and indigo state mapping for active logic triggers.
            </p>
          </div>

          {/* ── Bento Grid Icon Section: Agent Types ── */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6 border-l-2 border-primary pl-4">
              <h2 className="font-headline text-xl font-semibold">Agent Types</h2>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Category: Logical_Entities</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
              {agentTypes.map((agent, i) => (
                <div key={i} className="icon-card flex flex-col items-center justify-center p-8 bg-surface-container-low transition-all">
                  <span
                    className={`material-symbols-outlined icon-glyph transition-all duration-300 mb-4 ${agent.active ? 'text-[#D2BBFF]' : 'text-white/60'}`}
                    style={agent.fill ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {agent.icon}
                  </span>
                  <span className={`font-label text-xs font-medium ${agent.active ? 'text-white' : 'text-gray-400'}`}>
                    {agent.label}
                  </span>
                  {agent.active && <div className="mt-2 h-1 w-4 bg-primary rounded-full" />}
                </div>
              ))}
            </div>
          </section>

          {/* ── Actions Grid Section ── */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-2 border-tertiary pl-4">
              <h2 className="font-headline text-xl font-semibold">System Actions</h2>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Category: Operational_IO</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {systemActions.map((action, i) => (
                <div key={i} className="bg-surface-container-low p-6 rounded border border-outline-variant/10 hover:border-primary/40 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`material-symbols-outlined ${action.color} ${action.hoverClass}`}>
                      {action.icon}
                    </span>
                    <span className="text-[9px] font-mono text-gray-600">{action.code}</span>
                  </div>
                  <p className="font-label text-sm font-semibold mb-1">{action.label}</p>
                  <p className="text-[10px] text-gray-500 font-mono">{action.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Technical Specification Panel ── */}
          <div className="mt-20 p-8 bg-surface-container-lowest border border-outline-variant/10 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-8xl font-headline font-black">
              SPEC
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-surface-container flex items-center justify-center border border-primary/20 rounded-lg">
                  <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    architecture
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold mb-2">Architectural Standards</h3>
                <p className="text-sm text-gray-400 mb-6 font-body leading-relaxed">
                  Every icon in the OrqAI ecosystem is constructed on a 24x24 core grid with a 2px stroke cap.
                  Optically balanced for UI density (11px labels) and canvas-level visibility.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: 'Primary: Indigo (#7C3AED)', dotCol: 'bg-primary' },
                    { label: 'Status: Green (#4EDE3)',   dotCol: 'bg-tertiary' },
                    { label: 'Default: Grey (#958DA1)',  dotCol: 'bg-white/20' },
                  ].map((item, i) => (
                    <div key={i} className="bg-surface-container px-3 py-1.5 rounded flex items-center gap-2 border border-white/5">
                      <span className={`w-2 h-2 rounded-full ${item.dotCol}`} />
                      <span className="text-[10px] font-mono text-gray-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>


    </div>
  );
}
