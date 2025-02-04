type IUserProps = {
    userId: string;
    username: string;
    nickname: string;
    password: string;
    email: string;
    profilePicture?: string;
    coverPicture?: string;
    followers?: any[];
    followings?: any[];
    isAdmin?: boolean;
    desc?: string;
    location?: string;
};

// Default values for optional properties
const defaultUserProps: Partial<IUserProps> = {
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    desc: "Profile kısmı",
    location: "Lokasyon",
};