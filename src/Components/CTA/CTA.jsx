
import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Confetti from 'react-confetti'

import "./CTA.css"
const CTA = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
      useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    const [inputs, setInputs] = useState({});
      const [showConfetti, setShowConfetti] = useState(false);
      const [sending, setSending] = useState(false);
    const formRef = useRef();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    };

   const handleSubmit = (e) => {
    e.preventDefault();
      setSending(true);

    emailjs
      .sendForm(
        "service_lyphnfb", // 🔹 Replace with your EmailJS service ID
        "template_k62rwr6", // 🔹 Replace with your EmailJS template ID
        formRef.current,
        "J_USET3TKmretVKY3" // 🔹 Replace with your EmailJS public key
      )
      .then(
        () => {
 setShowConfetti(true);       // 👈 Show confetti now!
    setInputs({});   
         setSending(false);            // clear form
    setTimeout(() => setShowConfetti(false), 10000);
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
                {showConfetti && (
  <>
          <Confetti width={windowSize.width} height={windowSize.height} />
    <div
      style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#CBA664',
        color: '#fff',
        padding: '15px 30px',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        zIndex: 9999,
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        textAlign: 'center',
      }}
    >
      🎉 Message Sent Successfully! 🎉
    </div>
  </>
)}
      <div className="container  my-24 mx-auto md:px-6 ">
        <section className="mb-32 bg-neutral-50 text-center  lg:text-left">
          <div className="px-6 py-12 md:px-12 ">
            <div className="grid  gap-12 grid-cols-2">
              <div className="mb-12 lg:mb-0 col-span-2 max-w-7xl mx-auto  ">
                <div className="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:px-12">
                        <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="text-center"
                  >
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <input
                        className="w-full bg-gray-100 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-200/80 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                        type="text"
                        placeholder="First name"
                        value={inputs.fname || ""}
                        onChange={handleChange}
                        name="fname"
                        required
                      />
                      <input
                        className="w-full bg-gray-100 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-200/80 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                        type="text"
                        placeholder="Last Name"
                        value={inputs.lname || ""}
                        onChange={handleChange}
                        name="lname"
                        required
                      />
                    </div>
                    <input
                      className="w-full bg-gray-100  text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-200/80 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                      type="email"
                      placeholder="Email address"
                      value={inputs.email || ""}
                      onChange={handleChange}
                      name="email"
                      required
                    />
                    <div className="relative mb-6">
                      <textarea
                        className="w-full bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                        rows={3}
                        placeholder="Your message"
                        value={inputs.comments || ""}
                        onChange={handleChange}
                        name="comments"
                        required
                      />
                    </div>
                    <button
                    disabled={sending}
                      type="submit"
                      className="max-w-xs mb-6 inline-block w-full rounded bg-[#CBA664] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#b08d55] focus:outline-none focus:ring-2 focus:ring-[#CBA664] focus:ring-offset-2"
                    >
                      Contact Us
                    </button>
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