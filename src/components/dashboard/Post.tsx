import { posts } from "@/data/posts";

export default function PostRoot() {
   const feedPosts: Posts[] = posts;

   return (
      <>
         {feedPosts.map((post, index) => {
            return <Post key={index} post={post} />;
         })}
      </>
   );
}

function format_number(num: number) {
   if (num % 1000 == 0) {
      return `${num / 1000}k`;
   } else {
      return num;
   }
}

export function Post({ post }: PostProps) {
   
   const likes = format_number(post.reactions.likes)   
   const comments = format_number(post.reactions.comments)   
   const reposts = format_number(post.reactions.reposts)   

   return (
      <>
         <div className='card bg-base-200 flex flex-col p-2 m-2 border shadow-sm'>
            <div className='flex gap-2 justify-center items-center'>
               <div className='avatar'>
                  <div className='w-20 rounded-full'>
                     <img src={post.profilePicture} />
                  </div>
               </div>
               <div className='text-base-content'>
                  <p>{post.name}</p>
                  <p className='text-xs text-gray-500'>{post.bio}</p>
                  <p className='text-xs text-gray-500'>{post.time}</p>
               </div>
            </div>

            <p className='p-2 my-5 text-sm text-base-content'>{post.body}</p>
            <div className='flex justify-between text-base-content'>
               <div className='flex stack'>
                  <p>
                     <img
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                        className='w-4 rounded-full'
                     />
                  </p>
                  <p>
                     <img
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                        className='w-4 rounded-full'
                     />
                  </p>
                  <p>
                     <img
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                        className='w-4 rounded-full'
                     />
                  </p>
               </div>
               <div className='flex gap-5 text-xs text-gray-500'>
                  <p>{likes} likes</p>
                  <p>{comments} comments</p>
                  <p>{reposts} reposts</p>
               </div>
            </div>
         </div>
      </>
   );
}
