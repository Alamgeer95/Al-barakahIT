import React from 'react';
import { Helmet } from 'react-helmet-async';
import Animated from '../components/Animated';
import Icon from '../components/Icon';
// হোম পেজ থেকে অন্যান্য সেকশন ইম্পোর্ট (ওভারভিউ দেখানোর জন্য)
import ServicesPage from './ServicesPage';
import PortfolioPage from './PortfolioPage';

const HomePage = ({ navigateTo }) => {
    
    return (
        <div className="relative overflow-hidden">
            <Helmet>
                <title>Al-barakah IT - আপনার শিক্ষা প্রতিষ্ঠান ও ব্যবসার জন্য ডিজিটাল সল্যুশন পার্টনার</title>
                <meta name="description" content="Al-barakah IT আপনার শিক্ষা প্রতিষ্ঠান ও ব্যবসাকে ডিজিটালি রূপান্তর করতে আধুনিক ওয়েব ডেভেলপমেন্ট, ই-কমার্স, এবং মোবাইল অ্যাপ সল্যুশন প্রদান করে।" />
            </Helmet>
            {/* হিরো সেকশন */}
            <section className="min-h-screen flex items-center justify-center pt-24 pb-20 md:pt-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-center">
                    <Animated>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
                            ডিজিটাল বিশ্বে আপনার কাঙ্ক্ষিত <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">স্বপ্নকে</span> বাস্তবে রূপ দিন
                        </h1>
                    </Animated>
                    <Animated className="delay-200">
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                            আমরা আপনার শিক্ষা প্রতিষ্ঠান ও ব্যবসাকে আপডেট স্তরে নিয়ে যেতে সৃজনশীল ডিজাইন এবং অত্যাধুনিক প্রযুক্তির সমন্বয় করি।
                        </p>
                    </Animated>
                    <Animated className="delay-400">
                        <button onClick={() => navigateTo('contact')} className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 duration-300 text-lg cursor-pointer">
                            শুরু করুন
                        </button>
                    </Animated>
                </div>
            </section>

            {/* USP সেকশন */}
            <section className="py-16 sm:py-24 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Animated><div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-teal-500 transition-all duration-300"><Icon name="rocket" className="h-12 w-12 text-teal-400 mx-auto mb-4" /><h3 className="text-2xl font-bold text-white mb-2">দ্রুত ডেলিভারি</h3><p className="text-gray-400">আমরা নির্ধারিত সময়ের মধ্যে আপনার প্রজেক্ট সম্পন্ন করার নিশ্চয়তা দিচ্ছি।</p></div></Animated>
                        <Animated className="delay-200"><div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-teal-500 transition-all duration-300"><Icon name="award" className="h-12 w-12 text-teal-400 mx-auto mb-4" /><h3 className="text-2xl font-bold text-white mb-2">সাশ্রয়ী মূল্য</h3><p className="text-gray-400">গুণগত মান বজায় রেখে আমরা সবচেয়ে প্রতিযোগিতামূলক মূল্যে সেরা সেবা প্রদান করি।</p></div></Animated>
                        <Animated className="delay-400"><div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-teal-500 transition-all duration-300"><Icon name="headset" className="h-12 w-12 text-teal-400 mx-auto mb-4" /><h3 className="text-2xl font-bold text-white mb-2">উন্নত সাপোর্ট</h3><p className="text-gray-400">প্রজেক্ট ডেলিভারির পরেও আমরা ২৪/৭ উন্নত গ্রাহক সেবা নিশ্চিত করি।</p></div></Animated>
                    </div>
                </div>
            </section>

            {/* সার্ভিস ওভারভিউ সেকশন */}
            <ServicesPage isOverview={true} navigateTo={navigateTo} />

            {/* পোর্টফোলিও ওভারভিউ সেকশন */}
            <PortfolioPage isOverview={true} navigateTo={navigateTo} />

            {/* CTA সেকশন */}
            <section className="bg-gradient-to-r from-teal-600/20 to-blue-600/20">
                <div className="container mx-auto px-4 sm:px-6 py-24 text-center">
                    <Animated>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">আপনার প্রজেক্ট নিয়ে আলোচনা করতে প্রস্তুত?</h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">আমাদের বিশেষজ্ঞ টিমের সাথে কথা বলুন এবং আপনার কাঙ্ক্ষিত স্বপ্নটিকে বাস্তবে রূপ দিন।</p>
                        <button onClick={() => navigateTo('contact')} className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300 text-lg cursor-pointer">এখনই যোগাযোগ করুন</button>
                    </Animated>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

