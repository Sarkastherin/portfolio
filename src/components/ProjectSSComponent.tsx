import { useState } from "react";

type Screenshot = {
  url: string;
  alt: string;
  title: string;
  description: string;
};

export default function Screenshots({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function openModal(index: number) {
    setActiveIndex(index);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function prevSlide() {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  }

  function nextSlide() {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="rounded-lg shadow-sm bg-white p-4 sm:p-6">
      <h3 className="text-xl font-semibold mb-6">📷 Capturas de pantalla</h3>
      <div className="max-w-2xl mx-auto">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* Carousel wrapper */}
          <div className="relative h-80 md:h-96">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out  shadow border border-stone-200 ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={screenshot.url}
                  className="object-cover w-full h-full"
                  alt={screenshot.alt}
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>

          {/* Slider controls */}
          <button
            onClick={prevSlide}
            className="flex absolute top-1/2 left-3 z-20 items-center justify-center w-10 h-10 bg-rose-200/70 rounded-full hover:bg-rose-300"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 text-rose-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="flex absolute top-1/2 right-3 z-20 items-center justify-center w-10 h-10 bg-rose-200/70 rounded-full hover:bg-rose-300"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 text-rose-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal viewer para pantalla completa (si querés más adelante lo armamos) */}
      
      <div
        className={`fixed inset-0 z-50 grid place-content-center bg-black/50 p-4 ${
          isOpen ? "block" : "hidden"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="w-full max-w-6xl rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <h2
              id="modalTitle"
              className="text-xl font-bold text-gray-900 sm:text-2xl"
            >
              {screenshots[activeIndex]?.title || "Captura de pantalla"}
            </h2>

            <button
              type="button"
              className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none cursor-pointer"
              aria-label="Close"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <img className="border border-stone-300 rounded-2xl" src={screenshots[activeIndex]?.url} alt={screenshots[activeIndex]?.alt} />

          <div className="mt-4">
            <p className="text-pretty text-sm text-stone-700">
              {screenshots[activeIndex]?.description || "Descripción no disponible."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
