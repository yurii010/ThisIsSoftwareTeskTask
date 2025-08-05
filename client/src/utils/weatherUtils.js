export const weatherPrepareData = (data, user) => {
    const latitude = data.latitude();
    const longitude = data.longitude();
    const hourly = data.hourly();
    const interval = hourly.interval();
    const start = Number(hourly.time());
    const end = Number(hourly.timeEnd());
    const count = Math.floor((end - start) / interval);
    const time = Array.from({ length: count }, (_, i) => (start + i * interval) * 1000);
    const temperature_2m = Array.from(hourly.variables(0).valuesArray());
    const currentTemperature = temperature_2m[0];
    const minTemperature = Math.min(...temperature_2m);
    const maxTemperature = Math.max(...temperature_2m);

    const weatherCodeArray = Array.from(hourly.variables(1).valuesArray());
    const firstWeatherCode = weatherCodeArray[0];

    return {
        location: {
            city: user.location.city,
            country: user.location.country,
            latitude,
            longitude,
        },
        date: time[0],
        currentTemperature,
        minTemperature,
        maxTemperature,
        weatherIcon: firstWeatherCode,
    };
};
