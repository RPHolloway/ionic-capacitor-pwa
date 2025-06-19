import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import Profile from "./pages/Profile/Profile";
//import Login from "./pages/Login/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#183c69",
    },
    secondary: {
      main: "#64a2f4",
    },
    background: {
      default: "#faf9fa",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/profile" replace />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
