"use client"
import React from 'react'
import Image from 'next/image'

export const UserPhoto = ({ userPP,userCP }) => {

    return (
        <div className="text-white w-full h-full">
            <div className="relative w-full h-40 bg-slate-50">
                {
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('http://localhost:8000/${userCP}')` }}
                    />
                }
                <div className="absolute bottom-[-60px] left-[10%] transform -translate-x-1/2 w-[7.5rem] h-[7.5rem] bg-white rounded-full border-4 border-black overflow-hidden">
                    {
                        <Image
                            alt="photo"
                            src={`http://localhost:8000/${userPP}`}
                            width={128}
                            height={128}
                            className="object-fill w-full h-full"
                        />
                    }
                </div>
            </div>

        </div>

    )
}
