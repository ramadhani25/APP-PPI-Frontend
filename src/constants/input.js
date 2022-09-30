export const formInput1 = [
  {
    no: "1.1",
    mataKuliah: "Organisasi Profesi & Organisasi Lainnya (>= 3)",
    value: "",
    error: "",
    klasifikasiValue: 0,
    klasifikasi: [
      {
        label: "Setingkat Kab/Kota dan Provinsi",
        value: 0,
      },
      {
        label: "Setingkat kab/kota, Provinsi dan Nasional",
        value: 1,
      },
      {
        label: "Setingkat kab/kota, Provinsi, Nasional dan Internasional",
        value: 2,
      },
    ],
    range: [70, 74.9],
  },
  {
    no: "1.2",
    mataKuliah: "Tanda Penghargaan (>=3)",
    value: "",
    error: "",
    klasifikasiValue: 0,
    klasifikasi: [
      {
        label: "Penghargaan lokal/internal",
        value: 0,
      },
      {
        label: "Penghargaan lokal, provinsi dan nasional",
        value: 1,
      },
      {
        label: "Penghargaan lokal, provinsi, nasional dan Internasional",
        value: 2,
      },
    ],
    range: [70, 74.9],
  },
  {
    no: "1.3",
    mataKuliah: "Referensi Kode Etik dan Etika Profesi (2-4 referensi)",
    value: "",
    error: "",
    klasifikasiValue: 3,
    klasifikasi: [
      {
        label: "Referensi Sejawat/Atasan",
        value: 3,
      },
      {
        label: "Referensi Sejawat/Atasan, External dan IP",
        value: 2,
      },
    ],
    range: [71, 80.9],
  },
  {
    no: "1.4",
    mataKuliah: "Pengertian Pendapat dan Pengalaman Sendiri",
    value: "",
    error: "",
    klasifikasiValue: 3,
    klasifikasi: [
      {
        label: "Pengalaman Umum/biasa",
        value: 3,
      },
      {
        label: "Pengalaman komprehensif (merujuk waktu dan lokasi)",
        value: 2,
      },
    ],
    range: [71, 80.9],
  },
];

export const formInput2 = [
  {
    no: "2.1",
    mataKuliah: "Pendidikan Formal",
    value: "",
    error: "",
    klasifikasiValue: 0,
    klasifikasi: [
      {
        label: "S1 dan S2 non-Teknik Keinsinyuran",
        value: 0,
      },
      {
        label: "S2 Teknik Keinsinyuran dan S3 non-Teknik",
        value: 1,
      },
      {
        label: "S3 Teknik",
        value: 2,
      },
    ],
    range: [70, 74.9],
  },
  {
    no: "2.2",
    mataKuliah: "Pendidikan dan Pelatihan Teknik (>=5)",
    value: "",
    error: "",
    klasifikasiValue: 0,
    klasifikasi: [
      {
        label: "5 Lokal/nasional (1-2 bidang keahlian)",
        value: 0,
      },
      {
        label: "> 5 Nasional/Regional (beragam)",
        value: 1,
      },
      {
        label: "> 10 Nasional/Regional, dan Internasional",
        value: 2,
      },
    ],
    range: [70, 74.9],
  },
  {
    no: "2.3",
    mataKuliah: "Pengalaman Praktik Keinsinyuran",
    value: "",
    error: "",
    klasifikasiValue: 0,
    klasifikasi: [
      {
        label: "Pengalaman < 7 tahun",
        value: 0,
      },
      {
        label: "Pengalaman 7 - 15 tahun & beragam",
        value: 1,
      },
      {
        label: "Pengalaman > 15 tahun, beragam dan tingkat kesulitan kompleks",
        value: 2,
      },
    ],
    range: [70, 74.9],
  },
];

