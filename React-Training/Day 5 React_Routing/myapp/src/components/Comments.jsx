import React, { useEffect, useState } from "react";
import axios from "axios";

export const Comments = () => {
  const [mystate, setmystate] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
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
              <h5 class="card-title">{data?.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{data?.email}</h6>
              <p class="card-text">{data?.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
