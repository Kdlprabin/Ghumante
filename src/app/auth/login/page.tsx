import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "./_components/LoginForm"

export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
    return (
        <UserAuthForm />
    )
}