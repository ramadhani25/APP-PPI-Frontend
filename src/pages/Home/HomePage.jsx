import { deleteData, getData } from "actions";
import { CompPagination } from "components";
import { API_URL_getmahasiswa } from "constants";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { FiEdit, FiEye } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { VscFilePdf, VscRefresh } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { mahasiswaReducers } from "reducers/mahasiswaSlice";
import jwt_decode from "jwt-decode";
import { baseurl } from "constants";
import Swal from "sweetalert2";
import { Tab } from "@headlessui/react";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const { getMahasiswaResult, getMahasiswaLoading, getMahasiswaError } =
    useSelector((state) => state.mahasiswa);
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);

  const tableHead = [
    "No",
    "Nama",
    "NPM",
    "Jurusan",
    "Pembimbing 1",
    "Pembimbing 2",
    "Penguji",
    "Aksi",
  ];
  const tableHeadNilai = [
    "No",
    "Nama",
    "NPM",
    "Kode Etik dan Etika Profesi",
    "Profesionalisme Keinsiinyuran",
    "Keselamatan Kesehatan Keamanan Kerja dan Lingkungan",
    "Praktik Keinsinyuran",
    "Studi Kasus",
    "Seminar Workshop dan Diskusi",
    "IPK",
    "Aksi",
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

  const onEdit = (item) => {
    navigate(`/form/${item.id}`, {
      state: {
        mahasiswa: item,
      },
    });
  };
  const onDetail = (item) => {
    navigate(`/detail/${item.id}`, {
      state: {
        mahasiswa: item,
      },
    });
  };
  const onDelete = (item) => {
    Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Nilai Tidak Dapat Dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setDeleteLoading(true);
        try {
          await deleteData(
            `${baseurl}/matkul/iduser/${token.idUser}/idmahasiswa/${item.id}`
          );
          fetchData();
          setDeleteLoading(false);
          Swal.fire({
            icon: "success",
            title: "Terhapus!",
            customClass: {
              container: "z-[99999]",
            },
            timer: 1500,
            showConfirmButton: false,
            text: "Nilai Berhasil Dihapus.",
          });
        } catch (error) {
          setDeleteLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            customClass: {
              container: "z-[99999]",
            },
            timer: 1500,
            showConfirmButton: false,
            text: "Gagal Menghapus",
          });
        }
      }
    });
  };
  const onPrint = (e, item) => {
    navigate(`/print_nilaimahasiswa`, {
      state: {
        mahasiswa: item,
      },
    });
  };
  const onRefresh = (item) => {
    setRefreshLoading(item.id);
    axios({
      method: "PUT",
      url: `${baseurl}/mahasiswa/${item.id}/pembimbing1/${item.idpembimbing1}/pembimbing2/${item.idpembimbing2}/penguji/${item.idpenguji}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        fetchData().then(() => {
          setRefreshLoading(false);
        });
      })
      .catch((error) => {
        setRefreshLoading(false);
        console.log(error);
      });
  };

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

  const actionLihat = [
    {
      name: "Lihat",
      icon: <FiEye />,
      color: "text-gray-800",
      func: onDetail,
    },
  ];
  const actionEdit = [
    {
      name: "Lihat",
      icon: <FiEye />,
      color: "text-gray-800",
      func: onDetail,
    },
    {
      name: "Edit",
      icon: <FiEdit />,
      color: "text-blue-500",
      func: onEdit,
    },
  ];
  const actionDelete = [
    {
      name: "Lihat",
      icon: <FiEye />,
      color: "text-gray-800",
      func: onDetail,
    },
    {
      name: "Hapus",
      icon: <RiDeleteBin7Line />,
      color: "text-red-500",
      func: onDelete,
    },
  ];

  // useEffect
  useEffect(() => {
    fetchData();
    setToken(jwt_decode(localStorage.getItem("token")));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Tab.Group>
        <Tab.List className="flex gap-2 mb-2">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`p-2 px-4 rounded-xl shadow whitespace-nowrap text-xs font-semibold transition-all ${
                  selected ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                Input Nilai
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`p-2 px-4 rounded-xl shadow whitespace-nowrap text-xs font-semibold transition-all ${
                  selected ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                Nilai Mahasiswa
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div>
              <div className="text-center bg-white/90 backdrop-blur shadow rounded-xl p-4 font-medium">
                Mahasiswa
              </div>
              <div className="bg-white/90 backdrop-blur rounded-xl p-4 mt-2 shadow">
                <div className="pb-4">
                  <input
                    className="w-full bg-transparent sm:w-fit border border-gray-300 p-3 leading-none text-sm rounded-xl outline-none text-gray-800"
                    placeholder="Search"
                    type="text"
                    onChange={(e) => handleSearch(e)}
                    value={search}
                  />
                </div>
                <div className="overflow-y-auto custom-scroll">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        {tableHead.map((item, itemIdx) => (
                          <th
                            key={itemIdx}
                            className="p-2 text-sm whitespace-nowrap"
                          >
                            {item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(getMahasiswaLoading || deleteLoading) && (
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
                          <td
                            className="text-center"
                            colSpan={tableHead.length + 1}
                          >
                            <div className="pt-10 pb-6 flex justify-center items-center text-xs text-red-500">
                              {getMahasiswaError}
                            </div>
                          </td>
                        </tr>
                      )}

                      {getMahasiswaResult &&
                        !deleteLoading &&
                        getMahasiswaResult.data.mahasiswa.map(
                          (item, itemIdx) => (
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
                                {item.jurusan}
                              </td>
                              <td className="p-2 text-center whitespace-nowrap">
                                {item.pembimbing1[0]?.name}
                              </td>
                              <td className="p-2 text-center whitespace-nowrap">
                                {item.pembimbing2[0]?.name}
                              </td>
                              <td className="p-2 text-center whitespace-nowrap">
                                {item.penguji[0]?.name}
                              </td>
                              <td className="p-2 text-lg text-center whitespace-nowrap flex justify-center items-center">
                                {item.idpembimbing1 === token?.idUser ||
                                item.idpembimbing2 === token?.idUser ||
                                item.idpenguji === token?.idUser
                                  ? actionDelete.map((action, actionIdx) => (
                                      <div
                                        key={actionIdx}
                                        className="group relative flex items-center justify-center"
                                      >
                                        <button
                                          className={`mx-1 ${action.color}`}
                                          onClick={() => action.func(item)}
                                        >
                                          {action.icon}
                                        </button>
                                        <span className="group-hover:visible absolute rounded-md shadow-md text-white bg-gray-900 text-xs font-bold p-1 px-2 text-center min-w-max invisible mb-16 opacity-0 group-hover:opacity-100 transition-all duration-150">
                                          {action.name}
                                        </span>
                                      </div>
                                    ))
                                  : item.idpembimbing1 &&
                                    item.idpembimbing2 &&
                                    item.idpenguji
                                  ? actionLihat.map((action, actionIdx) => (
                                      <div
                                        key={actionIdx}
                                        className="group relative flex items-center justify-center"
                                      >
                                        <button
                                          className={`mx-1 ${action.color}`}
                                          onClick={() => action.func(item)}
                                        >
                                          {action.icon}
                                        </button>
                                        <span className="group-hover:visible absolute rounded-md shadow-md text-white bg-gray-900 text-xs font-bold p-1 px-2 text-center min-w-max invisible mb-16 opacity-0 group-hover:opacity-100 transition-all duration-150">
                                          {action.name}
                                        </span>
                                      </div>
                                    ))
                                  : actionEdit.map((action, actionIdx) => (
                                      <div
                                        key={actionIdx}
                                        className="group relative flex items-center justify-center"
                                      >
                                        <button
                                          className={`mx-1 ${action.color}`}
                                          onClick={() => action.func(item)}
                                        >
                                          {action.icon}
                                        </button>
                                        <span className="group-hover:visible absolute rounded-md shadow-md text-white bg-gray-900 text-xs font-bold p-1 px-2 text-center min-w-max invisible mb-16 opacity-0 group-hover:opacity-100 transition-all duration-150">
                                          {action.name}
                                        </span>
                                      </div>
                                    ))}
                              </td>
                            </tr>
                          )
                        )}
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
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
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
                    value={search}
                  />
                </div>
                <div className="overflow-y-auto custom-scroll">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        {tableHeadNilai.map((item, itemIdx) => (
                          <th key={itemIdx} className="p-2 text-sm">
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
                          <td
                            className="text-center"
                            colSpan={tableHead.length + 1}
                          >
                            <div className="pt-10 pb-6 flex justify-center items-center text-xs text-red-500">
                              {getMahasiswaError}
                            </div>
                          </td>
                        </tr>
                      )}

                      {getMahasiswaResult &&
                        getMahasiswaResult.data.mahasiswa.map(
                          (item, itemIdx) => (
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
                                {item.am1?.toFixed(2)}
                              </td>
                              <td className="p-2 text-center whitespace-nowrap">
                                {item.am2?.toFixed(2)}
                              </td>
                              <td className="p-2 text-center whitespace-nowrap">
                                {item.am3?.toFixed(2)}
                              </td>
                              <td className="p-2 text-center whitespace-nowrap">
                                {item.am4?.toFixed(2)}
                              </td>
                              <td className="p-2 text-center whitespace-nowrap">
                                {item.am5?.toFixed(2)}
                              </td>
                              <td className="p-2 text-center whitespace-nowrap">
                                {item.am6?.toFixed(2)}
                              </td>
                              <td className="p-2 text-center whitespace-nowrap">
                                {item.ipk?.toFixed(2)}
                              </td>
                              <td className="p-2 px-4 text-lg text-center whitespace-nowrap flex justify-center items-center">
                                {item.idpembimbing1 &&
                                  item.idpembimbing2 &&
                                  item.idpenguji && (
                                    <div className="flex gap-2 items-center">
                                      <div className={`text-blue-500`}>
                                        <div className="group relative flex items-center justify-center">
                                          <button
                                            onClick={() => onRefresh(item)}
                                            className={`text-blue-500 ${
                                              refreshLoading === item.id
                                                ? "animate-spin"
                                                : ""
                                            }`}
                                          >
                                            <VscRefresh />
                                          </button>
                                          <span className="group-hover:visible absolute rounded-md shadow-md text-white bg-gray-900 text-xs font-bold p-1 px-2 text-center min-w-max invisible mb-16 mr-16 opacity-0 group-hover:opacity-100 transition-all duration-150">
                                            Refresh Nilai
                                          </span>
                                        </div>
                                      </div>
                                      <div className="group relative flex items-center justify-center">
                                        <button
                                          onClick={(e) => onPrint(e, item)}
                                          className={`text-blue-500`}
                                        >
                                          <VscFilePdf />
                                        </button>
                                        <span className="group-hover:visible absolute rounded-md shadow-md text-white bg-gray-900 text-xs font-bold p-1 px-2 text-center min-w-max invisible mb-16 opacity-0 group-hover:opacity-100 transition-all duration-150">
                                          Print
                                        </span>
                                      </div>
                                    </div>
                                  )}
                              </td>
                            </tr>
                          )
                        )}
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
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default HomePage;
