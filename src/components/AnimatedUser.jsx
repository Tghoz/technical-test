import { useState } from "react";
import "../anim/animation.css";

const AnimatedUser = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="ml-10 bg-black text-white rounded-md w-16 h-10 hover:w-28 transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // Ejecuta la función al hacer clic
    >
      <p className="text-center ml-1 mt-2 font-pixel">
        {isHovered ? "User name " : " U :"}
        {!isHovered && <span className="backslash "> \ </span>}
      </p>
    </div>
  );
};

export default AnimatedUser;
