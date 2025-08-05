import { style } from "./style";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { constants } from "../../constants";
import Typography from "@mui/material/Typography";

const WeatherModal = ({ open, onClose, weatherInfo }) => {
    const hasData = !!weatherInfo?.date;
    const { city, country } = weatherInfo?.location || {};
    const icon = constants.weather.weatherIcons[weatherInfo?.weatherIcon];

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="weather-modal-title">
            <Box sx={style}>
                <Box sx={{ flex: 1, textAlign: "center" }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "3rem", sm: "5rem" },
                            lineHeight: 1,
                        }}
                    >
                        {icon}
                    </Typography>
                </Box>

                <Box sx={{ flex: 2 }}>
                    <Typography id="weather-modal-title" variant="h6" mb={1}>
                        Weather {hasData ? `in ${city}, ${country}` : "Information"}
                    </Typography>

                    {hasData ? (
                        <>
                            <Typography sx={{ mt: 1 }}>📅 {new Date(weatherInfo.date).toLocaleString()}</Typography>
                            <Typography>🌡 Current: {weatherInfo.currentTemperature.toFixed(1)}°C</Typography>
                            <Typography>🔻 Min: {weatherInfo.minTemperature.toFixed(1)}°C</Typography>
                            <Typography>🔺 Max: {weatherInfo.maxTemperature.toFixed(1)}°C</Typography>
                        </>
                    ) : (
                        <Typography>No weather data available.</Typography>
                    )}
                </Box>
            </Box>
        </Modal>
    );
};

export default WeatherModal;
