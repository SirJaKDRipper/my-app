import React from "react";
import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";

export default async function Header() {
    return (
        <div className="flex justify-center text-xs lg:text-lg">
            <div className="flex flex-row  mt-20  gap-5 md:gap-10 items-center sticky">
                <Link className="/" href="/">Home</Link>
                <Link className="/developer" href="/developer">UI-UX </Link>
                <Link href="/performer">Performer</Link>
                <Link href="/photographer">Wildlife </Link>
                <Link href="/leader"> Community</Link>
                </div>
            </div>
            
    
    );
}
