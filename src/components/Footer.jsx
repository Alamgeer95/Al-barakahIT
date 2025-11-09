import React from 'react';

// ফুটার কম্পোনেন্ট
const Footer = ({ navLinks, navigateTo }) => {
    return (
        <footer className="bg-black/30 border-t border-gray-800 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="sm:col-span-2 md:col-span-1"><h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Al-barakah IT</h3><p className="text-gray-400">আপনার ডিজিটাল স্বপ্নকে বাস্তবে রূপ দিতে আমরা প্রতিশ্রুতিবদ্ধ।</p></div>
                    <div><h4 className="font-semibold text-lg mb-4 text-white">গুরুত্বপূর্ণ লিংক</h4><ul className="space-y-2">{navLinks.slice(0, 5).map(link => (<li key={link.id}><a href="#" onClick={(e) => { e.preventDefault(); navigateTo(link.id); }} className="text-gray-400 hover:text-white transition-colors">{link.title}</a></li>))}</ul></div>
                    <div>
  <h4 className="font-semibold text-lg mb-4 text-white">যোগাযোগ</h4>
  <ul className="space-y-2 text-gray-400">
    <li>
      ইমেইল: 
      <a href="mailto:albarakah.it25@gmail.com" className="text-teal-400 hover:text-teal-300">
        albarakah.it25@gmail.com
      </a>
    </li>
    <li>
      ফোন: 
      <a href="tel:+8801569151297" className="text-teal-400 hover:text-teal-300">
        +8801569-151297
      </a>
    </li>
    <li>
      হোয়াটসঅ্যাপ: 
      <a
                    href="https://wa.me/8801569151297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-300 transition flex items-center"
                  >
                    +8801569-151297
                    <span className="ml-1 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">Live</span>
                  </a>
    </li>

  </ul>


</div>

                    <div><h4 className="font-semibold text-lg mb-4 text-white">সার্বক্ষণিক আমাদের সাথে সংযুক্ত থাকুন</h4><div className="flex"><input type="email" placeholder="আপনার ইমেইল" className="w-full rounded-l-lg p-2 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"/><button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-2 px-4 rounded-r-lg hover:opacity-90 transition-opacity">➔</button></div></div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500"><p>&copy; {new Date().getFullYear()} Al-barakah IT. সর্বস্বত্ব সংরক্ষিত।</p></div>
            </div>
        </footer>
    );
};

export default Footer;

