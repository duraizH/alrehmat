import AmenetiesCard from "../AmenetiesCard/AmenetiesCard";
import { ameneties } from "../../Data/ameneties";

const RoyalAmeneties = () => {
  return (
    <>
      <section className=" flex justify-center w-full py-10 sm:py-12 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div
                style={{ color: "black" }}
                className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
              >
                Amenities
              </div>
              <h2
                style={{ color: "black" }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter"
              >
                Enjoy a Luxurious Lifestyle
              </h2>
              <p
                style={{ color: "black" }}
                className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed"
              >
                Our housing scheme offers a wide range of amenities to enhance
                your living experience. From a state-of-the-art clubhouse to
                lush green spaces, we've thought of everything to make your life
                more comfortable and enjoyable.
              </p>
            </div>
          </div>
          <div
            style={{ color: "black" }}
            className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-20"
          >
            {ameneties.map((amenety) => {
              return (
                <AmenetiesCard
                  key={amenety.title}
                  heading={amenety.title}
                  description={amenety.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoyalAmeneties;
