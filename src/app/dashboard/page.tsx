import { NavbarRoot } from "@/components/Navbar";
import PostRoot from "@/components/Post";

export default function Dashboard() {
   return (
      <>
         <NavbarRoot />
         <main className='flex min-h-screen p-24 overflow-y-auto'>
            <div className='flex w-full flex-col lg:flex-row'>
               <div className='card bg-base-300 rounded-box grid h-32 flex-grow place-items-center'>
                  content
               </div>

               <div className='divider lg:divider-horizontal'></div>
               <div className='card rounded-box grid w-48 h-full flex-grow place-items-center'>
                  <PostRoot />
               </div>

               <div className='divider lg:divider-horizontal'></div>
               <div className='card bg-base-300 rounded-box grid h-32 flex-grow place-items-center'>
                  content
               </div>
            </div>
         </main>
      </>
   );
}
