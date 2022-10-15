import { CompTemplatePdf } from "components";
import React, { useEffect, useRef, useState } from "react";
import { BsPrinterFill } from "react-icons/bs";
import { IoArrowBackOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const TemplatePdf = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const componentRef = useRef();
  const [dataMahasiswa, setDataMahasiswa] = useState(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Nilai Mahasiswa PPI UNILA - ${dataMahasiswa?.nama}`,
  });

  useEffect(() => {
    if (location.state?.mahasiswa) {
      setDataMahasiswa(location.state.mahasiswa);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="bg-slate-100 w-full flex p-4 px-16 justify-between items-center drop-shadow fixed">
        <div className="font-medium">Nilai Mahasiswa</div>
        <div className="flex justify-center items-center gap-4 text-sm">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-white px-3 p-1 rounded"
          >
            <IoArrowBackOutline /> Kembali
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-white px-4 py-1 transition-all rounded"
          >
            <BsPrinterFill /> Cetak
          </button>
        </div>
      </div>
      <div className="w-full min-h-screen bg-slate-200 flex justify-center py-20">
        {dataMahasiswa && (
          <CompTemplatePdf ref={componentRef} dataMahasiswa={dataMahasiswa} />
        )}
      </div>
    </div>
  );
};

export default TemplatePdf;
