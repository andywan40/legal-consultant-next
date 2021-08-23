import "../styles/globals.css";
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
// import { CookiesProvider, useCookies } from "react-cookie";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../helpers/theme";

const AppContext = createContext();
export function useAppContext() {
  return useContext(AppContext);
}

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState([]);
  const [potentialLaws, setPotentialLaws] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const router = useRouter();
  const protectedRoutes = ["/dashboard"];

  useEffect(() => {
    // const handleRouteChange = (url, { shallow }) => {
    //   setShowMenu(false);
    // };
    setItems(JSON.parse(localStorage.getItem("items")) || []);
    setPotentialLaws(JSON.parse(localStorage.getItem("potentialLaws")) || []);
    setSavedIds(JSON.parse(localStorage.getItem("savedIds")) || []);
    setMounted(true);

    // router.events.on("routeChangeComplete", handleRouteChange);
    // return () => {
    //   router.events.off("routeChangeComplete", handleRouteChange);
    // };
  }, []);

  return (
    mounted && (
      // <CookiesProvider>
      <AppContext.Provider
        value={{
          items,
          setItems,
          potentialLaws,
          setPotentialLaws,
          savedIds,
          setSavedIds,
        }}
      >
        {/* <AuthorizedRoute protectedRoutes={protectedRoutes}> */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        {/* </AuthorizedRoute> */}
      </AppContext.Provider>
      // </CookiesProvider>
    )
  );
}

export default MyApp;
