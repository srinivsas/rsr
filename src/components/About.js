import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>This is about us</h1>
      <h3>this my second round of interview</h3>
      <Link to="profile">
        <li>hello</li>
      </Link>
      <Outlet />
    </div>
  );
};
export default About;
