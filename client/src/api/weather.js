import { utils } from "../utils";
import { fetchWeatherApi } from "openmeteo";

export const loadWeather = async (params) => {
    try {
        const url = "https://api.open-meteo.com/v1/forecast";
        const response = await fetchWeatherApi(url, params);
        return response[0];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const loadWeatherByUser = async (user) => {
    try {
        const query = {
            latitude: user.location.coordinates.latitude,
            longitude: user.location.coordinates.longitude,
            hourly: ["temperature_2m", "weather_code"],
            timezone: "auto",
        };

        const responses = await loadWeather(query);
        const data = utils.weatherUtils.weatherPrepareData(responses, user);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
