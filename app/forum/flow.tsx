'use client';

import SendPostSection from '@/components/forum/sendPostSection';

const Flow = ({posts,user}) => {
    //üstte post gönderme section
    //altta postların listelendiği section

    return (
        <div>
            <SendPostSection 
            user={user}
            mode="Tweet"/>

            {/* Postlar */}
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="border-b border-gray-200 py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">

                    {/*
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('http://localhost:8000/${userCP}')` }}
                    />
                 */}
                        </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white">
                                    {post.username}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {post.created_at}
                                </p>
                            </div>
                        </div>
                        <div className="mt-2">
                        <p className="text-sm text-gray-700">
                                {post.title}
                            </p>
                            <p className="text-sm text-gray-700">
                                {post.content}
                            </p>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    );
};

export default Flow;
