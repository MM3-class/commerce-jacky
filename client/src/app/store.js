import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/rootReducer";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const configPersist = {
    key: "jacky cart",
    storage,
    whitelist: ['cart', 'isValidCoupon', 'favorite', 'buyNow', "searchTerm"]
}
const persistedReducer = persistReducer(configPersist, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default persistStore(store)