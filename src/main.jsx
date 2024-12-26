import React, { useEffect, useState} from "react";
import * as ReactDOM from "react-dom/client";
import Container from "./container/Container";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import DynamicCategory from "./pages/categories/DynamicCategory";
import ErrorPage from "./components/Error/ErrorPage";
import Header from "./shared/Header";
import CitySalons from "./pages/categories/CitySalons";
import ActualSalon from "./pages/categories/ActualSalon";
import BookingServices from "./pages/bookings/BookingServices";
import SelectProfessional from "./pages/bookings/SelectProfessional";
import GroupOrPersonalAppointment from "./pages/bookings/GroupOrPersonalAppointment";
import ProfessionalPerService from "./pages/bookings/ProfessionalPerService";
import ProfessionalWithService from "./pages/bookings/ProfessionalWithService";


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
      {
        // currently, city route only comes from clicking city on breadcrumb
        path: "/dynamic-category/:category/categoryRouteKey/:city",
        element: <CitySalons key={"categoryRouteKey"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dynamic-category/:category/subCategoryRouteKey/:subCategory",
        element: <CitySalons key={"subCategoryRouteKey"} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dynamic-category/:category/:city/:name",
        element:
        <ActualSalon /> ,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dynamic-category/:category/:city/:name/bookingService",
    element: <BookingServices />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dynamic-category/:category/:city/:name/groupOrPersonal",
    element: <GroupOrPersonalAppointment />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dynamic-category/:category/:city/:name/bookingService/selectProfessional",
    element: <SelectProfessional />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dynamic-category/:category/:city/:name/bookingService/selectProfessional/professionalPerService",
    element: <ProfessionalPerService />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/dynamic-category/:category/:city/:name/bookingService/professionalWithService",
    element: <ProfessionalWithService />,
    errorElement: <ErrorPage />,
  },
]);

// now Link={"/"} on navbar logo will work
function NavbarWrapper() {

  // const location = useLocation();

  // useEffect(() => {
  //   console.log("Route changed:", location.pathname);
  // }, [location.pathname]);

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
