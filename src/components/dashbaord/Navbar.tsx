const Navbar = () => {
  return (
    <div className="p-2 shadow flex items-center justify-between px-5 sticky top-0 z-10 bg-background">
      <div className="flex items-center gap-3">
        <img src="/logo.png" width={40} height={40} />
        <h3 className="text-xl font-semibold">Dashboard</h3>
      </div>
      <img src="/profile.png" width={50} height={50} className="rounded-full" />
    </div>
  );
};

export default Navbar;
