import React, { useState } from "react"
import "../components/UI.css"
import { WiDirectionUp } from "react-icons/wi"
import { BsDropletHalf } from "react-icons/bs"
import { GiCrossedAirFlows } from "react-icons/gi"
import { WiHumidity } from "react-icons/wi"
import { BsCloudHaze2 } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"
import axios from "axios"




const WeatherPage = () =>{
    let datas = {"coord":{"lon":77.2167,"lat":28.6667},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":298.2,"feels_like":297.75,"temp_min":298.2,"temp_max":298.2,"pressure":1010,"humidity":38},"visibility":4000,"wind":{"speed":2.06,"deg":320},"clouds":{"all":30},"dt":1679841300,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1679791725,"sunset":1679835904},"timezone":19800,"id":1273294,"name":"Delhi","cod":200}

    const [search, setSearch] = useState("")
    const [data, setData] = useState({})

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9d46b3aeb1cffc8ce364d1e9660507fb`).then((res)=>{
            setData(res.data)
          }).catch((e)=>{
            console.log(e)
          })
            
        }
    }

    return(
        <>

        <div className="main">

        <div className="search">
            <div className="searchin">
                <AiOutlineSearch style={{color:"white", fontSize:"20px",marginTop:"5px"}}/>
            <input className="weather" type="search" name="weather" id="weather" placeholder="Search City..." onChange={(e)=>{
                setSearch(e.target.value)
            }} onKeyDown={handleKeyDown} />
            </div>
        </div>

        <div className="body">
            <div className="content">
               <div className="cont">
                <BsCloudHaze2 style={{
                    color:"white",
                    fontSize:"60px"
                }} />
               </div>
               <div className="cont wh f-20">
                Fog
               </div>
               <div className="wh ">
                {data?.name}
               </div>
               <div className="cont wh f-20 mt20">
                {data?.main?.temp}
                &deg;F
               </div>
            </div>
            <div className="content"></div>
            <div className="content">
                <div className="property">
                    <BsDropletHalf className="icon"/>
                    Humidity
                </div>
                <div className="value">
                {data?.main?.humidity}
                </div>
                <div className="property">
                    <GiCrossedAirFlows className="icon"/>
                    Wind 

                </div>
                <div className="value">
                {data?.wind?.speed} km/h
                </div>
            </div>

        </div>    
        </div>


        </>
    )
}

export default WeatherPage







