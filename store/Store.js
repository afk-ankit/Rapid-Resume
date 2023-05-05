import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slice/userSlice";

function excludeUrl(state) {
  const { url, ...stateWithoutUrl } = state;
  return stateWithoutUrl;
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "firstName",
    "lastName",
    "email",
    "country",
    "phoneNumber",
    "language",
    "softSkill",
    "technicalSkill",
    "about",
    "education",
    "job",
    "hobby",
    "selectedSoftSkill",
    "selectedTechnicalSkill",
    "selectedLanguage",
  ],
  // transforms: [excludeUrl],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

export default store;
