import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        // Invoked on successful sign in
        async signIn({ profile }) {
            // Connect to db
            // Check if user exists
            // If not, add user to db
            // Return true to allow sign in
        },
        // Modifies the session object
        async session({ session }) {
            // Get the user from db
            // Assign the user Id to the session
            // Return that session
        }
    }
};