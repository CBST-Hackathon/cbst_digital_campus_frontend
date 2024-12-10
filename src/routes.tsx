import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
// import Demo from "@/pages/Demo.tsx";
import Auth from "@/pages/Auth.tsx";
import Layout from './components/layout/Layout';

import Faculty from './pages/dashboard/admin/faculty';
import Students from './pages/dashboard/admin/User';
import UserUpdate from './components/dashboard/admin/UserUpdateForm';
import PrivateRoute from './components/common/PrivateRoute';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="...Loading">
                <Routes>
                    <Route path="/" element={<Auth />}/>
                    <Route path="dashboard/*" element={<PrivateRoute />}>
                    <Route path="*" element={<Layout />}>
                        {/* <Route path="/" element={<Demo />}/> */}
                        <Route path="students" element={<Students />}/>
                        <Route path="faculty" element={<Faculty />}/>
                        <Route path="userupdate" element={<UserUpdate />}/>
                    </Route>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes;
