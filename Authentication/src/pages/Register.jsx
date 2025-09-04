import { useState } from "react";
import {
  auth,
  GoogleAuth,
} from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // important to prevent form submission
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, GoogleAuth);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-pink-200 via-purple-300 to-blue-200">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 backdrop-blur-md bg-opacity-90"
      >
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-8">
          Create Account
        </h2>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-xl shadow-md hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
        >
          Register
        </button>

        <button
          type="button"
          onClick={handleGoogleRegister}
          className="w-full mt-4 bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>

        <p className="text-center mt-6 text-sm text-gray-700">
          Already have an account?
          <Link
            to="/login"
            className="text-purple-600 font-medium ml-1 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
