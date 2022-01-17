import React from "react";
import "./DisplayWeather.css";

function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png";

  const d = new Date();

  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="displayweather-desp">
            <div className="body-bgcolor">
              <div className=" container mt-1">
                <div className=" text-center">
                  <div className="maincard pt-3">
                    <span className="text-light fs-2 ">
                      {data.name},{data.sys.country}.weather
                    </span>

                    <span className="text-light">
                      As of {d.toLocaleTimeString()}{" "}
                      <h1 className="text-light fw-bolder pt-2">
                        {Math.floor(data.main.temp - 273.15)}
                        <sub className="degree">°</sub>
                      </h1>
                      <small className="text-light fw-bolder fs-4 weather-main me-5">
                        {" "}
                        {data.weather[0].main}{" "}
                      </small>
                      <img className="weather-icon" src={iconurl} alt=""></img>

                    </span>

                    <span className="text-light fs-4 fw-bolder weather-description ms-5">
                      {data.weather[0].description}
                    </span>
                  </div>
                </div>
              </div>

              <div className="weather-deatails">
                <div className="weatherdetails  row   text-start container m-auto mt-4">
                  <div className="col-lg-3   col-sm-12 col-md-12 details_box">
                    <div className="box">
                      <h4 className="pt-1">
                        High/low
                        <span className="text-secondary">
                          {Math.floor(data.main.temp_max - 273.15)} 
                          <i class="fas fa-temperature-high text-dark mt-2">
                            /
                          </i>
                          {Math.floor(data.main.temp_min - 273.15)} <sub>	°C</sub>{" "} 
                          C <i class="fas fa-temperature-low text-success"></i> 
                        </span>
                      </h4>

                      <h4 className="pt-3">
                        Humidity
                        <span className="text-secondary">
                          {data.main.humidity}  %{" "} 
                          <i class="fas fa-tint text-primary"></i> 
                        </span>
                      </h4>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-12 col-md-12 details_box">
                    <div className="box">
                      <h4>
                        Pressure
                        <span className="text-secondary">
                          {data.main.pressure} hpa{" "}
                          <i class="fas fa-cloud-upload-alt text-warning"></i>
                        </span>
                      </h4>

                      <h4 className="pt-4">
                        Visibility
                        <span className="text-secondary">
                          {data.visibility / 1000} km{" "}
                          <i class="fas fa-eye-slash text-danger"></i>
                        </span>
                      </h4>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-12 col-md-12 details_box">
                    <div className="box">
                      <h4>
                        Wind
                        <span className="text-secondary">
                          {Math.floor((data.main.speed * 18) / 5)} Km/hr{" "}
                          <i class="fas fa-wind text-success"></i>
                        </span>
                      </h4>

                      <h4>
                        Wind Direction
                        <span className="text-secondary">
                          {data.wind.deg} <sub>o</sub>deg{" "}
                          <i class="fab fa-soundcloud text-primary"></i>
                        </span>
                      </h4>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-12 col-md-12 details_box">
                    <div className="box">
                      <h4>
                        Sunrise
                        <span className="text-secondary">
                          {new Date(
                            data.sys.sunrise * 1000
                          ).toLocaleTimeString()}{" "}
                          <i class="fas fa-sun text-warning"></i>
                        </span>
                      </h4>

                      <h4>
                        Sunset
                        <span className="text-secondary">
                          {new Date(
                            data.sys.sunset * 1000
                          ).toLocaleTimeString()}{" "}
                          <i class="fas fa-cloud-sun text-warning"></i>
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}
export default DisplayWeather;
