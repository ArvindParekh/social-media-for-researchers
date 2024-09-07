"use client";

import { RecoilRoot, useRecoilValue } from "recoil";
import { homepageAtom } from "@/atoms/homePage";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function NavbarRoot() {
   return (
      <>
         <RecoilRoot>
            {/* If logged in, show Navbar: */}
            {/* <Navbar /> */}

            {/* Else, show the signup buttons */}

            {/* TODO: Show a custom error page if user is not authenticated - oops, looks like you're not authenticated */}
            <Navbar />
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
   const session = useSession();

   return (
      <div className='border-b-2 w-full h-fit py-3 px-6 grid grid-cols-3 fixed z-50 overflow-hidden items-stretch border'>
         <div>
            {/* <span></span> */}
            <DropdownMenu>
               <DropdownMenuTrigger>
                  <img src={navStates.profilePic} className='w-10 rounded-xl' />
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuLabel>
                     <Link href='/profile/account'>My Account</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                     <Link href='/profile'>Profile</Link>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
                  <DropdownMenuItem>
                     <Link href='/pricing'>Pricing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                     <button
                        onClick={() =>
                           signOut({ callbackUrl: "/", redirect: true })
                        }
                     >
                        LogOut
                     </button>
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>

            <span>{JSON.stringify(session)}</span>
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
