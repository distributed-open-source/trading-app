'use client';
import {getServerSession} from 'next-auth/next';
// import { authOptions } from "./api/auth/[...nextauth]"
import {useSession, signIn, signOut} from 'next-auth/react';
import Login from '../pages/auth/Login';
import Logged from '../pages/auth/Logged';
import Link from 'next/link';

export default function Nav() {
  const {data: session} = useSession();

  return (
    <nav className="flex justify-between items-center py-8 ">
      <Link href={'/'}>
        <h1 className="font-bold text-lg">SendIt.</h1>
      </Link>
      <ul className="flex items-center gap-6"></ul>
      {!session?.user && <Login />}
      {session?.user && <Logged image={session.user.image || ''} />}
    </nav>
  );
}
