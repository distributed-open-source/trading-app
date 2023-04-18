import ThemeContext from "./themeContext";
import { useState, ReactNode, useEffect } from "react";

export default function ThemeContextProvider({children}:ReactNode){
    const [isDarkMode,setDarkmode]=useState(true);

    useEffect(()=>{
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || !('theme' in localStorage)) {//default dark
            document.documentElement.classList.add('dark');
            setDarkmode(true);
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            setDarkmode(false);
            localStorage.theme = 'light';
        }
    });

    function setdark(isdark:boolean){
        if(isdark){
            document.documentElement.classList.add('dark');
            setDarkmode(true);
            localStorage.theme = 'dark';
        }else{
            document.documentElement.classList.remove('dark');
            setDarkmode(false);
            localStorage.theme = 'light';
        }
    }

    useEffect(()=>{
        if(isDarkMode===true){
            setdark(true);
        }else{
            setdark(false);
        }
    },[isDarkMode]);
    return(
        <ThemeContext.Provider value={
            {
                isDarkmode : isDarkMode,
                setDarkmode : setDarkmode
            }}>
            {children}
        </ThemeContext.Provider>
    );
}