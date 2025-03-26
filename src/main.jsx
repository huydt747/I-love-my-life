import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TrangChu from "./pages/TrangChu.jsx";
import TinTuc from "./pages/TinTuc.jsx";
import GioiThieu from "./pages/GioiThieu.jsx";
import CuaHang from "./pages/CuaHang.jsx";
import LienHe from "./pages/LienHe.jsx";
import ChitietTinTuc from "./pages/ChitietTinTuc.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Lỗi 404</div>,
    children: [
      {
        path:"/",
        element: <TrangChu/>,
      },
      {
        path:"/tin-tuc",
        element: <TinTuc/>,
      },
      {
        path:"/gioi-thieu",
        element: <GioiThieu/>,
      },
      {
        path:"/cua-hang",
        element: <CuaHang/>,
      },
      {
        path:"/lien-he",
        element: <LienHe/>,
      },
      {
        path:"/chi-tiet-tin-tuc",
        element: <ChitietTinTuc/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
