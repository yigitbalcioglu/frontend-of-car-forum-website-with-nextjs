import React from 'react'
import { verifySession } from '../../lib/dal';
import { EditButton } from './Buttons/EditButton';
import { SendMessageButton } from './Buttons/SendMessageButton';
import { FollowButton } from './Buttons/FollowButton';



export default async function UserBioButtons({ user }) {
    const session = await verifySession()


    return (
        <div className='text-white'>
            {session.userId === user.userId ?
                (<EditButton user={user} />)
                :
                (<div className='flex'>
                    <SendMessageButton />
                    <FollowButton />
                </div>)}
        </div>
    )
}
