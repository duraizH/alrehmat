import React from 'react'

const CardDealers = (props) => {
  return (
    <>
      <div className="card w-full  bg-[#CBA664] shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-white new">{props.title}</h2>
          <p className="text-sm sm:text-base lg:text-xl font-arvo text-black">{props.description}</p>
        </div>
      </div>
    </>
  );
}
export default CardDealers;
