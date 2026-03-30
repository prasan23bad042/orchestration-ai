import { Link } from 'react-router-dom';

/* ── Console log data ── */
const consoleLogs = [
  { time: '14:22:01', agent: 'CEO',     agentColor: 'text-primary',   msg: 'Initiating "Market Landscape" workflow sequence...', pulse: false },
  { time: '14:22:04', agent: 'CEO',     agentColor: 'text-primary',   msg: 'Delegating research task to [Market Analyst (882-QX-9)]', pulse: false },
  { time: '14:22:05', agent: 'Analyst', agentColor: 'text-tertiary',  msg: 'Received task. Executing web_search for "SaaS trends 2024"...', pulse: false },
  { time: '14:22:08', agent: 'Analyst', agentColor: 'text-tertiary',  msg: 'Search completed. Analyzing 12 sources for thematic clusters.', pulse: false },
  { time: '14:22:10', agent: 'Writer',  agentColor: 'text-secondary', msg: 'Standing by for analyst data block...', pulse: false },
  { time: '14:22:12', agent: 'Analyst', agentColor: 'text-tertiary',  msg: 'Synthesizing findings via internal logic model...', pulse: true  },
];

/* ── Agent template sidebar data ── */
const agentSections = [
  {
    id: 'executive',
    label: 'Executive',
    icon: 'manage_accounts',
    active: false,
    items: ['CEO Orchestrator'],
    dotColor: 'bg-primary',
  },
  {
    id: 'research',
    label: 'Research',
    icon: 'travel_explore',
    active: true,
    items: ['Market Analyst', 'Web Searcher'],
    dotColor: 'bg-tertiary',
  },
  {
    id: 'creative',
    label: 'Creative',
    icon: 'palette',
    active: false,
    items: [],
    dotColor: 'bg-primary',
  },
  {
    id: 'technical',
    label: 'Technical',
    icon: 'terminal',
    active: false,
    items: [],
    dotColor: 'bg-primary',
  },
  {
    id: 'business',
    label: 'Business',
    icon: 'insert_chart',
    active: false,
    items: [],
    dotColor: 'bg-primary',
  },
];

/* ── Canvas nodes data ── */
const canvasNodes = [
  {
    id: 'ceo',
    style: { left: 60, top: 100 },
    borderColor: 'border-primary',
    badgeColor: 'text-primary',
    badge: 'Orchestrator',
    title: 'CEO Agent',
    desc: 'Coordinates workflow & delegates tasks.',
    tags: [],
    portLeft: 'bg-outline-variant',
    portRight: 'bg-primary',
    ring: '',
    opacity: '',
    pulse: false,
  },
  {
    id: 'analyst',
    style: { left: 380, top: 200 },
    borderColor: 'border-primary',
    badgeColor: 'text-on-surface',
    badge: 'GPT-4 Analyst',
    title: 'Market Analysis',
    desc: '',
    tags: [{ label: 'GPT-4o', color: 'text-tertiary' }, { label: 'Research', color: '' }],
    portLeft: 'bg-primary',
    portRight: 'bg-primary',
    ring: 'ring-1 ring-primary/50',
    opacity: '',
    pulse: true,
  },
  {
    id: 'writer',
    style: { left: 700, top: 100 },
    borderColor: 'border-secondary',
    badgeColor: 'text-secondary',
    badge: 'Creative',
    title: 'Content Writer',
    desc: 'Drafts executive summaries.',
    tags: [],
    portLeft: 'bg-outline-variant',
    portRight: 'bg-outline-variant',
    ring: '',
    opacity: 'opacity-80',
    pulse: false,
  },
  {
    id: 'scraper',
    style: { left: 700, top: 300 },
    borderColor: 'border-outline',
    badgeColor: 'text-outline',
    badge: 'Technical',
    title: 'Data Scraper',
    desc: 'Extracts structured metrics.',
    tags: [],
    portLeft: 'bg-outline-variant',
    portRight: 'bg-outline-variant',
    ring: '',
    opacity: 'opacity-80',
    pulse: false,
  },
];

