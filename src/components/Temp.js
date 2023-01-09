import React, { useState } from 'react'
import axios from 'axios';
import ShowTemp from './ShowTemp';

export default function Temp() {

    const [city, setCity] = useState("");

    const [data, setData] = useState({
        description: "No data found",
        temp: "No data found",
        temp_max: "No data found",
        temp_min: "No data found",
        humidity: "No data found",
        sunrise: "No data found",
        sunset: "No data found",
        wind: "No data found",
        country: "No data found",
    })

    const handleClick = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3d8911e600dda0a0f72820f43e2263c`)

            .then((response) => {
                setData({
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    wind: response.data.wind.speed,
                    country: response.data.sys.country,
                })
                console.log(response.data);
            })
    }

    return (
        <div>
            <div className="container text-center my-2">
                <h1>Weather of Your City</h1>

                <input type="text" className="from-control" value={city} onChange={(e) => {
                    setCity(e.target.value);
                }}
                />

                <button className="btn btn-primary mx-2 btnsize" type="submit" onClick={handleClick}>Search</button>

            </div>

            <ShowTemp text={data}></ShowTemp>
        </div>
    )
}
