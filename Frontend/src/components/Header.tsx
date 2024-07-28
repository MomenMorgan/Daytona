import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import SignOutButton from "./SignOutButton";

export default function Header() {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text text-white text-3xl font-bold tracking-tight">
          <Link to="/">Holidays.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
              >
                Bookings
              </Link>
              <Link to="/my-hotels" className="flex items-center text-white px-3 font-bold hover:bg-blue-600">Hotels</Link> 
              <SignOutButton></SignOutButton>
            </>
          ) : (
            <Link
              to="/sign-in"
              className=" bg-white flex items-center text-blue-600
                        px-3 font-bold hover:bg-gray-300 "
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
}
