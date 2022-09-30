import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import dummy from "assets/dummy-person.png";
import logo_unila from "assets/logo-unila.png";
import logo_ppi from "assets/logo.png";
import jwt_decode from "jwt-decode";

const CompHeader = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [token, setToken] = useState();

  // useEffect
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(jwt_decode(localStorage.getItem("token")));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-white/90 fixed w-full backdrop-blur z-10 py-2 px-3 text-gray-800 flex justify-between items-center drop-shadow-sm">
      <span className="flex items-center gap-2">
        <img
          src={logo_unila}
          alt="logo unila"
          className="w-10 h-10 drop-shadow"
        />
        <img src={logo_ppi} alt="logo ppi" className="w-10 h-10 drop-shadow" />
        <span className="text-xs sm:text-base font-semibold text-orange-600 drop-shadow">
          Sistem Penilaian RPL
        </span>
      </span>
      <Popover className="relative">
        <Popover.Button className="transition-all flex items-center w-10 h-10 outline-none rounded-full cursor-pointer overflow-hidden drop-shadow-sm hover:drop-shadow">
          <img className="object-cover h-full w-full" src={dummy} alt="User" />
        </Popover.Button>

        <Transition
          as="div"
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel className="absolute w-max min-w-[170px] flex flex-col right-1 top-3 rounded-lg shadow-lg bg-orange-500 pt-3 pb-1 px-1 text-white">
            <div className="px-2 pb-2">
              <div className="text-xs font-medium">{token?.name}</div>
              <div className="text-[10px]">{token?.email}</div>
            </div>
            <div className="flex flex-col">
              <button
                onClick={onLogout}
                className="text-xs text-left py-2 px-2 rounded-lg hover:bg-white hover:text-black transition-all"
              >
                Keluar
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default CompHeader;
