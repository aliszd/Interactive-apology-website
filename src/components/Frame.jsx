const Frame = ({ image, text, onNext }) => {
  return (
    <div className="relative flex-1 flex items-center justify-center px-5 py-12 md:py-16 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="w-full max-w-[440px] h-[420px] md:h-[560px] bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-2xl p-4 md:p-6 flex items-center justify-center">
            <img src={image} alt="یک خاطره" className="w-full h-full object-cover rounded-[2.5rem]" />
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-2xl">
          <p className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed mb-10 whitespace-pre-line">{text}</p>
          <button onClick={onNext} className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xl font-medium shadow-lg hover:scale-105 transition-all duration-300">ادامه</button>
        </div>
      </div>
    </div>
  );
};

export default Frame;
