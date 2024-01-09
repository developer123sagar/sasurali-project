import React from "react";
import { Space } from "antd";
import { AdminFooter, AdminHeader, AdminPages, AdminSideMenu } from "./components";

const AdminPanel = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <AdminHeader />
      <Space className="flex flex-1 justify-start items-start z-10">
        <AdminSideMenu />
        <AdminPages />
      </Space>
      {/* <AdminFooter /> */}
    </div>
  );
};

export default AdminPanel;
