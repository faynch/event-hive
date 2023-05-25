import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: 'Credentials',
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const { email, password } = credentials as any
                const res = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                })

                const user = await res.json()
                
                const returnSession = {
                    id: user.existingEmail.id,
                    name: user.existingEmail.firstName,
                    email: user.existingEmail.email,
                    image: null,
                }
                console.log(returnSession)
                // const user = {
                //     id: '1',
                //     name: 'J Smith',
                //     email: 'jsmith@example.com',
                // }

                console.log("here is the user/n", user)
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    console.log('log in successed')
                    return returnSession
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    console.log('log in failed')
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: '/test',
        error: '/test'
    },

    // callbacks: {
    //     async session({ session, token, user }: any) {
    //         console.log(
    //             '---------------------session in [...nextauth]---------------------'
    //         )
    //         console.log(session)
    //         session.accessToken = token.accessToken
    //         session.user = user
    //         return session // The return type will match the one returned in `useSession()`
    //     },
    // },
}
export default NextAuth(authOptions)