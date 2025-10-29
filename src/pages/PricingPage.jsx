import React from 'react';
import { Helmet } from 'react-helmet-async';
import Animated from '../components/Animated';
import Icon from '../components/Icon';

const PricingPage = () => {
    
    const packages = [
        { name: 'স্টার্টার', price: '৳৭,০০০', period: 'এককালীন', features: ['৫ পৃষ্ঠার ওয়েবসাইট', 'রেসপন্সিভ ডিজাইন', 'বেসিক SEO', '৩ মাসের সাপোর্ট'], popular: false },
        { name: 'বিজনেস', price: '৳১৩,০০০', period: 'এককালীন', features: ['১০ পৃষ্ঠার ওয়েবসাইট', 'কাস্টম ডিজাইন', 'ই-কমার্স ফাংশনালিটি', '৬ মাসের সাপোর্ট', 'CMS ইন্টিগ্রেশন'], popular: true },
        { name: 'এন্টারপ্রাইজ', price: 'আলোচনা সাপেক্ষ', period: '', features: ['আনলিমিটেড পৃষ্ঠা', 'সম্পূর্ণ কাস্টম সল্যুশন', 'মোবাইল অ্যাপ', 'ডেডিকেটেড সাপোর্ট', 'উন্নত নিরাপত্তা'], popular: false },
    ];

    return (
        <section className="py-16 sm:py-24 min-h-screen bg-black/20 backdrop-blur-sm">
            <Helmet>
                    <title>মূল্য ও প্যাকেজ - Al-barakah IT</title>
                    <meta name="description" content="আপনার শিক্ষ প্রতিষ্ঠান ও ব্যবসার প্রয়োজন অনুযায়ী আমাদের সাশ্রয়ী মূল্যের প্যাকেজগুলো দেখুন। স্টার্টার, বিজনেস এবং এন্টারপ্রাইজ প্যাকেজ থেকে বেছে নিন।" />
            </Helmet>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <Animated className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white">আমাদের প্যাকেজসমূহ</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">আপনার প্রয়োজন অনুযায়ী সেরা প্যাকেজটি বেছে নিন।</p>
                </Animated>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, index) => (
                        <Animated key={index} className={`delay-${index*100}`}>
                            <div className={`bg-gray-900/50 rounded-xl p-8 transition-all duration-300 border h-full flex flex-col ${pkg.popular ? 'border-teal-500 transform lg:scale-105 shadow-2xl shadow-teal-900/50' : 'border-gray-800 hover:border-gray-700 lg:hover:scale-105'}`}>
                                {pkg.popular && <p className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-bold tracking-widest uppercase py-1 px-4 rounded-full inline-block mb-6">populer now</p>}
                                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                                <p className="text-4xl font-extrabold text-white my-4">{pkg.price} <span className="text-lg font-medium text-gray-500">{pkg.period}</span></p>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feature, i) => ( 
                                        <li key={i} className="flex items-start">
                                            <Icon name="checkCircle" className="h-6 w-6 text-teal-400 mr-3 flex-shrink-0" />
                                            <span className="text-gray-400">{feature}</span>
                                        </li> 
                                    ))}
                                </ul>
                                <button className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 mt-auto ${pkg.popular ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:shadow-blue-500/50' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                                    বেছে নিন
                                </button>
                            </div>
                        </Animated>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPage;

