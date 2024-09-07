import { Navbar } from "@/components/homepage/HomepageNavbar";
import Button from "@/components/homepage/HomepageLoginButton";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
   return (
      <>
         <div className='h-screen w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
            <Spotlight
               className='-top-40 left-0 md:left-60 md:-top-20'
               fill='white'
            />
            <Navbar className='top-2' />
            <div className=' p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0'>
               <h1 className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
                  Researchers <br /> Welcome to your new home.
               </h1>
               <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
                  Connect with fellow researchers, share your work, and
                  collaborate across disciplines. Our platform fosters academic
                  growth, supports collaboration, and helps you stay updated
                  with the latest discoveries.
               </p>
            </div>
            <div className='flex gap-4'>
               <Button label={"Try it out"} action={"signup"} />
               <Button label={"Login"} action={"signin"} />
            </div>
         </div>
      </>
   );
}
