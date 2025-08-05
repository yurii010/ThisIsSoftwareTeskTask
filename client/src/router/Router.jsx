import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts";
import { MainPage, SavedUsersPage, NotFound } from "../pages";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: "saved", element: <SavedUsersPage /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default Router;
