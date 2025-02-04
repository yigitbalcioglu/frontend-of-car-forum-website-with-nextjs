import React from 'react'
import { UserHeader } from './userHeader'
import { UserPhoto } from './userPhoto'
import { UserBio } from './userBio'
import { UserButtons } from './userButtons'
import UserBioButtons from './userBioButtons'
//<UserPhoto userId={profileId} />


export const UserProfile = ({ user }) => {
    return (
        <div>
            <UserHeader />
            <UserPhoto
            userPP={user.profilePicture}
            userCP={user.coverPicture}
            />

            <div className='flex justify-between'>
                <UserBio user={user} />
                <div className='m-5'>
                    <UserBioButtons user={user} />
                </div>
            </div>
            
            <UserButtons />
            
        </div>
    )
}
