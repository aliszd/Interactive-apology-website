import { useEffect, useState } from "react";

const FinalScreen = ({ onReplay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="final-stage">
      <div className="final-glow" />
      <section className={`final-card ${show ? "is-visible" : ""}`}>
        <div className="final-rule" />
        <p className="eyebrow">برای ملینا</p>
        <div className="final-monogram" aria-hidden="true">A</div>

        <h1>ملینا، تو برام خیلی مهمی.</h1>

        <div className="final-letter">
          <p>ببخشید که خیلی وقت‌ها نمی‌تونم اینو اون‌طوری که باید ابراز کنم.</p>
          <p>شاید همیشه بهترین رفتار رو نداشته باشم، ولی واقعاً می‌خوام بهتر باشم و بتونم بیشتر خوشحالت کنم.</p>
          <p>ممنونم که این همه سال کنارم بودی.</p>
        </div>

        <p className="signature">دوستت دارم، گابلمه.</p>

        <button onClick={onReplay} className="secondary-button">از اول بخون</button>
      </section>
    </main>
  );
};

export default FinalScreen;
