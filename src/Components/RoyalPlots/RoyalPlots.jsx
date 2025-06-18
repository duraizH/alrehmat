import Plot from "../../assets/royal-residencia/royalPlot.webp";
import PlotCard from "../PlotCard/PlotCard";
import { plots } from "../../Data/plots";

const RoyalPlots = () => {
  return (
    <>
      <section className=" flex justify-center w-full py-12 md:py-24 lg:py-26 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div
                style={{ color: "black" }}
                className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                id="plot-section"
              >
                Our Plots
              </div>
              <h2
                style={{ color: "black" }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                Explore Our Diverse Plot Distribution
              </h2>
              <p
                style={{ color: "black" }}
                className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Our housing scheme offers a variety of plots to suit your
                lifestyle and preferences. Whether you're looking to build a
                spacious single-family home, a modern townhouse, or a
                contemporary apartment building, we have the perfect plot for
                you. Each plot is strategically located to provide easy access
                to community amenities, ensuring that you can enjoy a
                comfortable and convenient lifestyle. Explore our range of
                available plots and find the ideal location to build your dream
                home in our vibrant and well-planned community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {plots.map((plot) => {
              return (
                <PlotCard
                  key={plot.heading}
                  img={Plot}
                  heading={plot.heading}
                  description={plot.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoyalPlots;
