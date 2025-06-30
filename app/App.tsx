import React, {FC, useEffect, useCallback, memo} from "react";
import { selectTheme, setTheme } from "@/src/reducers/app.reducer";
import { useAppDispatch, useAppSelector } from "@/src/reducers/reducers";

interface AppProps {
    Component: React.ComponentType<any>;
    pageProps: any;
}

export const App: FC<AppProps> = memo(({ Component, pageProps }) => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    const saveThemeToLocalStorage = useCallback((theme: string) => {
        localStorage.setItem("theme", theme);
    }, []);

    const applyTheme = useCallback((theme: string) => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            dispatch(setTheme(savedTheme));
            applyTheme(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            dispatch(setTheme("dark"));
            applyTheme("dark");
        }
    }, [dispatch, applyTheme]);

    useEffect(() => {
        applyTheme(theme);
        saveThemeToLocalStorage(theme);
    }, [theme, applyTheme, saveThemeToLocalStorage]);

    return (
        <>
            <Component {...pageProps} />
        </>
    );
});

App.displayName = "App";
