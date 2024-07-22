import InputField from "../Inputs/InputField";
import TextArea from "../Inputs/TextArea";
import g3 from "../../assets/g3.jpg";
import { Helmet } from "react-helmet";
import { useState } from "react";


 const ContactForm = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...inputs }),
      })
        .then(() => alert("Form Submitted"))
        .catch((error) => alert(error));

      e.preventDefault();
    };
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };
  return (
    <>
      <Helmet>
        <title>Contact Al-Rehmat</title>
        <meta name="description" content="Contact Al Rehmat Developers" />
      </Helmet>
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
                    onSubmit={handleSubmit}
                    className="text-center"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    name="CTA"
                    method="post"
                  >
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <input
                        className="w-full bg-gray-100 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-200/80 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                        type="text"
                        placeholder="First name"
                        value={inputs.fname || ""}
                        onChange={handleChange}
                        name="fname"
                      />
                      <input
                        className="w-full bg-gray-100 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-200/80 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
                        type="text"
                        placeholder="Last Name"
                        value={inputs.lname || ""}
                        onChange={handleChange}
                        name="lname"
                      />
                    </div>
                    <input
                      className="w-full bg-gray-100  text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-200/80 focus:outline-none focus:ring-1 focus:ring-[#CBA664] transition ease-in-out duration-150"
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
                      type="submit"
                      data-te-ripple-init=""
                      data-te-ripple-color="light"
                      className="max-w-xs   mb-6 inline-block w-full rounded bg-[#CBA664] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Contact Us
                    </button>
                    <input type="hidden" name="CTA" value="Call_to_action" />
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
