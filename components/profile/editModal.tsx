import React, { useState, useEffect } from 'react';


export const EditModal = ({ user, isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState<IUserProps>({
        ...user,
        profilePicture: null,
        coverPicture: null,
    });

    useEffect(() => {
        if (isOpen) {
            setFormData({
                ...user,
                profilePicture: null,
                coverPicture: null,
            });
        }
    }, [isOpen, user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "file" ? files?.[0] : value,
        }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-black p-8 rounded relative w-1/2">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-2 left-2 bg-gray-500 text-white p-1 rounded"
                >
                    X
                </button>
                <h2 className="text-xl mb-4 text-center text-white">Edit User Info</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder={user.username}
                        value={formData.username}
                        onChange={handleChange}
                        className="p-2 border rounded text-black"
                    />
                    <input
                        type="text"
                        name="nickname"
                        placeholder={user.nickname}
                        value={formData.nickname}
                        onChange={handleChange}
                        className="p-2 border rounded text-black"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder={user.location}
                        value={formData.location}
                        onChange={handleChange}
                        className="p-2 border rounded text-black"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder={user.desc}
                        value={formData.desc}
                        onChange={handleChange}
                        className="p-2 border rounded text-black"
                    />
                    <input
                        type="file"
                        name="profilePicture"
                        onChange={handleChange}
                        className="p-2 border rounded text-black"
                    />
                    <input
                        type="file"
                        name="coverPicture"
                        onChange={handleChange}
                        className="p-2 border rounded text-black"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};