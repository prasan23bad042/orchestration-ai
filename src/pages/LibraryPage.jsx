import AgentNode from '../components/AgentNode';
import { nodes } from '../data/nodes';

export default function LibraryPage() {
  return (
    <>
      <div className="px-8 pb-12 pt-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-headline text-3xl font-bold text-on-background mb-2">
            Node Components Library
          </h1>
          <p className="text-on-surface-variant text-sm max-w-2xl">
            A showcase of standardized AI Agent Nodes within the Kinetic Blueprint. These components
            maintain logic state consistency and visual hierarchy for complex orchestration workflows.
          </p>
        </div>

        {/* Node Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {nodes.map((node) => (
            <AgentNode key={node.id} node={node} />
          ))}
        </div>

        {/* Component Specs */}
        <section className="mt-20 border-t border-outline-variant/20 pt-12">
          <h2 className="font-headline text-xl font-bold mb-6">Component Specs &amp; States</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-primary font-mono font-bold">Geometry</h3>
              <ul className="text-sm text-on-surface-variant space-y-3">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Fixed Width: 200px</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Radius: 0.125rem (sm)</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> Connection: 8px Port In/Out</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-primary font-mono font-bold">Typography</h3>
              <div className="p-4 bg-surface-container-low rounded border border-outline-variant/10">
                <p className="font-headline font-bold text-sm mb-1">Space Grotesk Bold</p>
                <p className="text-xs text-gray-500 mb-3">Role Identity (11px, Uppercase)</p>
                <p className="font-body text-xs mb-1">Inter Regular</p>
                <p className="text-[10px] text-gray-500">Task Descriptions (11px, 1.4 line-height)</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-primary font-mono font-bold">State Logic</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-mono border border-blue-500/20 rounded-full">PULSE: ACTIVE</span>
                <span className="px-2 py-1 bg-red-500/10 text-red-400 text-[10px] font-mono border border-red-500/20 rounded-full">RED-RING: ERROR</span>
                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20 rounded-full">GLOW: COMPLETED</span>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Glassmorphism floating status bar */}
      <div className="fixed bottom-6 right-6 p-4 bg-surface-container-highest/70 backdrop-blur-xl rounded-xl border border-outline-variant/30 shadow-2xl flex items-center gap-4">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full border border-background bg-blue-500" />
          <div className="w-6 h-6 rounded-full border border-background bg-rose-500" />
          <div className="w-6 h-6 rounded-full border border-background bg-cyan-500" />
        </div>
        <div className="h-4 w-[1px] bg-outline-variant/50" />
        <p className="text-[11px] font-mono text-on-surface-variant">3 Agents Processing...</p>
        <button className="material-symbols-outlined text-primary">terminal</button>
      </div>
    </>
  );
}
