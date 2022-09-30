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
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import jwt_decode from "jwt-decode";
import { baseurl } from "constants";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState();
  const [dataMahasiswa, setDataMahasiswa] = useState();
  const [loading, setLoading] = useState(false);

  const [input1, setInput1] = useState(formInput1);
  const [input2, setInput2] = useState(formInput2);
  const [input3, setInput3] = useState(formInput3);
  const [input4, setInput4] = useState(formInput4);
  const [input5, setInput5] = useState(formInput5);
  const [input6, setInput6] = useState(formInput6);
  const [average, setAverage] = useState({});
  const [hurufMutu, setHurufMutu] = useState({});

  useEffect(() => {
    if (location.state?.mahasiswa) {
      setDataMahasiswa(location.state.mahasiswa);
      setToken(jwt_decode(localStorage.getItem("token")));
      const iduser = jwt_decode(localStorage.getItem("token")).idUser;
      const idmahasiswa = location.state.mahasiswa?.id;
      setLoading(true);

      axios({
        method: "GET",
        url: `${baseurl}/matkul/iduser/${iduser}/idmahasiswa/${idmahasiswa}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          const matkul1 = response.data.data[0].matkul1[0];
          const matkul2 = response.data.data[0].matkul2[0];
          const matkul3 = response.data.data[0].matkul3[0];
          const matkul4 = response.data.data[0].matkul4[0];
          const matkul5 = response.data.data[0].matkul5[0];
          const matkul6 = response.data.data[0].matkul6[0];
          setInput1([
            {
              ...input1[0],
              value: matkul1?.sub1 ? matkul1?.sub1 : "",
              klasifikasiValue: matkul1?.valuesub1 ? matkul1?.valuesub1 : "",
            },
            {
              ...input1[1],
              value: matkul1?.sub2 ? matkul1?.sub2 : "",
              klasifikasiValue: matkul1?.valuesub2 ? matkul1?.valuesub2 : "",
            },
            {
              ...input1[2],
              value: matkul1?.sub3 ? matkul1?.sub3 : "",
              klasifikasiValue: matkul1?.valuesub3 ? matkul1?.valuesub3 : "",
            },
            {
              ...input1[3],
              value: matkul1?.sub4 ? matkul1?.sub4 : "",
              klasifikasiValue: matkul1?.valuesub4 ? matkul1?.valuesub4 : "",
            },
          ]);
          setInput2([
            {
              ...input2[0],
              value: matkul2?.sub1 ? matkul2?.sub1 : "",
              klasifikasiValue: matkul2?.valuesub1 ? matkul2?.valuesub1 : "",
            },
            {
              ...input2[1],
              value: matkul2?.sub2 ? matkul2?.sub2 : "",
              klasifikasiValue: matkul2?.valuesub2 ? matkul2?.valuesub2 : "",
            },
            {
              ...input2[2],
              value: matkul2?.sub3 ? matkul2?.sub3 : "",
              klasifikasiValue: matkul2?.valuesub3 ? matkul2?.valuesub2 : "",
            },
          ]);
          setInput3([
            {
              ...input3[0],
              value: matkul3?.sub1 ? matkul3?.sub1 : "",
              klasifikasiValue: matkul3?.valuesub1 ? matkul3?.valuesub1 : "",
            },
            {
              ...input3[1],
              sub: [
                {
                  ...input3[1].sub[0],
                  value: matkul3?.sub21 ? matkul3?.sub21 : "",
                  klasifikasiValue: matkul3?.valuesub21
                    ? matkul3?.valuesub21
                    : "",
                },
                {
                  ...input3[1].sub[1],
                  value: matkul3?.sub22 ? matkul3?.sub22 : "",
                  klasifikasiValue: matkul3?.valuesub22
                    ? matkul3?.valuesub22
                    : "",
                },
                {
                  ...input3[1].sub[2],
                  value: matkul3?.sub23 ? matkul3?.sub23 : "",
                  klasifikasiValue: matkul3?.valuesub23
                    ? matkul3?.valuesub23
                    : "",
                },
                {
                  ...input3[1].sub[3],
                  value: matkul3?.sub24 ? matkul3?.sub24 : "",
                  klasifikasiValue: matkul3?.valuesub24
                    ? matkul3?.valuesub24
                    : "",
                },
              ],
            },
          ]);
          setInput4([
            {
              ...input4[0],
              sub: [
                {
                  ...input4[0].sub[0],
                  value: matkul4?.sub11 ? matkul4?.sub11 : "",
                  klasifikasiValue: matkul4?.valuesub11
                    ? matkul4?.valuesub11
                    : "",
                },
                {
                  ...input4[0].sub[1],
                  value: matkul4?.sub12 ? matkul4?.sub12 : "",
                  klasifikasiValue: matkul4?.valuesub12
                    ? matkul4?.valuesub12
                    : "",
                },
                {
                  ...input4[0].sub[2],
                  value: matkul4?.sub13 ? matkul4?.sub13 : "",
                  klasifikasiValue: matkul4?.valuesub13
                    ? matkul4?.valuesub13
                    : "",
                },
                {
                  ...input4[0].sub[3],
                  value: matkul4?.sub14 ? matkul4?.sub14 : "",
                  klasifikasiValue: matkul4?.valuesub14
                    ? matkul4?.valuesub14
                    : "",
                },
              ],
            },
          ]);
          setInput5([
            {
              ...input5[0],
              value: matkul5?.sub1 ? matkul5?.sub1 : "",
              klasifikasiValue: matkul5?.valuesub1 ? matkul5?.valuesub1 : "",
            },
            {
              ...input5[1],
              value: matkul5?.sub2 ? matkul5?.sub2 : "",
              klasifikasiValue: matkul5?.valuesub2 ? matkul5?.valuesub2 : "",
            },
            {
              ...input5[2],
              value: matkul5?.sub3 ? matkul5?.sub3 : "",
              klasifikasiValue: matkul5?.valuesub3 ? matkul5?.valuesub3 : "",
            },
          ]);
          setInput6([
            {
              ...input6[0],
              value: matkul6?.sub1 ? matkul6?.sub1 : "",
              klasifikasiValue: matkul6?.valuesub1 ? matkul6?.valuesub1 : "",
            },
          ]);
          setAverage({
            avg1: matkul1?.average,
            avg2: matkul2?.average,
            avg3: matkul3?.average,
            avg4: matkul4?.average,
            avg5: matkul5?.average,
            avg6: matkul6?.average,
          });
          setHurufMutu({
            hurufMutu1: matkul1?.hurufmutu,
            hurufMutu2: matkul2?.hurufmutu,
            hurufMutu3: matkul3?.hurufmutu,
            hurufMutu4: matkul4?.hurufmutu,
            hurufMutu5: matkul5?.hurufmutu,
            hurufMutu6: matkul6?.hurufmutu,
          });
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          navigate("/");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            customClass: {
              container: "z-[99999]",
            },
            text: error,
          });
        });
    } else {
      navigate("/");
    }
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
            IPK
          </div>
          <div className="col-span-full p-1 flex items-center sm:col-span-10">
            4.00
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
          <div className="col-span-full p-1 flex items-center sm:col-span-10">
            {token?.idUser === dataMahasiswa?.idpembimbing1
              ? "Pembimbing 1"
              : token?.idUser === dataMahasiswa?.idpembimbing2
              ? "Pembimbing 2"
              : token?.idUser === dataMahasiswa?.idpenguji
              ? "Penguji"
              : ""}
          </div>
        </div>
      </div>
      <div
        className={`p-4 bg-white rounded-xl shadow ${
          loading ? "text-center" : ""
        }`}
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <PulseLoader />
          </div>
        ) : (
          <form>
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
                    <th className="p-2 pb-4 whitespace-nowrap">Nilai Dosen</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 1 */}
                  <tr className="font-semibold">
                    <td className="p-2 pt-8">1</td>
                    <td className="p-2 pt-8" colSpan={2}>
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
                          disabled={true}
                          value={inp1.klasifikasiValue}
                        >
                          {inp1.klasifikasi.map((item, itemIdx) => (
                            <option key={itemIdx} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          step={0.1}
                          disabled={true}
                          className={`w-full p-2 rounded outline-none border arrow-none ${
                            inp1.error ? "border border-red-500" : ""
                          }`}
                          value={inp1.value}
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
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Rata-rata Nilai</td>
                    <td className="p-2">
                      <input
                        type="number"
                        disabled={true}
                        value={average.avg1}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Huruf Mutu</td>
                    <td className="p-2">
                      <input
                        type="text"
                        disabled={true}
                        value={hurufMutu.hurufMutu1}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>

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
                          disabled={true}
                          value={inp2.klasifikasiValue}
                        >
                          {inp2.klasifikasi.map((item, itemIdx) => (
                            <option key={itemIdx} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          step={0.1}
                          disabled={true}
                          className={`w-full p-2 rounded outline-none border arrow-none ${
                            inp2.error ? "border border-red-500" : ""
                          }`}
                          value={inp2.value}
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
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Rata-rata Nilai</td>
                    <td className="p-2">
                      <input
                        type="number"
                        disabled={true}
                        value={average.avg2}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Huruf Mutu</td>
                    <td className="p-2">
                      <input
                        type="text"
                        disabled={true}
                        value={hurufMutu.hurufMutu2}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>

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
                              disabled={true}
                              value={inp3.klasifikasiValue}
                            >
                              {inp3sub.klasifikasi.map((item, itemIdx) => (
                                <option key={itemIdx} value={item.value}>
                                  {item.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="p-2">
                            <input
                              type="number"
                              step={0.1}
                              disabled={true}
                              className={`w-full p-2 rounded outline-none border arrow-none ${
                                inp3sub.error ? "border border-red-500" : ""
                              }`}
                              value={inp3sub.value}
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
                            disabled={true}
                            value={inp3.klasifikasiValue}
                          >
                            {inp3.klasifikasi.map((item, itemIdx) => (
                              <option key={itemIdx} value={item.value}>
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            step={0.1}
                            disabled={true}
                            className={`w-full p-2 rounded outline-none border arrow-none ${
                              inp3.error ? "border border-red-500" : ""
                            }`}
                            value={inp3.value}
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
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Rata-rata Nilai</td>
                    <td className="p-2">
                      <input
                        type="number"
                        disabled={true}
                        value={average.avg3}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Huruf Mutu</td>
                    <td className="p-2">
                      <input
                        type="text"
                        disabled={true}
                        value={hurufMutu.hurufMutu3}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>

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
                              disabled={true}
                              value={inp4sub.klasifikasiValue}
                            >
                              {inp4sub.klasifikasi.map((item, itemIdx) => (
                                <option key={itemIdx} value={item.value}>
                                  {item.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="p-2">
                            <input
                              type="number"
                              step={0.1}
                              disabled={true}
                              className={`w-full p-2 rounded outline-none border arrow-none ${
                                inp4sub.error ? "border border-red-500" : ""
                              }`}
                              value={inp4sub.value}
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
                            disabled={true}
                            value={inp4.klasifikasiValue}
                          >
                            {inp4.klasifikasi.map((item, itemIdx) => (
                              <option key={itemIdx} value={item.value}>
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            step={0.1}
                            disabled={true}
                            className={`w-full p-2 rounded outline-none border arrow-none ${
                              inp4.error ? "border border-red-500" : ""
                            }`}
                            value={inp4.value}
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
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Rata-rata Nilai</td>
                    <td className="p-2">
                      <input
                        type="number"
                        disabled={true}
                        value={average.avg4}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Huruf Mutu</td>
                    <td className="p-2">
                      <input
                        type="text"
                        disabled={true}
                        value={hurufMutu.hurufMutu4}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>

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
                          disabled={true}
                          value={inp5.klasifikasiValue}
                        >
                          {inp5.klasifikasi.map((item, itemIdx) => (
                            <option key={itemIdx} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          step={0.1}
                          disabled={true}
                          className={`w-full p-2 rounded outline-none border arrow-none ${
                            inp5.error ? "border border-red-500" : ""
                          }`}
                          value={inp5.value}
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
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Rata-rata Nilai</td>
                    <td className="p-2">
                      <input
                        type="number"
                        disabled={true}
                        value={average.avg5}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Huruf Mutu</td>
                    <td className="p-2">
                      <input
                        type="text"
                        disabled={true}
                        value={hurufMutu.hurufMutu5}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>

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
                          disabled={true}
                          value={inp6.klasifikasiValue}
                        >
                          {inp6.klasifikasi.map((item, itemIdx) => (
                            <option key={itemIdx} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          step={0.1}
                          disabled={true}
                          className={`w-full p-2 rounded outline-none border arrow-none ${
                            inp6.error ? "border border-red-500" : ""
                          }`}
                          value={inp6.value}
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
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Rata-rata Nilai</td>
                    <td className="p-2">
                      <input
                        type="number"
                        disabled={true}
                        value={average.avg6}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>
                  <tr className="font-semibold">
                    <td colSpan={2}></td>
                    <td className="p-2 text-right text-xs">Huruf Mutu</td>
                    <td className="p-2">
                      <input
                        type="text"
                        disabled={true}
                        value={hurufMutu.hurufMutu6}
                        className={`w-full p-2 rounded outline-none border arrow-none`}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default DetailPage;
