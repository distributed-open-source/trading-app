import ThemeContext from "@/context/themeContext";
import { useContext } from "react";

export default function Switchmode(){
    const thememode=useContext(ThemeContext);
    return(
       <button
       className="p-1 bordered "
            onClick={
                ()=>{
                    thememode.setDarkmode(!thememode.isDarkmode);
                }
            }
        >
           Switch mode {thememode.isDarkmode?"Dark":"Light"} 
        </button>
    );
}