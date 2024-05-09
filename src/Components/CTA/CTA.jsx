
import { useState } from "react";
import "./CTA.css"
const CTA = () => {

  const [inputs,setInputs]=useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };


  const handleSubmit=(e)=>{

     fetch("/", {
       method: "POST",
       headers: { "Content-Type": "application/x-www-form-urlencoded" },
       body: encode({ "form-name": "contact", ...inputs}),
     })
       .then(() => alert("Form Submitted"))
       .catch((error) => alert(error));

     e.preventDefault();
  }
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };

  return (
    <>
      <div className="container  my-24 mx-auto md:px-6 ">
        <section className="mb-32 bg-neutral-50 text-center  lg:text-left">
          <div className="px-6 py-12 md:px-12 ">
            <div className="grid  gap-12 grid-cols-2">
              <div className="mb-12 lg:mb-0 col-span-2 max-w-7xl mx-auto  ">
                <div className="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:px-12">
                  <form
                    onSubmit={handleSubmit}
                    className="text-center"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    name="CTA"
                    method="post"
                  >
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <input
                        className="w-full bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200/80 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                        type="text"
                        placeholder="First name"
                        value={inputs.fname || ""}
                        onChange={handleChange}
                        name="fname"
                      />
                      <input
                        className="w-full bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200/80 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                        type="text"
                        placeholder="Last Name"
                        value={inputs.lname || ""}
                        onChange={handleChange}
                        name="lname"
                      />
                    </div>
                    <input
                      className="w-full bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200/80 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                      type="email"
                      placeholder="Email address"
                      value={inputs.email || ""}
                      onChange={handleChange}
                      name="email"
                    />
                    <div
                      className="relative mb-6"
                      data-te-input-wrapper-init=""
                    >
                      <textarea
                        className="w-full bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Your message"
                        value={inputs.comments || ""}
                        onChange={handleChange}
                        name="comments"
                      />
                    </div>
                    <button
                    
                      onClick={() => {
                        if (!inputs.fname || !inputs.lname || !inputs.email ||  !inputs.comments) {
                          alert("Please complete all the fields");
                        }else{
                           document.querySelector("form").submit();
                        }
                      }}
                      type="button"
                      data-te-ripple-init=""
                      data-te-ripple-color="light"
                      className="max-w-xs   mb-6 inline-block w-full rounded bg-[#CBA664] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Contact Us
                    </button>
                    <input type="hidden" name="CTA" value="Call_to_action" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </>
  );
}
export default CTA;