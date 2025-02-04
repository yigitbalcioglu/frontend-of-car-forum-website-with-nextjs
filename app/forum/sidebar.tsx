const Sidebar: React.FC = () => {
    return (
        <aside className="bg-yellow-900 shadow-2xl mt-40 rounded-2xl p-6 space-y-10">
            {/* Blog Section */}
            <div>
                <h3 className="text-3xl font-black mb-4">Gündem</h3>
                <ul className="space-y-4">
                    {[
                        { title: "Tackle Your Closest Spring Cleaning", date: "May 14, 2019" },
                        { title: "The Truth About Business Blogging", date: "May 14, 2019" },
                        { title: "10 Tips to Stay Healthy When...", date: "May 10, 2019" },
                        { title: "Visiting Amsterdam on a Budget", date: "May 8, 2019" },
                        { title: "OMA Completes Renovation of Sotheby’s", date: "May 8, 2019" },
                    ].map((item, index) => (
                        <li key={index}>
                            <a href="#" className="text-white hover:underline">
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-gray-500 text-base">{item.date}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* I'm Following Section */}
            <div>
                <h3 className="text-xl font-bold mb-4">Im Following</h3>
                <div className="grid grid-cols-4 gap-3">
                    {Array.from({ length: 16 }).map((_, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block w-12 h-12 rounded-full bg-gray-200 overflow-hidden"
                        >
                            <img
                                src={`https://via.placeholder.com/100?text=${index + 1}`}
                                alt={`User ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
