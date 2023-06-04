import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { FetchData } from './redux/action/action';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('state: ', state);
  return (
    <div className="App">
      <>
        <button
          onClick={() => {
            dispatch(FetchData());
          }}
          className="blue"
          style={{ background: "blue" }}
        >
          Fetch Data
        </button>

        <div className="row mt-2">
          {state?.fetch_data?.map((data, index) => (
            <div key={index} className="col-md-6 mb-3 cards">
              <div class="card" >
                <div class="card-header" style={{ background: "linear-gradient(0deg, rgba(68, 34, 195, 0.39) 0%, rgb(200 188 81 / 4%) 76%, rgb(162, 211, 209) 100%)" }}>
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
                        <span className="fw-bold fst-italic">
                          {data?.username}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="fst-italic text-center">
                        eMail :{" "}
                        <span className="fw-bold fst-italic">
                          {data?.email}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {" "}
                      <p className="fst-italic text-center">
                        Contact :{" "}
                        <span className="fw-bold fst-italic">
                          {data?.phone}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-6">
                      {" "}
                      <p className="fst-italic text-center">
                        webSite :{" "}
                        <span className="fw-bold fst-italic">
                          {data?.website}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card-body" style={{
                  background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,204,233,1) 100%)"
                }}>
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
      </>
    </div>
  );
}

export default App;
