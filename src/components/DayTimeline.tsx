import { useState, useEffect, useRef } from "react";
import {
  Tent,
  Coffee,
  Target,
  Apple,
  Brain,
  Utensils,
  BarChart2,
  Clock,
  RefreshCw,
  Wine,
} from "lucide-react";

interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  image: string;
}

const DayTimeline: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const timelineEvents: TimelineEvent[] = [
    {
      id: "step-1",
      time: "8:30",
      title: "ACCUEIL & CAFÉ",
      description: "Café d'accueil pour commencer la journée en douceur.",
      icon: <Coffee size={28} />,
      color: "bg-primary",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "step-2",
      time: "9:00",
      title: "SESSION MATINALE",
      description:
        "Ateliers avec des experts RH pour explorer les dernières tendances du secteur.",
      icon: <Target size={28} />,
      color: "bg-primary",
      image:
        "https://images.unsplash.com/photo-1558403194-611308249627?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "step-3",
      time: "10:30",
      title: "PAUSE ÉNERGISANTE",
      description:
        "Moment de détente lors d'une pause gourmande pour partager et échanger sur les idées du matin.",
      icon: <Apple size={28} />,
      color: "bg-primary",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "step-4",
      time: "11:00",
      title: "Deuxième atelier de la matinée",
      description: "Atelier et/ou conférence selon le planning du jour.",
      icon: <Brain size={28} />,
      color: "bg-primary",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "step-5",
      time: "13:00",
      title: "DÉJEUNER",
      description: "Repas convivial pour rencontrer des pairs.",
      icon: <Utensils size={28} />,
      color: "bg-primary-light",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "step-6",
      time: "14:00",
      title: "Premier Atelier de l'après-midi",
      description: "Atelier selon votre choix",
      icon: <BarChart2 size={28} />,
      color: "bg-primary-light",
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "step-7",
      time: "15:30",
      title: "PAUSE ÉNERGISANTE",
      description:
        "Moment de détente lors d'une pause gourmande pour partager et échanger sur les idées de l'après-midi.",
      icon: <BarChart2 size={28} />,
      color: "bg-primary-light",
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "step-8",
      time: "16:00",
      title: "Dernière session de l'après-midi",
      description: "Atelier selon votre choix",
      icon: <RefreshCw size={28} />,
      color: "bg-primary-light",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "step-8",
      time: "18:00",
      title: "COCKTAIL NETWORK",
      description:
        "Échanges autour d'un verre dans une ambiance détendue (spécial Jour 3 uniquement).",
      icon: <Wine size={28} />,
      color: "bg-primary-light",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80",
    },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = timelineEvents.findIndex((event) => event.id === id);
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observerRef.current = observer;

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [timelineEvents]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollPercentage =
        container.scrollTop / (container.scrollHeight - container.clientHeight);
      setScrollProgress(scrollPercentage * 100);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index];
    if (section && containerRef.current) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mt-20 max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
      <div className="sticky top-0 z-20 bg-white p-6 border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-primary to-primary-light p-3 rounded-lg shadow-md mr-3">
              <Tent className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Une journée avec nous
            </h2>
          </div>

          <div className="hidden md:block h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-light"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 py-2">
          {timelineEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeSection
                  ? "bg-secondary w-12 h-3"
                  : index < activeSection
                  ? "bg-primary w-3 h-3"
                  : "bg-gray-200 w-3 h-3"
              }`}
              aria-label={`Aller à l'étape ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          ref={containerRef}
          className="h-[70vh] overflow-y-auto md:overflow-y-auto overflow-x-auto md:overflow-x-hidden hide-scrollbar"
        >
          <div className="relative md:relative flex md:block">
            <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-light hidden md:block"></div>
            <div className="absolute top-[50%] left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-light md:hidden"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                id={event.id}
                ref={(el) => (sectionsRef.current[index] = el)}
                className={`flex min-h-[70vh] md:min-h-[70vh] min-w-[100vw] md:min-w-0 items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } px-6 md:px-12 py-16`}
              >
                <div className="flex-1 p-6 z-10">
                  <div
                    className={`rounded-lg overflow-hidden transition-all duration-500 ${
                      activeSection === index
                        ? "transform-none opacity-100"
                        : index < activeSection
                        ? "opacity-80 translate-y-10 md:translate-y-10 translate-x-10 md:translate-x-0"
                        : "opacity-50 -translate-y-10 md:-translate-y-10 -translate-x-10 md:-translate-x-0"
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className={`rounded-full w-10 h-10 flex items-center justify-center ${event.color}`}
                      >
                        <div className="text-white">{event.icon}</div>
                      </div>
                      <div className="ml-3 text-3xl font-bold text-gray-800">
                        {event.time}
                      </div>
                    </div>

                    <h3 className="text-2xl text-secondary font-bold mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 mb-6 max-w-md">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="z-10 relative flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full border-4 border-white transition-all duration-300 ${
                      activeSection === index
                        ? "bg-secondary scale-125"
                        : "bg-gray-200"
                    }`}
                  ></div>
                </div>

                <div className="flex-1 p-6 z-10">
                  <div
                    className={`overflow-hidden rounded-xl shadow-lg transition-all duration-700 ${
                      activeSection === index
                        ? "transform-none opacity-100"
                        : index < activeSection
                        ? "opacity-80 -translate-x-10"
                        : "opacity-50 translate-x-10"
                    }`}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 p-6">
        <div className="flex items-start max-w-lg mx-auto">
          <Clock size={24} className="text-secondary mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg text-secondary mb-2">
              Bon à savoir
            </h3>
            <p className="text-gray-700">
              Le programme est en cours de finalisation{" "}
              <span className="font-semibold">
                De belles surprises sont à venir !
              </span>
            </p>
            <p>
              Le <span className="font-semibold">mercredi 9 juillet</span>, tous
              les participants sont conviés à l'{" "}
              <span className="font-semibold">afterwork des RH</span> : Un
              cocktail dans une ambiance{" "}
              <span className="font-semibold">chaleureuse et détendue</span>,
              idéale pour échanger, réseauter et partager.
            </p>
            <p className="text-center mt-4 font-semibold">
              Peu importe la journée que vous réservez,
            </p>
            <p className="text-center mt-4 font-semibold">
              👉 l’accès à l'afterwork est inclus !
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DayTimeline;
