export default async function getPosts() {
    try {
        const response = await fetch('http://localhost:8000/api/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching posts');
        }

        const data = await response.json();
        
        return data;
        
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}