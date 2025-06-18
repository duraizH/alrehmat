import royal2 from "../../assets/royal-residencia/royal2.webp";
import royal3 from "../../assets/royal-residencia/royal3.webp";
const RoyalLuxury = () => {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-26">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="space-y-2">
              <div
                style={{ color: "black" }}
                className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
              >
                About Our Housing Scheme
              </div>
              <h2
                style={{ color: "black" }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                Luxury Living in a Prime Location
              </h2>
              <p
                style={{ color: "black" }}
                className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Our housing scheme is meticulously designed to offer you the
                ultimate luxury living experience. Nestled in a prime location,
                our development combines the best of modern amenities with
                serene, picturesque surroundings. Imagine waking up each day to
                the perfect blend of comfort, convenience, and tranquility, all
                within easy reach of the city's vibrant lifestyle. Whether
                you're enjoying the lush green parks, the state-of-the-art
                fitness centers, or the convenient shopping and dining options,
                you'll find everything you need to live a life of unparalleled
                luxury right at your doorstep. Discover why our housing scheme
                is the ideal place to call home and experience a lifestyle like
                no other.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <img
              loading="lazy"
              src={royal3}
              width="550"
              height="310"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full hover:animate-rotate-x animate-once cursor-pointer animate-ease-in animate-fill-forwards"
            />
            <img
              loading="lazy"
              src={royal2}
              width="550"
              height="310"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full hover:animate-rotate-x animate-once cursor-pointer animate-ease-in animate-fill-forwards"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalLuxury;
