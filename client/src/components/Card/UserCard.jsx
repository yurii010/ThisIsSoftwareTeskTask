import { useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../../api";
import { actions } from "../../redux/actions";
import WeatherModal from "../WeatherModal/WeatherModal";
import { Card, Typography, Avatar, Button, Stack, CardContent, Divider } from "@mui/material";

const UserCard = ({ user, isSavedPage = false }) => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState(false);

    const handleAddUser = async () => {
        await dispatch(actions.users.addUser(user));
    };

    const handleDeleteUser = async () => {
        await dispatch(actions.users.deleteUser(user.login.uuid));
    };

    const handleOpenModal = async () => {
        const result = await api.weatherApi.loadWeatherByUser(user);
        setWeatherInfo(result);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Card
                sx={{
                    width: 250,
                    height: 375,
                    m: 2,
                    p: 3,
                    textAlign: "center",
                    border: "1px solid #232323",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Avatar
                    alt={`${user.name.first} ${user.name.last}`}
                    src={user.picture.large}
                    sx={{ width: 96, height: 96, mx: "auto", mb: 2 }}
                />
                <Typography variant="h5" noWrap>
                    {user.name.title} {user.name.first} {user.name.last}
                </Typography>
                <Typography color="text.secondary" noWrap>
                    {user.email}
                </Typography>
                <Typography color="text.secondary">{user.gender}</Typography>
                <Divider sx={{ my: 2 }} />
                <CardContent sx={{ p: 0, mb: 2 }}>
                    <Typography>Location:</Typography>
                    <Typography color="text.secondary" noWrap>
                        {user.location.city}, {user.location.country}
                    </Typography>
                </CardContent>
                <Stack spacing={1}>
                    <Button onClick={handleOpenModal} variant="outlined" sx={{ color: "#232323", borderColor: "#232323" }}>
                        Weather
                    </Button>
                    {!isSavedPage && (
                        <Button onClick={handleAddUser} variant="contained" sx={{ backgroundColor: "#232323" }}>
                            Save
                        </Button>
                    )}
                    {isSavedPage && (
                        <Button onClick={handleDeleteUser} variant="contained" sx={{ backgroundColor: "#232323" }}>
                            Delete
                        </Button>
                    )}
                </Stack>
            </Card>
            <WeatherModal open={modalOpen} onClose={handleCloseModal} weatherInfo={weatherInfo} />
        </>
    );
};

export default UserCard;
