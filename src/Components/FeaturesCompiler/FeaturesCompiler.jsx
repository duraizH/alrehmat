import React from 'react'

const FeaturesCompiler = (props) => {
const featureList=props.features;
  return (
    <>
      <div className='text-center'>
        <h1 className="  text-[#CBA664] text-4xl my-4  ">{props.heading}</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 text-center mx-auto max-w-6xl">
        {featureList.map((feature) => {
          return (
            <div key={feature} className="lg:col-span-1 md:col-span-1 text-[#CBA664] my-4">
              ◆ {feature}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default FeaturesCompiler;