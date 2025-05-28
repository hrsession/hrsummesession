import { Link } from "react-router";

export default function () {
  return (
    <button className="bg-secondary hover:bg-secondary-light text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clipRule="evenodd"
        />
      </svg>
      <Link to="/programme">Je télécharge le programme</Link>
    </button>
  );
}
