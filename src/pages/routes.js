import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./home";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);
