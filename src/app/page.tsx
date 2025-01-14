"use client";

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { words } from '../lib/data1';
import Image from 'next/image';

function App() {
  const [activeSearch, setActiveSearch] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(words.filter((w: string) => w.toLowerCase().includes(e.target.value.toLowerCase())).slice(0, 8));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="text-center mt-[-50px]"> {/* Adjust margin to move logo higher */}
        {/* Logo above the search bar */}
        <Image src="/logo.png" alt="Logo" width={500} height={500} className="mx-auto" />
      </div>
    
      {/* Search Form */}
      <form className="w-[500px] relative"> {/* Add margin to ensure space between logo and search bar */}
        <div className="relative mb-8">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="w-full p-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            onChange={(e) => handleSearch(e)}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-4 bg-indigo-600 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-200" title="Search">
            <AiOutlineSearch />
          </button>
        </div>

        {activeSearch.length > 0 && (
          <div className="absolute top-20 p-4 bg-white text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 shadow-lg max-h-[200px] overflow-y-auto">
            {activeSearch.map((s, index) => (
              <span key={index} className="p-2 rounded-md hover:bg-purple-200 transition-all cursor-pointer">
                {s}
              </span>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
