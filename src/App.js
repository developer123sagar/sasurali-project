import { Navbar, ProtectedRoute } from "components";
import { Home, Login, About, Contact ,Blog,Terms} from "pages";
import { Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import AdminPanel from "admin/AdminPanel";

const AppState = createContext();
export function UserAuth() {
  return useContext(AppState);
}

function App() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const [isLogin, setIsLogin] = useState(isAdmin);

  function AuthContextProvider({ children }) {
    const values = {
      isLogin,
      setIsLogin,
    };

    return <AppState.Provider value={values}>{children}</AppState.Provider>;
  }

  return (
    <AuthContextProvider>
      {isLogin ? (
        <AdminPanel />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Terms" element={<Terms/>} />
            
          </Routes>
        </>
      )}
    </AuthContextProvider>
  );
}

export default App;
