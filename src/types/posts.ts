interface Posts {
   profilePicture: string;
   name: string;
   bio: string;
   time: string;
   body: string;
   reactions: {
      likes: number;
      comments: number;
      reposts: number;
   };
}

interface PostProps {
   post: Posts;
}
