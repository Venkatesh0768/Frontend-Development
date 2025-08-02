
import React, { useState } from "react";

function Dropdown({ title, options, onOptionSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    onOptionSelect(value); 
    setIsOpen(false); 
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-3 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700"
      >
        {title}
        <i className="ri-arrow-down-s-line"></i>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zinc-800 rounded-lg shadow-xl z-20">
          {options.map((option, index) => (
            <div
              key={index}
              className="block px-4 py-2 text-sm text-zinc-300 hover:bg-black/20 cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;