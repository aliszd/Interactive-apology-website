import { useEffect, useState } from "react";
import celebration from "../assets/images/celebration.png";

const FinalScreen = ({ onReplay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center relative px-6 py-16 overflow-hidden">
      <div className={`bg-white/90 backdrop-blur-xl rounded-[3rem] p-8 md:p-14 shadow-2xl text-center max-w-3xl w-full transition-all duration-1000 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <img src={celebration} alt="" className="w-full max-h-[280px] object-contain mb-8" />
        <p className="text-sm tracking-[0.3em] uppercase text-rose-400 mb-5">برای ملینا</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-7 leading-relaxed">ملینا، تو برام خیلی مهمی.</h1>
        <p className="text-lg md:text-xl text-gray-600 leading-9 whitespace-pre-line">{`ببخشید که خیلی وقت‌ها نمی‌تونم اینو اون‌طوری که باید ابراز کنم.

شاید همیشه بهترین رفتار رو نداشته باشم، ولی واقعاً می‌خوام بهتر باشم و بتونم بیشتر خوشحالت کنم.

ممنونم که این همه سال کنارم بودی.

دوستت دارم، گابلمه.`}</p>
        <button onClick={onReplay} className="mt-10 px-9 py-3 bg-white border border-rose-200 text-rose-500 rounded-full text-lg font-medium shadow-sm hover:scale-105 transition-all duration-300">از اول بخون</button>
      </div>
    </div>
  );
};

export default FinalScreen;
