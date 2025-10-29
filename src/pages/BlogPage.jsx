import React from 'react';
import { Helmet } from 'react-helmet-async';
import Animated from '../components/Animated';

const BlogPage = () => {
    
    const blogPosts = [
        { title: 'ওয়েবসাইট তৈরির আগে যে ৫টি বিষয় ভাবা উচিত', date: 'অক্টোবর ২১, ২০২৫', excerpt: 'একটি সফল ওয়েবসাইট তৈরির জন্য পরিকল্পনা অত্যন্ত গুরুত্বপূর্ণ। এই আর্টিকেলে আমরা আলোচনা করবো...' },
        { title: 'কীভাবে SEO আপনার ব্যবসাকে এগিয়ে নিতে পারে?', date: 'অক্টোবর ১৫, ২০২৫', excerpt: 'সার্চ ইঞ্জিন অপটিমাইজেশন (SEO) ডিজিটাল মার্কেটিং এর একটি অবিচ্ছেদ্য অংশ। জানুন কীভাবে...' },
        { title: 'ছোট ব্যবসার জন্য সেরা ৫টি ডিজিটাল মার্কেটিং কৌশল', date: 'অক্টোবর ১০, ২০২৫', excerpt: 'ডিজিটাল যুগে ছোট ব্যবসার টিকে থাকার জন্য সঠিক মার্কেটিং কৌশল অপরিহার্য। এখানে আমরা...' },
    ];

    return (
        <section className="py-16 sm:py-24 min-h-screen bg-black/20 backdrop-blur-sm">
            <Helmet>
                <title>ব্লগসমূহ - Al-barakah IT</title>
                <meta name="description" content="Al-barakah IT-ওয়েব ডেভেলপমেন্ট, SEO, এবং ডিজিটাল মার্কেটিং সম্পর্কিত সর্বশেষ টিপস এবং তথ্য জানতে আমাদের ব্লগ পড়ুন।" />
            </Helmet>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <Animated className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white">আমাদের ব্লগ</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">ইন্ডাস্ট্রির সর্বশেষ খবর এবং গুরুত্বপূর্ণ তথ্য জানতে আমাদের ব্লগ পড়ুন।</p>
                </Animated>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Animated key={index} className={`delay-${index*100}`}>
                            <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-colors duration-300 h-full flex flex-col">
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                    <h3 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h3>
                                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                    <a href="#" onClick={(e) => e.preventDefault()} className="font-semibold text-teal-400 hover:underline mt-auto">সম্পূর্ণ পড়ুন →</a>
                                </div>
                            </div>
                        </Animated>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;

