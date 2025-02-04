"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('/sign-up');
    };

    const handleLoginClick = () => {
        router.push('/login');
    };


    return (
        <div className="bg-black text-white">
            {/* Header */}
            <header className="bg-black text-white py-6">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo and Name */}
                    <div className="flex items-center">
                        <Image width={60} height={60} src="/assets/baab70f29ab8a1125f2c6ad6c2642440.jpg" alt="logo" className="mr-4 rounded-xl" />
                        <a href='' className="text-2xl font-bold">Sanayisepeti</a>
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-x-8 flex items-center">
                    <a href="profile" className="hover-transition text-white hover:bg-[#DE981D] hover:text-black px-3 py-2 rounded">Profil</a>
                        <a href="forum" className="hover-transition text-white hover:bg-[#DE981D] hover:text-black px-3 py-2 rounded">Forum</a>
                        <a href="sanayi" className="hover-transition text-white hover:bg-[#DE981D] hover:text-black px-3 py-2 rounded">Sanayi Bölümü</a>

                        {/* Login and Register */}
                        <div className="space-x-4 flex items-center">
                            <button onClick={handleLoginClick} className="hover-transition border border-[#DE981D] text-white hover:bg-[#DE981D] hover:text-black px-4 py-2 rounded">Giriş Yap</button>
                            <button onClick={handleSignUpClick} className="bg-[#DE981D] text-white px-4 py-2 rounded hover:bg-[#DE981D] hover:text-black">Kayıt Ol</button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Banner */}
            <section className="container mx-auto h-screen px-6 flex items-center">
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold mb-4">AraçSepeti ile Araçlar Hakkında Her Şey</h1>
                    <p className="text-lg mb-6">Sanayi için tüm ihtiyaçlarınıza uygun çözümler burada. Haydi, birlikte başarıya giden yola çıkın!</p>
                    <button className="bg-[#DE981D] text-white font-bold px-8 py-3 rounded-3xl hover-transition hover:bg-[#DE981D] hover:text-black">Hadi Başlayalım</button>
                </div>
                <div className="w-1/2 flex justify-center">
                    <Image width={400} height={300} src="/assets/pexels-albinberlin-919073.jpg" alt="araba" />
                </div>
            </section>

            {/* Roadmap Section */}
           <section className="container mx-auto px-6 relative">
    <h2 className="text-5xl font-bold mb-10 text-center">Hakkımızda</h2>
    {/* Vertical Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#DE981D] h-full"></div>

    <div className="space-y-20">
        {/* Item 1 - Left Side */}
        <div className="flex items-center justify-start w-[54rem] relative">
            {/* Circle */}
            <div className="absolute left-[86%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 w-14 h-14 rounded-full border-4 border-white"></div>
            <div className="bg-blue-700 p-6 rounded-3xl shadow-lg w-2/3 ml-20">
                <h3 className="text-2xl font-bold mb-4">Sanayi Hizmetleri Araştırma</h3>
                <p>Sanayi bölümleri arasında dolaşarak, ihtiyacınıza uygun en iyi sanayi hizmet sağlayıcılarını bulun.</p>
            </div>
        </div>

        {/* Item 2 - Right Side */}
        <div className="flex items-center justify-end relative">
            {/* Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-700 w-14 h-14 rounded-full border-4 border-white"></div>
            <div className="bg-purple-700 p-6 rounded-3xl shadow-lg w-[41rem] ml-20">
                <h3 className="text-2xl font-bold mb-4">Forumda Konuşmalara Katılın</h3>
                <p>Forum üzerinden diğer kullanıcılarla araç bakım ipuçlarını paylaşın ve sorularınızı sorun.</p>
            </div>
        </div>

        {/* Item 3 - Left Side */}
        <div className="flex items-center justify-start w-[54rem] relative">
            {/* Circle */}
            <div className="absolute left-[86%] transform -translate-x-1/2 -translate-y-1/2 bg-red-700 w-14 h-14 rounded-full border-4 border-white"></div>
            <div className="bg-red-700 p-6 rounded-3xl shadow-lg w-2/3 ml-20">
                <h3 className="text-2xl font-bold mb-4">Sanayi Hizmetlerinizi Tanıtın</h3>
                <p>Sanayi hizmet sağlayıcıları olarak, hizmetlerinizi tanıtın ve daha geniş bir müşteri kitlesine ulaşın.</p>
            </div>
        </div>

        {/* Item 4 - Right Side */}
        <div className="flex items-center justify-end relative">
            {/* Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-700 w-14 h-14 rounded-full border-4 border-white"></div>
            <div className="bg-green-700 p-6 rounded-3xl shadow-lg w-[41rem] ml-20">
                <h3 className="text-2xl font-bold mb-4">Araçlar Hakkında Bilgi Alın</h3>
                <p>Araçlar hakkında diğer kullanıcıların görüşlerini ve önerilerini alın, bilgi paylaşımı yapın.</p>
            </div>
        </div>
    </div>
</section>


        </div>
    );
};

export default Page;
