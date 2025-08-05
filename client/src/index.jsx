import "./css/index.css";
import store from "./redux/store";
import { Router } from "./router";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: '"Roboto Mono", monospace',
    },
});

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={Router} />
        </ThemeProvider>
    </Provider>
);
