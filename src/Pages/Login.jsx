import React from "react";
import { CheckCircle, Lock, Mail, User } from "lucide-react";

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center  min-h-screen bg-gray-100 px-4">
      <div className="bg-white  p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h3>
        
        <div className="mt-6 space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-gray-600"
            />
          </div>
        </div>

        <button className="w-full mt-6 p-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-md hover:opacity-90 transition">
          Continue
        </button>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account? <span className="text-gray-800 font-semibold cursor-pointer">Login</span>
        </p>

        <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
          <input type="checkbox" className="h-5 w-5 accent-gray-800" />
          <p>By continuing, I agree to the <span className="text-gray-800 font-semibold">Terms of Use</span> & <span className="text-gray-800 font-semibold">Privacy Policy</span></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
