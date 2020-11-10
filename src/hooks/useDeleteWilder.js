import { useEffect } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";

const useDeleteWilder = (dispatch) => {
  useEffect(() => {
    const deleteWilder = async (id) => {
      try {
        let result = await axios.delete(`/api/wilders/${id}`, id);
        let wilders;
        if (result.data.success) {
          dispatch({
            type: "WILDER_DELETED",
            deletedWilder: result.data.result,
            wilders: [
              wilders.splice(
                wilders.findIndex((w) => (w._id = id)),
                1
              ),
            ],
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    deleteWilder();
  }, [dispatch]);
};

export default useDeleteWilder;
