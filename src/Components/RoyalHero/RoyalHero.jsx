
import { Link } from "react-router-dom";
import royal1 from "../../assets/royal-residencia/royal1.png";

const   RoyalHero = () => {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1
              style={{ color: "black" }}
              className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]"
            >
              Discover Your Dream Home at Our Luxurious Housing Scheme
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p
              style={{ color: "black" }}
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
            >
              Nestled in a prime location, our housing scheme offers a perfect
              blend of modern amenities and serene living. Explore our range of
              stunning homes and find your ideal sanctuary.
            </p>
            <Link
              style={{ backgroundColor: "#CBA664", color: "white" }}
              href="#"
              className="hover:animate-wiggle-more hover:animate-infinite hover:animate-ease-in-out  inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  duration-300 "
              prefetch={false}
            >
              Explore Homes
            </Link>
          </div>
        </div>
        <img
          src={royal1}
          width="1270"
          height="500"
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
        />
      </div>
    </section>
  );
}

export default RoyalHero