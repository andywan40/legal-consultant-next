import "../styles/globals.css";
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { CookiesProvider, useCookies } from "react-cookie";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AuthorizedRoute from "../components/AuthorizedRoute";
import theme from "../helpers/theme";

const AppContext = createContext();
export function useAppContext() {
  return useContext(AppContext);
}

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  const [cookie] = useCookies(["token", "username", "items"]);
  const [username, setUsername] = useState(cookie["username"] || null);
  const [token, setToken] = useState(cookie["token"] || null);
  const [items, setItems] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [savedIds, setSavedIds] = useState([]);
  const router = useRouter();
  const protectedRoutes = ["/dashboard"];

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setShowMenu(false);
    };
    setSavedIds(JSON.parse(localStorage.getItem("savedIds")) || []);
    setItems(JSON.parse(localStorage.getItem("items")) || []);
    router.events.on("routeChangeComplete", handleRouteChange);
    setMounted(true);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    mounted && (
      <CookiesProvider>
        <AppContext.Provider
          value={{
            showMenu,
            setShowMenu,
            username,
            setUsername,
            token,
            setToken,
            items,
            setItems,
            savedIds,
            setSavedIds,
          }}
        >
          <AuthorizedRoute protectedRoutes={protectedRoutes}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </AuthorizedRoute>
        </AppContext.Provider>
      </CookiesProvider>
    )
  );
}

export default MyApp;
