import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appReducer } from "./app.reducer";

const rootReducer = combineReducers({
    app: appReducer,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: false,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: true,
                ignoredPaths: ["app.popup"]
            }
        })
});

export { store };

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch: () => RootDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
