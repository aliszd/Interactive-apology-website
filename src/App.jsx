import { useEffect, useRef, useState } from "react";
import { story } from "./data/story";
import Frame from "./components/Frame";
import Navbar from "./components/Navbar";
import FloatingElements from "./components/FloatingElements";
import Question from "./components/Question";
import FinalScreen from "./components/FinalScreen";

const MUSIC_SRC = "/Jim%20Croce%20-%20Time%20in%20a%20Bottle.mp3";

function App() {
  const [current, setCurrent] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    audio.loop = true;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch {
        // Browsers may block autoplay with sound. The first tap/click below starts it.
      }
    };

    const startOnFirstInteraction = () => {
      if (audio.paused) {
        audio.play().then(() => setMusicPlaying(true)).catch(() => {});
      }
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
      window.removeEventListener("touchstart", startOnFirstInteraction);
    };

    tryAutoplay();
    window.addEventListener("pointerdown", startOnFirstInteraction, { once: true });
    window.addEventListener("keydown", startOnFirstInteraction, { once: true });
    window.addEventListener("touchstart", startOnFirstInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
      window.removeEventListener("touchstart", startOnFirstInteraction);
    };
  }, []);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;
    try {
      await audio.play();
      setMusicPlaying(true);
    } catch {
      setMusicPlaying(false);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch {
        setMusicPlaying(false);
      }
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  const replay = () => {
    setCurrent(0);
    setShowQuestion(false);
    setShowFinal(false);
    startMusic();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    startMusic();
    if (current === story.length - 1) {
      setShowQuestion(true);
    } else {
      setCurrent((p) => p + 1);
    }
  };

  return (
    <div dir="rtl" className="app-shell">
      <div className="background-grid" aria-hidden="true" />
      <div className="background-noise" aria-hidden="true" />
      <audio ref={audioRef} src={MUSIC_SRC} preload="auto" />

      <FloatingElements />
      <Navbar />

      <button
        onClick={toggleMusic}
        aria-label={musicPlaying ? "توقف موسیقی" : "پخش موسیقی"}
        className="music-control"
      >
        <span className={`music-dot ${musicPlaying ? "is-playing" : ""}`} />
        <span>{musicPlaying ? "موسیقی روشن" : "پخش موسیقی"}</span>
      </button>

      {!showQuestion && !showFinal && (
        <Frame text={story[current].text} onNext={handleNext} />
      )}

      {showQuestion && !showFinal && (
        <Question
          onYes={() => {
            startMusic();
            setShowFinal(true);
          }}
        />
      )}

      {showFinal && <FinalScreen onReplay={replay} />}
    </div>
  );
}

export default App;
