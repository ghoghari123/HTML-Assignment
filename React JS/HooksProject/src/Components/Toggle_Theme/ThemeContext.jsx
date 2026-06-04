import { createContext } from "react";

export const ThemeConetxt = createContext()
export default function ThemeProvide({ children }) {
    const [thee, setTheme] = useState("light")
    return (
        <ThemeConetxt.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeConetxt.Provider>
    )
}