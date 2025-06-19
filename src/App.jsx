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
