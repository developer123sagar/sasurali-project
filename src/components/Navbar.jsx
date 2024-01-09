import { Navitems } from "constant/Navbar/text";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { logo } from "image";
import { MenuDrawer } from "components";
import { UserAuth } from "App";

export const Navbar = () => {
  const { isLogin } = UserAuth();

  return (
    <>
      {!isLogin && (
        <>
          <div className="w-full lg:w-[81%] z-50 h-[30px] py-[6.5px] h text-xl text-white flex justify-between items-center px-8 custom-top-nav fixed top-0 right-0 overflow-hidden">
            <div className="hidden sm:flex gap-4">
              <div className="hidden sm:flex items-center gap-4 pr-6 lg:border-r-[1px] border-white">
                <AiOutlineMail size={20} color="white" />
                <a
                  href="mailto:Sasuraliktm125@gmail.com"
                  className="hover:no-underline hover:text-white font-extra"
                >
                  Sasuraliktm125@gmail.com
                </a>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <ImLocation2 size={18} color="white" />
                <p className="font-extra text-xl">
                  Town planning Dibyeshwori, Manohara River, Bhaktapur, Nepal
                </p>
              </div>
            </div>

            </div>

          <div className="flex items-center text-white justify-between fixed top-0 left-0 w-full h-[90px] px-5  lg:px-16 shadow-lg z-30 overflow-hidden customNav">
            {/* logo */}
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="mt-10 lg:mt-0 object-contain w-[6rem] lg:w-[8rem]"
              />
            </Link>

            {/* navitems */}
            <div className="hidden mt-8 navbar lg:flex gap-14">
              {Navitems.map((item, id) => (
                <div key={`${id}..${item.name}`}>
                  <Link
                    to={item.to}
                    className="nav uppercase  text-2xl font-bold hover:no-underline  font-extra hover:cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* navicons */}
            <div className="flex mt-10 items-center justify-between   ">
              <MenuDrawer />
            </div>
          </div>
        </>
      )}
    </>
  );
};