export const formInput3 = [
  {
    no: "3.1",
    mataKuliah: "Pendidikan/Pelatihan Manajemen dan bidang Lainnya (>5)",
    value: "",
    error: "",
    klasifikasiValue: 0,
    klasifikasi: [
      {
        label: "5 Lokal/nasional (1-2 bidang keahlian)",
        value: 0,
      },
      {
        label: "> 5 Nasional/Regional (beragam)",
        value: 1,
      },
      {
        label: "> 10 Nasional/Regional, dan Internasional",
        value: 2,
      },
    ],
    range: [70, 74.9],
  },
  {
    no: "3.2",
    mataKuliah: "Pengalaman Praktik Keinsinyuran",
    sub: [
      {
        no: "3.2.1",
        mataKuliah: "Praktik Keinsinyuran Setingkat Pengambil Kebijakan",
        value: "",
        error: "",
        klasifikasiValue: 3,
        klasifikasi: [
          {
            label: "s/d Kadis/Project Manager (kab/kota)",
            value: 3,
          },
          {
            label:
              "kabiro/asisten/kadis/project manager (provinsi)/sekda/kabalai/rektor/wakil rektor",
            value: 2,
          },
        ],
        range: [71, 80.9],
      },
      {
        no: "3.2.2",
        mataKuliah: "Praktik Keinsinyuran Setingkat Manajer",
        value: "",
        error: "",
        klasifikasiValue: 0,
        klasifikasi: [
          {
            label: "CV/PT (lokal)",
            value: 0,
          },
          {
            label: "PT/BUMN",
            value: 1,
          },
          {
            label: "PT/BUMN/JO/Multinasional",
            value: 2,
          },
        ],
        range: [70, 74.9],
      },
      {
        no: "3.2.3",
        mataKuliah: "Praktik Keinsinyuran Setingkat Pelaksana",
        value: "",
        error: "",
        klasifikasiValue: 0,
        klasifikasi: [
          {
            label: "CV/PT (lokal)",
            value: 0,
          },
          {
            label: "PT/BUMN",
            value: 1,
          },
          {
            label: "PT/BUMN/JO/Multinasional",
            value: 2,
          },
        ],
        range: [70, 74.9],
      },
      {
        no: "3.2.4",
        mataKuliah: "Praktik Keinsinyuran Setingkat Operator",
        value: "",
        error: "",
        klasifikasiValue: 0,
        klasifikasi: [
          {
            label: "CV/PT (lokal)",
            value: 0,
          },
          {
            label: "PT/BUMN",
            value: 1,
          },
          {
            label: "PT/BUMN/JO/Multinasional",
            value: 2,
          },
        ],
        range: [70, 74.9],
      },
    ],
  },
];

export const formInput4 = [
  {
    no: "4.1",
    mataKuliah:
      "Pengalaman Praktik Keinsinyuran (lembaga formal dan non-formal)",
    sub: [
      {
        no: "4.1.1",
        mataKuliah: "Dosen/peneliti/lembaga litbang",
        value: "",
        error: "",
        klasifikasiValue: 0,
        klasifikasi: [
          {
            label: "blm ada pengem (buku atau paten/formula)",
            value: 0,
          },
          {
            label: "ada pengemb (2 buku dan/atau 1 paten/formula)",
            value: 1,
          },
          {
            label: "ada pengem berkelanjutan",
            value: 2,
          },
        ],
        range: [70, 74.9],
      },
      {
        no: "4.1.2",
        mataKuliah: "Direksi/GM",
        value: "",
        error: "",
        klasifikasiValue: 0,
        klasifikasi: [
          {
            label: "CV/PT/Kasi/(kab/kota)",
            value: 0,
          },
          {
            label: "PT/Kacab BUMN/Kabid",
            value: 1,
          },
          {
            label: "Direksi PT/BUMN/kadis/kabiro/asisten",
            value: 2,
          },
        ],
        range: [70, 74.9],
      },
      {
        no: "4.1.3",
        mataKuliah: "Leader manager",
        value: "",
        error: "",
        klasifikasiValue: 0,
        klasifikasi: [
          {
            label: "CV/PT/Kasi(kab/kota)",
            value: 0,
          },
          {
            label: "PT/BUMN/Kabid",
            value: 1,
          },
          {
            label: "PT/BUMN/JO/Sekda/kadis",
            value: 2,
          },
        ],
        range: [70, 74.9],
      },
      {
        no: "4.1.4",
        mataKuliah: "Engineer",
        value: "",
        error: "",
        klasifikasiValue: 0,
        klasifikasi: [
          {
            label: "CV/PT/staf/pengalaman < 7thn",
            value: 0,
          },
          {
            label: "PT/BUMN/pengalaman 7-15thn",
            value: 1,
          },
          {
            label: "PT/BUMN/staf/pengalaman > 15thn",
            value: 2,
          },
        ],
        range: [70, 74.9],
      },
    ],
  },
];

