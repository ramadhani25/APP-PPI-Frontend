import React, { useEffect, useState } from "react";
import { FaUser, FaUnlock } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_login } from "constants";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const doSubmit = () => {
    if (username === "" || password === "") {
    } else {
      setLoading(true);
      axios({
        method: "POST",
        url: API_URL_login,
        data: {
          email: username,
          password: password,
        },
      })
        .then((response) => {
          setLoading(false);
          if (response.data.status === 200) {
            window.localStorage.setItem("token", response.data.token);
            navigate("/");
          }
        })
        .catch((error) => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            customClass: {
              container: "z-[99999]",
            },
            timer: 1500,
            showConfirmButton: false,
            text: error.response.data.message,
          });
        });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-screen bg-[url('assets/bg.jpg')] bg-cover text-gray-800 flex justify-center items-center">
      <div className="p-8 pt-0 w-full max-w-lg m-4 bg-white rounded-md shadow">
        <div className="flex justify-center p-8">
          <img src={logo} alt="logo" className="w-32 rounded-full shadow-md" />
        </div>

        {/* Form */}
        <form
          className="gap-2 flex flex-col"
          onKeyPress={(e) => e.key === "Enter" && doSubmit()}
        >
          <div className="relative">
            <span className="absolute text-gray-400 top-4 left-4">
              <FaUser />
            </span>
            <input
              className="w-full outline-none border border-gray-300 rounded-md pl-12 px-4 py-3 focus:shadow transition-all"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </div>
          <div className="relative">
            <span className="absolute text-gray-400 top-4 left-4">
              <FaUnlock />
            </span>
            <input
              className="w-full outline-none border border-gray-300 rounded-md pl-12 px-4 py-3 focus:shadow transition-all"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={visiblePassword ? "text" : "password"}
            />
            <div
              className="absolute text-gray-400 top-[13px] right-4 text-2xl cursor-pointer"
              onClick={() => setVisiblePassword(!visiblePassword)}
            >
              {visiblePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          <button
            className="w-full flex justify-center items-center leading-tight mt-2 font-medium outline-none text-white border border-gray-300 rounded-md py-3  bg-orange-600 hover:bg-orange-700 hover:shadow-md active:bg-orange-800 active:shadow-lg transition-all"
            type="button"
            disabled={loading ? true : false}
            onClick={(e) => doSubmit(e)}
          >
            {loading ? <PulseLoader color="#fff" size={11} /> : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
