import Link from "next/link";

export default function Navbar() {
  return (
    <header className="font-content navbar-background sticky top-0 z-10 h-1/2 text-white">
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
          </div>
        </nav>
      </div>
    </header>
  );
}
