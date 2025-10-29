import React from 'react';
import { Helmet } from 'react-helmet-async';
import Animated from '../components/Animated';
import Icon from '../components/Icon';

const servicesData = [
  { icon: 'code', title: 'ওয়েব ডেভেলপমেন্ট', description: 'আপনার ব্যবসার জন্য রেসপন্সিভ, দ্রুত এবং সুরক্ষিত ওয়েবসাইট তৈরি করি যা ব্যবহারকারীদের আকর্ষণ করে।'},
  { icon: 'shoppingCart', title: 'ই-কমার্স সল্যুশন', description: 'সম্পূর্ণরূপে কার্যকর এবং নিরাপদ ই-কমার্স প্ল্যাটফর্ম তৈরি করি যা আপনার বিক্রয় বৃদ্ধিতে সহায়তা করে।'},
  { icon: 'smartphone', title: 'মোবাইল অ্যাপ ডেভেলপমেন্ট', description: 'অ্যান্ড্রয়েড এবং আইওএস প্ল্যাটফর্মের জন্য ইউজার-ফ্রেন্ডলি এবং আকর্ষণীয় মোবাইল অ্যাপ তৈরি করি।'},
  { icon: 'penTool', title: 'গ্রাফিক ডিজাইন', description: 'আপনার ব্র্যান্ডের জন্য লোগো, ব্যানার, এবং অন্যান্য মার্কেটিং উপকরণ ডিজাইন করে থাকি।'},
];

const ServicesPage = ({ isOverview = false, navigateTo }) => {

    return (
        <section className={`py-16 sm:py-24 bg-black/20 backdrop-blur-sm ${isOverview ? '' : 'min-h-screen'}`}>
            {!isOverview && (
            <Helmet>
                    <title>আমাদের সার্ভিসসমূহ - Al-barakah IT</title>
                    <meta name="description" content="ওয়েব ডেভেলপমেন্ট, একাডেমিক সল্যুশন, ই-কমার্স সল্যুশন, মোবাইল অ্যাপ ডেভেলপমেন্ট এবং গ্রাফিক ডিজাইনসহ আমাদের সকল প্রফেশনাল সেবা সম্পর্কে জানুন।" />
            </Helmet>
        )}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <Animated className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white">আমাদের সার্ভিসসমূহ</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">আমরা আপনার ডিজিটাল উপস্থিতিকে শক্তিশালী করতে বিভিন্ন ধরনের সেবা প্রদান করি।</p>
                </Animated>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <Animated key={index} className={`delay-${index * 100}`}>
                            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 group hover:border-teal-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                                <Icon name={service.icon} className="h-10 w-10 text-teal-400 mb-5" />
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 flex-grow">{service.description}</p>
                                <a href="#" onClick={(e) => e.preventDefault()} className="text-teal-400 font-semibold mt-5 inline-block group-hover:underline">বিস্তারিত জানুন →</a>
                            </div>
                        </Animated>
                    ))}
                </div>
                {isOverview && (
                    <Animated className="text-center mt-16">
                        <button onClick={() => navigateTo('services')} className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg border border-gray-700 hover:bg-teal-500 hover:border-teal-500 transition-all transform hover:scale-105 duration-300 cursor-pointer">
                            সকল সার্ভিস দেখুন
                        </button>
                    </Animated>
                )}
            </div>
        </section>
    );
};

export default ServicesPage;

