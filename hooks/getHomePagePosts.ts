export default async function getHomePageComments(){
    try {
        // Örneğin, Strapi API'ye POST isteği:
        const response = await fetch(`http://localhost:8000/api/posts/homepage`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json();

        return data;

    } catch (error) {
        throw (error)
    }
}
