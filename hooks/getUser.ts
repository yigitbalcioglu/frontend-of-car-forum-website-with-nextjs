export default async function GetUser(email: string) {
    try {
        // Örneğin, Strapi API'ye POST isteği:
        const response = await fetch(`http://localhost:8000/api/users/singleUser?filters[email][$eq]=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json();

        if (!data || data.data.length === 0) {
            throw new Error('Kullanıcı bulunamadı.');
        }

        return data.data[0].attributes 

    } catch (error) {
        throw (error)
    }

}