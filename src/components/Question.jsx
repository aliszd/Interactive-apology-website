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
  const [pos, setPos] = useState({ top: "50%", left: "70%" });

  const handleNoClick = () => {
    const next = noClicks + 1;
    setNoClicks(next);
    if (next >= 5) return;
    setFloating(false);
    setTimeout(() => {
      setPos({
        top: `${Math.random() * 55 + 20}%`,
        left: `${Math.random() * 60 + 20}%`,
      });
      setFloating(true);
    }, 250);
  };

  return (
    <div className="flex-1 flex items-center justify-center relative px-6 py-16">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 shadow-2xl text-center max-w-2xl w-full">
        <p className="text-sm tracking-[0.3em] uppercase text-rose-400 mb-5">یه سؤال آخر</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-10 leading-relaxed">
          ملینا، هنوز ازم ناراحتی؟
        </h2>

        <div className="relative h-44 flex items-center justify-center gap-8">
          <button
            onClick={onYes}
            className="px-10 md:px-12 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-xl md:text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300 z-10"
          >
            نه، بخشیدمت
          </button>

          {noClicks === 0 && (
            <button
              onClick={handleNoClick}
              className="px-10 md:px-12 py-4 bg-gray-200 text-gray-600 rounded-full text-xl md:text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300"
            >
              آره
            </button>
          )}

          {noClicks > 0 && noClicks < 5 && floating && (
            <button
              onClick={handleNoClick}
              style={{ position: "absolute", top: pos.top, left: pos.left, transform: "translate(-50%, -50%)" }}
              className="px-8 py-3 bg-gray-200 text-gray-600 rounded-full text-lg font-medium shadow-lg transition-all duration-300"
            >
              آره
            </button>
          )}
        </div>

        {noClicks > 0 && noClicks < 5 && (
          <p className="mt-4 text-lg text-gray-500 italic">{messages[noClicks - 1]}</p>
        )}

        {noClicks >= 5 && (
          <p className="mt-6 text-lg text-rose-500 italic">فکر کنم جواب اصلیت رو می‌دونم.</p>
        )}
      </div>
    </div>
  );
};

export default Question;
