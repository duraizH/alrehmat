import React from 'react'

const CardDealers = (props) => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-[#CBA664] new">{props.title}</h2>
          <p className="lg:text-xl sm:text-sm font-arvo">{props.description}</p>
        </div>
      </div>
    </>
  );
}
export default CardDealers;
