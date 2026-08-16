const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 18 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const size = Math.random() * 16 + 10;
        const duration = Math.random() * 10 + 15;

        return (
          <span
            key={i}
            className="floating-element absolute bottom-[-40px] rounded-full bg-white/50 blur-[1px]"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
