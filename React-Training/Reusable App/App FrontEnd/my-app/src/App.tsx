import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/BrowserRouter";
import HeaderComponent from "./pages/Settings/Header/header";
import SidebarComponent from "./pages/Settings/Sidebar/sidebar";

function App() {
  // return <RouterProvider router={router}></RouterProvider>;
  return <>
    <HeaderComponent></HeaderComponent>
    <SidebarComponent></SidebarComponent>
  </>;
}

export default App;
