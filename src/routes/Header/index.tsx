import { Outlet } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="rm-header">
          <Link to="/">
            <h1>Rick and Morty Api</h1>
          </Link>
          <a href="https://github.com/Maxwell-Luan/">Me segue aí!</a>
        </div>
      </header>
      <Outlet />
    </>
  );
}
