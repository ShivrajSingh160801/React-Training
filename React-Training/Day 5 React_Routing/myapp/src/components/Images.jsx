import React, { useEffect, useState } from "react";
import axios from "axios";

export const Photos = () => {
  const [mystate, setmystate] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setmystate(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row  mt-2">
      {mystate?.data?.map((data, index) => (
        <div className="col-md-4 d-flex justify-content-center mb-3 " key={index}>
          <div class="card">
            <div class="card-body">
              <div className="row">
               <h3>{data?.title}</h3>
              </div>
              <div className="row mt-3">
                <img
                  src={data?.url}
                  alt=""
                  style={{
                    height: "600px",
                    width: "600px",
                  }}
                />
              </div>
              <div className="row mt-4 d-flex justify-content-center">
                <img src={data?.thumbnailUrl} alt="" style={{
                    height: "150px",
                    width: "150px",
                  }}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
