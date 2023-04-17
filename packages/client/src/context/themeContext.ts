import { createContext, Dispatch, SetStateAction } from "react";

interface themetype{
    isDarkmode : boolean,
    setDarkmode : Dispatch<SetStateAction<boolean>>
}
const ThemeContext = createContext<themetype>({
        isDarkmode : true,
        setDarkmode :()=>{

    }
});
export default ThemeContext;