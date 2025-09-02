import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" text-black px-6 py-4 shadow-md h-20  border border-dark  navc ">
      <div className="max-w-7xl mx-auto flex items-center justify-evenly">
        <h1 className="text-2xl font-semibold">🏫 Student Manager</h1>

        <div className="flex gap-5 text-lg">
          <Link to="/" className="hover:underline transition duration-200 nav-link disabled">
            Dashboard
          </Link>
          <Link to="/students" className="hover:underline transition duration-200 nav-link disabled" >
            Students
          </Link>
          <Link to="/login" className="hover:underline transition duration-200 nav-link disabled">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
