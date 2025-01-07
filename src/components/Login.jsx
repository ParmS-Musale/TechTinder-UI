import React, { useState } from "react";
import axios from "axios";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BASE_URL } from "./utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("hitler@gmail.com");
  const [password, setPassword] = useState("hitler@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/")

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center my-12 ">
      <div className="card bg-zinc-900 text-black w-96 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-black">Email ID</span>
              </div>
              <input
                type="email"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white">Password</span>
              </div>
              <input
                type="email"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn bg-slate-950 text-white " onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
