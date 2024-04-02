import React from 'react'

const TextArea = () => {
  return (
    <div className="relative mb-6" data-te-input-wrapper-init="">
      <textarea
        className="w-full bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
        id="exampleFormControlTextarea1"
        rows={3}
        placeholder="Your message"
        defaultValue={""}
      />
    </div>
  );
}
export default TextArea;
