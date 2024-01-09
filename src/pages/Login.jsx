import {  useNavigate } from "react-router-dom";
import { CarouselUI } from "components";
import { ToastContainer } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import { ToastMsg } from "Toast/Toast";
import { login1, login2, login3, login4 } from "image";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { UserAuth } from "App";
import { getDocs, query, where } from "firebase/firestore";
import { admin } from "../firebase";

const slideImages = [login1, login2, login3, login4];

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setIsLogin } = UserAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //navigating to home page
  const navigate = useNavigate();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await getDocs(admin);
      const value = data.docs.map((doc) => doc.data());
      const match = value.filter((item) => {
        return item.email === form.email;
      });
      if (match.length > 0) {
        const quer = query(admin, where("email", "==", form.email));
        const querySnapshot = await getDocs(quer);
        querySnapshot.forEach((doc) => {
          const _data = doc.data();
          const isUser = form.password === _data.password;
          if (isUser) {
            setIsLogin(true);
            ToastMsg("Log in successfully !", "succcess");
            localStorage.setItem("isAdmin", "true");
            navigate("/admin");
          } else {
            ToastMsg("password did not match", "error");
          }
        });
      } else {
        ToastMsg("Invalid credential", "error");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full lg:w-[95%] mx-auto h-screen mt-[14rem]">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-5 h-[500px] shadow-lg shadow-gray-600">
          <div className="w-full h-[500px] hidden md:block">
            <CarouselUI
              slideImages={slideImages}
              width="640"
              height="500"
              indicator={false}
              status={false}
              arrows={false}
            />
          </div>
          <div className="flex flex-col gap-4 px-5 lg:px-0">
            <form onSubmit={loginSubmitHandler}>
              <h2 className="text-4xl font-primary font-bold w-fit my-6 text-black">
                Login in to your account !
              </h2>
              <div className="flex flex-col gap-y-5">
                <Input
                  type="email"
                  className="w-full lg:w-[475px] p-4"
                  required
                  placeholder="Email"
                  variant="outlined"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Input.Password
                  required
                  type="password"
                  className="w-full lg:w-[475px] p-4"
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center lg:w-[475px] py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all"
              >
                {loading ? (
                  <RotatingLines width="25" />
                ) : (
                  <p className="font-extra">Login</p>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
