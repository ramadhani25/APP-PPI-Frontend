import React, { Fragment, useEffect, useState } from "react";
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
import { baseurl } from "constants";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";
import { Tab } from "@headlessui/react";

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dataMahasiswa, setDataMahasiswa] = useState();
  const [ipk, setIpk] = useState(null);

  // Pembimbing 1
  const [input1Pem1, setInput1Pem1] = useState(formInput1);
  const [input2Pem1, setInput2Pem1] = useState(formInput2);
  const [input3Pem1, setInput3Pem1] = useState(formInput3);
  const [input4Pem1, setInput4Pem1] = useState(formInput4);
  const [input5Pem1, setInput5Pem1] = useState(formInput5);
  const [input6Pem1, setInput6Pem1] = useState(formInput6);
  const [averagePem1, setAveragePem1] = useState({});
  const [hurufMutuPem1, setHurufMutuPem1] = useState({});
  const [angkaMutuPem1, setAngkaMutuPem1] = useState({});
  const [loadingPem1, setLoadingPem1] = useState(false);

  // Pembimbing 2
  const [input1Pem2, setInput1Pem2] = useState(formInput1);
  const [input2Pem2, setInput2Pem2] = useState(formInput2);
  const [input3Pem2, setInput3Pem2] = useState(formInput3);
  const [input4Pem2, setInput4Pem2] = useState(formInput4);
  const [input5Pem2, setInput5Pem2] = useState(formInput5);
  const [input6Pem2, setInput6Pem2] = useState(formInput6);
  const [averagePem2, setAveragePem2] = useState({});
  const [hurufMutuPem2, setHurufMutuPem2] = useState({});
  const [angkaMutuPem2, setAngkaMutuPem2] = useState({});
  const [loadingPem2, setLoadingPem2] = useState(false);

  // Penguji
  const [input1Peng, setInput1Peng] = useState(formInput1);
  const [input2Peng, setInput2Peng] = useState(formInput2);
  const [input3Peng, setInput3Peng] = useState(formInput3);
  const [input4Peng, setInput4Peng] = useState(formInput4);
  const [input5Peng, setInput5Peng] = useState(formInput5);
  const [input6Peng, setInput6Peng] = useState(formInput6);
  const [averagePeng, setAveragePeng] = useState({});
  const [hurufMutuPeng, setHurufMutuPeng] = useState({});
  const [angkaMutuPeng, setAngkaMutuPeng] = useState({});
  const [loadingPeng, setLoadingPeng] = useState(false);

  useEffect(() => {
    if (location.state?.mahasiswa) {
      const idmahasiswa = location.state.mahasiswa?.id;
      const penguji = location.state.mahasiswa?.idpenguji;
      const pembimbing2 = location.state.mahasiswa?.idpembimbing2;
      const pembimbing1 = location.state.mahasiswa?.idpembimbing1;

      if (pembimbing1 && pembimbing2 && penguji && idmahasiswa) {
        axios({
          method: "PUT",
          url: `${baseurl}/mahasiswa/${idmahasiswa}/pembimbing1/${pembimbing1}/pembimbing2/${pembimbing2}/penguji/${penguji}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            setIpk(response.data.data.ipk);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (location.state?.mahasiswa) {
      setDataMahasiswa(location.state.mahasiswa);
      const idmahasiswa = location.state.mahasiswa?.id;
      const pembimbing1 = location.state.mahasiswa?.idpembimbing1;
      setLoadingPem1(true);

      if (pembimbing1 !== null) {
        axios({
          method: "GET",
          url: `${baseurl}/matkul/iduser/${pembimbing1}/idmahasiswa/${idmahasiswa}`,
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
            setInput1Pem1([
              {
                ...input1Pem1[0],
                value: matkul1?.sub1 ? matkul1?.sub1 : "",
                klasifikasiValue: matkul1?.valuesub1 ? matkul1?.valuesub1 : "",
              },
              {
                ...input1Pem1[1],
                value: matkul1?.sub2 ? matkul1?.sub2 : "",
                klasifikasiValue: matkul1?.valuesub2 ? matkul1?.valuesub2 : "",
              },
              {
                ...input1Pem1[2],
                value: matkul1?.sub3 ? matkul1?.sub3 : "",
                klasifikasiValue: matkul1?.valuesub3 ? matkul1?.valuesub3 : "",
              },
              {
                ...input1Pem1[3],
                value: matkul1?.sub4 ? matkul1?.sub4 : "",
                klasifikasiValue: matkul1?.valuesub4 ? matkul1?.valuesub4 : "",
              },
            ]);
            setInput2Pem1([
              {
                ...input2Pem1[0],
                value: matkul2?.sub1 ? matkul2?.sub1 : "",
                klasifikasiValue: matkul2?.valuesub1 ? matkul2?.valuesub1 : "",
              },
              {
                ...input2Pem1[1],
                value: matkul2?.sub2 ? matkul2?.sub2 : "",
                klasifikasiValue: matkul2?.valuesub2 ? matkul2?.valuesub2 : "",
              },
              {
                ...input2Pem1[2],
                value: matkul2?.sub3 ? matkul2?.sub3 : "",
                klasifikasiValue: matkul2?.valuesub3 ? matkul2?.valuesub2 : "",
              },
            ]);
            setInput3Pem1([
              {
                ...input3Pem1[0],
                value: matkul3?.sub1 ? matkul3?.sub1 : "",
                klasifikasiValue: matkul3?.valuesub1 ? matkul3?.valuesub1 : "",
              },
              {
                ...input3Pem1[1],
                sub: [
                  {
                    ...input3Pem1[1].sub[0],
                    value: matkul3?.sub21 ? matkul3?.sub21 : "",
                    klasifikasiValue: matkul3?.valuesub21
                      ? matkul3?.valuesub21
                      : "",
                  },
                  {
                    ...input3Pem1[1].sub[1],
                    value: matkul3?.sub22 ? matkul3?.sub22 : "",
                    klasifikasiValue: matkul3?.valuesub22
                      ? matkul3?.valuesub22
                      : "",
                  },
                  {
                    ...input3Pem1[1].sub[2],
                    value: matkul3?.sub23 ? matkul3?.sub23 : "",
                    klasifikasiValue: matkul3?.valuesub23
                      ? matkul3?.valuesub23
                      : "",
                  },
                  {
                    ...input3Pem1[1].sub[3],
                    value: matkul3?.sub24 ? matkul3?.sub24 : "",
                    klasifikasiValue: matkul3?.valuesub24
                      ? matkul3?.valuesub24
                      : "",
                  },
                ],
              },
            ]);
            setInput4Pem1([
              {
                ...input4Pem1[0],
                sub: [
                  {
                    ...input4Pem1[0].sub[0],
                    value: matkul4?.sub11 ? matkul4?.sub11 : "",
                    klasifikasiValue: matkul4?.valuesub11
                      ? matkul4?.valuesub11
                      : "",
                  },
                  {
                    ...input4Pem1[0].sub[1],
                    value: matkul4?.sub12 ? matkul4?.sub12 : "",
                    klasifikasiValue: matkul4?.valuesub12
                      ? matkul4?.valuesub12
                      : "",
                  },
                  {
                    ...input4Pem1[0].sub[2],
                    value: matkul4?.sub13 ? matkul4?.sub13 : "",
                    klasifikasiValue: matkul4?.valuesub13
                      ? matkul4?.valuesub13
                      : "",
                  },
                  {
                    ...input4Pem1[0].sub[3],
                    value: matkul4?.sub14 ? matkul4?.sub14 : "",
                    klasifikasiValue: matkul4?.valuesub14
                      ? matkul4?.valuesub14
                      : "",
                  },
                ],
              },
            ]);
            setInput5Pem1([
              {
                ...input5Pem1[0],
                value: matkul5?.sub1 ? matkul5?.sub1 : "",
                klasifikasiValue: matkul5?.valuesub1 ? matkul5?.valuesub1 : "",
              },
              {
                ...input5Pem1[1],
                value: matkul5?.sub2 ? matkul5?.sub2 : "",
                klasifikasiValue: matkul5?.valuesub2 ? matkul5?.valuesub2 : "",
              },
              {
                ...input5Pem1[2],
                value: matkul5?.sub3 ? matkul5?.sub3 : "",
                klasifikasiValue: matkul5?.valuesub3 ? matkul5?.valuesub3 : "",
              },
            ]);
            setInput6Pem1([
              {
                ...input6Pem1[0],
                value: matkul6?.sub1 ? matkul6?.sub1 : "",
                klasifikasiValue: matkul6?.valuesub1 ? matkul6?.valuesub1 : "",
              },
            ]);
            setAveragePem1({
              avg1: matkul1?.average,
              avg2: matkul2?.average,
              avg3: matkul3?.average,
              avg4: matkul4?.average,
              avg5: matkul5?.average,
              avg6: matkul6?.average,
            });
            setHurufMutuPem1({
              hurufMutu1: matkul1?.hurufmutu,
              hurufMutu2: matkul2?.hurufmutu,
              hurufMutu3: matkul3?.hurufmutu,
              hurufMutu4: matkul4?.hurufmutu,
              hurufMutu5: matkul5?.hurufmutu,
              hurufMutu6: matkul6?.hurufmutu,
            });
            setAngkaMutuPem1({
              angkaMutu1: matkul1?.angkamutu,
              angkaMutu2: matkul2?.angkamutu,
              angkaMutu3: matkul3?.angkamutu,
              angkaMutu4: matkul4?.angkamutu,
              angkaMutu5: matkul5?.angkamutu,
              angkaMutu6: matkul6?.angkamutu,
            });
            setLoadingPem1(false);
          })
          .catch((error) => {
            setLoadingPem1(false);
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
        setLoadingPem1(false);
      }
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (location.state?.mahasiswa) {
      setDataMahasiswa(location.state.mahasiswa);
      const idmahasiswa = location.state.mahasiswa?.id;
      const pembimbing2 = location.state.mahasiswa?.idpembimbing2;
      setLoadingPem2(true);

      if (pembimbing2 !== null) {
        axios({
          method: "GET",
          url: `${baseurl}/matkul/iduser/${pembimbing2}/idmahasiswa/${idmahasiswa}`,
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
            setInput1Pem2([
              {
                ...input1Pem2[0],
                value: matkul1?.sub1 ? matkul1?.sub1 : "",
                klasifikasiValue: matkul1?.valuesub1 ? matkul1?.valuesub1 : "",
              },
              {
                ...input1Pem2[1],
                value: matkul1?.sub2 ? matkul1?.sub2 : "",
                klasifikasiValue: matkul1?.valuesub2 ? matkul1?.valuesub2 : "",
              },
              {
                ...input1Pem2[2],
                value: matkul1?.sub3 ? matkul1?.sub3 : "",
                klasifikasiValue: matkul1?.valuesub3 ? matkul1?.valuesub3 : "",
              },
              {
                ...input1Pem2[3],
                value: matkul1?.sub4 ? matkul1?.sub4 : "",
                klasifikasiValue: matkul1?.valuesub4 ? matkul1?.valuesub4 : "",
              },
            ]);
            setInput2Pem2([
              {
                ...input2Pem2[0],
                value: matkul2?.sub1 ? matkul2?.sub1 : "",
                klasifikasiValue: matkul2?.valuesub1 ? matkul2?.valuesub1 : "",
              },
              {
                ...input2Pem2[1],
                value: matkul2?.sub2 ? matkul2?.sub2 : "",
                klasifikasiValue: matkul2?.valuesub2 ? matkul2?.valuesub2 : "",
              },
              {
                ...input2Pem2[2],
                value: matkul2?.sub3 ? matkul2?.sub3 : "",
                klasifikasiValue: matkul2?.valuesub3 ? matkul2?.valuesub2 : "",
              },
            ]);
            setInput3Pem2([
              {
                ...input3Pem2[0],
                value: matkul3?.sub1 ? matkul3?.sub1 : "",
                klasifikasiValue: matkul3?.valuesub1 ? matkul3?.valuesub1 : "",
              },
              {
                ...input3Pem2[1],
                sub: [
                  {
                    ...input3Pem2[1].sub[0],
                    value: matkul3?.sub21 ? matkul3?.sub21 : "",
                    klasifikasiValue: matkul3?.valuesub21
                      ? matkul3?.valuesub21
                      : "",
                  },
                  {
                    ...input3Pem2[1].sub[1],
                    value: matkul3?.sub22 ? matkul3?.sub22 : "",
                    klasifikasiValue: matkul3?.valuesub22
                      ? matkul3?.valuesub22
                      : "",
                  },
                  {
                    ...input3Pem2[1].sub[2],
                    value: matkul3?.sub23 ? matkul3?.sub23 : "",
                    klasifikasiValue: matkul3?.valuesub23
                      ? matkul3?.valuesub23
                      : "",
                  },
                  {
                    ...input3Pem2[1].sub[3],
                    value: matkul3?.sub24 ? matkul3?.sub24 : "",
                    klasifikasiValue: matkul3?.valuesub24
                      ? matkul3?.valuesub24
                      : "",
                  },
                ],
              },
            ]);
            setInput4Pem2([
              {
                ...input4Pem2[0],
                sub: [
                  {
                    ...input4Pem2[0].sub[0],
                    value: matkul4?.sub11 ? matkul4?.sub11 : "",
                    klasifikasiValue: matkul4?.valuesub11
                      ? matkul4?.valuesub11
                      : "",
                  },
                  {
                    ...input4Pem2[0].sub[1],
                    value: matkul4?.sub12 ? matkul4?.sub12 : "",
                    klasifikasiValue: matkul4?.valuesub12
                      ? matkul4?.valuesub12
                      : "",
                  },
                  {
                    ...input4Pem2[0].sub[2],
                    value: matkul4?.sub13 ? matkul4?.sub13 : "",
                    klasifikasiValue: matkul4?.valuesub13
                      ? matkul4?.valuesub13
                      : "",
                  },
                  {
                    ...input4Pem2[0].sub[3],
                    value: matkul4?.sub14 ? matkul4?.sub14 : "",
                    klasifikasiValue: matkul4?.valuesub14
                      ? matkul4?.valuesub14
                      : "",
                  },
                ],
              },
            ]);
            setInput5Pem2([
              {
                ...input5Pem2[0],
                value: matkul5?.sub1 ? matkul5?.sub1 : "",
                klasifikasiValue: matkul5?.valuesub1 ? matkul5?.valuesub1 : "",
              },
              {
                ...input5Pem2[1],
                value: matkul5?.sub2 ? matkul5?.sub2 : "",
                klasifikasiValue: matkul5?.valuesub2 ? matkul5?.valuesub2 : "",
              },
              {
                ...input5Pem2[2],
                value: matkul5?.sub3 ? matkul5?.sub3 : "",
                klasifikasiValue: matkul5?.valuesub3 ? matkul5?.valuesub3 : "",
              },
            ]);
            setInput6Pem2([
              {
                ...input6Pem2[0],
                value: matkul6?.sub1 ? matkul6?.sub1 : "",
                klasifikasiValue: matkul6?.valuesub1 ? matkul6?.valuesub1 : "",
              },
            ]);
            setAveragePem2({
              avg1: matkul1?.average,
              avg2: matkul2?.average,
              avg3: matkul3?.average,
              avg4: matkul4?.average,
              avg5: matkul5?.average,
              avg6: matkul6?.average,
            });
            setHurufMutuPem2({
              hurufMutu1: matkul1?.hurufmutu,
              hurufMutu2: matkul2?.hurufmutu,
              hurufMutu3: matkul3?.hurufmutu,
              hurufMutu4: matkul4?.hurufmutu,
              hurufMutu5: matkul5?.hurufmutu,
              hurufMutu6: matkul6?.hurufmutu,
            });
            setAngkaMutuPem2({
              angkaMutu1: matkul1?.angkamutu,
              angkaMutu2: matkul2?.angkamutu,
              angkaMutu3: matkul3?.angkamutu,
              angkaMutu4: matkul4?.angkamutu,
              angkaMutu5: matkul5?.angkamutu,
              angkaMutu6: matkul6?.angkamutu,
            });
            setLoadingPem2(false);
          })
          .catch((error) => {
            setLoadingPem2(false);
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
        setLoadingPem2(false);
      }
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (location.state?.mahasiswa) {
      setDataMahasiswa(location.state.mahasiswa);
      const idmahasiswa = location.state.mahasiswa?.id;
      const penguji = location.state.mahasiswa?.idpenguji;
      setLoadingPeng(true);

      if (penguji !== null) {
        axios({
          method: "GET",
          url: `${baseurl}/matkul/iduser/${penguji}/idmahasiswa/${idmahasiswa}`,
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
            setInput1Peng([
              {
                ...input1Peng[0],
                value: matkul1?.sub1 ? matkul1?.sub1 : "",
                klasifikasiValue: matkul1?.valuesub1 ? matkul1?.valuesub1 : "",
              },
              {
                ...input1Peng[1],
                value: matkul1?.sub2 ? matkul1?.sub2 : "",
                klasifikasiValue: matkul1?.valuesub2 ? matkul1?.valuesub2 : "",
              },
              {
                ...input1Peng[2],
                value: matkul1?.sub3 ? matkul1?.sub3 : "",
                klasifikasiValue: matkul1?.valuesub3 ? matkul1?.valuesub3 : "",
              },
              {
                ...input1Peng[3],
                value: matkul1?.sub4 ? matkul1?.sub4 : "",
                klasifikasiValue: matkul1?.valuesub4 ? matkul1?.valuesub4 : "",
              },
            ]);
            setInput2Peng([
              {
                ...input2Peng[0],
                value: matkul2?.sub1 ? matkul2?.sub1 : "",
                klasifikasiValue: matkul2?.valuesub1 ? matkul2?.valuesub1 : "",
              },
              {
                ...input2Peng[1],
                value: matkul2?.sub2 ? matkul2?.sub2 : "",
                klasifikasiValue: matkul2?.valuesub2 ? matkul2?.valuesub2 : "",
              },
              {
                ...input2Peng[2],
                value: matkul2?.sub3 ? matkul2?.sub3 : "",
                klasifikasiValue: matkul2?.valuesub3 ? matkul2?.valuesub2 : "",
              },
            ]);
            setInput3Peng([
              {
                ...input3Peng[0],
                value: matkul3?.sub1 ? matkul3?.sub1 : "",
                klasifikasiValue: matkul3?.valuesub1 ? matkul3?.valuesub1 : "",
              },
              {
                ...input3Peng[1],
                sub: [
                  {
                    ...input3Peng[1].sub[0],
                    value: matkul3?.sub21 ? matkul3?.sub21 : "",
                    klasifikasiValue: matkul3?.valuesub21
                      ? matkul3?.valuesub21
                      : "",
                  },
                  {
                    ...input3Peng[1].sub[1],
                    value: matkul3?.sub22 ? matkul3?.sub22 : "",
                    klasifikasiValue: matkul3?.valuesub22
                      ? matkul3?.valuesub22
                      : "",
                  },
                  {
                    ...input3Peng[1].sub[2],
                    value: matkul3?.sub23 ? matkul3?.sub23 : "",
                    klasifikasiValue: matkul3?.valuesub23
                      ? matkul3?.valuesub23
                      : "",
                  },
                  {
                    ...input3Peng[1].sub[3],
                    value: matkul3?.sub24 ? matkul3?.sub24 : "",
                    klasifikasiValue: matkul3?.valuesub24
                      ? matkul3?.valuesub24
                      : "",
                  },
                ],
              },
            ]);
            setInput4Peng([
              {
                ...input4Peng[0],
                sub: [
                  {
                    ...input4Peng[0].sub[0],
                    value: matkul4?.sub11 ? matkul4?.sub11 : "",
                    klasifikasiValue: matkul4?.valuesub11
                      ? matkul4?.valuesub11
                      : "",
                  },
                  {
                    ...input4Peng[0].sub[1],
                    value: matkul4?.sub12 ? matkul4?.sub12 : "",
                    klasifikasiValue: matkul4?.valuesub12
                      ? matkul4?.valuesub12
                      : "",
                  },
                  {
                    ...input4Peng[0].sub[2],
                    value: matkul4?.sub13 ? matkul4?.sub13 : "",
                    klasifikasiValue: matkul4?.valuesub13
                      ? matkul4?.valuesub13
                      : "",
                  },
                  {
                    ...input4Peng[0].sub[3],
                    value: matkul4?.sub14 ? matkul4?.sub14 : "",
                    klasifikasiValue: matkul4?.valuesub14
                      ? matkul4?.valuesub14
                      : "",
                  },
                ],
              },
            ]);
            setInput5Peng([
              {
                ...input5Peng[0],
                value: matkul5?.sub1 ? matkul5?.sub1 : "",
                klasifikasiValue: matkul5?.valuesub1 ? matkul5?.valuesub1 : "",
              },
              {
                ...input5Peng[1],
                value: matkul5?.sub2 ? matkul5?.sub2 : "",
                klasifikasiValue: matkul5?.valuesub2 ? matkul5?.valuesub2 : "",
              },
              {
                ...input5Peng[2],
                value: matkul5?.sub3 ? matkul5?.sub3 : "",
                klasifikasiValue: matkul5?.valuesub3 ? matkul5?.valuesub3 : "",
              },
            ]);
            setInput6Peng([
              {
                ...input6Peng[0],
                value: matkul6?.sub1 ? matkul6?.sub1 : "",
                klasifikasiValue: matkul6?.valuesub1 ? matkul6?.valuesub1 : "",
              },
            ]);
            setAveragePeng({
              avg1: matkul1?.average,
              avg2: matkul2?.average,
              avg3: matkul3?.average,
              avg4: matkul4?.average,
              avg5: matkul5?.average,
              avg6: matkul6?.average,
            });
            setHurufMutuPeng({
              hurufMutu1: matkul1?.hurufmutu,
              hurufMutu2: matkul2?.hurufmutu,
              hurufMutu3: matkul3?.hurufmutu,
              hurufMutu4: matkul4?.hurufmutu,
              hurufMutu5: matkul5?.hurufmutu,
              hurufMutu6: matkul6?.hurufmutu,
            });
            setAngkaMutuPeng({
              angkaMutu1: matkul1?.angkamutu,
              angkaMutu2: matkul2?.angkamutu,
              angkaMutu3: matkul3?.angkamutu,
              angkaMutu4: matkul4?.angkamutu,
              angkaMutu5: matkul5?.angkamutu,
              angkaMutu6: matkul6?.angkamutu,
            });
            setLoadingPeng(false);
          })
          .catch((error) => {
            setLoadingPeng(false);
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
        setLoadingPeng(false);
      }
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mb-2"></div>
      <Tab.Group>
        <Tab.List className={`flex gap-2 mb-2`}>
          <button
            onClick={() => navigate(-1)}
            className="bg-white hover:bg-slate-50 p-2 rounded-xl shadow mr-4"
          >
            <IoArrowBack />
          </button>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`p-2 px-4 rounded-xl shadow text-xs font-semibold transition-all ${
                  selected ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                Pembimbing 1
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`p-2 px-4 rounded-xl shadow text-xs font-semibold transition-all ${
                  selected ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                Pembimbing 2
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`p-2 px-4 rounded-xl shadow text-xs font-semibold transition-all ${
                  selected ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                Penguji
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
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
                  {dataMahasiswa?.pembimbing1[0]?.name
                    ? dataMahasiswa?.pembimbing1[0]?.name
                    : ""}
                </div>
                <div className="col-span-full p-1 flex items-center font-medium sm:col-span-2">
                  IPK
                </div>
                <div className="col-span-full p-1 flex items-center sm:col-span-10">
                  {ipk ? ipk : ""}
                </div>
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-xl shadow ${
                loadingPem1 ? "text-center" : ""
              }`}
            >
              {loadingPem1 ? (
                <div className="flex justify-center items-center">
                  <PulseLoader />
                </div>
              ) : (
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
                        <th className="p-2 pb-4 whitespace-nowrap">
                          Nilai Dosen
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 1 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-8">1</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Kode Etik dan Etika Profesi Insinyur
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {input1Pem1.map((inp1, inp1Idx) => (
                        <tr key={inp1Idx}>
                          <td className="p-2">{inp1.no}</td>
                          <td className="p-2">{inp1.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem1.avg1}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem1.angkaMutu1}
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
                            value={hurufMutuPem1.hurufMutu1}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 2 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">2</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Profesionalisme Keinsinyuran
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {input2Pem1.map((inp2, inp2Idx) => (
                        <tr key={inp2Idx}>
                          <td className="p-2">{inp2.no}</td>
                          <td className="p-2">{inp2.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem1.avg2}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem1.angkaMutu2}
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
                            value={hurufMutuPem1.hurufMutu2}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 3 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">3</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Keselamatan Kesehatan Kerja dan Lingkungan
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {/* Sub 3 */}
                      {input3Pem1.map((inp3, inp3Idx) => {
                        if (inp3.sub) {
                          const newSub = inp3.sub.map((inp3sub, inp3subIdx) => (
                            <tr key={inp3subIdx}>
                              <td className="p-2">{inp3sub.no}</td>
                              <td className="p-2">{inp3sub.mataKuliah}</td>
                              <td className="p-2">
                                <select
                                  className="w-full p-2 rounded outline-none border appearance-none"
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
                                className="w-full p-2 rounded outline-none border appearance-none"
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
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem1.avg3}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem1.angkaMutu3}
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
                            value={hurufMutuPem1.hurufMutu3}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 4 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">4</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Praktik Keinsinyuran
                        </td>
                        <td className="p-2 pt-10">{`12`} SKS</td>
                      </tr>
                      {/* Sub 4 */}
                      {input4Pem1.map((inp4, inp4Idx) => {
                        if (inp4.sub) {
                          const newSub = inp4.sub.map((inp4sub, inp4subIdx) => (
                            <tr key={inp4subIdx}>
                              <td className="p-2">{inp4sub.no}</td>
                              <td className="p-2">{inp4sub.mataKuliah}</td>
                              <td className="p-2">
                                <select
                                  className="w-full p-2 rounded outline-none border appearance-none"
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
                                className="w-full p-2 rounded outline-none border appearance-none"
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
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem1.avg4}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem1.angkaMutu4}
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
                            value={hurufMutuPem1.hurufMutu4}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 5 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">5</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Studi Kasus
                        </td>
                        <td className="p-2 pt-10">{`4`} SKS</td>
                      </tr>
                      {input5Pem1.map((inp5, inp5Idx) => (
                        <tr key={inp5Idx}>
                          <td className="p-2">{inp5.no}</td>
                          <td className="p-2">{inp5.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem1.avg5}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem1.angkaMutu5}
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
                            value={hurufMutuPem1.hurufMutu5}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 6 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">6</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Seminar, Workshop, Diskusi
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {input6Pem1.map((inp6, inp6Idx) => (
                        <tr key={inp6Idx}>
                          <td className="p-2">{inp6.no}</td>
                          <td className="p-2">{inp6.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem1.avg6}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem1.angkaMutu6}
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
                            value={hurufMutuPem1.hurufMutu6}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Tab.Panel>
          <Tab.Panel>
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
                  {dataMahasiswa?.pembimbing2[0]?.name
                    ? dataMahasiswa?.pembimbing2[0]?.name
                    : ""}
                </div>
                <div className="col-span-full p-1 flex items-center font-medium sm:col-span-2">
                  IPK
                </div>
                <div className="col-span-full p-1 flex items-center sm:col-span-10">
                  {ipk ? ipk : ""}
                </div>
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-xl shadow ${
                loadingPem2 ? "text-center" : ""
              }`}
            >
              {loadingPem2 ? (
                <div className="flex justify-center items-center">
                  <PulseLoader />
                </div>
              ) : (
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
                        <th className="p-2 pb-4 whitespace-nowrap">
                          Nilai Dosen
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 1 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-8">1</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Kode Etik dan Etika Profesi Insinyur
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {input1Pem2.map((inp1, inp1Idx) => (
                        <tr key={inp1Idx}>
                          <td className="p-2">{inp1.no}</td>
                          <td className="p-2">{inp1.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem2.avg1}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem2.angkaMutu1}
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
                            value={hurufMutuPem2.hurufMutu1}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 2 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">2</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Profesionalisme Keinsinyuran
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {input2Pem2.map((inp2, inp2Idx) => (
                        <tr key={inp2Idx}>
                          <td className="p-2">{inp2.no}</td>
                          <td className="p-2">{inp2.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem2.avg2}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem2.angkaMutu2}
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
                            value={hurufMutuPem2.hurufMutu2}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 3 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">3</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Keselamatan Kesehatan Kerja dan Lingkungan
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {/* Sub 3 */}
                      {input3Pem2.map((inp3, inp3Idx) => {
                        if (inp3.sub) {
                          const newSub = inp3.sub.map((inp3sub, inp3subIdx) => (
                            <tr key={inp3subIdx}>
                              <td className="p-2">{inp3sub.no}</td>
                              <td className="p-2">{inp3sub.mataKuliah}</td>
                              <td className="p-2">
                                <select
                                  className="w-full p-2 rounded outline-none border appearance-none"
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
                                className="w-full p-2 rounded outline-none border appearance-none"
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
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem2.avg3}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem2.angkaMutu3}
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
                            value={hurufMutuPem2.hurufMutu3}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 4 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">4</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Praktik Keinsinyuran
                        </td>
                        <td className="p-2 pt-10">{`12`} SKS</td>
                      </tr>
                      {/* Sub 4 */}
                      {input4Pem2.map((inp4, inp4Idx) => {
                        if (inp4.sub) {
                          const newSub = inp4.sub.map((inp4sub, inp4subIdx) => (
                            <tr key={inp4subIdx}>
                              <td className="p-2">{inp4sub.no}</td>
                              <td className="p-2">{inp4sub.mataKuliah}</td>
                              <td className="p-2">
                                <select
                                  className="w-full p-2 rounded outline-none border appearance-none"
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
                                className="w-full p-2 rounded outline-none border appearance-none"
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
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem2.avg4}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem2.angkaMutu4}
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
                            value={hurufMutuPem2.hurufMutu4}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 5 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">5</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Studi Kasus
                        </td>
                        <td className="p-2 pt-10">{`4`} SKS</td>
                      </tr>
                      {input5Pem2.map((inp5, inp5Idx) => (
                        <tr key={inp5Idx}>
                          <td className="p-2">{inp5.no}</td>
                          <td className="p-2">{inp5.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem2.avg5}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem2.angkaMutu5}
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
                            value={hurufMutuPem2.hurufMutu5}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 6 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">6</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Seminar, Workshop, Diskusi
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {input6Pem2.map((inp6, inp6Idx) => (
                        <tr key={inp6Idx}>
                          <td className="p-2">{inp6.no}</td>
                          <td className="p-2">{inp6.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePem2.avg6}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPem2.angkaMutu6}
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
                            value={hurufMutuPem2.hurufMutu6}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Tab.Panel>
          <Tab.Panel>
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
                  {dataMahasiswa?.penguji[0]?.name
                    ? dataMahasiswa?.penguji[0]?.name
                    : ""}
                </div>
                <div className="col-span-full p-1 flex items-center font-medium sm:col-span-2">
                  IPK
                </div>
                <div className="col-span-full p-1 flex items-center sm:col-span-10">
                  {ipk ? ipk : ""}
                </div>
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-xl shadow ${
                loadingPeng ? "text-center" : ""
              }`}
            >
              {loadingPeng ? (
                <div className="flex justify-center items-center">
                  <PulseLoader />
                </div>
              ) : (
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
                        <th className="p-2 pb-4 whitespace-nowrap">
                          Nilai Dosen
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 1 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-8">1</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Kode Etik dan Etika Profesi Insinyur
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {input1Peng.map((inp1, inp1Idx) => (
                        <tr key={inp1Idx}>
                          <td className="p-2">{inp1.no}</td>
                          <td className="p-2">{inp1.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePeng.avg1}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPeng.angkaMutu1}
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
                            value={hurufMutuPeng.hurufMutu1}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 2 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">2</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Profesionalisme Keinsinyuran
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {input2Peng.map((inp2, inp2Idx) => (
                        <tr key={inp2Idx}>
                          <td className="p-2">{inp2.no}</td>
                          <td className="p-2">{inp2.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePeng.avg2}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPeng.angkaMutu2}
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
                            value={hurufMutuPeng.hurufMutu2}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 3 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">3</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Keselamatan Kesehatan Kerja dan Lingkungan
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {/* Sub 3 */}
                      {input3Peng.map((inp3, inp3Idx) => {
                        if (inp3.sub) {
                          const newSub = inp3.sub.map((inp3sub, inp3subIdx) => (
                            <tr key={inp3subIdx}>
                              <td className="p-2">{inp3sub.no}</td>
                              <td className="p-2">{inp3sub.mataKuliah}</td>
                              <td className="p-2">
                                <select
                                  className="w-full p-2 rounded outline-none border appearance-none"
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
                                className="w-full p-2 rounded outline-none border appearance-none"
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
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePeng.avg3}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPeng.angkaMutu3}
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
                            value={hurufMutuPeng.hurufMutu3}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 4 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">4</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Praktik Keinsinyuran
                        </td>
                        <td className="p-2 pt-10">{`12`} SKS</td>
                      </tr>
                      {/* Sub 4 */}
                      {input4Peng.map((inp4, inp4Idx) => {
                        if (inp4.sub) {
                          const newSub = inp4.sub.map((inp4sub, inp4subIdx) => (
                            <tr key={inp4subIdx}>
                              <td className="p-2">{inp4sub.no}</td>
                              <td className="p-2">{inp4sub.mataKuliah}</td>
                              <td className="p-2">
                                <select
                                  className="w-full p-2 rounded outline-none border appearance-none"
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
                                className="w-full p-2 rounded outline-none border appearance-none"
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
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePeng.avg4}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPeng.angkaMutu4}
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
                            value={hurufMutuPeng.hurufMutu4}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 5 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">5</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Studi Kasus
                        </td>
                        <td className="p-2 pt-10">{`4`} SKS</td>
                      </tr>
                      {input5Peng.map((inp5, inp5Idx) => (
                        <tr key={inp5Idx}>
                          <td className="p-2">{inp5.no}</td>
                          <td className="p-2">{inp5.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePeng.avg5}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPeng.angkaMutu5}
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
                            value={hurufMutuPeng.hurufMutu5}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>

                      {/* 6 */}
                      <tr className="font-semibold">
                        <td className="p-2 pt-10">6</td>
                        <td className="p-2 pt-10" colSpan={1}>
                          Seminar, Workshop, Diskusi
                        </td>
                        <td className="p-2 pt-10">{`2`} SKS</td>
                      </tr>
                      {input6Peng.map((inp6, inp6Idx) => (
                        <tr key={inp6Idx}>
                          <td className="p-2">{inp6.no}</td>
                          <td className="p-2">{inp6.mataKuliah}</td>
                          <td className="p-2">
                            <select
                              className="w-full p-2 rounded outline-none border appearance-none"
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
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">
                          Rata-rata Nilai
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            disabled={true}
                            value={averagePeng.avg6}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                      <tr className="font-semibold">
                        <td colSpan={2}></td>
                        <td className="p-2 text-right text-xs">Angka Mutu</td>
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={true}
                            value={angkaMutuPeng.angkaMutu6}
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
                            value={hurufMutuPeng.hurufMutu6}
                            className={`w-full p-2 rounded outline-none border arrow-none`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default DetailPage;
