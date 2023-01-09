import React from 'react'
import './Style.css';

function ShowTemp({text}) {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card wtherbgimg">
                    <div className="card-body">
                        <h5 className="card-title">Environment</h5>
                        <p className="card-text">{text.description}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card wtherbgimg">
                    <div className="card-body">
                        <h5 className="card-title">Temperature</h5>
                        <p className="card-text">{(text.temp-(273.15)).toFixed(2)}°C</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card wtherbgimg">
                    <div className="card-body">
                        <h5 className="card-title">Maximum Temp</h5>
                        <p className="card-text">{(text.temp_max-(273.15)).toFixed(2)}°C</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card wtherbgimg">
                    <div className="card-body">
                        <h5 className="card-title">Minimum Temp</h5>
                        <p className="card-text">{(text.temp_min-(273.15)).toFixed(2)}°C</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card wtherbgimg">
                    <div className="card-body">
                        <h5 className="card-title">Humidity</h5>
                        <p className="card-text">{text.humidity}%</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card wtherbgimg">
                    <div className="card-body">
                        <h5 className="card-title">Sunrise</h5>
                        <p className="card-text">{text.sunrise}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card wtherbgimg">
                    <div className="card-body">
                        <h5 className="card-title">Sunset</h5>
                        <p className="card-text">{text.sunset}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card wtherbgimg">
                    <div className="card-body">
                        <h5 className="card-title">Wind</h5>
                        <p className="card-text">{text.wind}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card wtherbgimg">
                    <div className="card-body">
                        <h5 className="card-title">Country</h5>
                        <p className="card-text">{text.country}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowTemp