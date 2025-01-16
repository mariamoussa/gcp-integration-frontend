import React from "react";

const TaskCard = ({
  icon,
  title,
  description,
  subText,
  completed,
  buttonText,
  buttonAction, 
  isExpandable,
  isExpanded,
  onClick,
  children,
}) => {
  return (
    <div className={`border rounded-lg bg-gray-50 ${isExpandable ? "cursor-pointer" : ""}`} onClick={isExpandable ? onClick : null}>
      <div className={`flex items-start justify-between p-4 ${isExpandable && isExpanded ? "pb-0" : ""}`}>
        <div className="flex gap-4">
          <div className="bg-purple-100 p-2 rounded-lg">{icon}</div>
          <div>
            <h2 className="font-medium text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-1" style={{width: '70%'}}>{description}</p>
            {subText && <p className="text-xs text-purple-600 mt-1">{subText}</p>}
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">{completed}</p>
          {buttonText && (
            <button
              onClick={buttonAction} 
              className="mt-2 px-4 py-2 text-sm font-medium bg-purple-600 text-white rounded-md"
              style={{ minWidth: "120px", height: "37px" }}
              >
              {buttonText}
            </button>
          )}
          {isExpandable && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          )}
        </div>
      </div>
      {isExpandable && isExpanded && <div className="p-4 space-y-3">{children}</div>}
    </div>
  );
};

export default TaskCard;
