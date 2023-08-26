import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../screens/HomeScreen";

export const AppRouter = () => {
    return (
        <>
            {/* <NavBar /> */}
            <Routes>
                <Route
                    path="/*"
                    element={
                        <Routes>
                            <Route path="/" element={<Navigate to={"/home"} />} />
                            <Route path="/home" element={<Home />} />
                            {/* <Route path="/hotel/:idServiceCenter" element={<Hotels />} /> */}
                            <Route path="/*" element={<Navigate to={"/home"} />} />
                        </Routes>
                    }
                />
            </Routes >
        </>
    );
};
