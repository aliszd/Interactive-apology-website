const Frame = ({ text, onNext }) => {
  return (
    <main className="story-stage">
      <div className="ambient-orb orb-one" />
      <div className="ambient-orb orb-two" />

      <section className="story-card" aria-live="polite">
        <div className="story-card-line" />
        <p className="eyebrow">چند کلمه از طرف علی</p>

        <div className="story-mark" aria-hidden="true">A</div>

        <p className="story-text">{text}</p>

        <button onClick={onNext} className="primary-button">
          <span>ادامه</span>
          <span className="button-arrow" aria-hidden="true">←</span>
        </button>
      </section>

      <p className="story-hint">آرام بخون؛ چند حرف ساده برای یک آدم مهم</p>
    </main>
  );
};

export default Frame;
