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
    <nav className="flex justify-between items-center py-8 ">
      <Link href={'/'}>
        <h1 className="font-bold text-lg">SendIt.</h1>
      </Link>
      <ul className="flex items-center gap-6"></ul>
      {!session ?.user && <Login />}
      {session ?.user && <Logged image={session.user.image || ''} />}
    </nav>
    <nav className={` flex items-center justify-between flex-wrap bg-white dark:bg-slate-900 p-3 shadow-md md:divide-x-2`}>
      <div className={`flex items-center flex-shrink-0 text-slate-900 dark:text-white mr-6`}>
        <Link href={'/'}>
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
         </Link>
        <Link href={'/'}>
          <span className="font-semibold text-xl tracking-tight">Trading app</span>
        </Link>
      </div>
      <div className="block md:hidden">
        {!isOpen ?
          <button className={`flex items-center px-3 py-2 border rounded text-slate-200 dark:text-white border-white-400 dark:border-slite dark:hover:texte-blue} hover:border-white`}
            onClick={() => { setIsOpen(!isOpen) }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
          :
          <button className={`flex items-center px-3 py-2 border rounded text-slate-200 dark:text-white border-white-400 dark:border-slite dark:hover:texte-blue} hover:border-white`}
            onClick={() => { setIsOpen(!isOpen) }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        }
      </div>
      <div className={`${isOpen ? 'md:block' : 'sm:hidden'} ease-linear transition-all duration-150 ease-in ease-out delay-300 block w-full flex-grow md:flex md:items-center md:w-auto md:flex md:justify-around`}>
        <div className="text-sm sm:ml-2 flex items-center gap-6 ">
            <ul className="flex items-center gap-6"></ul>
            {!session ?.user && <Login />}
            {session ?.user && <Logged image={session.user.image || ''} />}
        </div>
        <div>
          <ButtonLink label="Register" linkref="/register" />
        </div>
      </div>
    </nav>
    </>
  );
}
