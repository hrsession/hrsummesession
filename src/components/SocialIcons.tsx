export default function SocialIcon() {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        className="w-10 h-10 bg-white text-[#8cc6e9] hover:bg-blue-50 hover:text-[#FF1C66] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-md"
      >
        <i className="fab fa-linkedin text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-white text-[#8cc6e9] hover:bg-blue-50 hover:text-[#FF1C66] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-md"
      >
        <i className="fab fa-twitter text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-white text-[#8cc6e9] hover:bg-blue-50 hover:text-[#FF1C66] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-md"
      >
        <i className="fab fa-facebook text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-white text-[#8cc6e9] hover:bg-blue-50 hover:text-[#FF1C66] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-md"
      >
        <i className="fab fa-instagram text-xl"></i>
      </a>
    </div>
  );
}
