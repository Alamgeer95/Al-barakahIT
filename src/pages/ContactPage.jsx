import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Animated from '../components/Animated';
import Icon from '../components/Icon';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // আইপি, সময়, ব্রাউজার নেওয়ার ফাংশন
  const getUserInfo = async () => {
    const date = new Date().toLocaleString('bn-BD', {
      timeZone: 'Asia/Dhaka',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const userAgent = navigator.userAgent;

    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      return { ip: data.ip, date, user_agent: userAgent };
    } catch {
      return { ip: 'অজানা', date, user_agent: userAgent };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('sending');

    try {
      const userInfo = await getUserInfo();

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          ...userInfo,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 min-h-screen bg-black/20 backdrop-blur-sm">
      <Helmet>
        <title>যোগাযোগ করুন - Al-barakah IT</title>
        <meta
          name="description"
          content="আপনার প্রজেক্ট নিয়ে আলোচনা করতে বা যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন।"
        />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <Animated className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            যোগাযোগ করুন
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            আপনার যেকোনো প্রশ্ন বা প্রয়োজনে আমরা সাহায্য করতে সদা প্রস্তুত।
          </p>
        </Animated>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* === ফর্ম === */}
          <Animated>
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">
                আমাদের একটি বার্তা পাঠান
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* নাম */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-400 font-medium mb-2 cursor-pointer hover:text-teal-400 transition"
                  >
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>

                {/* ইমেইল */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-400 font-medium mb-2 cursor-pointer hover:text-teal-400 transition"
                  >
                    আপনার ইমেইল
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  />
                </div>

                {/* বার্তা – ছোট-বড় করা যাবে */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-400 font-medium mb-2 cursor-pointer hover:text-teal-400 transition"
                  >
                    আপনার বার্তা
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="এখানে আপনার বার্তা লিখুন..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white 
                               focus:outline-none focus:ring-2 focus:ring-teal-500 
                               transition resize-y" // <-- resize চালু
                    style={{ minHeight: '120px', maxHeight: '300px', resize: 'vertical' }} // ছোট-বড় করার সুবিধা
                  ></textarea>
                </div>

                {/* সাবমিট বাটন */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 text-white
                    ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-teal-500 to-blue-600 hover:shadow-blue-500/50 cursor-pointer'
                    }`}
                >
                  {isSubmitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
                </button>

                {/* স্ট্যাটাস */}
                {status === 'success' && (
                  <p className="text-green-400 text-center font-medium animate-pulse">
                    বার্তা সফলভাবে পাঠানো হয়েছে!
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-center font-medium">
                    বার্তা পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।
                  </p>
                )}
              </form>
            </div>
          </Animated>

          {/* === যোগাযোগের তথ্য === */}
          {/* ফোন */}
          <Animated className="delay-200">
            <div className="space-y-8">
              <div className="flex items-start">
                <Icon name="phone" className="h-8 w-8 text-teal-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">ফোন</h4>
                  <a
                    href="tel:+8801569-151297"
                    className="text-gray-400 hover:text-teal-300 transition"
                  >
                    +8801569-151297
                  </a>
                </div>
              </div>
            
            {/* হোয়াটসঅ্যাপ */}
              <div className="flex items-start">
                <div className="h-8 w-8 mr-4 mt-1 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-teal-400" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.44h-.006c-1.28-.001-2.528-.493-3.523-1.414l-.253-.15-3.614.95.973-3.529-.15-.24c-.956-1.51-1.456-3.253-1.455-5.03.001-5.202 4.237-9.436 9.44-9.436 2.523.001 4.889 1.01 6.661 2.782 1.771 1.771 2.78 4.137 2.78 6.66-.001 5.203-4.236 9.437-9.44 9.437m7.438-16.88c-2.143-2.143-5.004-3.325-8.042-3.325-6.271 0-11.373 5.103-11.374 11.374 0 2.002.521 3.954 1.516 5.674l-1.61 5.898 6.057-1.588c1.658.904 3.533 1.382 5.447 1.382 6.27 0 11.373-5.103 11.373-11.374 0-3.038-1.182-5.899-3.325-8.041"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">হোয়াটসঅ্যাপ</h4>
                  <a
                    href="https://wa.me/8801569151297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-300 transition flex items-center"
                  >
                    +8801569-151297
                    <span className="ml-1 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">Live</span>
                  </a>
                </div>
              </div>
            
            {/* ইমেইল */}
              <div className="flex items-start">
                <Icon name="mail" className="h-8 w-8 text-teal-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">ইমেইল</h4>
                  <a
                    href="mailto:albarakah.it25@gmail.com"
                    className="text-gray-400 hover:text-teal-300 transition"
                  >
                    albarakah.it25@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Icon name="mapPin" className="h-8 w-8 text-teal-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">অফিস</h4>
                  <p className="text-gray-400">
                    বাড়ি #১০, রোড #৫, ধানমন্ডি,
                    <br />
                    ঢাকা-১২০৫, বাংলাদেশ
                  </p>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;