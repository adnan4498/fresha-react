import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Container from "./container/Container";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import DynamicCategory from "./pages/categories/DynamicCategory";
import ErrorPage from "./components/Error/ErrorPage";
import Header from "./shared/Header";
import Message from "./components/Message";
import Salon from "./pages/categories/Salon";
import CitySalons from "./pages/categories/CitySalons";
import ActualSalon from "./pages/categories/ActualSalon";
import SubCategorySalons from "./pages/categories/SubCategorySalons";
import TheComp from "./pages/categories/TheComp";
import CitySalons2 from "./pages/categories/CitySalons2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dynamic-category/:category",
        element: <DynamicCategory />,
        errorElement: <ErrorPage />,
        // children: []
      },
      // {
      //     path: "/dynamic-category/:category/good",
      //     element: <TheComp  key="good" productType={"good"}/>,
      //     errorElement: <ErrorPage />,
      //     // children: []
      // },
      // {
      //     path: "/dynamic-category/:category/bad",
      //     element: <TheComp  key="bad" productType={"bad"}/>,
      //     errorElement: <ErrorPage />,
      //     // children: []
      // },
      {
        // currently, city route only comes from clicking city on breadcrumb
        path: "/dynamic-category/:category/cityRouteKey/:city",
        element: <CitySalons key={"cityRouteKey"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dynamic-category/:category/subCategoryRouteKey/:subCategory",
        element: <CitySalons key={"subCategoryRouteKey"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dynamic-category/:category/:city/:name",
        element: <ActualSalon />,
        errorElement: <ErrorPage />,
      },
    ],
  },

  // {
  //     path: "/dynamic-category/:category/:salonSlug",
  //     element: <Salon />,
  //     errorElement: <ErrorPage />,
  // }

  //   {
  //     path : "/message",
  //     element : <Message />,
  //     crumb : () =><div className="bg-red-500"> <Link to="/">To Home</Link> </div>
  //   }
]);

// now Link={"/"} on navbar logo will work
function NavbarWrapper() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Container>
    <RouterProvider router={router} />
  </Container>
);
