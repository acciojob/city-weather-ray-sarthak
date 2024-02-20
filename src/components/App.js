
import React, {useEffect, useState}from "react";
import './../styles/App.css';
import WeatherData from "./WeatherData";

const App = () => {

  let [location,setLocation] =useState(""); 
  let [data,setData]=useState(null);



  function handleSubmit(e){
   

    e.preventDefault();
    const API_KEY="1e618748a0cf1d21311cfde6a1c33507";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(jsonData => {
      setData(jsonData);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
   

  

  };

  return (
    <div>
        {/* Do not remove the main div */}

       {!data&&<form onSubmit={handleSubmit}>

          <input type="text" placeholder='Enter City' value={location} className='search' onChange={(e)=>setLocation(e.target.value)}></input>
          <button type='submit'>Submit</button>
        </form>
      } 
              {data&&<WeatherData data={data}/>}

  
   
        </div>
      )}

 
 
export default App
