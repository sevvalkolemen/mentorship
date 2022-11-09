import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import users from "./users";

const store = configureStore({
    reducer: {
        auth,
        users
    }
})

export default store