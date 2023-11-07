import "@/globals.css";
import clsx from "clsx";

const Division = () => (
  <svg
    aria-hidden="true"
    className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
  >
    <path d="M3 0L6 3L3 6L0 3Z" strokeWidth={2} strokeLinejoin="round" />
  </svg>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <footer className="py-16 text-sm">
        <div
          className={clsx(
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            "flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap",
          )}
        >
          <div
            className={clsx(
              "order-first lg:order-none -mx-4 sm:-mx-6 lg:mx-0 py-4 lg:py-0",
              "flex flex-auto basis-full lg:basis-auto  overflow-x-auto whitespace-nowrap",
              "border-b border-blue-600/10 lg:border-0",
              "font-mono text-blue-600",
            )}
          >
            <div className="mx-auto flex items-center space-x-4 px-4">
              <p>Taicang</p>
              <Division />
              <p>SIP</p>
              <Division />
              <p>Liverpool</p>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col items-center justify-between text-center",
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ",
          )}
        >
          <p className="mt-6 md:mt-0 text-slate-500">
            Copyright &copy; {new Date().getFullYear()} XJT.LU, LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
