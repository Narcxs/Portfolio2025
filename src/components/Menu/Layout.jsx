const Layout = ({ children }) => {
  return (
    <div className="w-full bg-black99 min-h-screen">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16 lg:py-20">
        <div className="w-full text-white50">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
