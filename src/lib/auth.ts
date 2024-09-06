import CredentialsProvider from "next-auth/providers/credentials";

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
   ],
};
