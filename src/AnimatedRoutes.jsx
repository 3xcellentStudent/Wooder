import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DsScrollPage from "./pages/DesignPage/DsScrollPage";
import FurniturePage from "./pages/FurniturePage/FurniturePage";
import ClientFormF from "./CLientForm/ClientFormF";

import FBathroom from "./pages/subPages/FurnitureSub/components/FBathroom";
import FBedroom from "./pages/subPages/FurnitureSub/components/FBedroom";
import FHall from "./pages/subPages/FurnitureSub/components/FHall";
import FKitchen from "./pages/subPages/FurnitureSub/components/FKitchen";

import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes(){

   const location = useLocation()

   return(
      <AnimatePresence>
         <Routes location={location} key={location.pathname} >
            <Route path="/" element={<HomePage/>} />
            <Route path="/client" element={<ClientFormF/>} />
            <Route path="/design" element={<DsScrollPage/>} />
            <Route path="/furniture" element={<FurniturePage/>} />
            <Route path="/furniture-bathroom" element={<FBathroom/>} />
            <Route path="/furniture-bedroom" element={<FBedroom/>} />
            <Route path="/furniture-hall" element={<FHall/>} />
            <Route path="/furniture-kitchen" element={<FKitchen/>} />
         </Routes>
      </AnimatePresence>
   )
}