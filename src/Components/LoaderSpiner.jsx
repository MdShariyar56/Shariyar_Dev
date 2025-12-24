import React from "react";


const LoaderSpiner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
     <p>Loading......</p>
    </div>
  );
};

export default LoaderSpiner;
