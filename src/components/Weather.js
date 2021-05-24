//system
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//custom
import { WEATHER_REQUEST_STATUS, WEATHER_API } from "../helpers/Constants";
import { getWeather } from "../store/weather/actions";

export const Weather = () => {
    const weather = useSelector((state) => state.weather.weather);
    const weatherStatus = useSelector((state) => state.weather.request.status);
    const weatherError = useSelector((state) => state.weather.request.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather());
    }, []);

    if (weatherStatus === WEATHER_REQUEST_STATUS.PENDING) {
        return <div> ... </div>;
    }

    if (weatherError) {
        return <div>Error: {weatherError}</div>;
    }

    return (
        <h3>
            Weather in {weather.name} - Hum: {weather.main.humidity}% Temp: {weather.main.temp}&deg;С
        </h3>
    )
}