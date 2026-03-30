export default function AgentNode({ node }) {
  const {
    title, icon, borderColor, iconColor, titleColor,
    status, statusLabel, statusIconColor, statusLabelColor,
    description, descriptionClass, descriptionBoxClass,
    actions, ring, pulse, booting,
  } = node;

  /* ── Status indicator in header ── */
  const renderStatus = () => {
    if (statusLabel === 'dot') {
      return <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500" />;
    }
    if (statusLabel === 'bounce-dots') {
      return (
        <div className="flex gap-0.5">
          <span className="w-1 h-1 bg-rose-500 rounded-full animate-bounce" />
          <span className="w-1 h-1 bg-rose-500 rounded-full animate-bounce [animation-delay:0.2s]" />
          <span className="w-1 h-1 bg-rose-500 rounded-full animate-bounce [animation-delay:0.4s]" />
        </div>
      );
    }
    // material icon status (check_circle, warning, done_all, data_object…)
    if (['check_circle', 'warning', 'done_all', 'data_object', 'construction'].includes(statusLabel)) {
      return (
        <span className={`material-symbols-outlined !text-[14px] ${statusIconColor ?? ''} ${status === 'active' ? 'animate-pulse' : ''}`}>
          {statusLabel}
        </span>
      );
    }
    // plain text label (IDLE, READY, PAUSED, BOOTING…)
    return (
      <span className={`text-[9px] font-mono ${statusLabelColor ?? 'text-gray-500'}`}>
        {statusLabel}
      </span>
    );
  };

  /* ── Footer actions ── */
  const renderActions = () => {
    if (status === 'error') {
      return <button className="text-[9px] font-mono text-primary underline">RETRY</button>;
    }
    return actions.map((a) => (
      <span key={a} className="material-symbols-outlined !text-[14px] text-gray-600">{a}</span>
    ));
  };

  return (
    <div
      className={`relative w-[200px] bg-surface-container rounded-sm border-t-2 ${borderColor} group
        ${ring ?? ''}
        ${pulse ? 'node-pulse' : ''}
        ${booting ? 'opacity-70 scale-95 origin-top translate-y-4 transition-all duration-700' : ''}
      `}
    >
      {/* Connection ports */}
      <div className="connection-port connection-port-left" />
      <div className="connection-port connection-port-right" />

      {/* Drag handle / booting spinner */}
      <div className="flex justify-center py-1 cursor-grab opacity-30 group-hover:opacity-100 transition-opacity">
        {booting
          ? <span className={`material-symbols-outlined text-xs ${iconColor} animate-spin`}>refresh</span>
          : <span className="material-symbols-outlined text-xs">drag_indicator</span>
        }
      </div>

      <div className="px-3 pb-2">
        {/* Header row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className={`material-symbols-outlined ${iconColor} !text-[16px]`}>{icon}</span>
            <span className={`font-headline font-bold text-[11px] uppercase tracking-tighter ${titleColor ?? ''}`}>
              {title}
            </span>
          </div>
          {renderStatus()}
        </div>

        {/* Description box */}
        <div className={`bg-surface-container-lowest p-2 rounded-sm mb-2 h-14 overflow-hidden ${descriptionBoxClass ?? ''}`}>
          <p className={`text-[11px] leading-tight ${descriptionClass ?? 'text-on-surface-variant'}`}>
            {description}
          </p>
        </div>

        {/* Footer actions */}
        <div className="flex gap-2 justify-end pt-1 border-t border-white/5">
          {renderActions()}
        </div>
      </div>
    </div>
  );
}
