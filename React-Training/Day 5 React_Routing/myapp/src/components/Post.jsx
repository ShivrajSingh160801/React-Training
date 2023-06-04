import React, { useEffect, useState } from "react";
import axios from "axios";

export const Post = () => {
  const [mystate, setmystate] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
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
          <div
            class="card"
            style={{
              width: "18rem",
            }}
          >
            <div class="card-body">
              <h5 class="card-title text-muted text-center">{data?.title}</h5>
              <p class="card-text">{data?.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
