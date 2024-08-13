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

export function Post({ post }: PostProps) {
   return (
      <>
         <div className='card bg-base-200 flex flex-col p-2 m-2 border shadow-sm'>
            <div className='flex gap-2 justify-center items-center'>
               <div className='avatar'>
                  <div className='w-20 rounded-full'>
                     <img src={post.profilePicture} />
                  </div>
               </div>
               <div className="text-base-content">
                  <p>{post.name}</p>
                  <p>{post.bio}</p>
                  <p>{post.time}</p>
               </div>
            </div>

            <p className='p-2 my-5 text-sm text-base-content'>{post.body}</p>
            <div className='flex justify-between text-base-content'>
               <div>likes, comments, reposts icons</div>
               <div className='flex gap-5'>
                  <p>{post.reactions.likes}</p>
                  <p>{post.reactions.comments}</p>
                  <p>{post.reactions.reposts}</p>
               </div>
            </div>
         </div>
      </>
   );
}
