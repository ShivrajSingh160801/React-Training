import React, { useState } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const MyLoader = () => {
  const loading = useSelector((state) => state.loading);
  console.log('loading: ', loading);
  
  return (
    <div>
      {loading ? (
        <div className="spinner">
          <ClipLoader color="red" size={700} />
        </div>
      ) : null}
    </div>
  );
};

export default MyLoader;
