import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/utils/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";

const handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();
        console.log("Credentials: ", credentials);

        try {
          const user = await User.findOne({ email: credentials.email });
          console.log("User found: ", user);
          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong password");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    error: "/dashboard/login",
  },
});

export { handlers as GET, handlers as POST };
// export { GET, POST } from "next-auth/middleware";
