export default async function getHomePageComments(posts: IPostProps[]): Promise<IPostProps[] | null>{

    try {
        // Tüm tweetId'ler için paralel fetch işlemi yapıyoruz
        const fetchPromises = posts.map((post) => {
            return fetch(`http://localhost:8000/api/posts/homepage-comments?filters[parent][$eq]=${post.postId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(response => response.json());
        });

        // Tüm fetch işlemlerinin bitmesini bekliyoruz
        const responses = await Promise.all(fetchPromises);

        // Tüm response'ların data kısımlarını birleştiriyoruz
        const allComments = responses.flatMap(response => response.data || []);

        if (allComments.length === 0) {
            throw new Error('Yorum bulunamadı.');
        }

        return allComments;
    } catch (error) {
        return null;
    }
}
