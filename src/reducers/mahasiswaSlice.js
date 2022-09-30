import { createSlice } from "@reduxjs/toolkit";

export const mahasiswaSlice = createSlice({
  name: "mahasiswa",
  initialState: {
    getMahasiswaResult: false,
    getMahasiswaLoading: false,
    getMahasiswaError: false,
    addMahasiswaResult: false,
    addMahasiswaLoading: false,
    deleteMahasiswaResult: false,
  },
  reducers: {
    mahasiswaReducers: (state, action) => {
      const { type, payload } = action.payload;
      switch (type) {
        case "GET_MAHASISWA":
          return {
            ...state,
            getMahasiswaResult: payload.data,
            getMahasiswaLoading: payload.loading,
            getMahasiswaError: payload.errorMessage,
          };
        case "ADD_MAHASISWA":
          return {
            ...state,
            addMahasiswaResult: payload.data,
            addMahasiswaLoading: payload.loading,
          };
        case "DELETE_MAHASISWA":
          return {
            ...state,
            deleteMahasiswaResult: payload.data,
          };
        default:
          return state;
      }
    },
  },
});

export const { mahasiswaReducers } = mahasiswaSlice.actions;

export default mahasiswaSlice.reducer;
