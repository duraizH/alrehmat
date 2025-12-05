import React from 'react'

const TextArea = ({ label, placeholder, value, onChange, required, rows = 3 }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="relative mb-6" data-te-input-wrapper-init="">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        className="w-full bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
        rows={rows}
        placeholder={placeholder || "Your message"}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
}
export default TextArea;