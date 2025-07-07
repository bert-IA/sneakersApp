import { useContext } from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeContext } from "../context"

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0;  
    }
`

function GlobalStyle() {
    try {
        const context = useContext(ThemeContext)
        
        // Vérification si le contexte existe
        if (!context) {
            console.error('ThemeContext is undefined. Make sure GlobalStyle is wrapped in ThemeProvider.')
            return <StyledGlobalStyle isDarkMode={false} />
        }
        
        const { theme } = context
        
        return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
    } catch (error) {
        console.error('Error in GlobalStyle:', error)
        return <StyledGlobalStyle isDarkMode={false} />
    }
}

export default GlobalStyle