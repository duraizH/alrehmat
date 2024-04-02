
import React, { Suspense,useEffect } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));
const Cube = () => {
    useEffect(() => {
      // Find the canvas element by its tag name (assuming it's the only canvas on the page)
      const canvas = document.querySelector("canvas");

      if (canvas) {
        console.log("found");
        canvas.width = "500px"; // Set your desired width
        canvas.height = "400px"; // Set your desired height
        canvas.style.width = "500px"; // Set your desired width
        canvas.style.height = "400px"; // Set your desired height
      }
    }, []);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" max-w-[300px] max-h-[300px] cube-container">
        <Spline scene="https://prod.spline.design/uymd0haAlKsRX3ip/scene.splinecode" />
      </div>
    </Suspense>
  );
}
export default Cube;
