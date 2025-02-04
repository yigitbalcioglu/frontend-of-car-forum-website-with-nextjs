// components/Layout.js
const Layout = ({ children }) => {
    return (
        <>
            <header className="bg-black text-white py-6">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/assets/baab70f29ab8a1125f2c6ad6c2642440.jpg" alt="logo" className="mr-4 rounded-xl" style={{ width: 60, height: 60 }} />
                        <a href="/" className="text-2xl font-bold">Sanayisepeti</a>
                    </div>
                    <nav className="space-x-8 flex items-center">
                        <a href="/profile" className="hover-transition text-white hover:bg-[#DE981D] hover:text-black px-3 py-2 rounded">Profil</a>
                        <a href="/forum" className="hover-transition text-white hover:bg-[#DE981D] hover:text-black px-3 py-2 rounded">Forum</a>
                        <a href="/sanayi" className="hover-transition text-white hover:bg-[#DE981D] hover:text-black px-3 py-2 rounded">Sanayi Bölümü</a>
                        <div className="space-x-4 flex items-center">
                            <button onClick={() => alert("Login")} className="hover-transition border border-[#DE981D] text-white hover:bg-[#DE981D] hover:text-black px-4 py-2 rounded">Giriş Yap</button>
                            <button onClick={() => alert("Sign Up")} className="bg-[#DE981D] text-white px-4 py-2 rounded hover:bg-[#DE981D] hover:text-black">Kayıt Ol</button>
                        </div>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
