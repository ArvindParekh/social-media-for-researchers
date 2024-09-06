"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginButton({ provider }: { provider: string }) {
   return (
      <div>
         {provider === "credentials" ? (
            <Button
               className='w-full'
               onClick={() =>
                  signIn("credentials", { callbackUrl: "/dashboard" })
               }
            >
               Login
            </Button>
         ) : (
            <Button
               variant='outline'
               className='w-full'
               onClick={() => signIn(provider, { callbackUrl: "/dashboard" })}
            >
               Login with {provider.charAt(0).toUpperCase() + provider.slice(1)}
            </Button>
         )}
      </div>
   );
}
