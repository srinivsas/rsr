import { NavLink } from "react-router-dom";
const HeaderLogo = () => (
  <a href="/">
    <img
      className="h-24 ml-1 w-max"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => (
  <div className="flex h-30 border-solid border-2 border-l-zinc-900 w-full  justify-between">
    <HeaderLogo />
    <div className="m-6">
      <ul className="flex space-x-6 ">
        <li className="p-3 active:bg-purple-100">
          <NavLink to="/"> Home</NavLink>
        </li>
        <li className="p-3">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="p-3">
          <NavLink to="/contactus">Contact</NavLink>
        </li>
        <li className="p-3">
          <NavLink to="/instamart">InstaMart</NavLink>
        </li>
        <li className="p-3">Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
