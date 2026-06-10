import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Search from './components/Search'
import React, { useEffect, useState } from 'react'
import { FaThermometerHalf, FaTint, FaCloud, FaWind, FaCompass, FaTachometerAlt, FaEye, FaSun, FaCloudRain, FaSnowflake, FaTemperatureHigh, FaCloudSun, FaMoon } from "react-icons/fa";

const App = () => {
  const apiUrl = import.meta.env.VITE_API;

  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null); // <-- use state for weather

  const fetchWeather = async () => {
    try {
      let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiUrl}&q=${value}&aqi=no`);

      let data = await res.json();
      setWeather(data.current);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (search) {
      fetchWeather();
    }
  }, [search])

  return (
    <div className='bg-gradient-to-br from-blue-200 to-blue-300 w-screen h-screen'>
      <Navbar />
      <Search value={value} setValue={setValue} search={search} setSearch={setSearch} />

      <h1 className='text-xl font-bold m-5'><span className='text-orange-500'>Weather for :</span> {search}</h1>
      <main className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-blue-200 to-blue-300">
        <Card heading="Current Temp" value={weather ? `${weather.temp_c} °C` : "N/A"} icon={<FaThermometerHalf />} />
        <Card heading="Humidity" value={weather ? `${weather.humidity}%` : "N/A"} icon={<FaTint />} />
        <Card heading="Feels Like" value={weather ? `${weather.feelslike_c} °C` : "N/A"} icon={<FaTemperatureHigh />} />
        <Card heading="Wind Speed" value={weather ? `${weather.wind_kph} kph` : "N/A"} icon={<FaWind />} />
        <Card heading="Wind Direction" value={weather ? weather.wind_dir : "N/A"} icon={<FaCompass />} />
        <Card heading="Pressure" value={weather ? `${weather.pressure_mb} mb` : "N/A"} icon={<FaTachometerAlt />} />
        <Card heading="Visibility" value={weather ? `${weather.vis_km} km` : "N/A"} icon={<FaEye />} />
        <Card heading="Cloud Cover" value={weather ? `${weather.cloud}%` : "N/A"} icon={<FaCloudSun />} />
        <Card heading="UV Index" value={weather ? weather.uv : "N/A"} icon={<FaSun />} />
        <Card heading="Condition" value={weather ? weather.condition.text : "N/A"} icon={<FaCloud />} />
        <Card
          heading="Time of Day"
          value={weather ? (weather.is_day ? "Day" : "Night") : "N/A"}
          icon={weather ? (weather.is_day ? <FaSun /> : <FaMoon />) : null}
        />
        <Card
          heading="Chance of Rain"
          value={weather ? `${weather.chance_of_rain} %` : "N/A"}
          icon={<FaCloudRain />}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App