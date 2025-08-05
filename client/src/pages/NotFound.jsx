import { Container, Typography } from "@mui/material";

const NotFound = () => {
    return (
        <Container maxWidth="xl" sx={{ py: 3 }}>
            <Typography variant="h6" textAlign="center" sx={{ width: "100%" }}>
                Not found
            </Typography>
        </Container>
    );
};

export default NotFound;
