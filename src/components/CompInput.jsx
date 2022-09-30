import React from "react";

const CompInput = ({ input }) => {
  if (input.type === "text") {
    return (
      <div
        className={`w-full col-span-full text-grey-800 ${
          input.fullWidth ? "" : "sm:col-span-1"
        }`}
      >
        <label>{input.label}</label>
        <div className="flex relative items-center mt-1">
          <input
            className={`w-full py-1.5 pl-3 pr-8 outline-none rounded-md placeholder:text-grey-400 ${
              input.error ? "border border-red-500" : "border border-grey-300"
            }`}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            disabled={input.disabled}
            value={input.value}
            required={input.required}
          />
        </div>
        {input.error && (
          <div className="text-xs text-red-500">{input.error}</div>
        )}
      </div>
    );
  }
};

export default CompInput;
