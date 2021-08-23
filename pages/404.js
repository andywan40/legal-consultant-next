import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <div className="min-h-screen text-center flex flex-col justify-center items-center">
      <h1 className="text-xl">404 - Page Not Found</h1>
    </div>
  );
}
