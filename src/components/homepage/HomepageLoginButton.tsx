"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Button({ label, action }) {
   const router = useRouter();
   return (
      <button
         className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
         onClick={() =>
            action === "signin" ? signIn(undefined, {callbackUrl: '/dashboard'}) : router.push("/signup")
         }
      >
         {label}
      </button>
   );
}
