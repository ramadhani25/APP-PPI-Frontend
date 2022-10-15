import React from "react";
import logo from "assets/logo-unila-hitam-putih.png";

const CompTemplatePdf = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-[21cm] h-[29.7cm] bg-white p-6 font-serif">
      {/* Header */}
      <div className="flex gap-12 justify-evenly items-center">
        <img src={logo} alt="logo" />
        <div className="text-center font-cambria leading-tight mr-6">
          <div className="font-medium">
            KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI
          </div>
          <div className="font-bold">UNIVERSITAS LAMPUNG - FAKULTAS TEKNIK</div>
          <div className="text-[22px] font-bold">
            PROGRAM STUDI PROGRAM PROFESI INSINYUR
          </div>
          <div className="text-[13px]">
            Gedung A Dekanat Fakultas Teknik
            <br />
            Jalan Prof. Dr. Soemantri Brojonegoro No. 1 Bandar Lampung 35145
            <br />
            Telepon (0721) 704947 Fax. (0721) 704947
            <br />
            Email :{" "}
            <a
              href="mailto:ppi@eng.unila.ac.id"
              className="text-blue-600 underline"
            >
              ppi@eng.unila.ac.id
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-4 mb-[1px] border-2 border-black" />
      <hr className="mb-4 border-black" />

      {/* Content */}
      <div>
        <div className="text-center font-bold underline text-lg leading-tight">
          NILAI MAHASISWA
          <br />
          PROGRAM STUDI PROGRAM PROFESI INSINYUR
          <br />
          UNIVERSITAS LAMPUNG
        </div>

        <br />
        <br />
        <br />

        {/* Table */}
        <div>
          <table>
            <thead>
              <tr className="text-[13px]">
                <th className="font-normal border border-black p-2">No</th>
                <th className="font-normal border border-black p-2">NPM</th>
                <th className="font-normal border border-black p-2">
                  Nama Mahasiswa
                </th>
                <th className="font-normal border border-black p-2">
                  Kode Etik dan Etika Profesi
                </th>
                <th className="font-normal border border-black p-2">
                  Profesionalisme Keinsiinyuran
                </th>
                <th className="font-normal border border-black p-2">
                  Keselamatan Kesehatan Keamanan Kerja dan Lingkungan
                </th>
                <th className="font-normal border border-black p-2">
                  Praktik Keinsinyuran
                </th>
                <th className="font-normal border border-black p-2">
                  Studi Kasus
                </th>
                <th className="font-normal border border-black p-2">
                  Seminar Workshop dan Diskusi
                </th>
                <th className="font-normal border border-black p-2">IPK</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[13px]">
                <td className="border border-black p-2">1</td>
                <td className="border border-black p-2">
                  {props?.dataMahasiswa.npm}
                </td>
                <td className="border border-black p-2">
                  {props?.dataMahasiswa.nama}
                </td>
                <td className="border border-black p-2">
                  {props?.dataMahasiswa.am1.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {props?.dataMahasiswa.am2.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {props?.dataMahasiswa.am3.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {props?.dataMahasiswa.am4.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {props?.dataMahasiswa.am5.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {props?.dataMahasiswa.am6.toFixed(2)}
                </td>
                <td className="border border-black p-2">
                  {props?.dataMahasiswa.ipk.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />
        {/* TTD */}
        <div className="flex justify-end mr-4">
          <div className="text-[13px]">
            <div>Mengetahui,</div>
            <div>Ketua</div>
            <br />
            <br />
            <br />
            <br />
            <div>Dr. Eng. Ir. Dikpride Despa, S.T., M.T., IPM., ASEAN Eng</div>
            <div>NIP. 19720428 199803 2001</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CompTemplatePdf;
