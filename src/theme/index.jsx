import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#F15412",
            contrastText: "#fff",
        },
        secondary: {
            main: "#f50057",
            contrastText: "#fff",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
});

export default theme;