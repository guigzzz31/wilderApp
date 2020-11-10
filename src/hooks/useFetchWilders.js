import { useEffect } from "react";
import axios from "axios";

const useFetchWilders = (dispatch) => {
  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("api/wilders");
        console.log("result axios", result);
        dispatch({
          type: "WILDERS_FETCH_SUCCESS",
          wilders: result.data.result,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchWilders();
  }, [dispatch]);
};

export default useFetchWilders;
