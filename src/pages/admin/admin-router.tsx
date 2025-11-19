import AdminDashboard from "./DashboardPage";
import AdminLayout from "../layouts/AdminLayout";

export const AdminRouter = [

    { path: "/admin", element: <AdminLayout />, children: [
    {index: true, element: <AdminDashboard />}  

    ]},
];