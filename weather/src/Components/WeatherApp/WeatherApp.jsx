import React, { useState } from 'react'
import "./weatherApp.css"
import search_icon from "../Assets/search 1-icon.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind-png-8.png"
import humidity_icon from "../Assets/humidity.png"
import rainy_icon from "../Assets/rainy.png"
 const WeatherApp = () => {

    let api_key= "3d93e9404600caae540e70a47a485e9d"

    const [wicon,setWicon]=useState(cloud_icon)

    const search =async()=>{
        const element=document.getElementsByClassName("cityinput")
        if(element [0].value==="")
        {
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element [0].value}&appid=${api_key}`;

        let response = await fetch(url);
        let data =await response.json()

        const humidity=document.getElementsByClassName("humidity_percent")
        const wind = document.getElementsByClassName("wind_rate")
        const temprature= document.getElementsByClassName("weather_temp")
        const location = document.getElementsByClassName("weather_location")

        humidity[0].innerHTML =data.main.humidity+" %";
        wind[0].innerHTML=Math.floor(data.wind.speed) +" km/h";
        temprature[0].innerHTML=Math.floor(data.main.temp)+" °C";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(clear_icon)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rainy_icon)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(rainy_icon)
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow_icon)
        }
        else{
            setWicon(clear_icon)
        }
    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityinput' placeholder='search'/>
            <div className='search_icon' onClick={()=>{search()}}>
                <img src={search_icon} alt="" style={{height:"100px"}}/>
            </div>
        </div>
            <div className='weather_image'>
                <img src={wicon} alt="" style={{height:"200px"}}/>
             </div>
             <div className='weather_temp'>24°C</div>
             <div className='weather_location'>London</div>
             <div className='data_container'>
                <div className='element'>
                    <img src={humidity_icon} alt="" className='icon' style={{height:"50px"}}/>
                    <div className='data'>
                        <div className='humidity_percent'>64%</div>
                        <div className='text'>Humidity</div>

                    </div>

                </div>
                <div className='element'>
                    <img src={wind_icon} alt="" className='icon' style={{height:"50px", color:"white"}}/>
                    <div className='data'>
                        <div className='wind_rate'>18 km/h</div>
                        <div className='text'>Wind Speed</div>

                    </div>

                </div>

             </div>

        </div>
        
  )
}
export default WeatherApp
