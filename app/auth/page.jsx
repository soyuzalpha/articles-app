"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Auth = () => {
  const { register, watch, handleSubmit } = useForm();

  const googleLogin = async () => {
    signIn("google", { callbackUrl: "/" });
  };

  const onSubmit = async () => {
    await signIn("email", {
      email: watch("email"),
      callbackUrl: "/",
    });
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center ">
        <div className="w-80 md:w-96">
          <div className="mb-5">
            <h1 className="text-xl font-bold">Share Everything Happen! </h1>
            <h3 className="text-md">Join Now!</h3>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-3">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="user@example.com"
                  className="h-10 border rounded p-3 text-sm"
                />
              </div>

              <button type="submit" className="w-full h-10 bg-[#303030] rounded text-white text-sm">
                Continue
              </button>

              <p className="text-center my-3">or</p>
            </form>

            <div>
              <button
                onClick={googleLogin}
                className="w-full h-10 bg-slate-200 rounded text-sm flex items-center justify-center gap-3"
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
