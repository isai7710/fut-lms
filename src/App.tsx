import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignUpPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Sign up submitted");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[#0F172A] rotate-45 transform origin-top-left scale-150"></div>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#0F172A] text-center">
            Sign Up
          </CardTitle>
          <CardDescription className="text-center text-[#1E293B]">
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#1E293B]"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border-[#60A5FA] focus:ring-2 focus:ring-[#F97316]"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#1E293B]"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                placeholder="Create a password"
                className="border-[#60A5FA] focus:ring-2 focus:ring-[#F97316]"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white transition-colors duration-300"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
