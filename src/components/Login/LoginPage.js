"use client";
import React, { useState } from "react";
import { EyeOff } from "lucide-react";
import Link from "next/link";
import logo from "@/assests/images/logo.svg"
import Image from "next/image";

const LoginPage = () => {
  const [currentView, setCurrentView] = useState("login");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotEmailData, setForgotEmailData] = useState({
    fullName: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [resetSuccess, setResetSuccess] = useState(false);
  const [emailRecoverySuccess, setEmailRecoverySuccess] = useState(false);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleForgotEmailChange = (e) => {
    setForgotEmailData({ ...forgotEmailData, [e.target.name]: e.target.value });
  };

  const validateLoginForm = () => {
    let formErrors = {};
    if (!loginData.username)
      formErrors.username = "Username or email is required";
    if (!loginData.password) formErrors.password = "Password is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const validateForgotEmailForm = () => {
    let formErrors = {};
    if (!forgotEmailData.fullName) formErrors.fullName = "Full name is required";
    if (!forgotEmailData.phoneNumber)
      formErrors.phoneNumber = "Phone number is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      console.log("Logging in with:", loginData);
      // Add your login logic here (like API call)
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    if (!forgotPasswordEmail) {
      setErrors({ email: "Email is required" });
      return;
    }
    // Here you would typically call an API to handle the password reset
    console.log("Password reset requested for:", forgotPasswordEmail);
    setResetSuccess(true);
  };

  const handleForgotEmailSubmit = (e) => {
    e.preventDefault();
    if (validateForgotEmailForm()) {
      // Here you would typically call an API to handle the email recovery
      console.log("Email recovery requested for:", forgotEmailData);
      setEmailRecoverySuccess(true);
    }
  };

  const renderLoginForm = () => (
    <form className="mt-8 space-y-6 w-full" onSubmit={handleLoginSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="username" className="sr-only">
            User name or e-mail address
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={loginData.username}
            onChange={handleLoginChange}
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
            placeholder="User name or e-mail address"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleLoginChange}
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
            placeholder="Password"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <EyeOff className="h-5 w-5 text-gray-400" />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm">
          <button
            type="button"
            onClick={() => setCurrentView("forgotEmail")}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgotten your Email?
          </button>
        </div>
        <div className="text-sm">
          <button
            type="button"
            onClick={() => setCurrentView("forgotPassword")}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgotten your password?
          </button>
        </div>
      </div>

      <div>
        <Link
          href="/dashboard"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </Link>
      </div>

      <div className="text-center mt-4">
        <p className="font-medium text-indigo-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-indigo-600 hover:text-red-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );

  const renderForgotPasswordForm = () => (
    <form className="mt-8 space-y-6 w-full" onSubmit={handleForgotPasswordSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
            placeholder="Email address"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Reset Password
        </button>
      </div>

      <div className="text-center mt-4">
        <button
          type="button"
          onClick={() => {
            setCurrentView("login");
            setResetSuccess(false);
          }}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Back to Login
        </button>
      </div>
    </form>
  );

  const renderForgotEmailForm = () => (
    <form className="mt-8 space-y-6 w-full" onSubmit={handleForgotEmailSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="fullName" className="sr-only">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={forgotEmailData.fullName}
            onChange={handleForgotEmailChange}
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
            placeholder="Username"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={forgotEmailData.phoneNumber}
            onChange={handleForgotEmailChange}
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Recover Email
        </button>
      </div>

      <div className="text-center mt-4">
        <button
          type="button"
          onClick={() => {
            setCurrentView("login");
            setEmailRecoverySuccess(false);
          }}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Back to Login
        </button>
      </div>
    </form>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-full md:max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center">
          <Link href="/">
              <Image
                src={logo.src} // Ensure you have this logo in your public folder
                alt="Bauantrag DE Logo"
                width={180}
                height={60}
              />
            </Link>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {currentView === "login"
              ? "Login"
              : currentView === "forgotPassword"
              ? "Forgot Password"
              : "Forgot Email"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {currentView === "login"
              ? "The portal for fast and efficient processing of building applications with AI-supported checking. Please log in to track the status of your construction projects and submit documents."
              : currentView === "forgotPassword"
              ? "Enter your email address and we'll send you a link to reset your password."
              : "Enter your full name and phone number to recover your email address."}
          </p>
        </div>

        {currentView === "login" && renderLoginForm()}
        {currentView === "forgotPassword" &&
          (resetSuccess ? (
            <div className="text-center text-green-600">
              <p>
                If an account exists for {forgotPasswordEmail}, you will receive a password reset link shortly.
              </p>
              <button
                onClick={() => {
                  setCurrentView("login");
                  setResetSuccess(false);
                }}
                className="mt-4 font-medium text-indigo-600 hover:text-indigo-500"
              >
                Back to Login
              </button>
            </div>
          ) : (
            renderForgotPasswordForm()
          ))}
        {currentView === "forgotEmail" &&
          (emailRecoverySuccess ? (
            <div className="text-center text-green-600">
              <p>
                If an account matches the provided information, you will receive an email with your username shortly.
              </p>
              <button
                onClick={() => {
                  setCurrentView("login");
                  setEmailRecoverySuccess(false);
                }}
                className="mt-4 font-medium text-indigo-600 hover:text-indigo-500"
              >
                Back to Login
              </button>
            </div>
          ) : (
            renderForgotEmailForm()
          ))}
      </div>
    </div>
  );
};

export default LoginPage;
