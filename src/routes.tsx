import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Demo from "@/pages/Demo.tsx";
import Auth from "@/pages/Auth.tsx";
import Layout from './components/common/Layout';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="...Loading">
                <Routes>
                    <Route path="/" element={<Auth />}/>
                    <Route element={<Layout />} >
                        <Route path="/dashboard" element={<Demo />}/>
                        {/* <Route path="/user" element={<User />}/> */}
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes;
