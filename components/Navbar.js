import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useAppContext } from "../pages/_app";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
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
          ? "font-content navbar-background sticky top-0 z-10 h-1/2 text-white"
          : "font-content navbar-background sticky top-0 z-10 h-1/2 text-white"
      }
    >
      <div className="grid grid-cols-8 py-4">
        <Link
          href="/"
          className="title-font font-medium text-black mb-4 md:mb-0"
        >
          <a className="col-start-2 col-span-4">
            <h1 className="uppercase font-content font-bold text-xl">
              Legalable
            </h1>
          </a>
        </Link>{" "}
        <nav className="col-start-6 col-span-2 title-font font-bold text-sm tracking-wide">
          <div className="flex justify-end">
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
                    <Link href="/saved">
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 inline-block mx-3 cursor-pointer"
                          fill="white"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                      </a>
                    </Link>
                    {/* <AccountCircleIcon className="cursor-pointer" /> */}
                  </p>
                )}
              </>
            )}
            {/* {!showMenu ? (
              <MenuIcon
                onClick={() => setShowMenu(true)}
                className="hidden md:block mr-5 text-black h-1/12 w-1/12 cursor-pointer"
              />
            ) : (
              <XIcon
                onClick={() => setShowMenu(false)}
                className="block mr-5 text-white h-1/12 w-1/12 cursor-pointer motion-safe:animate-wiggle"
              />
            )} */}
          </div>
        </nav>
      </div>
    </header>
  );
}
