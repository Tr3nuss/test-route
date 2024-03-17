import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/notfound">notfound</Link>
      </header>

      <Outlet />

      <footer>2006-present</footer>
    </>
  );
}
