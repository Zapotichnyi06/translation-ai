import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reducers";

{/*TODO create notify*/}

export interface AppState {
  notify: string | null;
  theme: "light" | "dark";
}

export const initialAppState: AppState = {
  notify: null,
  theme: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setNotify(state, action: PayloadAction<string | null>) {
      state.notify = action.payload;
    },
    setTheme(state, action: PayloadAction<"dark" | "light">) {
      state.theme = action.payload;
    },
  },
});

const { reducer } = appSlice;
export { reducer as appReducer };

export const selectNotify = (state: RootState) => state.app.notify;
export const selectTheme = (state: RootState) => state.app.theme;
export const { setNotify, setTheme } = appSlice.actions;
