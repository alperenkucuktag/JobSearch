import { configureStore } from "@reduxjs/toolkit";
import jobslice from "./jobslice";

export default configureStore({ reducer: jobslice });
