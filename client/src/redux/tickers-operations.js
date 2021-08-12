import io from "socket.io-client";

import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
} from "./tickers-actions";

const getTickers = () => async (dispatch) => {
  dispatch(getTickersRequest());

  try {
    const socket = await io.connect("http://localhost:4000");
    socket.emit("start");

    socket.on("ticker", function (res) {
      dispatch(getTickersSuccess(res));
    });
  } catch (err) {
    dispatch(getTickersError(err.message));
  }
};

export { getTickers };
