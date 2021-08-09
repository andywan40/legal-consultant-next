import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useAppContext } from "../pages/_app";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [cookie, setCookie, removeCookie] = useCookies(["token", "username"]);
  const { showMenu, setShowMenu, username, setUsername, token, setToken } =
    useAppContext();
  setUsername("user");
  const handleLogout = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios
      .post(
        "https://password-vault-django.herokuapp.com/api/accounts/logout/",
        {},
        {
          headers,
        }
      )
      .then(res => {
        console.log(res);
        removeCookie("token");
        removeCookie("username");
        setUsername(null);
        setToken(null);
        router.push("/login");
      })
      .catch(e => {
        console.log(e);
        alert("something went wrong. try again later");
      });
  };
  return (
    <header
      className={
        showMenu
          ? "font-content black-background sticky top-0 z-10 h-1/2 text-white"
          : "font-content black-background sticky top-0 z-10 h-1/2 text-white px-36"
      }
    >
      <div className="mx-auto px-10 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="title-font font-medium text-black mb-4 md:mb-0 logo"
        >
          <a>
            <h1 className="uppercase font-content font-bold">Legalable</h1>
          </a>
        </Link>{" "}
        <nav className="title-font font-bold text-sm tracking-wide flex justify-end items-center">
          {!showMenu && (
            <>
              {!username && (
                <Link href="/login">
                  <a
                    className={
                      pathname === "/login"
                        ? "md:hidden mr-5 text-black uppercase active"
                        : "md:hidden mr-5 text-black uppercase strike"
                    }
                  >
                    Log in
                  </a>
                </Link>
              )}
              {!username && (
                <Link href="/signup">
                  <a
                    className={
                      pathname === "/signup"
                        ? "md:hidden mr-5 text-black uppercase active"
                        : "md:hidden mr-5 text-black uppercase strike"
                    }
                  >
                    Sign up
                  </a>
                </Link>
              )}
              {username && (
                <p className="text-white">
                  <FavoriteIcon className="mx-3" />
                  <AccountCircleIcon />
                </p>
                // <p className="md:hidden mr-5 text-indigo-600 uppercase">
                //   {username}
                // </p>
              )}
              {/* {username && (
                <p
                  className="md:hidden mr-5 text-black uppercase strike cursor-pointer"
                  onClick={handleLogout}
                >
                  Log out
                </p>
              )} */}
            </>
          )}
          {!showMenu ? (
            <MenuIcon
              onClick={() => setShowMenu(true)}
              className="hidden md:block mr-5 text-black h-1/12 w-1/12 cursor-pointer"
            />
          ) : (
            <XIcon
              onClick={() => setShowMenu(false)}
              className="block mr-5 text-white h-1/12 w-1/12 cursor-pointer motion-safe:animate-wiggle"
            />
          )}
        </nav>
      </div>
    </header>
  );
}
