import { AddBlog, AddChefDetail, AddFood, AddSpecialItem, AddTermCondition, AdminDetail, BlogDetail, ChefDetail, Foods, SpecialItem, TermConditionDet } from "admin/pages";
import { Route, Routes } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminDetail />} />
        <Route path="/admin/addfood" element={<AddFood />} />
        <Route path="/admin/foods" element={<Foods />} />
        <Route path="/admin/addspecialfood" element={<AddSpecialItem />} />
        <Route path="/admin/specialfood" element={<SpecialItem />} />
        <Route path="/admin/chef" element={<ChefDetail />} />
        <Route path="/admin/addChef" element={<AddChefDetail />} />
        <Route path="/admin/addblog" element={<AddBlog />} />
        <Route path="/admin/blogs" element={<BlogDetail />} />
        <Route path="/admin/add_term_condition" element={<AddTermCondition />} />
        <Route path="/admin/term_condition" element={<TermConditionDet />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
