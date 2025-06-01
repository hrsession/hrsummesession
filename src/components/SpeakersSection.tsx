import { useState, useRef, useEffect } from "react";
import speakersData from "../data/speakers.json";

interface Speaker {
  firstName: string;
  lastName: string;
  description: string;
  image: string;
}

const SpeakersSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideWidthRef = useRef(0);

  const getSlidesPerView = () => {
    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 768) return 2; // md screens
    return 1; // sm and xs screens
  };

  const slidesPerView = getSlidesPerView();
  const totalSlides = speakersData.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = getSlidesPerView();
      const newMaxIndex = Math.max(0, totalSlides - newSlidesPerView);

      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }

      if (sliderRef.current) {
        const firstCard = sliderRef.current.querySelector(".speaker-card");
        if (firstCard) {
          slideWidthRef.current = firstCard.getBoundingClientRect().width + 32; // 32px for gap
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  const sliderTransform = `translateX(-${
    currentIndex * slideWidthRef.current
  }px)`;

  return (
    <section
      id="intervenants"
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8cc6e9] mb-4 relative inline-block">
            Nos Intervenants Experts
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-[#FF1C66] rounded-full transform -rotate-1"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les professionnels passionnés qui animeront nos ateliers
            et partageront leur expertise.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out gap-8 pb-11"
              style={{ transform: sliderTransform }}
            >
              {speakersData.map((speaker: Speaker, index: number) => (
                <div
                  key={index}
                  className="speaker-card w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.33rem)] lg:w-[calc(25%-1.5rem)] min-h-[25rem] lg:min-h-[30rem] xl:min-h-[25rem] px-3
                  bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-[#8cc6e9] relative h-full flex flex-col justify-between"
                  style={{
                    minWidth:
                      slidesPerView === 1
                        ? "100%"
                        : slidesPerView === 2
                        ? "calc(50% - 1rem)"
                        : "calc(33.33% - 1.33rem)",
                  }}
                >
                  <div className="relative w-32 mx-auto mb-6 justify-self-stretch group pt-6">
                    <div className="aspect-square rounded-full overflow-hidden">
                      <img
                        src={speaker.image}
                        alt={`${speaker.firstName} ${speaker.lastName}`}
                        className="w-full h-full object-cover scale-[1.40]"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#8cc6e9] mb-2 text-center">
                    {speaker.firstName} {speaker.lastName}
                  </h3>
                  <p className="text-gray-600 text-sm text-left flex-grow">
                    {speaker.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute top-1/4 -left-8 transform translate-y-1/2 bg-[#8cc6e9] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#67b8d8] disabled:opacity-50 disabled:cursor-not-allowed z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute top-1/4 -right-8 transform translate-y-1/2 bg-[#8cc6e9] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#67b8d8] disabled:opacity-50 disabled:cursor-not-allowed z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides - slidesPerView + 1 }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    idx === currentIndex
                      ? "bg-[#FF1C66]"
                      : "bg-[#8cc6e9] opacity-50"
                  }`}
                ></button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
