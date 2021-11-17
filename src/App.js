import Navigation from "./components/Navigation";
import GlobalStyle, { lightTheme, darkTheme } from "./theme/GlobalStyle";
import { useDarkMode } from "./theme/useDarkMode";
import { ThemeProvider } from "styled-components";
import Pages from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <BrowserRouter>
          <GlobalStyle />
          <Navigation theme={theme} toggleTheme={toggleTheme} />
          <Pages />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
