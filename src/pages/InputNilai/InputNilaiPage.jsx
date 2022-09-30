import React, { Fragment, useEffect, useState } from "react";
import { rangeNilai } from "constants/rangeNilai";
import {
  formInput1,
  formInput2,
  formInput3,
  formInput4,
  formInput5,
  formInput6,
} from "constants/input";
import { handleInputError } from "constants/handleInputError";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import jwt_decode from "jwt-decode";
import { addData } from "actions";
import { baseurl } from "constants";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";

const InputNilaiPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dataMahasiswa, setDataMahasiswa] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  const [input1, setInput1] = useState(formInput1);
  const [input2, setInput2] = useState(formInput2);
  const [input3, setInput3] = useState(formInput3);
  const [input4, setInput4] = useState(formInput4);
  const [input5, setInput5] = useState(formInput5);
  const [input6, setInput6] = useState(formInput6);
  const [roles] = useState([]);
  const [role, setRole] = useState("");

  const handleInput1 = (e, index) => {
    const newInputs = [...input1];
    if (e.target.type === "number") {
      newInputs[index]["value"] = e.target.value;
    }

    if (e.target.type === "select-one") {
      newInputs[index]["range"] = rangeNilai[e.target.value];
      newInputs[index]["klasifikasiValue"] = e.target.value;
    }
    setInput1(newInputs);
  };

  const handleInput2 = (e, index) => {
    const newInputs = [...input2];
    if (e.target.type === "number") {
      newInputs[index]["value"] = e.target.value;
    }

    if (e.target.type === "select-one") {
      newInputs[index]["range"] = rangeNilai[e.target.value];
      newInputs[index]["klasifikasiValue"] = e.target.value;
    }
    setInput2(newInputs);
  };

  const handleInput3 = (e, index) => {
    const newInputs = [...input3];
    if (e.target.type === "number") {
      newInputs[index]["value"] = e.target.value;
    }

    if (e.target.type === "select-one") {
      newInputs[index]["range"] = rangeNilai[e.target.value];
      newInputs[index]["klasifikasiValue"] = e.target.value;
    }
    setInput3(newInputs);
  };
  const handleInput3Sub = (e, index, indexSub) => {
    const newInputs = [...input3];
    if (e.target.type === "number") {
      newInputs[index]["sub"][indexSub]["value"] = e.target.value;
    }

    if (e.target.type === "select-one") {
      newInputs[index]["sub"][indexSub]["range"] = rangeNilai[e.target.value];
      newInputs[index]["sub"][indexSub]["klasifikasiValue"] = e.target.value;
    }
    setInput3(newInputs);
  };

  const handleInput4 = (e, index) => {
    const newInputs = [...input4];
    if (e.target.type === "number") {
      newInputs[index]["value"] = e.target.value;
    }

    if (e.target.type === "select-one") {
      newInputs[index]["range"] = rangeNilai[e.target.value];
      newInputs[index]["klasifikasiValue"] = e.target.value;
    }
    setInput4(newInputs);
  };
  const handleInput4Sub = (e, index, indexSub) => {
    const newInputs = [...input4];
    if (e.target.type === "number") {
      newInputs[index]["sub"][indexSub]["value"] = e.target.value;
    }

    if (e.target.type === "select-one") {
      newInputs[index]["sub"][indexSub]["range"] = rangeNilai[e.target.value];
      newInputs[index]["sub"][indexSub]["klasifikasiValue"] = e.target.value;
    }
    setInput4(newInputs);
  };

  const handleInput5 = (e, index) => {
    const newInputs = [...input5];
    if (e.target.type === "number") {
      newInputs[index]["value"] = e.target.value;
    }

    if (e.target.type === "select-one") {
      newInputs[index]["range"] = rangeNilai[e.target.value];
      newInputs[index]["klasifikasiValue"] = e.target.value;
    }
    setInput5(newInputs);
  };

  const handleInput6 = (e, index) => {
    const newInputs = [...input6];
    if (e.target.type === "number") {
      newInputs[index]["value"] = e.target.value;
    }

    if (e.target.type === "select-one") {
      newInputs[index]["range"] = rangeNilai[e.target.value];
      newInputs[index]["klasifikasiValue"] = e.target.value;
    }
    setInput6(newInputs);
  };

  const postData = async () => {
    setLoading(true);
    try {
      await addData(
        null,
        `${baseurl}/mahasiswa/${dataMahasiswa.id}/${role}/${token.idUser}`
      );
      await addData(
        {
          sub1: Number(input1[0].value),
          sub2: Number(input1[1].value),
          sub3: Number(input1[2].value),
          sub4: Number(input1[3].value),
          valuesub1: Number(input1[0].klasifikasiValue),
          valuesub2: Number(input1[1].klasifikasiValue),
          valuesub3: Number(input1[2].klasifikasiValue),
          valuesub4: Number(input1[3].klasifikasiValue),
          sks: 2,
        },
        `${baseurl}/matkul1/iduser/${token.idUser}/idmahasiswa/${dataMahasiswa.id}`
      );
      await addData(
        {
          sub1: Number(input2[0].value),
          sub2: Number(input2[1].value),
          sub3: Number(input2[2].value),
          valuesub1: Number(input2[0].klasifikasiValue),
          valuesub2: Number(input2[1].klasifikasiValue),
          valuesub3: Number(input2[2].klasifikasiValue),
          sks: 2,
        },
        `${baseurl}/matkul2/iduser/${token.idUser}/idmahasiswa/${dataMahasiswa.id}`
      );
      await addData(
        {
          sub1: Number(input3[0].value),
          sub21: Number(input3[1].sub[0].value),
          sub22: Number(input3[1].sub[1].value),
          sub23: Number(input3[1].sub[2].value),
          sub24: Number(input3[1].sub[3].value),
          valuesub1: Number(input3[0].klasifikasiValue),
          valuesub21: Number(input3[1].sub[0].klasifikasiValue),
          valuesub22: Number(input3[1].sub[1].klasifikasiValue),
          valuesub23: Number(input3[1].sub[2].klasifikasiValue),
          valuesub24: Number(input3[1].sub[3].klasifikasiValue),
          sks: 2,
        },
        `${baseurl}/matkul3/iduser/${token.idUser}/idmahasiswa/${dataMahasiswa.id}`
      );
      await addData(
        {
          sub11: Number(input4[0].sub[0].value),
          sub12: Number(input4[0].sub[1].value),
          sub13: Number(input4[0].sub[2].value),
          sub14: Number(input4[0].sub[3].value),
          valuesub11: Number(input4[0].sub[0].klasifikasiValue),
          valuesub12: Number(input4[0].sub[1].klasifikasiValue),
          valuesub13: Number(input4[0].sub[2].klasifikasiValue),
          valuesub14: Number(input4[0].sub[3].klasifikasiValue),
          sks: 12,
        },
        `${baseurl}/matkul4/iduser/${token.idUser}/idmahasiswa/${dataMahasiswa.id}`
      );
      await addData(
        {
          sub1: Number(input5[0].value),
          sub2: Number(input5[1].value),
          sub3: Number(input5[2].value),
          valuesub1: Number(input5[0].klasifikasiValue),
          valuesub2: Number(input5[1].klasifikasiValue),
          valuesub3: Number(input5[2].klasifikasiValue),
          sks: 4,
        },
        `${baseurl}/matkul5/iduser/${token.idUser}/idmahasiswa/${dataMahasiswa.id}`
      );
      await addData(
        {
          sub1: Number(input6[0].value),
          valuesub1: Number(input6[0].klasifikasiValue),
          sks: 2,
        },
        `${baseurl}/matkul6/iduser/${token.idUser}/idmahasiswa/${dataMahasiswa.id}`
      );

      setLoading(false);
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Good job!",
        customClass: {
          container: "z-[99999]",
        },
        text: "Berhasil Menambahkan Data",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        customClass: {
          container: "z-[99999]",
        },
        text: error,
      });
    }
  };

  const doSubmit = (e) => {
    e.preventDefault();
    const newInput1 = handleInputError(input1);
    setInput1(newInput1);

    const newInput2 = handleInputError(input2);
    setInput2(newInput2);

    const newInput3 = handleInputError(input3);
    const newInput3sub = handleInputError(input3[1]["sub"]);
    setInput3([newInput3[0], { ...input3[1], sub: newInput3sub }]);

    const newInput4 = handleInputError(input4[0]["sub"]);
    setInput4([{ ...input4[0], sub: newInput4 }]);

    const newInput5 = handleInputError(input5);
    setInput5(newInput5);

    const newInput6 = handleInputError(input6);
    setInput6(newInput6);

    const err1 = newInput1.filter((item) => item.error !== "");
    const err2 = newInput2.filter((item) => item.error !== "");
    const err3 = newInput3.filter((item) => item.error !== "");
    const err3sub = newInput3sub.filter((item) => item.error !== "");
    const err4 = newInput4.filter((item) => item.error !== "");
    const err5 = newInput5.filter((item) => item.error !== "");
    const err6 = newInput6.filter((item) => item.error !== "");

    if (
      err1.length === 0 &&
      err2.length === 0 &&
      err3.length === 0 &&
      err3sub.length === 0 &&
      err4.length === 0 &&
      err5.length === 0 &&
      err6.length === 0
    ) {
      postData();
    }
  };

  useEffect(() => {
    if (location.state?.mahasiswa) {
      setDataMahasiswa(location.state.mahasiswa);
      setToken(jwt_decode(localStorage.getItem("token")));
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (location.state?.mahasiswa) {
      if (!location.state.mahasiswa.idpembimbing1) {
        roles.push({
          value: "pembimbing1",
          label: "Pembimbing 1",
        });
      }
      if (!location.state.mahasiswa.idpembimbing2) {
        roles.push({
          value: "pembimbing2",
          label: "Pembimbing 2",
        });
      }
      if (!location.state.mahasiswa.idpenguji) {
        roles.push({
          value: "penguji",
          label: "Penguji",
        });
      }
      setRole(roles.length > 0 ? roles[0].value : "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const newInput1 = input1.map((item) => {
      return { ...item, range: rangeNilai[item.klasifikasiValue] };
    });
    const newInput2 = input2.map((item) => {
      return { ...item, range: rangeNilai[item.klasifikasiValue] };
    });
    const newInput3 = input3.map((item) => {
      if (item.sub) {
        const sub = item.sub.map((sub) => {
          return { ...sub, range: rangeNilai[sub.klasifikasiValue] };
        });
        return { ...item, range: rangeNilai[item.klasifikasiValue], sub };
      }
      return { ...item, range: rangeNilai[item.klasifikasiValue] };
    });
    const newInput4 = input4.map((item) => {
      if (item.sub) {
        const sub = item.sub.map((sub) => {
          return { ...sub, range: rangeNilai[sub.klasifikasiValue] };
        });
        return { ...item, range: rangeNilai[item.klasifikasiValue], sub };
      }
      return { ...item, range: rangeNilai[item.klasifikasiValue] };
    });
    const newInput5 = input5.map((item) => {
      return { ...item, range: rangeNilai[item.klasifikasiValue] };
    });
    const newInput6 = input6.map((item) => {
      return { ...item, range: rangeNilai[item.klasifikasiValue] };
    });
    setInput1(newInput1);
    setInput2(newInput2);
    setInput3(newInput3);
    setInput4(newInput4);
    setInput5(newInput5);
    setInput6(newInput6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="bg-white hover:bg-slate-50 flex gap-2 justify-center items-center p-2 mb-2 rounded-xl shadow"
      >
        <IoArrowBack />
      </button>
      <div className="p-4 bg-white mb-2 rounded-xl shadow">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-full p-1 flex items-center font-medium sm:col-span-2">
            Nama
          </div>
          <div className="col-span-full p-1 flex items-center sm:col-span-10">
            {dataMahasiswa?.nama}
          </div>
          <div className="col-span-full p-1 flex items-center font-medium sm:col-span-2">
            NPM
          </div>
          <div className="col-span-full p-1 flex items-center sm:col-span-10">
            {dataMahasiswa?.npm}
          </div>
          <div className="col-span-full p-1 flex items-center font-medium sm:col-span-2">
            Dosen
          </div>
          <div className="col-span-full p-1 flex items-center sm:col-span-10">
            {token?.name}
          </div>
          <div className="col-span-full p-1 flex items-center font-medium sm:col-span-2">
            Role
          </div>
          <div className="col-span-full flex items-center sm:col-span-10">
            <select
              className="p-1 pr-5 border border-gray-400 rounded-lg outline-none w-full sm:w-fit"
              onChange={(e) => setRole(e.target.value)}
              defaultValue={role[0]}
            >
              {roles?.map((item, itemIdx) => (
                <option key={itemIdx} value={item?.value}>
                  {item?.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl shadow">
        <form onSubmit={(e) => doSubmit(e)}>
          <div className="overflow-y-auto custom-scroll">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2 pb-4 whitespace-nowrap">No</th>
                  <th className="p-2 pb-4 whitespace-nowrap">
                    Penilaian Mata Kuliah
                  </th>
                  <th className="p-2 pb-4 whitespace-nowrap">
                    Klasifikasi Nilai
                  </th>
                  <th className="p-2 pb-4 whitespace-nowrap">Rentang Nilai</th>
                  <th className="p-2 pb-4 whitespace-nowrap">Nilai Dosen</th>
                </tr>
              </thead>
              <tbody>
                {/* 1 */}
                <tr className="font-semibold">
                  <td className="p-2 pt-8">1</td>
                  <td className="p-2 pt-8" colSpan={4}>
                    Kode Etik dan Etika Profesi Insinyur
                  </td>
                </tr>
                {input1.map((inp1, inp1Idx) => (
                  <tr key={inp1Idx}>
                    <td className="p-2">{inp1.no}</td>
                    <td className="p-2">{inp1.mataKuliah}</td>
                    <td className="p-2">
                      <select
                        className="w-full p-2 rounded outline-none border"
                        value={inp1.klasifikasiValue}
                        onChange={(e) => handleInput1(e, inp1Idx)}
                      >
                        {inp1.klasifikasi.map((item, itemIdx) => (
                          <option key={itemIdx} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2 text-center">{`${inp1.range[0]} - ${inp1.range[1]}`}</td>
                    <td className="p-2">
                      <input
                        onChange={(e) => handleInput1(e, inp1Idx)}
                        type="number"
                        step={0.1}
                        className={`w-full p-2 rounded outline-none border arrow-none ${
                          inp1.error ? "border border-red-500" : ""
                        }`}
                        min={inp1.range[0]}
                        max={inp1.range[1]}
                      />
                      {inp1.error && (
                        <div className="text-[10px] text-red-500">
                          {inp1.error}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}

                {/* 2 */}
                <tr className="font-semibold">
                  <td className="p-2 pt-10">2</td>
                  <td className="p-2 pt-10" colSpan={4}>
                    Profesionalisme Keinsinyuran
                  </td>
                </tr>
                {input2.map((inp2, inp2Idx) => (
                  <tr key={inp2Idx}>
                    <td className="p-2">{inp2.no}</td>
                    <td className="p-2">{inp2.mataKuliah}</td>
                    <td className="p-2">
                      <select
                        className="w-full p-2 rounded outline-none border"
                        value={inp2.klasifikasiValue}
                        onChange={(e) => handleInput2(e, inp2Idx)}
                      >
                        {inp2.klasifikasi.map((item, itemIdx) => (
                          <option key={itemIdx} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2 text-center">{`${inp2.range[0]} - ${inp2.range[1]}`}</td>
                    <td className="p-2">
                      <input
                        onChange={(e) => handleInput2(e, inp2Idx)}
                        type="number"
                        step={0.1}
                        className={`w-full p-2 rounded outline-none border arrow-none ${
                          inp2.error ? "border border-red-500" : ""
                        }`}
                        min={inp2.range[0]}
                        max={inp2.range[1]}
                      />
                      {inp2.error && (
                        <div className="text-[10px] text-red-500">
                          {inp2.error}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}

                {/* 3 */}
                <tr className="font-semibold">
                  <td className="p-2 pt-10">3</td>
                  <td className="p-2 pt-10" colSpan={4}>
                    Keselamatan Kesehatan Kerja dan Lingkungan
                  </td>
                </tr>
                {/* Sub 3 */}
                {input3.map((inp3, inp3Idx) => {
                  if (inp3.sub) {
                    const newSub = inp3.sub.map((inp3sub, inp3subIdx) => (
                      <tr key={inp3subIdx}>
                        <td className="p-2">{inp3sub.no}</td>
                        <td className="p-2">{inp3sub.mataKuliah}</td>
                        <td className="p-2">
                          <select
                            className="w-full p-2 rounded outline-none border"
                            value={inp3.klasifikasiValue}
                            onChange={(e) =>
                              handleInput3Sub(e, inp3Idx, inp3subIdx)
                            }
                          >
                            {inp3sub.klasifikasi.map((item, itemIdx) => (
                              <option key={itemIdx} value={item.value}>
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-2 text-center">{`${inp3sub.range[0]} - ${inp3sub.range[1]}`}</td>
                        <td className="p-2">
                          <input
                            onChange={(e) =>
                              handleInput3Sub(e, inp3Idx, inp3subIdx)
                            }
                            type="number"
                            step={0.1}
                            className={`w-full p-2 rounded outline-none border arrow-none ${
                              inp3sub.error ? "border border-red-500" : ""
                            }`}
                            min={inp3sub.range[0]}
                            max={inp3sub.range[1]}
                          />
                          {inp3sub.error && (
                            <div className="text-[10px] text-red-500">
                              {inp3sub.error}
                            </div>
                          )}
                        </td>
                      </tr>
                    ));
                    return (
                      <Fragment key={inp3Idx}>
                        <tr>
                          <td className="p-2">{inp3.no}</td>
                          <td className="p-2" colSpan={4}>
                            {inp3.mataKuliah}
                          </td>
                        </tr>
                        {newSub}
                      </Fragment>
                    );
                  }

                  return (
                    <tr key={inp3Idx}>
                      <td className="p-2">{inp3.no}</td>
                      <td className="p-2">{inp3.mataKuliah}</td>
                      <td className="p-2">
                        <select
                          className="w-full p-2 rounded outline-none border"
                          value={inp3.klasifikasiValue}
                          onChange={(e) => handleInput3(e, inp3Idx)}
                        >
                          {inp3.klasifikasi.map((item, itemIdx) => (
                            <option key={itemIdx} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2 text-center">{`${inp3.range[0]} - ${inp3.range[1]}`}</td>
                      <td className="p-2">
                        <input
                          onChange={(e) => handleInput3(e, inp3Idx)}
                          type="number"
                          step={0.1}
                          className={`w-full p-2 rounded outline-none border arrow-none ${
                            inp3.error ? "border border-red-500" : ""
                          }`}
                          min={inp3.range[0]}
                          max={inp3.range[1]}
                        />
                        {inp3.error && (
                          <div className="text-[10px] text-red-500">
                            {inp3.error}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}

                {/* 4 */}
                <tr className="font-semibold">
                  <td className="p-2 pt-10">4</td>
                  <td className="p-2 pt-10" colSpan={4}>
                    Praktik Keinsinyuran
                  </td>
                </tr>
                {/* Sub 4 */}
                {input4.map((inp4, inp4Idx) => {
                  if (inp4.sub) {
                    const newSub = inp4.sub.map((inp4sub, inp4subIdx) => (
                      <tr key={inp4subIdx}>
                        <td className="p-2">{inp4sub.no}</td>
                        <td className="p-2">{inp4sub.mataKuliah}</td>
                        <td className="p-2">
                          <select
                            className="w-full p-2 rounded outline-none border"
                            value={inp4sub.klasifikasiValue}
                            onChange={(e) =>
                              handleInput4Sub(e, inp4Idx, inp4subIdx)
                            }
                          >
                            {inp4sub.klasifikasi.map((item, itemIdx) => (
                              <option key={itemIdx} value={item.value}>
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-2 text-center">{`${inp4sub.range[0]} - ${inp4sub.range[1]}`}</td>
                        <td className="p-2">
                          <input
                            onChange={(e) =>
                              handleInput4Sub(e, inp4Idx, inp4subIdx)
                            }
                            type="number"
                            step={0.1}
                            className={`w-full p-2 rounded outline-none border arrow-none ${
                              inp4sub.error ? "border border-red-500" : ""
                            }`}
                            min={inp4sub.range[0]}
                            max={inp4sub.range[1]}
                          />
                          {inp4sub.error && (
                            <div className="text-[10px] text-red-500">
                              {inp4sub.error}
                            </div>
                          )}
                        </td>
                      </tr>
                    ));
                    return (
                      <Fragment key={inp4Idx}>
                        <tr>
                          <td className="p-2">{inp4.no}</td>
                          <td className="p-2" colSpan={4}>
                            {inp4.mataKuliah}
                          </td>
                        </tr>
                        {newSub}
                      </Fragment>
                    );
                  }

                  return (
                    <tr key={inp4Idx}>
                      <td className="p-2">{inp4.no}</td>
                      <td className="p-2">{inp4.mataKuliah}</td>
                      <td className="p-2">
                        <select
                          className="w-full p-2 rounded outline-none border"
                          value={inp4.klasifikasiValue}
                          onChange={(e) => handleInput4(e, inp4Idx)}
                        >
                          {inp4.klasifikasi.map((item, itemIdx) => (
                            <option key={itemIdx} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2 text-center">{`${inp4.range[0]} - ${inp4.range[1]}`}</td>
                      <td className="p-2">
                        <input
                          onChange={(e) => handleInput4(e, inp4Idx)}
                          type="number"
                          step={0.1}
                          className={`w-full p-2 rounded outline-none border arrow-none ${
                            inp4.error ? "border border-red-500" : ""
                          }`}
                          min={inp4.range[0]}
                          max={inp4.range[1]}
                        />
                        {inp4.error && (
                          <div className="text-[10px] text-red-500">
                            {inp4.error}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}

                {/* 5 */}
                <tr className="font-semibold">
                  <td className="p-2 pt-10">5</td>
                  <td className="p-2 pt-10" colSpan={4}>
                    Studi Kasus
                  </td>
                </tr>
                {input5.map((inp5, inp5Idx) => (
                  <tr key={inp5Idx}>
                    <td className="p-2">{inp5.no}</td>
                    <td className="p-2">{inp5.mataKuliah}</td>
                    <td className="p-2">
                      <select
                        className="w-full p-2 rounded outline-none border"
                        value={inp5.klasifikasiValue}
                        onChange={(e) => handleInput5(e, inp5Idx)}
                      >
                        {inp5.klasifikasi.map((item, itemIdx) => (
                          <option key={itemIdx} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2 text-center">{`${inp5.range[0]} - ${inp5.range[1]}`}</td>
                    <td className="p-2">
                      <input
                        onChange={(e) => handleInput5(e, inp5Idx)}
                        type="number"
                        step={0.1}
                        className={`w-full p-2 rounded outline-none border arrow-none ${
                          inp5.error ? "border border-red-500" : ""
                        }`}
                        min={inp5.range[0]}
                        max={inp5.range[1]}
                      />
                      {inp5.error && (
                        <div className="text-[10px] text-red-500">
                          {inp5.error}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}

                {/* 6 */}
                <tr className="font-semibold">
                  <td className="p-2 pt-10">6</td>
                  <td className="p-2 pt-10" colSpan={4}>
                    Seminar, Workshop, Diskusi
                  </td>
                </tr>
                {input6.map((inp6, inp6Idx) => (
                  <tr key={inp6Idx}>
                    <td className="p-2">{inp6.no}</td>
                    <td className="p-2">{inp6.mataKuliah}</td>
                    <td className="p-2">
                      <select
                        className="w-full p-2 rounded outline-none border"
                        value={inp6.klasifikasiValue}
                        onChange={(e) => handleInput6(e, inp6Idx)}
                      >
                        {inp6.klasifikasi.map((item, itemIdx) => (
                          <option key={itemIdx} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2 text-center">{`${inp6.range[0]} - ${inp6.range[1]}`}</td>
                    <td className="p-2">
                      <input
                        onChange={(e) => handleInput6(e, inp6Idx)}
                        type="number"
                        step={0.1}
                        className={`w-full p-2 rounded outline-none border arrow-none ${
                          inp6.error ? "border border-red-500" : ""
                        }`}
                        min={inp6.range[0]}
                        max={inp6.range[1]}
                      />
                      {inp6.error && (
                        <div className="text-[10px] text-red-500">
                          {inp6.error}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-6 p-2">
            <button
              type="submit"
              disabled={loading ? true : false}
              className="flex justify-center items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-5"
            >
              {loading ? <PulseLoader color="#fff" size={11} /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputNilaiPage;
