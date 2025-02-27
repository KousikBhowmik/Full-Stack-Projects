import React, { useState } from "react";
import victory from "../assets/victory.svg";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs.jsx";
import { Input } from "../components/ui/input.jsx";
import { Button } from "@/components/ui/button";
import Background from "../assets/login2.png";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";
import { LOGIN_ROUTE, SINGUP_ROUTE } from "@/utils/constants";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validate = (type = "") => {
    const passRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};:'",.<>/?]{6,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Email is requierd");
    }
    if (!passRegex.test(password)) {
      toast.error("Valid password is needed");
    } else if (password !== confirmPassword && type === "singup") {
      toast.error("Both password mast be same");
    }
    if (!passRegex.test(password) || !emailRegex.test(email)) {
      return false;
    }
    return true;
  };

  const handelLogin = async () => {
    if (!validate()) {
      return;
    }

    console.log("login fun");
    console.log(email, password);

    const { data } = await apiClient.get(
      LOGIN_ROUTE,
      { params: { email, password } },
      { withCredentials: true }
    );

    console.log(data);
  };

  const handelSingup = async () => {
    if (!validate("singup")) {
      return;
    }
    console.log("hello");

    const { data } = await apiClient.post(
      SINGUP_ROUTE,
      { email, password },
      { withCredentials: true }
    );
    console.log(data);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center  ">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl  grid xl:grid-cols-2   ">
        <div className="flex flex-col gap-10  items-center justify-center ">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl sm:text-5xl font-bold lg:text-6xl  ">
                Welcome
              </h1>
              <img src={victory} alt="victory emoji" className="h-[100px]" />
            </div>
            <p className="font-medium text-center px-3">
              Fill the all details to get started with the best chat app!
            </p>
          </div>

          <div className="flex items-center justify-center w-full  ">
            <Tabs className="w-3/4  ">
              <TabsList className="bg-transparent rounded-full w-full ">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-transparent text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300  "
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="singup"
                  className="data-[state=active]:bg-transparent text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300  "
                >
                  Singup
                </TabsTrigger>
              </TabsList>
              <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6  "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6  "
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <Button className="rounded-full p-6 " onClick={handelLogin}>
                  Login
                </Button>
              </TabsContent>
              <TabsContent className="flex flex-col gap-5" value="singup">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6  "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6  "
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-full p-6  "
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  value={confirmPassword}
                />

                <Button className="rounded-full p-6 " onClick={handelSingup}>
                  Singup
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div>
          <img
            src={Background}
            alt="background"
            className="hidden xl:flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
