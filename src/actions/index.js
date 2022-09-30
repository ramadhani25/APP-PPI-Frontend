import axios from "axios";
import { Navigate } from "react-router-dom";

export const getData = (reducers, data, url, type) => {
  const { dispatch, redux } = reducers;
  dispatch(
    redux({
      type: type,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })
  );

  axios({
    method: "GET",
    url: url + data.param,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      const newResponse = response.data.data.mahasiswa.map((item) => {
        if (item.users) {
          const pembimbing1 = item.users.filter(
            (pem1) => pem1.id === item.idpembimbing1
          );
          const pembimbing2 = item.users.filter(
            (pem2) => pem2.id === item.idpembimbing2
          );
          const penguji = item.users.filter(
            (peng) => peng.id === item.idpenguji
          );

          return { ...item, pembimbing1, pembimbing2, penguji };
        }

        return item;
      });
      const res = {
        ...response.data,
        data: { ...response.data.data, mahasiswa: newResponse },
      };
      dispatch(
        redux({
          type: type,
          payload: {
            loading: false,
            data: res,
            errorMessage: false,
          },
        })
      );
    })
    .catch((error) => {
      if (error.response.data.status === 403) {
        localStorage.removeItem("token");
        <Navigate to={"/login"} />;
      }
      dispatch(
        redux({
          type: type,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      );
    });
};

export const addData = async (data, url) => {
  await axios({
    method: "POST",
    url: url,
    data: data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const deleteData = async (url) => {
  await axios({
    method: "DELETE",
    url: url,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
