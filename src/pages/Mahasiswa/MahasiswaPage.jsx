import { getData } from "actions";
import { CompPagination } from "components";
import { API_URL_getmahasiswa } from "constants";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { mahasiswaReducers } from "reducers/mahasiswaSlice";
import jwt_decode from "jwt-decode";

const MahasiswaPage = () => {
  const { getMahasiswaResult, getMahasiswaLoading, getMahasiswaError } =
    useSelector((state) => state.mahasiswa);
  const dispatch = useDispatch();
  const [token, setToken] = useState();

  const tableHead = [
    "No",
    "Nama",
    "NPM",
    "MK1",
    "MK2",
    "MK3",
    "MK4",
    "MK5",
    "MK6",
    "IPK",
  ];
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");

  const get = useCallback(
    async (param) => {
      getData(
        { dispatch, redux: mahasiswaReducers },
        param,
        API_URL_getmahasiswa,
        "GET_MAHASISWA"
      );
    },
    [dispatch]
  );

  const fetchData = useCallback(async () => {
    get({ param: `?page=${0}&size=${limit}&search=` });
  }, [get, limit]);

  const handlePageClick = (e) => {
    const param = {
      param: `?page=${e.selected}&size=${limit}&search=${search}`,
    };
    setOffset(e.selected * limit);
    get(param);
  };

  const handleSelect = (e) => {
    const param = { param: `?page=${0}&size=${e}&search=${search}` };
    setOffset(0);
    get(param);
    setLimit(e);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const param = {
      param: `?page=${0}&size=${limit}&search=${e.target.value}`,
    };
    setOffset(0);
    get(param);
  };

  // useEffect
  useEffect(() => {
    fetchData();
    setToken(jwt_decode(localStorage.getItem("token")));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <div className="text-center bg-white/90 backdrop-blur shadow rounded-xl p-4 font-medium">
        Nilai Mahasiswa
      </div>
      <div className="bg-white/90 backdrop-blur rounded-xl p-4 mt-2 shadow">
        <div className="pb-4">
          <input
            className="w-full bg-transparent sm:w-fit border border-gray-300 p-3 leading-none text-sm rounded-xl outline-none text-gray-800"
            placeholder="Search"
            type="text"
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div className="overflow-y-auto custom-scroll">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                {tableHead.map((item, itemIdx) => (
                  <th key={itemIdx} className="p-2 text-sm whitespace-nowrap">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getMahasiswaLoading && (
                <tr>
                  <td
                    className="text-center py-12"
                    colSpan={tableHead.length + 1}
                  >
                    <div className="pt-10 pb-6 flex justify-center items-center">
                      <PulseLoader color="#111827" />
                    </div>
                  </td>
                </tr>
              )}

              {getMahasiswaError && (
                <tr>
                  <td className="text-center" colSpan={tableHead.length + 1}>
                    <div className="pt-10 pb-6 flex justify-center items-center text-xs text-red-500">
                      {getMahasiswaError}
                    </div>
                  </td>
                </tr>
              )}

              {getMahasiswaResult &&
                getMahasiswaResult.data.mahasiswa.map((item, itemIdx) => (
                  <tr
                    key={itemIdx}
                    className="border-b border-gray-200 text-sm hover:bg-white/60 transition-all"
                  >
                    <td className="p-2 text-center whitespace-nowrap">
                      {itemIdx + offset + 1}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      {item.nama}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      {item.npm}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      {item.am1}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      {item.am2}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      {item.am3}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      {item.am4}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      {item.am5}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      {item.am6}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      {item.ipk}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <CompPagination
          handlePageClick={handlePageClick}
          pageCount={
            getMahasiswaResult.data?.totalItems
              ? getMahasiswaResult.data?.totalItems
              : 0
          }
          limit={limit}
          setLimit={handleSelect}
        />
      </div>
    </Fragment>
  );
};

export default MahasiswaPage;