export default function CanvasPage() {
  return (
    <div className="bg-background text-on-background font-body overflow-hidden h-full flex flex-col">

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* ── Left: Agent Templates Sidebar ── */}
        <aside className="bg-[#1C1B1C] flex flex-col border-r border-[#2A2A2B]/10 w-64 flex-shrink-0 z-40">
          <div className="p-4 border-b border-outline-variant/10">
            <div className="flex justify-between items-center mb-1">
              <span className="font-headline text-lg text-white">Agent Templates</span>
              <span className="material-symbols-outlined text-primary cursor-pointer">add_box</span>
            </div>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Drag to canvas</p>
          </div>

          <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
            {agentSections.map((section) => (
              <div key={section.id} className="mb-2">
                {/* Section header */}
                {section.active ? (
                  <div className="px-4 py-2 flex items-center justify-between bg-[#7C3AED]/10 border-l-2 border-[#7C3AED] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-[#7C3AED]">{section.icon}</span>
                      <span className="font-label text-[11px] uppercase tracking-widest text-[#7C3AED]">{section.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-xs text-[#7C3AED]">expand_less</span>
                  </div>
                ) : (
                  <div className="px-4 py-2 flex items-center justify-between hover:bg-[#201F20] cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-gray-500">{section.icon}</span>
                      <span className="font-label text-[11px] uppercase tracking-widest text-gray-400">{section.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-xs text-gray-600">expand_more</span>
                  </div>
                )}

                {/* Section items */}
                {section.items.length > 0 && (
                  <div className="px-8 py-1 space-y-1">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="p-2 bg-[#201F20] rounded-sm border border-outline-variant/5 cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors flex items-center gap-2"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${section.dotColor}`} />
                        <span className="text-xs text-on-surface">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#131314]">
            <button className="w-full py-2 bg-primary-container text-on-primary-container rounded-sm font-medium text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">add</span>
              New Template
            </button>
          </div>
        </aside>

        {/* ── Main Canvas ── */}
        <main className="flex-1 relative canvas-grid bg-surface overflow-hidden">
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path className="node-connector" d="M 220 150 C 300 150, 300 250, 380 250" />
            <path className="node-connector" d="M 540 250 C 620 250, 620 150, 700 150" />
            <path className="node-connector" d="M 540 250 C 620 250, 620 350, 700 350" />
          </svg>

          {/* Canvas Nodes */}
          {canvasNodes.map((node) => (
            <div
              key={node.id}
              className={`absolute w-48 bg-surface-container rounded-sm border-t-2 ${node.borderColor} shadow-2xl ${node.ring} ${node.opacity}`}
              style={{ left: node.style.left, top: node.style.top }}
            >
              {/* Node header bar */}
              <div className="px-3 py-1.5 flex items-center justify-between bg-surface-container-high/50">
                <div className="flex items-center gap-1.5">
                  {node.pulse && <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />}
                  <span className={`text-[10px] font-bold uppercase tracking-tighter ${node.badgeColor}`}>
                    {node.badge}
                  </span>
                </div>
                <span className="material-symbols-outlined text-xs text-on-surface-variant">
                  {node.id === 'analyst' ? 'settings' : 'more_vert'}
                </span>
              </div>

              {/* Node body */}
              <div className="p-3">
                <h3 className="text-sm font-semibold mb-1">{node.title}</h3>
                {node.desc && (
                  <p className="text-[10px] text-on-surface-variant leading-tight">{node.desc}</p>
                )}
                {node.tags.length > 0 && (
                  <div className="flex gap-1 mt-2">
                    {node.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`px-1.5 py-0.5 bg-surface-container-highest text-[9px] rounded-sm ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Connection ports */}
              <div className="flex justify-between px-3 pb-2">
                <div className={`w-2 h-2 rounded-full ${node.portLeft} -ml-4`} />
                <div className={`w-2 h-2 rounded-full ${node.portRight} -mr-4`} />
              </div>
            </div>
          ))}

          {/* Canvas Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-surface-container-high/80 backdrop-blur-md p-1 rounded-lg border border-outline-variant/20 shadow-2xl z-30">
            {[
              { icon: 'zoom_in', label: '' },
              { icon: null,      label: '100%' },
              { icon: 'zoom_out', label: '' },
              { icon: 'pan_tool', label: '' },
              { icon: 'fit_screen', label: '' },
            ].map((btn, i) =>
              btn.icon ? (
                <button key={i} className="p-2 hover:bg-surface-container rounded-sm text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined">{btn.icon}</span>
                </button>
              ) : (
                <div key={i} className="px-2 text-[11px] font-mono text-on-surface-variant border-x border-outline-variant/10">
                  {btn.label}
                </div>
              )
            )}
          </div>

          {/* Minimap */}
          <div className="absolute bottom-6 right-6 w-40 h-28 bg-surface-container-lowest border border-outline-variant/20 rounded-sm overflow-hidden shadow-2xl z-30 cursor-pointer">
            <div className="absolute inset-0 opacity-20 canvas-grid scale-50 origin-top-left" />
            <div className="absolute top-4  left-4  w-4 h-2 bg-primary rounded-[1px]" />
            <div className="absolute top-10 left-12 w-4 h-2 bg-primary ring-1 ring-white/50 rounded-[1px]" />
            <div className="absolute top-4  left-24 w-4 h-2 bg-secondary rounded-[1px]" />
            <div className="absolute top-16 left-24 w-4 h-2 bg-outline rounded-[1px]" />
            <div className="absolute inset-2 border border-primary/40 bg-primary/5" />
            <div className="absolute top-1 right-1 px-1 bg-black/40 text-[8px] text-on-surface-variant rounded-[1px]">NAV</div>
          </div>
        </main>

        {/* ── Right Panel: Properties Editor ── */}
        <aside className="w-80 bg-surface-container-low border-l border-outline-variant/10 flex-shrink-0 z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-outline-variant/10 bg-surface-container-low/50 flex-shrink-0">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-sm bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-lg">psychology</span>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">GPT-4 Analyst</h2>
                <p className="text-[10px] text-on-surface-variant">NODE_ID: 882-QX-9</p>
              </div>
            </div>
          </div>

          {/* Scrollable form area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
            {/* Role & Persona */}
            <div className="space-y-2">
              <label className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider">
                Role &amp; Persona
              </label>
              <div className="relative">
                <textarea
                  className="w-full bg-surface-container-lowest border-none rounded-sm p-3 text-xs text-on-surface h-24 resize-none focus:ring-1 focus:ring-primary/50 transition-shadow"
                  defaultValue="Expert Market Analyst specializing in SaaS growth metrics and competitive landscape mapping."
                />
                <div className="absolute bottom-2 right-2">
                  <span className="material-symbols-outlined text-xs text-on-surface-variant/40">auto_awesome</span>
                </div>
              </div>
            </div>

            {/* Primary Goal */}
            <div className="space-y-2">
              <label className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider">
                Primary Goal
              </label>
              <input
                className="w-full bg-surface-container-lowest border-none rounded-sm px-3 py-2 text-xs text-on-surface focus:ring-1 focus:ring-primary/50"
                type="text"
                defaultValue="Extract 5 key market trends from provided data."
              />
            </div>

            {/* Enabled Tools */}
            <div className="space-y-3">
              <label className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider block">
                Enabled Tools
              </label>
              <div className="space-y-2">
                {/* Web Search — ON */}
                <div className="flex items-center justify-between p-2 bg-surface-container rounded-sm border border-outline-variant/5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-tertiary">search</span>
                    <span className="text-xs">Web Search</span>
                  </div>
                  <div className="w-8 h-4 bg-primary rounded-full relative flex items-center px-1 cursor-pointer">
                    <div className="w-2.5 h-2.5 bg-white rounded-full ml-auto" />
                  </div>
                </div>
                {/* Python — ON */}
                <div className="flex items-center justify-between p-2 bg-surface-container rounded-sm border border-outline-variant/5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">terminal</span>
                    <span className="text-xs">Python Interpreter</span>
                  </div>
                  <div className="w-8 h-4 bg-primary rounded-full relative flex items-center px-1 cursor-pointer">
                    <div className="w-2.5 h-2.5 bg-white rounded-full ml-auto" />
                  </div>
                </div>
                {/* File Search — OFF */}
                <div className="flex items-center justify-between p-2 bg-surface-container rounded-sm border border-outline-variant/5 opacity-50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">folder_open</span>
                    <span className="text-xs">File Search</span>
                  </div>
                  <div className="w-8 h-4 bg-surface-container-highest rounded-full relative flex items-center px-1 cursor-pointer">
                    <div className="w-2.5 h-2.5 bg-on-surface-variant/50 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Model Parameters */}
            <div className="space-y-4 pt-2">
              <label className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider">
                Model Parameters
              </label>
              <div className="space-y-4">
                {/* Temperature */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-on-surface-variant">
                    <span>Temperature</span>
                    <span className="text-primary font-mono">0.7</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-[70%] bg-primary" />
                  </div>
                </div>
                {/* Max Tokens */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-on-surface-variant">
                    <span>Max Tokens</span>
                    <span className="text-on-surface font-mono">4096</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-[40%] bg-outline-variant" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-4 bg-surface-container-lowest/50 flex gap-2 flex-shrink-0">
            <button className="flex-1 py-2 text-xs font-semibold bg-primary-container text-white rounded-sm hover:brightness-110">
              Apply Changes
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-sm">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </aside>
      </div>

      {/* ── Bottom Console ── */}
      <div className="h-32 bg-surface-container-lowest/80 backdrop-blur-xl border-t border-outline-variant/20 z-30 flex flex-col flex-shrink-0">
        {/* Console header */}
        <div className="flex items-center justify-between px-4 h-8 border-b border-outline-variant/10 bg-surface-container-lowest flex-shrink-0">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
              Live Console
            </span>
            <div className="flex gap-3 text-[10px] text-on-surface-variant">
              <span>3 Agents Active</span>
              <span>Latency: 240ms</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-surface-container rounded-sm">
              <span className="material-symbols-outlined text-xs">filter_list</span>
            </button>
            <button className="p-1 hover:bg-surface-container rounded-sm">
              <span className="material-symbols-outlined text-xs">close</span>
            </button>
          </div>
        </div>

        {/* Log entries */}
        <div className="flex-1 p-3 overflow-y-auto font-mono text-[10px] custom-scrollbar space-y-1 select-text">
          {consoleLogs.map((log, i) => (
            <div key={i} className={`flex gap-3 text-on-surface-variant ${log.pulse ? 'animate-pulse' : ''}`}>
              <span className="w-16 opacity-40">[{log.time}]</span>
              <span className={`${log.agentColor} font-bold`}>{log.agent}:</span>
              <span className={`text-on-surface ${log.pulse ? 'italic' : ''}`}>{log.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
