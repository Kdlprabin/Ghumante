"use effect"

import { cn } from '@/lib/utils';
import React from 'react';

import { useRouter } from 'next/navigation';

function Logo() {
    const router = useRouter();


    return (
        <div
            onClick={() => router.push("/")}
            className={cn(
                "text-3xl",
                "font-bold",
                "cursor-pointer",
                "text-blue-400",
            )}>
            Ghumante.
        </div>
    );
}

export default Logo;
