"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { EyeOff, Eye } from "lucide-react";
import logo from "@/assests/images/logo.svg"
import Image from "next/image";

const SignupPage = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!form.username) errors.username = "Username is required";
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Invalid email format";
    }
    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!form.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!form.contactNumber) {
      errors.contactNumber = "Contact number is required";
    } else if (!/^\d{11}$/.test(form.contactNumber)) {
      errors.contactNumber = "Contact number must be 11 digits";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted", form);
      setIsRegistrationSuccessful(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const renderInput = (name, type, placeholder, icon) => (
    <div className="">
      <div className="relative">
        <label htmlFor={name} className="sr-only">
          {placeholder}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          value={form[name]}
          onChange={handleChange}
          className={`appearance-none rounded-md relative block w-full px-3 py-2 ${
            icon ? 'pr-10' : ''
          } border ${
            errors[name] ? 'border-red-500' : 'border-gray-300'
          } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
          placeholder={placeholder}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {icon}
          </div>
        )}
      </div>
      {errors[name] && <p className="text-red-500 text-xs my-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen py-20 bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
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
            Sign Up
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create a new account to get started with our platform.
          </p>
        </div>

        {isRegistrationSuccessful ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Your registration is successful!</strong>
            <span className="block sm:inline"> You can now log in to your account.</span>
            <div className="mt-4">
              <Link
                href="/"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Go to Login
              </Link>
            </div>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              {renderInput('username', 'text', 'Username')}
              {renderInput('email', 'email', 'Email address')}
              {renderInput('contactNumber', 'tel', 'Contact Number')}
              {renderInput('password', showPassword ? 'text' : 'password', 'Password', 
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none inline-flex justify-center items-center place-content-center">
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              )}
              {renderInput('confirmPassword', showConfirmPassword ? 'text' : 'password', 'Confirm Password',
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="focus:outline-none">
                  {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="font-medium text-indigo-600">
                Already have an account?{" "}
                <Link href="/" className="text-indigo-600 hover:text-red-500 underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupPage;