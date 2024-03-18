import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("LoginUser: ", user);

  const loginAction = async (data) => {
    try {
      const response = await axios.post(
        "https://bargainfox-dev.concettoprojects.com/api/send-otp",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Loginres: ", response.config.data);

      if (response) {
        setUser(data);
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const verifyCode = async (code) => {
    try {
      const response = await axios.post(
        "https://bargainfox-dev.concettoprojects.com/api/verify-otp",
        { otp: code, email: user },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response) {
        setUser(code);
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loginAction, logOut, verifyCode }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
