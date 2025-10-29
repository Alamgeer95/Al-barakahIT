import React from 'react';
import { Helmet } from 'react-helmet-async';
import Animated from '../components/Animated';

const AboutPage = () => {
    
    const teamMembers = [
      { name: 'আলমগীর হুসাইন', role: 'সিইও এবং প্রতিষ্ঠাতা', img: 'https://placehold.co/400x400/0A0A0A/4AE2C6?text=AH' },
      { name: 'আল-আমিন হৃদয়', role: 'প্রজেক্ট ম্যানেজার', img: 'https://placehold.co/400x400/0A0A0A/4AE2C6?text=AR' },
      { name: 'সাইফুল ইসলাম', role: 'লিড ডেভেলপার', img: 'https://placehold.co/400x400/0A0A0A/4AE2C6?text=SI' },
    ];

    return (
        <section className="py-16 sm:py-24 min-h-screen bg-black/20 backdrop-blur-sm">
            <Helmet>
                <title>আমাদের সম্পর্কে - Al-barakah IT</title>
                <meta name="description" content="Al-barakah IT-এর মিশন, ইতিহাস এবং আমাদের অভিজ্ঞ টিম সম্পর্কে জানুন, যারা আপনার ব্যবসাকে উন্নত করতে প্রতিশ্রুতিবদ্ধ।" />
            </Helmet>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <Animated className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white">আমাদের সম্পর্কে</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">আমরা একদল উদ্যমী এবং অভিজ্ঞ পেশাদার, যারা প্রযুক্তির মাধ্যমে আপনার শিক্ষা প্রতিষ্ঠান ও ব্যবসাকে উন্নত করতে প্রতিশ্রুতিবদ্ধ।</p>
                </Animated>
                
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <Animated>
                        <img src="https://placehold.co/600x450/111827/4AE2C6?text=আমাদের+টিম" alt="Company Team" className="rounded-lg shadow-2xl shadow-blue-900/20 w-full" />
                    </Animated>
                    <Animated>
                        <h3 className="text-3xl font-bold text-white mb-4">আমাদের মিশন ও ইতিহাস</h3>
                        <p className="text-gray-400 mb-4">আমাদের লক্ষ্য হলো শিক্ষা প্রতিষ্ঠান ও ছোট এবং মাঝারি আকারের ব্যবসার জন্য সাশ্রয়ী মূল্যে বিশ্বমানের আইটি সেবা প্রদান করা, যা তাদের প্রবৃদ্ধি এবং সাফল্যে সহায়তা করবে। Al-barakah IT প্রতিষ্ঠিত হয়েছিল প্রযুক্তির মাধ্যমে শিক্ষা প্রতিষ্ঠান ও ব্যবসার সমস্যা সমাধানের একটি সহজ লক্ষ্য নিয়ে।</p>
                    </Animated>
                </div>

                <Animated className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">আমাদের দক্ষ টিম</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-gray-900/50 p-6 rounded-lg text-center border border-gray-800 hover:border-teal-500 transition-colors duration-300">
                                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700" />
                                <h4 className="text-xl font-bold text-white">{member.name}</h4>
                                <p className="text-teal-400 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </Animated>
            </div>
        </section>
    );
};

export default AboutPage;

