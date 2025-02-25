import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";

const AuthPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in submitted");
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up submitted");
  };

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 relative overflow-hidden">
      <Card className="w-full max-w-md">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#0F172A] text-center">
                Sign In
              </CardTitle>
              <CardDescription className="text-center text-[#1E293B]">
                Welcome back! Please sign in to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="signin-email"
                    className="text-sm font-medium text-[#1E293B]"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="signin-email"
                    placeholder="Enter your email"
                    className="border-[#60A5FA] focus:ring-2 focus:ring-[#F97316]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="signin-password"
                    className="text-sm font-medium text-[#1E293B]"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    id="signin-password"
                    placeholder="Enter your password"
                    className="border-[#60A5FA] focus:ring-2 focus:ring-[#F97316]"
                    required
                  />
                </div>
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-[#60A5FA] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white transition-colors duration-300"
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </TabsContent>
          <TabsContent value="signup">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#0F172A] text-center">
                Sign Up
              </CardTitle>
              <CardDescription className="text-center text-[#1E293B]">
                Create your account to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="signup-email"
                    className="text-sm font-medium text-[#1E293B]"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="signup-email"
                    placeholder="Enter your email"
                    className="border-[#60A5FA] focus:ring-2 focus:ring-[#F97316]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="signup-password"
                    className="text-sm font-medium text-[#1E293B]"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="signup-password"
                      placeholder="Create a password"
                      className="border-[#60A5FA] focus:ring-2 focus:ring-[#F97316] pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("password")}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="signup-confirm-password"
                    className="text-sm font-medium text-[#1E293B]"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      id="signup-confirm-password"
                      placeholder="Confirm your password"
                      className="border-[#60A5FA] focus:ring-2 focus:ring-[#F97316] pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white transition-colors duration-300"
                >
                  Sign Up
                </Button>
              </form>
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthPage;
