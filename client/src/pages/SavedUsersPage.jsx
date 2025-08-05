import { useEffect } from "react";
import { actions } from "../redux/actions";
import UserCard from "../components/Card/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container, Typography } from "@mui/material";

const SavedUsersPage = () => {
    const dispatch = useDispatch();
    const { usersFromDB } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(actions.users.loadUsersFromDB());
    }, [dispatch]);
    return (
        <Container maxWidth="xl" sx={{ py: 3 }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {!Array.isArray(usersFromDB) || usersFromDB.length === 0 ? (
                    <Typography variant="h6" textAlign="center" sx={{ width: "100%" }}>
                        No saved users
                    </Typography>
                ) : (
                    usersFromDB.map((user) => (
                        <Grid key={user.login.uuid} item xs={12} sm={6} md={4} lg={3}>
                            <UserCard user={user} isSavedPage={true} />
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
};

export default SavedUsersPage;
