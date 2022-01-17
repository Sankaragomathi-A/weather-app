// import axios from "axios";
import React, { useState } from "react";
import DisplayWeather from "./DispalyWeather";
import "./Weather.css";

function Weather() {

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const day=["Sunday","Monday", "Thuesday", "Wednesday","Thursday", "Friday","Saturday"]

const d = new Date();



  const APIKEY = "1f05d072212b7f6de271e3cad8a33ba8";

  const [form, setForm] = useState({
    city: "",
    country: "",
  });
  const [weather, setWeather] = useState([]);

  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add Values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      )
        // .then((res)=>console.log(res.json()))
        .then((res) => res.json())

        .then((data) => data);
      setWeather({
        data: data,
      });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }

    if (name == "country") {
      setForm({ ...form, country: value });
    }
    // console.log(form.city,form.country);
  };
  return (
    <div className="weather-bg">
    <div className="weather">
      <nav class="navbar navbar-light">
        <div class="container-fluid">
          <div className="toggle d-flex">
            <i class="fas fa-sliders-h fs-3 me-3"></i>
            <a class="navbar-brand fs-6 text-light">Weather App</a>
            <i class="fab fa-pied-piper-pp text-danger fs-1 ms-5"></i>
            </div>
            <div className="navar-date text-center fs-4 ">
            {day[d.getDay()]}, {d.getDate()}th {"  "}
            {monthNames[d.getMonth()]} {""}
            {d.getFullYear()}
            </div>

          <div className="d-flex pe-3">
            <i class="fas fa-home px-2 fs-4"></i>
            <i class="fas fa-cog px-2 fs-4"></i>
          </div>
        </div>
      </nav>

      <h2 className="title fs-1 text-center   py-5">Weather App</h2>

      <form className="text-center mt-3">
        <input
          className="me-5 py-2"
          type="text"
          name="city"
          onChange={(e) => handleChange(e)}
          placeholder="City"
        />
        <input
          className="me-5 py-2"
          type="text"
          name="country"
          onChange={(e) => handleChange(e)}
          placeholder="Country"
        />
        <button
          className="btn btn-danger grtweaather"
          onClick={(e) => weatherData(e)}
        >
          Submit
        </button>
      </form>

      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
    </div>
  );
}
export default Weather;
