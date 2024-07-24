import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import CartPage from "./Pages/CartPage/CartPage";
import Header from "./Components/Header/Header";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <><Header /><CartPage/></>
    },
    {
        path: "/Cart",
        element: <CartPage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
    // {
    // element: <AdminRoutes /> ,
    //     children: [{
    //         path: "/admin",
    //         element: <Admin /> ,
    //         children: [{
    //                 path: "/admin/viewPatients",
    //                 element: <ViewPatients /> ,
    //             },
    //             {
    //                 path: "/admin/viewDoctors",
    //                 element: <ViewDoctors /> ,
    //             }
    //         ]
    //         }
    //     ]
    // },
    // {
    //     element: <DoctorRoutes /> ,
    //     children: [{
    //         path: "/doctor",
    //         element: <Doctor /> ,
    //         children: [{
    //                 path: "/doctor/viewDoctorAppointments",
    //                 element: <ViewDoctorAppointments />
    //             }
    //         ],
    //         }
    //     ],
    // },
    // {
    //     path: "/patient",
    //     element: <Patient /> ,
    //     children: [
    //         {
    //             path: "/patient/homepage",
    //             element: < HomePage />
    //         },
    //         {
    //             path: "/patient/services",
    //             element: < Services /> ,
    //         },{
    //             path: "/patient/details",
    //             element: < ViewDetails /> ,
    //         }, {
    //             path: "/patient/ExperienceDoctors",
    //             element: < ExperienceDoctors /> ,
    //         },
    //         {
    //             path: "/patient/guarantee",
    //             element: < Guarantee /> ,
    //         },
    //         {
    //             path: "/patient/uploadXRay",
    //             element: < DragDrop /> ,
    //         },
    //         {
    //             element: < PatientRoutes /> ,
    //             children: [
    //                 {
    //                     path: "/patient/bigForm",
    //                     element: < BigForm /> ,
    //                 },
    //                 {
    //                     path: "/patient/doctors-preview",
    //                     element: < DoctorsPreview />
    //                 },
    //             ]
    //         }
    //     ],
    // },
    // {
    //     path: "/login",
    //     element: < LoginForm /> ,
    // },
    // {
    //     path: "/resetpassword",
    //     element: < ResetPassword /> ,
    // },
    // {
    //     path: "/register",
    //     element: < Register /> ,
    // },
    // {
    //     element: <PatientRoutes />,
    //     children: [
    //         {
    //             path: "/patientprofile",
    //             element: <PatientProfile/> ,
    //         }
    //     ]
    // },

]);