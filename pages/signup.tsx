import { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "@/config/firebase";
import signupImage from "../public/signup.jpg";
import Link from "next/link";
import Navbar from "@/components/navbar";
import SWC from "@/components/SWC";


interface SignupFormData {
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
 
  const router = useRouter();
  const [error, setError] = useState(null as string | null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSubmit = async (data: SignupFormData) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, { displayName: data.username });
      router.push("/signin");
    } catch (error: any) {
      setError(error.message);
    }
  };
 

  return (
    <div
      className=" bg-cover bg-center f-screen sm:half "
      style={{ backgroundImage: `url(${signupImage.src})` }}
    >
      <Navbar />

      <div className="py-10 px-14 max-w-lg mx-auto ">
        <h1 className="text-3xl relative font-bold text-white font-sans mb-8 md:text-center sm:text-2xl sm:text-center  ">
          Register new account
        </h1>

        {error && (
          <div className="bg-red-100 p-4 rounded mb-4 text-red-700">
            {error}
          </div>
        )}
        <form
          className=" drop-shadow-2xl drop-shadow-2xl "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-6 sm:mb-4">
            <label
              className="block text-gray-700 font-bold text-white mb-2"
              htmlFor="username"
            >
              Username
            </label>

            <input
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline  focus:ring-2 focus:ring-slate-800 sm:py-1 sm:px-2 sm:w-half ${
                errors.username ? "border-red-500" : ""
              }`}
              id="username"
              type="text"
              placeholder="Enter your username"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">
                Please enter your username.
              </p>
            )}
          </div>
          <div className="mb-4 sm:mb-2">
            <label
              className="block text-gray-700 text-white font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-800 focus:shadow-outline mb-2  sm:py-1 sm:px-2 ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                Please enter your email address.
              </p>
            )}
          </div>
          <div className="mb-2 sm:mb-1">
            <label
              className="block text-gray-700 font-bold text-white mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-800 focus:shadow-outline mb-4 sm:py-1 sm:px-2 ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                Please enter your password.
              </p>
            )}
          </div>

          <div className="flex justify-end mb-8 ">
            <Link
              className="mr-20 block text-base text-slate-300 underline font-bold hover:text-white sm:text-sm sm:mr-4  "
              href={"/signin"}
            >
              Already have an account?
            </Link>

            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 mt-1 rounded border-slate-800 text-indigo-600 focus:ring-indigo-600 sm:h-3.5 sm:w-3.5 "
            />
            <label
              htmlFor="remember-me"
              className="ml-1 S block text-base font-bold text-white sm:text-sm "
            >
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-900  font-bold text-gray-100 pt-2 rounded-lg py-3 px-8 hover:bg-slate-800 focus:outline-none focus:shadow-shadow-md sm:py-2 sm:px-4 sm:pt-1"
          >
            {loading ? <SWC buttonText={"Sign up"} /> : "Sigin Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
