import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useLoginUserMutation } from "./userApi";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { toast } from "react-toastify";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async (val, { resetForm }) => {
      console.log("Login payload:", val);
      try {
        const response = await loginUser(val).unwrap();
        dispatch(addUser(response));
        toast.success(`Welcome To Admin Dashboard`);
        resetForm();
      } catch (err) {
        toast.error("Login failed. Please try again.");
      }
    }
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-green-500">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-400 text-sm font-semibold mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-400 text-sm font-semibold mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded ${isLoading ? "bg-green-600 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} text-white font-bold transition duration-200`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
