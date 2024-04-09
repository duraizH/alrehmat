import PageTitle from "../PageTitle/PageTitle";
import CardDealers from "./CardDealers";


 const DealersDetails = () => {
  return (
    <section className="relative bg-white   mb-20 ">
      <div className="container mx-auto">
        <h1 className=" text-center mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          <br />
          <span className=" text-[#CBA664] ">Dealers Registration</span>
        </h1>
        <PageTitle heading="">
          Al-Rehmat Developers welcomes all dealers and investors to join us in
          our journey on the road to prosperity. We offer business propositions
          that are extremely innovative. We offer business propositions that are
          ahead of their time and carry the prospect of maximum returns. We
          tailor them as per the needs of our esteemed clients with thorough
          homework and due diligence.
          <p className="text-left my-10">
            Our exclusive business offerings comprise:
          </p>
        </PageTitle>
      </div>
      <div className="mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl">
        <CardDealers
          title={"Plot Sales"}
          description={
            "Discover your dream plot in prime locations with Al Rehmat Developers"
          }
        />
        <CardDealers
          title={"Exclusive Sales Rights of a Sector"}
          description={
            "Gain exclusive sales rights for a sector with Al Rehmat "
          }
        />
        <CardDealers
          title={"Investor-Based Bulk Sales"}
          description={
            "Explore bulk sales opportunities for investors with Al Rehmat Developers, your partner in real estate success."
          }
        />
      </div>
    </section>
  );
}

export default DealersDetails;
