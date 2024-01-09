import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

const AdminSideMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu
      onClick={(item) => {
        navigate(item.key);
      }}
      className="h-screen shadow-md py-10"
      items={[
        {
          label: "Admin Detail",
          key: "/admin",
          icon: <BiDetail />,
        },
        {
          label: "Blog Details",
          key: "/admin/blogs",
          icon: <BiDetail />,
        },
        {
          label: "Food Detail",
          key: "/admin/foods",
          icon: <BiDetail />,
        },
        {
          label: "Special Foods",
          key: "/admin/specialfood",
          icon: <BiDetail />,
        },
        {
          label: "Chef Details",
          key: "/admin/chef",
          icon: <BiDetail />,
        },
        {
          label: "Terms & Conditions",
          key: "/admin/term_condition",
          icon: <BiDetail />,
        },
        {
          label: "Add Blog ",
          key: "/admin/addblog",
          icon: <BiDetail />,
        },
        {
          label: "Add Chef ",
          key: "/admin/addChef",
          icon: <BiDetail />,
        },
        {
          label: "Add Food ",
          key: "/admin/addfood",
          icon: <BiDetail />,
        },
        {
          label: "Add Special Food",
          key: "/admin/addspecialfood",
          icon: <BiDetail />,
        },
        {
          label: "Add Term & condtion",
          key: "/admin/add_term_condition",
          icon: <BiDetail />,
        },
      ]}
    ></Menu>
  );
};

export default AdminSideMenu;
