import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
   providers: [
      CredentialsProvider({
         name: "Email",
         credentials: {
            username: {
               label: "Username",
               type: "email",
               placeholder: "Enter your Username",
            },
            password: {
               label: "Password",
               type: "password",
               placeholder: "Enter your Password",
            },
         },
         async authorize(credentials, req) {
            console.log(credentials, req);

            //validate user

            return {
               id: "1",
            };
         },
      }),
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID ?? "",
         clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      }),
   ],
   secret: process.env.NEXTAUTH_SECRET,
   // callbacks: {
   //    async redirect({ url, baseUrl }) {
   //       console.log(url, baseUrl);
   //       return "/dashboard";
   //    },
   // },
   // pages: {
   //    signOut: "/bye",
   // },
};
