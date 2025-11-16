export function MilitaryBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Radial Gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)'
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <div className="absolute top-8 left-8 w-32 h-0.5 bg-emerald-500" />
        <div className="absolute top-8 left-8 w-0.5 h-32 bg-emerald-500" />
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <div className="absolute top-8 right-8 w-32 h-0.5 bg-emerald-500" />
        <div className="absolute top-8 right-8 w-0.5 h-32 bg-emerald-500" />
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
        <div className="absolute bottom-8 left-8 w-32 h-0.5 bg-emerald-500" />
        <div className="absolute bottom-8 left-8 w-0.5 h-32 bg-emerald-500" />
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
        <div className="absolute bottom-8 right-8 w-32 h-0.5 bg-emerald-500" />
        <div className="absolute bottom-8 right-8 w-0.5 h-32 bg-emerald-500" />
      </div>

      {/* Scanline Effect */}
      <div
        className="absolute inset-0 opacity-[0.02] animate-pulse"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(16, 185, 129, 0.5) 50%)',
          backgroundSize: '100% 4px'
        }}
      />
    </div>
  );
}
