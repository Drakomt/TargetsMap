import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import "./DropDown.css";

const DropDown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    option.onClick();
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="dropdown-button"
      >
        {selectedOption || "Choose A Map"}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              <h3 className="font-bold">{option.label}</h3>
              <h3>{option.Amount}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;

//! Simple Version
// import { useState } from "react";
// import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
// import { data } from "../../../data";

// const DropDown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="relative flex flex-col items-center w-[340px] h-[340] rounded-lg">
//       <button
//         onClick={() => setIsOpen((prev) => !prev)}
//         className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
//       >
//         DropDown
//         {!isOpen ? (
//           <AiOutlineCaretDown className="h-8" />
//         ) : (
//           <AiOutlineCaretUp className="h-8" />
//         )}
//       </button>

//       {isOpen && (
//         <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
//           {data.targets.map((item, i) => (
//             <div
//               key={i}
//               className="flex w-full justify-between p-4 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
//             >
//               <h3 className="font-bold">{item.Type}</h3>
//               <h3>{item.Amount}</h3>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropDown;
