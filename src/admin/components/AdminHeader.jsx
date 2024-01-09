
import { MenuDashboard } from "components";

const AdminHeader = () => {
  return (
    <div className="h-[5rem] flex justify-between items-center px-10 admin-header">
      <img
        src="https://cdn.discordapp.com/attachments/1123144974683361401/1123145321929768970/My_project.png"
        width={50}
        height={60}
        alt="sasurali"
      />
      <div className="flex gap-5 items-center">
        <MenuDashboard />
      </div>
    </div>
  );
};

export default AdminHeader;
