"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Logo from "@/assets/Logo";
import { loginUser } from "@/services/AuthServices";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { loginValidation } from "./loginValidation";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState("username");
  const [showPassword, setShowPassword] = useState(false);

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");

  const form = useForm({
    resolver: zodResolver(loginValidation),
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  useEffect(() => {
    reset();
  }, [activeTab, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging....");

    const filteredData =
      activeTab === "username"
        ? { userName: data.userName, password: data.password }
        : { email: data.email, password: data.password };

    if (activeTab === "email" && !filteredData?.email) {
      toast.error("Email address is required");
    }
    if (activeTab === "username" && !filteredData?.userName) {
      toast.error("User name is required");
    }
    try {
      const res = await loginUser(filteredData);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
        if (redirect) {
          window.location.href = redirect;
        } else {
          window.location.href = "/";
        }
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="max-w-lg w-full flex-grow bg-[#f6f6f6] rounded-md p-8">
      <Link
        href="/"
        className="px-8 flex items-center gap-2 justify-center mb-4">
        <Logo />
        <h1 className="font-bold text-2xl">BasaKhoji</h1>
      </Link>
      <div className="space-y-4">
        <div className="flex items-center justify-center mt-2">
          <h1 className="text-3xl font-semibold">Sign In</h1>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="username" className="w-full">
          <TabsList className="grid grid-cols-2 rounded-2xl">
            <TabsTrigger
              value="username"
              className="cursor-pointer rounded-full"
              onClick={() => setActiveTab("username")}>
              Username
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer rounded-full"
              value="email"
              onClick={() => setActiveTab("email")}>
              Email
            </TabsTrigger>
          </TabsList>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Username Input Field */}
              {activeTab === "username" && (
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">User Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          className="rounded-2xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* Email Input Field */}
              {activeTab === "email" && (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          type="email"
                          className="rounded-2xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* Password Field (Always Visible) */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="font-bold">Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        type={showPassword ? "text" : "password"}
                        className="rounded-2xl"
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-600 cursor-pointer">
                      {showPassword ? (
                        <Eye size={20} className="text-gray-600" />
                      ) : (
                        <EyeOff size={20} className="text-primary" />
                      )}
                    </button>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full rounded-2xl cursor-pointer">
                {isSubmitting ? "Logging...." : "Log in"}
              </Button>
            </form>
          </Form>
        </Tabs>

        <div className="text-center space-y-4">
          <p className="text-sm">
            Do not have an account?{" "}
            <a href="/register" className="cursor-pointer font-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
