import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-comtainer pt-6 pb-6 flex items-center justify-between">
        <a className="text-2xl" href="/">
          dummy<strong>JSON</strong>
        </a>
        <div className="flex gap-5">
          <NavLink to={"/"}>Docs</NavLink>
          <a href="https://github.com/" target="_blank">
            GitHub
          </a>
        </div>
      </div>
      <hr className="h-[2px] bg-[#ebebeb]" />
    </>
  );
}

export default Navbar;
