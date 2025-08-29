import g3 from "../../assets/g3.jpg";
import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'



 const ContactForm = () => {
    const { width, height } = useWindowSize()
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
    setInputs({});               // clear form
setSending(false);   
    // Hide confetti after 5 seconds
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
      <Helmet>
        <title>Contact Al-Rehmat</title>
        <meta name="description" content="Contact Al Rehmat Developers" />
      </Helmet>
            {showConfetti && (
  <>
    <Confetti width={width} height={height} />
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
      <div className="container my-24 mx-auto md:px-6" id="Contact-form">
        <section className="mb-32">
          <div
            className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat "
            style={{ backgroundImage: `url(${g3})` }}
          />
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap-reverse">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
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
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div className="flex flex-wrap">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="#CBA664"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-[#CBA664]">
                            Contact Details
                          </p>
                          <p className="text-black text-xl dark:text-black">
                            alrehmatdev@gmail.com
                          </p>
                          <p className="text-black text-xl  dark:text-black ">
                            +92 42 37339430
                          </p>
                          <p className="text-black text-xl dark:text-black">
                            +92 321 030 1786
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#CBA664" // Set the fill color to the hexadecimal value
                              viewBox="0 0 24 24"
                              className="h-6 w-6"
                            >
                              <path d="M12 2l-8 7V19h16V9l-8-7zm2 15h-4v-4h4v4z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-[#CBA664]">
                            Address
                          </p>
                          <ul className=" list-disc space-y-5">
                            <li>
                              <p className="text-black text-xl">
                                Residencia Near Millat Tractor Ltd, 8km
                                Sheikhupura road Lahore, Punjab, Pakistan-54000
                              </p>
                            </li>
                            <li>
                              <p className="text-black text-xl">
                                50-D, Block D Opf Housing Scheme, Lahore,
                                Punjab, Pakistan
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactForm;
