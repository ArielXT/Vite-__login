import Router from "./router";
import { ThemeProvider } from "@mui/material/styles";
import { UserProvider } from "./context/UserContext";
import "./index.css";
import theme from "./theme";

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;