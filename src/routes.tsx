import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Demo from "@/pages/Demo.tsx";
import Auth from "@/pages/Auth.tsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="...Loading">
                <Routes>
                    <Route path="/" element={<Demo />}/>
                    <Route path="/auth" element={<Auth />}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes;
