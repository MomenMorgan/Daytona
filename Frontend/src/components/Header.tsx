import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text text-white text-3xl font-bold tracking-tight">
          <Link to="/">Holidays.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className=" bg-white flex items-center text-blue-600
                        px-3 font-bold hover:bg-gray-300 "
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
}
