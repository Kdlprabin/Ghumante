import { cn } from '@/lib/utils';
import React from 'react';

function Logo() {
    return (
        <div className={cn(
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
