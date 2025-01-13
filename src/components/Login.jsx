import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="src/Images/TechTinder 3D Logo.webp" // Replace with your logo URL
          alt="Logo"
          className="w-16 h-16 mx-auto"
        />
      </div>

      {/* Heading */}
      <h1 className="text-xl font-semibold text-gray-900 mb-2 text-center">
        {isLoginForm ? "Login in to your account" : "Sign in to your account"}
      </h1>

      {/* Authentication Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 w-full max-w-md">
        <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100">
          <img
            src="https://static.vecteezy.com/system/resources/previews/042/165/816/non_2x/google-logo-transparent-free-png.png"
            alt="Google"
            className="w-8 h-8 mr-2"
          />
          Sign in with Google
        </button>
        <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="w-5 h-5 mr-2"
          />
          Sign in with Apple
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full max-w-md mb-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="text-gray-500 text-sm">Or use Email</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Email and Password Inputs */}
      <div className="my-2">
        {!isLoginForm && (
          <>
            <label className="form-control w-full max-w-lg my-4">
              <div className="label">
                <span className="label-text text-lg">First Name</span>
              </div>
              <input
                type="text"
                value={firstName}
                className="w-full max-w-lg py-3 px-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-lg"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-lg my-4">
              <div className="label">
                <span className="label-text text-lg">Last Name</span>
              </div>
              <input
                type="text"
                value={lastName}
                className="w-full max-w-lg py-3 px-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-lg"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </>
        )}
        <label className="form-control w-full max-w-lg my-4">
          <div className="label">
            <span className="label-text text-lg">Email ID</span>
          </div>
          <input
            type="text"
            value={emailId}
            className="w-full max-w-lg py-2 px-9 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-lg"
            onChange={(e) => setEmailId(e.target.value)}
          />
        </label>
        <label className="form-control w-full max-w-lg my-4">
          <div className="label">
            <span className="label-text text-lg">Password</span>
          </div>
          <input
            type="password"
            value={password}
            className="w-full max-w-lg py-2 px-9 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      {/* Sign In Button */}
      <button
        onClick={isLoginForm ? handleLogin : handleSignUp}
        className="w-full max-w-md py-2 mt-6 bg-black text-white rounded-md hover:bg-gray-800"
      >
        {isLoginForm ? "Login" : "Sign Up"}
      </button>

      {/* Footer */}
      <p
        className="text-sm text-gray-600 mt-4 cursor-pointer"
        onClick={() => setIsLoginForm((value) => !value)}
      >
        {/* Not a member?{" "} */}
        {isLoginForm ? "New User? Signup Here" : "Existing User?  Login Here"}
      </p>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Login;
