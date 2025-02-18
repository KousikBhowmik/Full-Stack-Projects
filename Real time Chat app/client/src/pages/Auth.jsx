import React, { useState } from "react";
import victory from "../assets/victory.svg";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs.jsx";
import { Input } from "../components/ui/input.jsx";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelLogin = async () => {
    // min 42 min
  };

  const handelSingup = async () => {};

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center  ">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl  grid xl:grid-cols-2   ">
        <div className="flex flex-col gap-10  items-center justify-center ">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold lg:text-6xl  ">Welcome</h1>
              <img src={victory} alt="victory emoji" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
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
                  value={password}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
