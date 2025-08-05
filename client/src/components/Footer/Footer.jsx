import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "#232323", py: 3 }}>
            <Container maxWidth="lg">
                <Typography variant="subtitle1" align="center" color="white">
                    Made by Yurii Nyshchota
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
