
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import InputField from "../Inputs/InputField";
import TextArea from "../Inputs/TextArea";


const DealerContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const formRef = useRef();

  const handleNameChange = (value) => {
    setFormData(prev => ({ ...prev, name: value }));
  };

  const handleEmailChange = (value) => {
    setFormData(prev => ({ ...prev, email: value }));
  };

  const handleMessageChange = (value) => {
    setFormData(prev => ({ ...prev, message: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitMessage("");

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage("Please fill in all fields");
      setSending(false);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage("Please enter a valid email address");
      setSending(false);
      return;
    }

    try {
      const templateData = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        subject: "Dealer Registration Inquiry"
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setSubmitMessage("✓ Registration inquiry sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setSending(false);
            setTimeout(() => setSubmitMessage(""), 5000);
          },
          (error) => {
            console.error("Email error:", error);
            setSubmitMessage("Failed to send inquiry. Please try again.");
            setSending(false);
          }
        );
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitMessage("An error occurred. Please try again later.");
      setSending(false);
    }
  };

  return (
    <section className="relative bg-white mt-40 mb-20">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form ref={formRef} onSubmit={handleSubmit}>
                <InputField 
                  type="text" 
                  label="Full Name" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleNameChange}
                  required
                />
                <InputField
                  type="email"
                  label="Email Address"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleEmailChange}
                  required
                />
                <TextArea 
                  label="Message"
                  placeholder="Tell us about your dealer inquiry..."
                  value={formData.message}
                  onChange={handleMessageChange}
                  required
                  rows={4}
                />

                {submitMessage && (
                  <div className={`p-3 rounded-md text-sm mb-4 ${
                    submitMessage.includes("✓") 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                  className="mb-6 inline-block w-full rounded bg-[#CBA664] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send"}
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
                      <p className="mb-2 font-bold dark:text-white">
                        Contact Details
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        info@alrehmatdevelopers.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +92 42 37339430
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
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
                          fill="#CBA664"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path d="M12 2l-8 7V19h16V9l-8-7zm2 15h-4v-4h4v4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">Address</p>
                      <ul className=" list-disc space-y-5">
                        <li>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            Residencia Near Millat Tractor Ltd, 8km Sheikhupura
                            road Lahore, Punjab, Pakistan-54000
                          </p>
                        </li>
                        <li>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            50-D, Block D Opf Housing Scheme, Lahore, Punjab,
                            Pakistan
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
  );
}
export default DealerContactForm;