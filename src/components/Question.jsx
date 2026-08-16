import { useState } from "react";

const messages = [
  "مطمئنی؟",
  "واقعاً مطمئنی؟",
  "یه بار دیگه فکر کن.",
  "من هنوز یه عالمه حرف دارم.",
];

const Question = ({ onYes }) => {
  const [noClicks, setNoClicks] = useState(0);
  const [floating, setFloating] = useState(false);
  const [pos, setPos] = useState({ top: "50%", left: "72%" });

  const handleNoClick = () => {
    const next = noClicks + 1;
    setNoClicks(next);
    if (next >= 5) return;
    setFloating(false);
    setTimeout(() => {
      setPos({
        top: `${Math.random() * 55 + 22}%`,
        left: `${Math.random() * 58 + 22}%`,
      });
      setFloating(true);
    }, 180);
  };

  return (
    <main className="question-stage">
      <section className="question-card">
        <div className="question-topline" />
        <p className="eyebrow">یه سؤال آخر</p>
        <div className="question-mark" aria-hidden="true">?</div>
        <h2>ملینا، هنوز ازم ناراحتی؟</h2>
        <p className="question-subtitle">این یکی رو واقعاً صادقانه جواب بده.</p>

        <div className="answer-area">
          <button onClick={onYes} className="answer-primary">نه، بخشیدمت</button>

          {noClicks === 0 && (
            <button onClick={handleNoClick} className="answer-secondary">آره</button>
          )}

          {noClicks > 0 && noClicks < 5 && floating && (
            <button
              onClick={handleNoClick}
              style={{ position: "absolute", top: pos.top, left: pos.left, transform: "translate(-50%, -50%)" }}
              className="answer-secondary runaway"
            >
              آره
            </button>
          )}
        </div>

        {noClicks > 0 && noClicks < 5 && (
          <p className="question-message">{messages[noClicks - 1]}</p>
        )}

        {noClicks >= 5 && (
          <p className="question-message final-question-message">فکر کنم جواب اصلیت رو می‌دونم.</p>
        )}
      </section>
    </main>
  );
};

export default Question;
