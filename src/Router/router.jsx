import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root.jsx";
import Home from "../components/Home/Home.jsx";
import AddPlant from "../components/Pages/AddPlant.jsx";
import MyPlants from "../components/Pages/MyPlants.jsx";
import Login from "../components/Authentication/Login.jsx";
import Register from "../components/Authentication/Register.jsx";
import AllPlants from "../components/Pages/AllPlants.jsx";
import PrivateRouter from "./PrivateRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "addPlant",
        element: (
          <PrivateRouter>
            <AddPlant></AddPlant>
          </PrivateRouter>
        ),
      },
      { path: "allPlants", Component: AllPlants },
      {
        path: "myPlants",
        element: (
          <PrivateRouter>
            <MyPlants></MyPlants>
          </PrivateRouter>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      { path: "register", Component: Register },
    ],
  },
]);

export default router;
