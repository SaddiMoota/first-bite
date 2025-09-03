'use client';

import Image from 'next/image';

export default function SearchAndFilter({ 
  searchQuery, 
  onSearchChange, 
  filterType, 
  onFilterChange, 
  resultsCount 
}) {
  return (
    <div className="mb-6 sticky top-0 z-10 bg-gray-50 pt-4 pb-2">
      <div className="max-w-3xl mx-auto flex sm:flex-row flex-col gap-y-3 sm:items-center gap-2 bg-white rounded-lg shadow-sm px-2 py-2">
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 pl-9 text-gray-700 placeholder:text-gray-600 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 focus:bg-white transition-all text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 border-l border-gray-100 pl-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-3 py-2 rounded-full text-xs font-medium transition-all ${
              filterType === 'all'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => onFilterChange('veg')}
            className={`px-3 py-2 rounded-full text-xs font-medium transition-all inline-flex items-center gap-1 ${
              filterType === 'veg'
                ? 'bg-green-600/90 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Image src="/images/icons/veg-icon.svg" alt="Veg" width={12} height={12} />
            Veg
          </button>
          <button
            onClick={() => onFilterChange('nonveg')}
            className={`px-3 py-2 rounded-full text-xs font-medium transition-all inline-flex items-center gap-1 ${
              filterType === 'nonveg'
                ? 'bg-red-400 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Image src="/images/icons/non-veg-icon.svg" alt="Non-veg" width={12} height={12} />
            Non-veg
          </button>
        </div>
      </div>
      
      {/* Results Count */}
      {searchQuery && (
        <div className="text-center text-xs text-gray-600 mt-2">
          Found {resultsCount} {resultsCount === 1 ? 'item' : 'items'}
        </div>
      )}
    </div>
  );
}
