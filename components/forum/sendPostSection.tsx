'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import sendPost from '@/components/forum/sendPost';
import { useRouter } from "next/navigation";
import { ProfilePhoto } from '@/components/Image/ProfilePhoto';

const SendPostSection = ({user,mode}) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const router = useRouter()

    useEffect(() => {
        setDisabled(title.trim() === "")
    }, [title]);

    useEffect(() => {
        setDisabled(content.trim() === "")
    }, [content]);


    const formik = useFormik({

        /*
        <ProfilePhoto
                        ownerId={userId}
                        photo={photoUrl} />
                        */

        initialValues: {
            text: ""
        },
        // gönderilecekler username, nickname, title, content, parent
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true);
            try {
                await sendPost(user.username, user.nickname, title,content, null)
                resetForm();
                setContent("");
                setTitle("");

            }
            catch (error) {
                throw error
            }
            finally {
                setIsLoading(false);
                router.refresh()
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='border-[0.5px] border-white px-5 py-2'>
                <div className='flex flex-row gap-4'>
                <ProfilePhoto
                        userId={user.userId}
                        profilePicture={user.profilePicture} 
                        />
                    <div className='w-full'>
                        <textarea
                            disabled={isLoading}
                            onChange={(e) => setTitle(e.target.value)}
                            onSubmit={() => {
                                setTitle("")
                            }}
                            value={title}
                            className='
                                        disabled:opacity-50
                                        peer
                                        resize-none
                                        mt-6
                                        w-full
                                        bg-black
                                        ring-0
                                        outline-none
                                        text-[20px]
                                        placeholder-neutral-500
                                        text-white'
                            placeholder={mode === "Tweet"
                                ? "What's Happening"
                                : "Send Answer"
                            }
                        ></textarea>
                        <textarea
                            disabled={isLoading}
                            onChange={(e) => setContent(e.target.value)}
                            onSubmit={() => {
                                setContent("")
                            }}
                            value={content}
                            className='
                                        disabled:opacity-50
                                        peer
                                        resize-none
                                        mt-6
                                        w-full
                                        bg-black
                                        ring-0
                                        outline-none
                                        text-[20px]
                                        placeholder-neutral-500
                                        text-white'
                            placeholder={mode === "Tweet"
                                ? "What's Happening"
                                : "Send Answer"
                            }
                        ></textarea>

                        {mode === "Tweet"
                            && <hr className='
                        opacity-100
                        h-[1px]
                        w-full
                        border-neutral-800
                        transition' />}
                    </div>
                </div>
                {mode === "Tweet"
                    ?
                    <div className="mt-4  flex flex-row justify-end">
                        <button className={`bg-[#009CFF] rounded-3xl w-24 h-10 ${disabled ? "opacity-50" : "opacity-100"}`}
                            type="submit"
                            disabled={disabled || isLoading}> Gönder </button>
                    </div>
                    :
                    <div className="flex flex-row items-center justify-end">
                        <button className={`bg-[#009CFF] rounded-3xl w-24 h-10 ${disabled ? "opacity-50" : "opacity-100"}`}
                            type="submit"
                            disabled={disabled || isLoading}> Yanıtla </button>
                    </div>}

            </div>
        </form>
    );
};

export default SendPostSection;
