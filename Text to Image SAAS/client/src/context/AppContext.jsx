import  { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();


  const loadCreditData = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/user/credits", {
        headers: { token },
      });

      if (data.success) {
        setCredit(data.credit);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendURL + "/api/image/generate-image",
        { prompt },
        {
          headers: { token },
        }
      );

      if (data.success) {
        loadCreditData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditData();
        if (data.creditBalance === 0) {
          navigate("/buy");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message);
      
    }
  };

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendURL,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditData,
    logOut,
    generateImage
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
