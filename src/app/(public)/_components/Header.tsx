"use client"

import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { NavigationItems } from './data';

import { Menu } from 'lucide-react';

import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';


function Header() {

    const router = useRouter();

    const handleNavigateToLogin =()=>router.push("/auth/login")
    const handleNavigateToRegister =()=>router.push("/auth/register")

    return (
        <header
            className={cn("fixed z-50 px-8 py-4 flex items-baseline justify-between w-screen text-primary")}
        >
            {/* logo */}
            <Link href="/">
                <Logo />
            </Link>

            {/* navigation */}

            <nav className='gap-6 text-lg hidden lg:flex'>
                {
                    NavigationItems.map((navigationItem, index) => {
                        return (
                            <Link key={index} href={navigationItem.path}>
                                {navigationItem.title}
                            </Link>
                        )
                    })
                }
            </nav>

            {/* auth */}
            <div className='hidden lg:flex gap-6 w-52'>
                <Button onClick={handleNavigateToLogin} className='w-1/2 rounded-s'>
                    Login
                </Button>
                <Button onClick={handleNavigateToRegister} variant={"outline"} className='w-1/2 rounded-s'>
                    Register
                </Button>
            </div>

            {/* mobile menu */}
            <div className='lg:hidden'>
                <Drawer  direction='right'>
                    <DrawerTrigger className="hidden:lg">
                        <Menu />
                    </DrawerTrigger>
                    <DrawerContent className='h-screen'>
                        <DrawerHeader className='flex justify-between'>
                            <DrawerTitle className='text-2xl'>
                                <Logo/>
                            </DrawerTitle>
                            <DrawerClose>
                                <RxCross2 />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerDescription className='flex flex-col text-xl px-4 py-4'>
                            {
                                NavigationItems.map((navigationItem, index) => {
                                    return (
                                        <Link key={index} href={navigationItem.path}>
                                            {navigationItem.title}
                                        </Link>
                                    )
                                })
                            }
                        </DrawerDescription>
                        <DrawerFooter>
                            <Button className='w-full rounded-s'>
                                Login
                            </Button>
                            <Button variant={"outline"} className='w-full rounded-s'>
                                Register
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    );
}

export default Header;
