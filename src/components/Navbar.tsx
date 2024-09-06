"use client";

import { RecoilRoot, useRecoilValue } from "recoil";
import { homepageAtom } from "@/atoms/homePage";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export function NavbarRoot() {
   const session = useSession();

   return (
      <>
         <RecoilRoot>
            {/* If logged in, show Navbar: */}
            {/* <Navbar /> */}

            {/* Else, show the signup buttons */}

            {session.status === "authenticated" ? <Navbar /> : <Login />}
         </RecoilRoot>
      </>
   );
}

function format_count(count: number) {
   if (count >= 100) {
      return `${99}+`;
   } else {
      return count;
   }
}

export function Navbar() {
   const navStates = useRecoilValue(homepageAtom);

   return (
      <div className='border-b-2 w-full h-fit py-3 px-6 grid grid-cols-3 fixed z-50 overflow-hidden items-stretch border'>
         <div>
            <span>
               <img src={navStates.profilePic} className='w-10 rounded-xl' />
            </span>
            <button
               onClick={() => signOut({ callbackUrl: "/", redirect: true })}
            >
               LogOut
            </button>
         </div>
         <span className='justify-self-center self-center'>
            Name of the App
         </span>
         <ul className='flex gap-10 justify-end items-center'>
            <li>
               <button className='btn'>feed</button>
            </li>
            <li>
               <button className='btn btn-ghost'>jobs</button>
            </li>
            <li>
               <div className='indicator'>
                  <span className='indicator-item badge badge-error'>
                     {format_count(navStates.messageCount)}
                  </span>
                  <button className='btn btn-ghost'>messages</button>
               </div>
            </li>
            <li>
               <div className='indicator'>
                  <span className='indicator-item badge badge-error'>
                     {format_count(navStates.notificationCount)}
                  </span>
                  <button className='btn btn-ghost'>notifications</button>
               </div>
            </li>
            <li>
               <div className='indicator'>
                  <span className='indicator-item badge badge-error'>
                     {format_count(navStates.networkCount)}
                  </span>
                  <button className='btn btn-ghost'>connections</button>
               </div>
            </li>
         </ul>
      </div>
   );
}

export function Login() {
   const router = useRouter();

   return (
      <div className='border-b-2 w-full h-fit py-3 px-6 grid grid-cols-3 fixed z-50 overflow-hidden items-stretch border'>
         <div>
            <span>
               {/* <img src={navStates.profilePic} className='w-10 rounded-xl' /> */}
            </span>
         </div>
         <span className='justify-self-center self-center'>
            Name of the App
         </span>
         <div>
            <button onClick={() => router.push("/signup")}>SignUp</button>
            <button onClick={() => signIn()}>SignIn</button>
         </div>
      </div>
   );
}
