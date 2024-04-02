
import InputField from "../Inputs/InputField";
import TextArea from "../Inputs/TextArea";
import "./CTA.css"
const CTA = () => {
  return (
    <>
      <div className="container  my-24 mx-auto md:px-6 ">
        <section className="mb-32 bg-neutral-50 text-center dark:bg-neutral-900 lg:text-left">
          <div className="px-6 py-12 md:px-12 ">
            <div className="grid  gap-12 grid-cols-2">
              <div className="mb-12 lg:mb-0 col-span-2 max-w-7xl mx-auto  ">
                <div className="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-800 md:px-12">
                  <form className="text-center">
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <InputField
                        type={"text"}
                        label={"First name"}
                        placeholder={"First name"}
                      />
                      <InputField
                        type={"text"}
                        label={"Last name"}
                        placeholder={"Last name"}
                      />
                    </div>
                    <InputField
                      type={"email"}
                      label={"Email address"}
                      placeholder={"Email address"}
                    />
                    <TextArea/>
                    <button
                      type="button"
                      data-te-ripple-init=""
                      data-te-ripple-color="light"
                      className="max-w-xs   mb-6 inline-block w-full rounded bg-[#CBA664] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
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