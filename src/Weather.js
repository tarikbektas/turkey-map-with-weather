import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";

const Weather = ({ cityName }) => {
  const [havaDurumu, setHavaDurumu] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${"41b807fd2e8040029ae123016242303"}&q=${cityName}`
      )
      .then((response) => {
        const weatherData = response.data;
        console.log(response.data)
        const newData = {
          hava_durumu: weatherData.current.condition.text,
          sıcaklık: weatherData.current.temp_c,
          hissedilen_sıcaklık: weatherData.current.feelslike_c,
          new_oranı: weatherData.current.humidity,
          hava_basıncı: weatherData.current.pressure_mb,
        };
        setHavaDurumu(newData);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, [cityName]);
  console.log('hava durumu :' ,havaDurumu)
  return <div className="weather-info-area-main">
    <h1 style={{ margin:'auto' }}>Hava Durum Bilgisi</h1>
    <h2 style={{ margin:'auto' }}>{cityName}</h2>
    <div> <strong>Hava Durumu </strong>: {havaDurumu.hava_durumu}</div>
    <div> <strong>Sıcaklık</strong> : {havaDurumu.sıcaklık } C'</div>
    <div> <strong>Hissedilen Sıcaklık</strong> : {havaDurumu.hissedilen_sıcaklık } C'</div>
    <div> <strong> Nem Oranı</strong> : {havaDurumu.new_oranı } %</div>
    <div> <strong> Hava Basıncı</strong> : {havaDurumu.hava_basıncı } %</div>
         
  </div>;
};

export default Weather;
