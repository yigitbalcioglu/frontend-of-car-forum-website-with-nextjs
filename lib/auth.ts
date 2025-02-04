import { toast } from 'react-toastify';

export async function signup(values: any) {
    try {
        const response = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: values.username,
                nickname: values.nickname,
                password: values.password,
                email: values.email,
            })
        });

        if (!response.ok) {
            throw new Error('Kayıt başarısız oldu');
        }
        toast.success('Kayıt başarılı!');
    } catch (error) {
        console.error('Signup Error:', error);
        throw error;
    }
}

export async function login(values: any) {
    try {
        const response = await fetch("http://localhost:8000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Bir hata oluştu.");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
}

/*
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google,
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null

                // logic to salt and hash password
                //const pwHash = saltAndHashPassword(credentials.password)

                // logic to verify if the user exists
                user = await getWithEmail(credentials.email)

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error("User not found.")
                }

                // return user object with their profile data
                return user
            },
        }),
    ],
})*/