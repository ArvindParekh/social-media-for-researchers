"use client";

import { RecoilRoot, useRecoilValue } from "recoil";
import { homepageAtom } from "@/atoms/homePage";

export function NavbarRoot() {
   return (
      <>
         <RecoilRoot>
            <Navbar />
         </RecoilRoot>
      </>
   );
}

export function Navbar() {
   const navStates = useRecoilValue(homepageAtom);

   return (
      <div className='border-b-2 w-full h-14 py-10 px-6 flex items-center justify-between fixed z-50 overflow-hidden'>
         <div>
            <span>
               <img src={navStates.profilePic} className='w-10 rounded-xl' />
            </span>
         </div>
         <span>Name of the App</span>
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
                     {navStates.messageCount}
                  </span>
                  <button className='btn btn-ghost'>messages</button>
               </div>
            </li>
            <li>
               <div className='indicator'>
                  <span className='indicator-item badge badge-error'>
                     {navStates.notificationCount}
                  </span>
                  <button className='btn btn-ghost'>notifications</button>
               </div>
            </li>
            <li>
               <div className='indicator'>
                  <span className='indicator-item badge badge-error'>
                     {navStates.networkCount}
                  </span>
                  <button className='btn btn-ghost'>connections</button>
               </div>
            </li>
         </ul>
      </div>
   );
}
