import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  paragraphEmphasized1: String;
  paragraphEmphasized2: String;
  paragraph1: string;
  paragraph2: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  date?: string;
  scrollToId?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  paragraphEmphasized1,
  paragraphEmphasized2,
  paragraph1,
  paragraph2,
  buttonText,
  buttonLink,
  backgroundImage = "program/hero-program.webp",
  date,
  scrollToId,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (scrollToId) {
      e.preventDefault();
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-l from-secondary to-transparent overflow-hidden flex items-center justify-center h-[100%] px-4 sm:px-6 md:px-11 lg:px-0 py-11">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="LEARNS RH Summer Camp"
          className="w-full h-full object-cover object-top opacity-30"
        />
      </div>
      <div className=" pt-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-2 w-[90%] max-w-[100rem] mx-auto">
        <div className="span-col-1 md:pt-32 md:pb-11 relative z-10">
          <div className="max-w-2xl text-white mx-auto">
            <img
              src="logos/logo-summerSession.webp"
              className="lg:hidden pb-11"
              alt="Logo des RH summer session"
            />
            <div className="flex flex-col items-start mb-6">
              <h1 className="text-xl md:text-xl 2xl:text-2xl font-bold mb-2 text-white drop-shadow-md">
                {title}
              </h1>
              {date && (
                <p className="text-xl md:text-2xl mb-2 bg-secondary px-4 py-1 rounded-lg transform -rotate-2">
                  {date}
                </p>
              )}
              <div className="w-32 h-1 bg-white rounded-full my-4"></div>
            </div>
            <div className="text-lg md:text-xl 2xl:text-2xl mb-8 bg-primary bg-opacity-70 p-4 rounded-lg shadow-lg">
              <p>
                <span className="font-black">{paragraphEmphasized1}</span>
                {paragraph1}
                <span className="font-black">
                  {paragraphEmphasized2}
                  <span className="font-normal"> {paragraph2}</span>
                </span>
              </p>
            </div>
            <Link
              to={buttonLink}
              onClick={handleClick}
              className="inline-flex items-center bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer md:text-xl 2xl:text-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {buttonText}
            </Link>
          </div>
        </div>
        <div className="gap-38 span-col-1  flex flex-col justify-between pt-11 relative z-10">
          <div className="self-center  md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
            <img
              src="logos/logo-summerSession.webp"
              className="hidden lg:block w-[35rem] span-col-1 span-row-1 mb-20"
              alt="Logo de RH summer session"
            />
          </div>
          <div className="w-full flex justify-center lg:justify-end mx-auto lg:mx-0 md:justify-end  gap-3 items-center  lg:mt-20">
            <img
              src="logos/logo-learns.svg"
              className="self-center w-1/4"
              alt="Logo de Learns RH"
            />
            <img
              src="logos/logo-pragma.webp"
              className="w-1/4 max-w-[7.5rem] self-center"
              alt="Logo de Pragma"
            />
            <img
              src="logos/logo-chateauform-noBG.webp"
              className="w-1/4 max-w-[8.5rem] 2xl:max-w-[10rem] self-center lg:w-full"
              alt="Logo de chateauForm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
