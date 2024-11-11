"use client";
import AuthLayout from "@/components/ui/AuthLayout";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import InputField from "@/components/ui/InputField";
import { Button } from "@/components/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const email = ({ initialEmail }: { initialEmail: string }) => {
  const [formData, setFormData] = useState({
    email: initialEmail, // Set initial email from props
    password: "",
    confirmPassword: "",
  });
    const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add validation logic here if needed
    if (formData.password === formData.confirmPassword) {
      //   router.push("/confirmaccount");
    } else {
      // Handle password mismatch
      alert("Passwords do not match!");
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-black-primary-text text-xl mt-4  font-bold">
        Sign up with your email
        </h1>
        <div className="flex flex-col pt-4 gap-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="User@gmail.com"
                className="placeholder:font-medium placeholder:text-[#C2C2C2]"
                onChange={handleChange}
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                className="placeholder:font-medium placeholder:text-[#e1e1e1]"
                onChange={handleChange}
              />
              <InputField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="placeholder:font-medium placeholder:text-[#e1e1e1]"
                onChange={handleChange}
              />
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <Button
                type="submit"
                label="Continue"
                className=" w-full text-white"
              />
              <Button
                label="Back"
                className="w-full bg-transparent border bg-white border-black-tertiary-text "
                onClick={() => router.back()}
              />
            </div>
          </form>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-medium text-black-secondary-text">
              Don't have an account?
            </span>
            <Link href="/register" className="text-main-blue font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default email;
