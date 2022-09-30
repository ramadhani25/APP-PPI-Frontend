import { configureStore } from "@reduxjs/toolkit";
import mahasiswaSlice from "./mahasiswaSlice";

export default configureStore({
  reducer: {
    mahasiswa: mahasiswaSlice,
  },
});
