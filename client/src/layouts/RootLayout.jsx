import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CircularProgress from "@mui/material/CircularProgress";

const RootLayout = () => {
    const { isLoading } = useSelector((state) => state.app);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <Box sx={{ flexGrow: 1 }}>
                {isLoading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Outlet />
                )}
            </Box>
            <Footer />
        </Box>
    );
};

export default RootLayout;
