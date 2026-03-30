export default function ResponsiveSpecsPage() {
  return (
    <div className="p-8 h-full bg-surface text-on-surface flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 canvas-grid opacity-20 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center p-12 bg-surface-container-low border border-outline-variant/20 rounded-2xl shadow-2xl max-w-2xl">
        <div className="w-20 h-20 bg-primary-container/20 border border-primary/30 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-4xl text-primary">devices</span>
        </div>
        
        <h1 className="text-3xl font-headline font-bold text-white mb-4 tracking-tight">Responsive Specifications</h1>
        <p className="text-gray-400 font-body leading-relaxed mb-8">
          The comprehensive grid system and responsive breakpoints documentation. 
          Interactive examples for layout reflow across mobile, tablet, and desktop viewports are currently being finalized.
        </p>
        
        <div className="flex gap-4">
          <button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-primary/20">
            View Current Grid
          </button>
          <button className="bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
            Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
