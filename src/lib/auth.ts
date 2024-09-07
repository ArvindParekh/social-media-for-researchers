import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/db";

export const authOptions = {
   providers: [
      CredentialsProvider({
         // id: "login",
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
            let id;
            //validate user
            // fetch user
            const user = await prisma.user.findUnique({
               where: {
                  email: credentials?.username,
               },
            });

            //if user does not exist - create new user and send user id
            if (!user) {
               const createNewUser = await prisma.user.create({
                  data: {
                     email: credentials?.username ?? "",
                     password: credentials?.password ?? "",
                     name: "rohan",
                     username: "rohansingh",
                  },
               });
               id = createNewUser.id;
            }
            // if user already exists, send user id
            else {
               id = user.id;
            }

            return {
               id: id,
            };
         },
      }),
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID ?? "",
         clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
         // async profile(profile, tokens) {
         //    console.log(profile, tokens);
         //    let id;
         //    //fetch user
         //    const user = await prisma.user.findUnique({
         //       where: {
         //          email: profile.email,
         //       },
         //    });

         //    //if user does not exist - create new user and send user id
         //    if (!user) {
         //       const createNewUser = await prisma.user.create({
         //          data: {
         //             email: profile.email,
         //             password: profile.at_hash,
         //             name: profile.name,
         //             username: profile.given_name,
         //             profileImage: profile.picture,
         //          },
         //       });
         //       id = createNewUser.id;
         //       // if user already exists, send user id
         //    } else {
         //       id = user.id;
         //    }

         //    return {
         //       id: 1,
         //    };
         // },
      }),
   ],
   secret: process.env.NEXTAUTH_SECRET,
   callbacks: {
      async signIn({ user, account, profile, email, credentials }: any) {
         if (account.provider === "google") {
            let id;
            //fetch user
            const user = await prisma.user.findUnique({
               where: {
                  email: profile.email,
               },
            });

            //if user does not exist - create new user and send user id
            if (!user) {
               const createNewUser = await prisma.user.create({
                  data: {
                     email: profile.email,
                     password: profile.at_hash,
                     name: profile.name,
                     username: profile.given_name,
                     profileImage: profile.picture,
                  },
               });
               id = createNewUser.id;
               // if user already exists, send user id
            } else {
               id = user.id;
            }

            return true;
         }
      },

      session: async ({ user, token, session }: any) => {
         console.log(session);
         session.user.id = token.sub;

         return session;
      },

      // async redirect({ url, baseUrl }) {
      //    console.log(url, baseUrl);
      //    return "/dashboard";
      // },
   },
   // pages: {
   //    signIn: "/signin", //custom signin page
   // },
};
