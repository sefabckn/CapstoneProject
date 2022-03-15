import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../../services/CryptoApi";
import { CryptoNewsApi } from "../../services/CryptoNewsApi";
import { Users } from "../../services/Users";

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
    [Users.reducerPath]: Users.reducer,
  },
});
