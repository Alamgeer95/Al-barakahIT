import React from 'react';
import { Helmet } from 'react-helmet-async';
import Animated from '../components/Animated';

const portfolioItems = [
    { title: 'শিক্ষা প্রতিষ্ঠানের ওয়েবসাইট', category: 'ওয়েব ডেভেলপমেন্ট', img: '/Jamia-qasemia.jpg' },
    { title: 'জব প্লাটফরম', category: 'ওয়েব ডেভেলপমেন্ট', img: 'KhedmatBD.jpg' },
    { title: 'ফুড ডেলিভারি অ্যাপই-কমার্স ওয়েবসাইট', category: 'মোবাইল অ্যাপ', img: 'https://placehold.co/600x400/0F172A/34D399?text=প্রজেক্ট+২' },
    { title: 'কর্পোরেট ব্র্যান্ডিং', category: 'গ্রাফিক ডিজাইন', img: 'https://placehold.co/600x400/0F172A/FBBF24?text=প্রজেক্ট+৩' },
    { title: 'রিয়েল এস্টেট পোর্টাল', category: 'ওয়েব ডেভেলপমেন্ট', img: 'https://placehold.co/600x400/0F172A/A78BFA?text=প্রজেক্ট+৪' },
];

const PortfolioPage = ({ isOverview = false, navigateTo }) => {

    return (
        <section className={`py-16 sm:py-24 bg-black/20 backdrop-blur-sm ${isOverview ? '' : 'min-h-screen'}`}>
            {!isOverview && (
            <Helmet>
                    <title>আমাদের পোর্টফোলিও - Al-barakah IT</title>
                    <meta name="description" content="আমাদের সফলভাবে সম্পন্ন করা বিভিন্ন প্রজেক্ট দেখুন, যার মধ্যে রয়েছে শিক্ষা প্রতিষ্ঠান ও ই-কমার্স ওয়েবসাইট, মোবাইল অ্যাপ এবং কর্পোরেট ব্র্যান্ডিং।" />
            </Helmet>
        )}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <Animated className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white">আমাদের সফল প্রজেক্ট</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">আমরা গর্বের সাথে আমাদের কিছু সেরা কাজ প্রদর্শন করছি।</p>
                </Animated>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(isOverview ? portfolioItems.slice(0, 3) : portfolioItems).map((item, index) => (
                        <Animated key={index} className={`delay-${index*100}`}>
                            <div className="group rounded-xl overflow-hidden border border-gray-800 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300">
                                <div className="relative">
                                    <img src={item.img} alt={item.title} className="w-full h-60 object-contain bg-gray-900 transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center p-4">
                                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    ))}
                </div>
                {isOverview && (
                    <Animated className="text-center mt-16">
                        <button onClick={() => navigateTo('portfolio')} className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg border border-gray-700 hover:bg-teal-500 hover:border-teal-500 transition-all transform hover:scale-105 duration-300 cursor-pointer">
                            সম্পূর্ণ পোর্টফোলিও দেখুন
                        </button>
                    </Animated>
                )}
            </div>
        </section>
    );
};

export default PortfolioPage;

