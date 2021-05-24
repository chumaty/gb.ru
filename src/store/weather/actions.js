import { WEATHER_API } from "../../helpers/Constants";

//constants
export const WEATHER_REQUEST = "WEATHER::REQUEST";
export const WEATHER_SUCCESS = "WEATHER::SUCCESS";
export const WEATHER_FAILURE = "WEATHER::FAILURE";

//actions
export const weatherRequest = () => ({
    type: WEATHER_REQUEST,
});

export const weatherSuccess = (weather) => ({
    type: WEATHER_SUCCESS,
    weather,
});

export const weatherFailure = (error) => ({
    type: WEATHER_FAILURE,
    error,
});


export const getWeather = () => async (dispath) => {
    dispath(weatherRequest());

    try {
        const response = await fetch(WEATHER_API);

        if (!response.ok) {
            throw new Error("Bad response with status " + response.status);
        }

        const data = await response.json();

        dispath(weatherSuccess(data));
    } catch (error) {
        dispath(weatherFailure(error.message));
    }
};