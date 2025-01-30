import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { showLogin, setShowLogin, backendURL, setToken, setUser } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendURL + "/api/user/login", {
          email,
          password,
        });
        console.log(data);

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendURL + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log(data);
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 50 }}
      transition={{ duration: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="fixed left-0 top-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center "
    >
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500 "
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sing in and continue</p>

        {state !== "Login" ? (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5 ">
            <img className="w-5" src={assets.profile_icon} />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="outline-none text-sm"
              type="text"
              required
              placeholder="Full Name"
            />
          </div>
        ) : (
          ""
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4 ">
          <img src={assets.email_icon} />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="outline-none text-sm"
            type="email"
            required
            placeholder="Email id"
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4 ">
          <img src={assets.lock_icon} />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none text-sm"
            type="password"
            required
            placeholder="Password"
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password
        </p>

        <button className="bg-blue-600 w-full text-white rounded-full py-2 ">
          {state === "Login" ? "Login" : "create account"}
        </button>

        {state === "Login" ? (
          <p onClick={() => setState("Sing Up")} className="mt-5 text-center ">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Sing Up</span>
          </p>
        ) : (
          <p onClick={() => setState("Login")} className="mt-5 text-center ">
            Already have an accouont?{" "}
            <span className="text-blue-600 cursor-pointer">Login</span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
        />
      </form>
    </motion.div>
  );
};

export default Login;
