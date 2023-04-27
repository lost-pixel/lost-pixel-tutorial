import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ href, label }: { href: string; label: string }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={clsx(
        "mmx-1.5 transform border-b-2  transition-colors duration-300 sm:mx-6",
        {
          "border-transparent hover:border-blue-500 hover:text-gray-200":
            router.asPath !== href,
          "border-blue-500  text-gray-200": router.asPath === href,
        }
      )}
    >
      {label}
    </Link>
  );
};

export const Navigation = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-center p-6 capitalize text-gray-600 dark:text-gray-300">
        <MenuItem href="/" label="home" />
        <MenuItem href="/pricing" label="pricing" />
      </div>
    </nav>
  );
};
