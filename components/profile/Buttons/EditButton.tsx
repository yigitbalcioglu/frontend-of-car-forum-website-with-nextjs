"use client"

import React, { useState } from 'react';
import { EditModal } from '../editModal';

export const EditButton = ({user}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = async (data: any) => {
        const dataWithUserId = { ...data, userId: user.userId };
        
        console.log('Saving data:', dataWithUserId);
    
        const formData = new FormData();
        for (const key in dataWithUserId) {
            if (dataWithUserId[key]) {
                // Eğer değer bir dosya ise dosya olarak ekle, değilse string olarak ekle
                if (dataWithUserId[key] instanceof File) {
                    formData.append(key, dataWithUserId[key]);
                } else {
                    formData.append(key, dataWithUserId[key].toString());
                }
            }
        }
    
        try {
            const response = await fetch('http://localhost:8000/api/users/editProfile', {
                method: 'PUT',
                body: formData, // Content-Type otomatik olarak ayarlanır
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log('Data saved successfully:', result);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };
    

    return (
        <>
            <button
                className="bg-[#009CFF] rounded-3xl w-24 h-9"
                type="button"
                onClick={handleOpenModal}
            >
                Düzenle
            </button>
            <EditModal user={user} isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSave} />
        </>
    );
};