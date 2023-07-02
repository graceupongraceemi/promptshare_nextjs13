import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';

// console.log({
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET
// });

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      // serverless -> Lambda -> dynamodb
      await connectToDB();

      // check if a user already exits

      // it not, create a new user
    } catch (error) {}
  }
});

export { handler as GET, handler as POST };
