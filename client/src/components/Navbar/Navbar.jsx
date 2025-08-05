import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from "@mui/material";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuMobile, setMenuMobile] = useState(null);

    const handleMenuOpen = (event) => setMenuMobile(event.currentTarget);
    const handleMenuClose = () => setMenuMobile(null);

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#232323" }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        flexGrow: 1,
                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                    }}
                >
                    This is Software - Test task
                </Typography>

                <Button
                    onClick={() => navigate("/")}
                    color="inherit"
                    sx={{ display: { xs: "none", sm: "block" }, fontSize: "1rem" }}
                >
                    Users
                </Button>
                <Button
                    onClick={() => navigate("/saved")}
                    color="inherit"
                    sx={{ display: { xs: "none", sm: "block" }, fontSize: "1rem" }}
                >
                    Saved
                </Button>

                <Menu anchorEl={menuMobile} open={Boolean(menuMobile)} onClose={handleMenuClose}>
                    <MenuItem
                        onClick={() => {
                            handleMenuClose();
                            navigate("/");
                        }}
                    >
                        Users
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleMenuClose();
                            navigate("/saved");
                        }}
                    >
                        Saved
                    </MenuItem>
                </Menu>
                <IconButton size="large" edge="start" color="inherit" onClick={handleMenuOpen} sx={{ display: { sm: "none" } }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
