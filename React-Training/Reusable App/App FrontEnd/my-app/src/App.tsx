import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/BrowserRouter";
import HeaderComponent from "./components/Settings/Header/header";
import SidebarComponent from "./components/Settings/Sidebar/sidebar";

function App() {
  // return <RouterProvider router={router}></RouterProvider>;
  return <>
    <HeaderComponent></HeaderComponent>
    <SidebarComponent></SidebarComponent>
  </>;
}

export default App;
