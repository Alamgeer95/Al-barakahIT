/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // এই লাইনটি Tailwind-কে বলে দেয় কোথায় ডিজাইন ক্লাস খুঁজতে হবে
  ],
  theme: {
    extend: {
      fontFamily: {
        'tiro-bangla': ['"Tiro Bangla"', 'serif'], // কাস্টম বাংলা ফন্ট যুক্ত করা হলো
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}