import React, { useState, useEffect } from "react";
import axios from "axios";
import BG from "../../assets/bg.jpg";
import {
  ButtonSurprise,
  MainContainer,
  ImgWrapper,
  GlobalStyle,
} from "./style";

export default function WeatherTemp() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );
    setWeather(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location === false) {
    return <h1>Você precisa habilitar a configuração do browser.</h1>;
  } else if (weather === false) {
    return <h1>Carregando o clima..</h1>;
  } else {
    return (
      <>
        <GlobalStyle />

        <MainContainer url={BG}>
          <h3>
            Clima e suas coordenadas ({weather["weather"][0]["description"]})
          </h3>
          <hr />

          <ul>
            <li>Temperatura atual: {weather["main"]["temp"]}º</li>
            <li>Temperatura máxima: {weather["main"]["temp_max"]}º</li>
            <li>Temperatura minima: {weather["main"]["temp_min"]}º</li>
            <li>Pressão: {weather["main"]["pressure"]} hpa</li>
            <li>Umidade: {weather["main"]["humidity"]}%</li>
          </ul>
          <ButtonSurprise onClick={() => alert("Você deseja namorar comigo?")}>
            Surpresa para Maria
          </ButtonSurprise>
        </MainContainer>
      </>
    );
  }
}
