import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'email',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "karishma@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "*****" }
                //   bio : {label : "Bio" , type : "text" , placeholder : "write about you"}
            },
            async authorize(credentials, req) {
                const { username, password } = credentials as { username: string, password: string };
                console.log(username);
                console.log(password)
                // db request to cheak if user exist or not and if exist usernmae nad password is correct
                const user = {
                    id: 1,
                    name: "karishma",
                    email: "karishma@hamil.com"
                }
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
        // GitHubProvider({
        //     clientId: "abc",
        //     clientSecret: "abc"
        // }),
        // GoogleProvider({
        //     clientId: "adc",
        //     clientSecret: "adc"
        // })
    ],
    secret : process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }