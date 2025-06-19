import { ThemeProvider, createTheme } from "@mui/material";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import Profile from "./pages/Profile/Profile";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

setupIonicReact();

const theme = createTheme({
  palette: {
    primary: {
      main: "#183c69",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#64a2f4",
      contrastText: "#ffffff",
    },
    background: {
      default: "#faf9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#183c69",
      secondary: "rgba(24, 60, 105, 0.7)",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#64a2f4",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#183c69",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#faf9fa",
            "& fieldset": {
              borderColor: "rgba(24, 60, 105, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "#64a2f4",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#183c69",
            },
          },
        },
      },
    },
  },
});

export default function App() {
  return (
    <IonApp>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/">
                <Redirect to="/profile" />
              </Route>
              <Route path="/profile" component={Profile} exact={true} />
            </IonRouterOutlet>
          </IonReactRouter>
        </AuthProvider>
      </ThemeProvider>
    </IonApp>
  );
}
