const FloatingElements = () => {
  const particles = Array.from({ length: 22 });

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((_, i) => {
        const left = (i * 37.7) % 100;
        const size = 2 + ((i * 13) % 5);
        const delay = (i * 1.7) % 12;
        const duration = 12 + ((i * 2.3) % 10);

        return (
          <span
            key={i}
            className="particle"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
