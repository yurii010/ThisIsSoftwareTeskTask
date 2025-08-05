import { useEffect } from "react";
import { actions } from "../redux/actions";
import UserCard from "../components/Card/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container, Button, Box } from "@mui/material";

const MainPage = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);

    useEffect(() => {
        if (users.length === 0) {
            dispatch(actions.users.loadUsers(10));
        }
    }, [dispatch, users.length]);

    return (
        <Container maxWidth="xl" sx={{ py: 3 }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {users.map((user) => (
                    <Grid key={user.login.uuid} item xs={12} sm={6} md={4} lg={3}>
                        <UserCard user={user} />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button variant="contained" onClick={() => dispatch(actions.users.loadUsers(10))}>
                    Load More
                </Button>
            </Box>
        </Container>
    );
};

export default MainPage;
