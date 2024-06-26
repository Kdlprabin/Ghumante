"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Logo from "@/components/Logo"


export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <main
            className="h-screen w-screen"
        >
            <div className="md:hidden">
                <Image
                    src="/examples/authentication-light.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/authentication-dark.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden dark:block"
                />
            </div>
            <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                {
                    pathname === "/auth/register" ?
                        <Link
                            href="/auth/login"
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "absolute right-4 top-4 md:right-8 md:top-8"
                            )}
                        >
                            Login
                        </Link>
                        :
                        <Link
                            href="/auth/register"
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "absolute right-4 top-4 md:right-8 md:top-8"
                            )}
                        >
                            Register
                        </Link>
                }
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Logo />
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This website is a perfect solution for managing all your travel plans and bookings.&rdquo;
                            </p>
                            <footer className="text-sm">Prabin Kandel</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {
                                    pathname === "/auth/register" ? "Register" : "Login"
                                }
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                {
                                    pathname === "/auth/register" ? "Create an account to get started." : "Login to your account."
                                }
                            </p>
                        </div>
                        {children}
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}