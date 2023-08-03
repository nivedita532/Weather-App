import React ,{useEffect, useState} from "react";
import "./css/style.css";
import logo from "./logo.png";
import image from "./image.png";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=35c6ba1966e8fda05994ce497897a9b2`;
            const response =await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search] )

    return(
        <>
           <div className="box">

              <div className="inputData">
                <input
                type="search"
                className="inputFeild"
                placeholder="Mumbai"
                onChange={ (event) => { setSearch(event.target.value) } } 
                />
                <img src={logo} className="search-logo" alt="logo"/>
              </div>

              {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (

                    <div>

                        <div>
                           <img src={image} className="weather-image" alt="img"/>
                        </div>

                        <div>
                            <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}&deg;C
                            </h1>
                            <h3 className="tempmin_max"> Min : {city.temp_min}&deg;C | Max : {city.temp_max}&deg;C</h3>
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                        </div>

                    </div>
                )}

           </div>
        </>
    )
}

export default Tempapp;