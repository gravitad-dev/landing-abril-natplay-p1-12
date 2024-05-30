function Layout({ children }) {
  return (
    <div className="relative flex justify-center w-full h-full overflow-hidden ">
      <div
        className={`max-w-[1200px] w-full h-full px-4 md:px-6 lg:px-4 xl:px-0 `}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
