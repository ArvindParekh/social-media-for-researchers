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
      <div className='border-b-2 w-full h-14 flex items-center justify-between fixed z-50 overflow-hidden'>
         <div>
            <span>
               <img src={navStates.profilePic} className="w-10 rounded-xl" />
            </span>
         </div>
         <span>Name of the App</span>
         <ul className='flex gap-10 justify-end items-center'>
            <li>Feed</li>
            <li>Jobs</li>
            <li>Messages: {navStates.messageCount}</li>
            <li>Notifications: {navStates.notificationCount}</li>
            <li>Connections: {navStates.networkCount}</li>
         </ul>
      </div>
   );
}
