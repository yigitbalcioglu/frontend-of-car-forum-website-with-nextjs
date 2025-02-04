"use client"

import Image from 'next/image'
import QueryString from 'qs'
import React from 'react'
import { useRouter } from 'next/navigation'

interface IProfilePhotoProps {
  userId: string
  userPP: string
}

export const ProfilePhoto: React.FC<IProfilePhotoProps> = ({ userId, profilePicture }) => {

  const router = useRouter()

  return (
    <>
      <Image onClick={() => {
        router.push(`/profile?${QueryString.stringify({ cameFrom: `${userId}` })}`)
      }}
        src={`http://localhost:8000/${profilePicture}`}
        alt='photo'
        width={30}
        height={30}
        className="bg-cover ml-2 mt-4 transform w-12 h-12 bg-white rounded-full border-4 border-black overflow-hidden" />
    </>
  )
}
