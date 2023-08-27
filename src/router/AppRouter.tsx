import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CharacterDetail } from "../components/homeComponents/characterDetail/CharacterDetail";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characterDetail/:idCharacter" element={<CharacterDetail />} />
        </Routes>
    );
};
