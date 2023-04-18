'use client';
import {getServerSession} from 'next-auth/next';
// import { authOptions } from "./api/auth/[...nextauth]"
import {useSession, signIn, signOut} from 'next-auth/react';
import Login from '../pages/auth/Login';
import Logged from '../pages/auth/Logged';
import Link from 'next/link';
import { useState } from 'react';
import ButtonLink from "./buttonLink";

export default function Nav() {
  const { data: session } = useSession();
  const [isOpen,setIsOpen]=useState(false);

  return (
    <>
    <nav className="flex items-center justify-between flex-wrap py-8 bg-white p-3 shadow-md md:divide-x-2 ">
      <Link href={'/'}>
        <h1 className="font-bold text-lg">SendIt.</h1>
      </Link>
      <ul className="flex items-center gap-6">
      {!session ?.user && <Login />}
      {session ?.user && <Logged image={session.user.image || ''} />}
      <li><ButtonLink label="Register" linkref="/register" /></li>
      </ul>
    </nav>
    </>
  );
}
