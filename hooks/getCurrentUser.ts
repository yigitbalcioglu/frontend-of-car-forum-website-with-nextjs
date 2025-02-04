export default async function getCurrentUser(userId: string) {
    try {
        // Örneğin, Strapi API'ye POST isteği:
        const response = await fetch(`http://localhost:8000/api/users/singleUser?filters[userId][$eq]=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json();

        if (!data) {
            throw new Error('Kullanıcı bulunamadı.');
        }

        return data.user;

    } catch (error) {
        throw (error)
    }

}