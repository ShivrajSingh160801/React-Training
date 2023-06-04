import React, { useEffect, useState } from "react";
import axios from "axios";

export const ToDOs = () => {
  const [mystate, setmystate] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
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
        <div
          className="col-md-4 d-flex justify-content-center mb-3 "
          key={index}
        >
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body text-center">
              <h5 class="card-title">{data?.id}</h5>
              <h6 class="card-subtitle mb-2">{data?.title}</h6>
              <p class="card-text text-muted">{data?.completed}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
