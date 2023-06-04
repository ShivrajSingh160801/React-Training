import React, { useEffect, useState } from "react";
import axios from "axios";

export const InfoCards = () => {
  const [mystate, setmystate] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setmystate(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row mt-2">
      {mystate?.data?.map((data, index) => (
        <div key={index} className="col-md-6 mb-3 cards">
          <div class="card">
            <div class="card-header">
              <div className="row text-center">
                <div className="col-md-12 text-center">
                  <h3 className="text-muted fst-italic">{data?.name}</h3>
                </div>
                <hr className="px-5"></hr>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="fst-italic text-center">
                    Alias :{" "}
                    <span className="fw-bold fst-italic">{data?.username}</span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="fst-italic text-center">
                    eMail :{" "}
                    <span className="fw-bold fst-italic">{data?.email}</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <p className="fst-italic text-center">
                    Contact :{" "}
                    <span className="fw-bold fst-italic">{data?.phone}</span>
                  </p>
                </div>
                <div className="col-md-6">
                  {" "}
                  <p className="fst-italic text-center">
                    webSite :{" "}
                    <span className="fw-bold fst-italic">{data?.website}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="row text-center">
                  <h4 className="card-title font-monospace">Address</h4>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="fst-italic text-center">
                      Street :
                      <span className="fw-bold fst-italic">
                        {data?.address.street}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="fst-italic text-center">
                      Suite :
                      <span className="fw-bold fst-italic">
                        {data?.address.suite}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="fst-italic text-center">
                      City :
                      <span className="fw-bold fst-italic">
                        {data?.address.city}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="fst-italic text-center">
                      ZipCode :
                      <span className="fw-bold fst-italic">
                        {data?.address.zipcode}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 text-muted text-end">
                    GeoLocation :{" "}
                  </div>
                  <div className="col-md-4 fst-italic text-center fw-bold">
                    {data?.address.geo.lat} | {data?.address.geo.lng}
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="row text-center">
                  <h4 className="font-monospace">Company</h4>
                </div>
                <div className="row text-center">
                  <div className="col-md-12 fst-italic text-center fw-bolder">
                    {data?.company.name}
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-12 fst-italic text-center fw-muted">
                    {data?.company.catchPhrase}
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-12 fst-italic text-center fw-normal">
                    {data?.company.bs}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
