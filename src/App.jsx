import Router from "./router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;