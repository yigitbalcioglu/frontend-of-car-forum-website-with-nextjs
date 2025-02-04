interface IPostProps {
        _id: string;
        username: string;
        nickname: string;
        title: string;
        content: string;
        parent: string | null;
        likes: number;
        dislikes: number;
        createdAt: string;
}
