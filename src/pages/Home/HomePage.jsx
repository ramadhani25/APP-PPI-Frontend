import { deleteData, getData } from "actions";
import { CompPagination } from "components";
import { API_URL_getmahasiswa } from "constants";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { FiEdit, FiEye } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { mahasiswaReducers } from "reducers/mahasiswaSlice";
import jwt_decode from "jwt-decode";
import { baseurl } from "constants";
import Swal from "sweetalert2";

const HomePage = () => {
  const navigate = useNavigate();
  const { getMahasiswaResult, getMahasiswaLoading, getMahasiswaError } =
    useSelector((state) => state.mahasiswa);
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const [deleteLoading, setDeleteLoading] = useState(false);

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
      name: "lihat",
      icon: <FiEye />,
      color: "text-gray-800",
      func: onDetail,
    },
  ];
  const actionEdit = [
    {
      name: "lihat",
      icon: <FiEye />,
      color: "text-gray-800",
      func: onDetail,
    },
    {
      name: "edit",
      icon: <FiEdit />,
      color: "text-blue-500",
      func: onEdit,
    },
  ];
  const actionDelete = [
    {
      name: "lihat",
      icon: <FiEye />,
      color: "text-gray-800",
      func: onDetail,
    },
    {
      name: "hapus",
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
    <Fragment>
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
                  <td className="text-center" colSpan={tableHead.length + 1}>
                    <div className="pt-10 pb-6 flex justify-center items-center text-xs text-red-500">
                      {getMahasiswaError}
                    </div>
                  </td>
                </tr>
              )}

              {getMahasiswaResult &&
                !deleteLoading &&
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
                            <button
                              key={actionIdx}
                              className={`mx-1 ${action.color}`}
                              onClick={() => action.func(item)}
                            >
                              {action.icon}
                            </button>
                          ))
                        : item.idpembimbing1 &&
                          item.idpembimbing2 &&
                          item.idpenguji
                        ? actionLihat.map((action, actionIdx) => (
                            <button
                              key={actionIdx}
                              className={`mx-1 ${action.color}`}
                              onClick={() => action.func(item)}
                            >
                              {action.icon}
                            </button>
                          ))
                        : actionEdit.map((action, actionIdx) => (
                            <button
                              key={actionIdx}
                              className={`mx-1 ${action.color}`}
                              onClick={() => action.func(item)}
                            >
                              {action.icon}
                            </button>
                          ))}
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

export default HomePage;