export const formInput5 = [
  {
    no: "5.1",
    mataKuliah: "Sudi Kasus Keinsinyuran",
    value: "",
    error: "",
    klasifikasiValue: 0,
    klasifikasi: [
      {
        label: "pengalaman sampai dgn7thn(lokal/APBD)",
        value: 0,
      },
      {
        label: "pengal7-15thn (APBD/APBN)",
        value: 1,
      },
      {
        label: "pengalaman >15thn(APBN/ADB/WB/JO)",
        value: 2,
      },
    ],
    range: [70, 74.9],
  },
  {
    no: "5.2",
    mataKuliah:
      "Memberi pelayanan kepada masyarakat bidang keinsinyuran (>3 kegiatan)",
    value: "",
    error: "",
    klasifikasiValue: 0,
    klasifikasi: [
      {
        label: "masyarakat lokal/setempat",
        value: 0,
      },
      {
        label: "masyarakat lbh luas (kecamatan)",
        value: 1,
      },
      {
        label: "CSR dgn cakupan besar/multistakeholder",
        value: 2,
      },
    ],
    range: [70, 74.9],
  },
  {
    no: "5.3",
    mataKuliah: "Menunjang pelaksanaan tugas umum pemerintah dan pembangunan",
    value: "",
    error: "",
    klasifikasiValue: 3,
    klasifikasi: [
      {
        label: "s/d kadis/PPK/Project Manager (kab/kota)",
        value: 3,
      },
      {
        label:
          "kabiro/asisten/kadis(provinsi)/PPK/project manager/sekda/Nasional",
        value: 2,
      },
      {
        label:
          "Dosen/peneliti/lembaga litbang: pernah menjadi instruktur/bimbing praktek setingkat SMA dan instruktur/bimbing KP Mhs",
        value: 4,
      },
      {
        label:
          "Dosen/peneliti/lembaga litbang: invited speaker/reviewer jurnal tingkat nasional",
        value: 5,
      },
      {
        label:
          "Dosen/peneliti/lembaga litbang: invited speaker pada konferensi internasional (DN/LN), dosen tamu di PT/PT LN/reviewer jurnal internasional",
        value: 2,
      },
      {
        label:
          "Dosen/peneliti/lembaga litbang: Sebagai saksi ahli krang dari 3 kali",
        value: 3,
      },
      {
        label:
          "Dosen/peneliti/lembaga litbang: Sebagai saksi ahli (min 3 kali)",
        value: 2,
      },
    ],
    range: [71, 80.9],
  },
];

export const formInput6 = [
  {
    no: "6.1",
    mataKuliah:
      "Pengalaman Seminar, Workshop, Diskusi Sebagai pembicara maupun peserta",
    value: "",
    error: "",
    klasifikasiValue: 4,
    klasifikasi: [
      {
        label: "Lokal/kalangan sendiri/internal(>= 5 kegiatan)",
        value: 4,
      },
      {
        label: "Nasional(>= 5 kegiatan)",
        value: 5,
      },
      {
        label: "Nasional dan Internasional (DN) =5 kali",
        value: 5,
      },
      {
        label: "Nasional dan Internasional (DN) >5 kali",
        value: 2,
      },
    ],
    range: [71, 75.9],
  },
];
