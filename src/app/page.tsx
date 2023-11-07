import clsx from "clsx";
import Link from "next/link";
import { memo } from "react";
import ApplicationIcon from "@/icons/application.svg";
import CourseIcon from "@/icons/school.svg";
import FileIcon from "@/icons/file-cabinet.svg";
import WikiIcon from "@/icons/notebook.svg";

type NavProps = {
  name: string;
  description: string;
  href: string;
  icon?: any;
};

const navs: NavProps[] = [
  {
    name: "AI Box",
    description: "Cutting-edge AI tools",
    href: "https://chat.xjt.lu",
    icon: <CourseIcon />,
  },
  {
    name: "Course Plus",
    description: "Better XJTLU TimeTable",
    href: "https://course.xjt.lu",
    icon: <CourseIcon />,
  },
  {
    name: "File Share",
    description: "Share Resource",
    href: "https://file.xjt.lu",
    icon: <FileIcon />,
  },
  {
    name: "XJTLU Wiki",
    description: "XJTLU Wiki",
    href: "https://wiki.xjt.lu",
    icon: <WikiIcon />,
  },
  {
    name: "XJTLU App Plus",
    description: "Better XJTLU App",
    href: "https://app.xjt.lu",
    icon: <ApplicationIcon />,
  },
];

const Nav = memo((props: NavProps) => {
  return (
    <Link
      key={props.name}
      href={props.href}
      className={clsx(
        "bg-gray-50 hover:bg-gray-100 rounded-md hover:rounded-lg shadow-lg overflow-hidden",
      )}
    >
      <div
        className={clsx(
          "px-4 py-2",
          "flex flex-row items-center justify-start space-x-2.5",
        )}
      >
        <div className="h-10 w-10">{props.icon}</div>
        <div>
          <h2
            className={clsx(
              "mt-0.5 text-2xl font-semibold tracking-tight text-blue-900",
            )}
          >
            {props.name}
          </h2>
          <p className="font-mono text-sm text-blue-600">{props.description}</p>
        </div>
      </div>
    </Link>
  );
});

const Home = memo(() => {
  return (
    <div className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <h1
          className={clsx(
            "font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl",
            "flex flex-row justify-between items-center",
          )}
        >
          <p>XJTLU Plus</p>
        </h1>
        <dl
          className={clsx(
            "mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-y-6 sm:gap-y-10 gap-x-10 sm:gap-x-16",
            "sm:text-center lg:justify-start lg:text-left",
          )}
        >
          {navs.map((nav) => (
            <Nav key={nav.name} {...nav} />
          ))}
        </dl>
      </div>
    </div>
  );
});
export default Home;
