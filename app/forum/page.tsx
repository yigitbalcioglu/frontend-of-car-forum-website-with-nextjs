import Sidebar from './sidebar'; // Import the sidebar component
import Flow from './flow'; // Your existing forum component
import { verifySession } from '@/lib/dal';
import getPosts from '../../hooks/getPosts';
import getCurrentUser from '@/hooks/getCurrentUser';
import getHomePagePosts from '@/hooks/getHomePagePosts';

export default async function Home() {

    const session = await verifySession()
    //const posts = await getPosts()
    const user = await getCurrentUser(session.userId)
    const posts = await getHomePagePosts()

    /*
    const users = await getRelatedUsers(tweets) as IUserProps[]
    const urls = await getRelatedUrls(users) as IUserPhotoProps[]
    const url = await getPhoto(id)
    const likes = await getLikes(tweets) as LikeProp[]
    const comments = await getHomePageComments(tweets) as ITweetProps[]*/
    

    return (
        <div className="flex container mx-auto mt-10">
            {/* Sidebar: 30% */}
            <div className="w-[20%]">
                <Sidebar />
            </div>

            {/* Forum: 50% */}
            <div className="w-[60%] px-6">
                <Flow 
                posts={posts}
                user={user}
                />
            </div>

            {/* Placeholder for the remaining 20% */}
            <div className="w-[20%] bg-gray-100 p-6">
                <h3 className="text-lg font-bold">Planned Section</h3>
                <p className="text-sm text-gray-500">This section is under development.</p>
            </div>
        </div>
    );
};


