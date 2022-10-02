import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompLayout } from "./components";
import {
  DetailPage,
  HomePage,
  InputNilaiPage,
  LoginPage,
  MahasiswaPage,
  PrivateRoute,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <CompLayout />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="nilai-mahasiswa"
            element={
              <PrivateRoute>
                <MahasiswaPage />
              </PrivateRoute>
            }
          />
          <Route
            path="form/:id"
            element={
              <PrivateRoute>
                <InputNilaiPage />
              </PrivateRoute>
            }
          />
          <Route
            path="detail/:id"
            element={
              <PrivateRoute>
                <DetailPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
