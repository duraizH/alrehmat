
import { Link } from "react-router-dom";
import Plot from "../../assets/royal-residencia/royalPlot.png";

const RoyalPlots = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-26 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div
                style={{ color: "black" }}
                className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
              >
                Our Homes
              </div>
              <h2
                style={{ color: "black" }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                Explore Our Stunning Home Designs
              </h2>
              <p
                style={{ color: "black" }}
                className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Our housing scheme offers a variety of home types to suit your
                lifestyle and preferences. From spacious single-family homes to
                modern apartments, we have something for everyone.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="grid gap-4 p-6 sm:p-8 card bg-base-100  shadow-xl bg-[#D4C3AA] text-black">
              <img
                src={Plot}
                width="550"
                height="310"
                alt="Home Type 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">3 Bedroom Home</h3>
                <p className="text-sm text-muted-foreground">
                  1,800 sq ft | Starting from $450,000
                </p>
                <div className="flex justify-center">
                  <Link
                    style={{ backgroundColor: "#CBA664", color: "white" }}
                    href="#"
                    className="hover:animate-rotate-y animate-once animate-ease-in animate-fill-forwards  inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  duration-300 "
                    prefetch={false}
                  >
                    Explore Homes
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-4 p-6 sm:p-8 card bg-base-100  shadow-xl bg-[#D4C3AA] text-black">
              <img
                src={Plot}
                width="550"
                height="310"
                alt="Home Type 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">2 Bedroom Apartment</h3>
                <p className="text-sm text-muted-foreground">
                  1,200 sq ft | Starting from $350,000
                </p>
                <div className="flex justify-center">
                  <Link
                    style={{ backgroundColor: "#CBA664", color: "white" }}
                    href="#"
                    className="hover:animate-rotate-y animate-once animate-ease-in animate-fill-forwards  inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  duration-300 "
                    prefetch={false}
                  >
                    Explore Homes
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-4 p-6 sm:p-8 card bg-base-100  shadow-xl bg-[#D4C3AA] text-black">
              <img
                src={Plot}
                width="550"
                height="310"
                alt="Home Type 3"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">4 Bedroom Townhouse</h3>
                <p className="text-sm text-muted-foreground">
                  2,200 sq ft | Starting from $550,000
                </p>
                <div className="flex justify-center">
                  <Link
                    style={{ backgroundColor: "#CBA664", color: "white" }}
                    href="#"
                    className="hover:animate-rotate-y animate-once animate-ease-in animate-fill-forwards  inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  duration-300 "
                    prefetch={false}
                  >
                    Explore Homes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RoyalPlots