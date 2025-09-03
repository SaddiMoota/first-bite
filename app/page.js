'use client';

import { useState } from 'react';
import MenuItemCard from "./components/MenuItemCard";
import ViewCartCard from "./components/ViewCartCard";
import SearchAndFilter from "./components/SearchAndFilter";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); 
  const [visibleItems, setVisibleItems] = useState(6);
  
const allMenuItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, and pickles.",
    price: 129,
    isVeg: false,
    image: "/images/food-items/pexels-1.jpg",
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing and croutons.",
    price: 99,
    isVeg: true,
    image: "/images/food-items/pexels-2.jpg",
  },
  {
    id: 3,
    name: "Grilled Chicken Sandwich",
    description: "Tender grilled chicken breast with fresh veggies and mayo on a bun.",
    price: 139,
    isVeg: false,
    image: "/images/food-items/pexels-3.jpg",
  },
  {
    id: 4,
    name: "Spaghetti Bolognese",
    description: "Pasta served with rich beef and tomato meat sauce.",
    price: 149,
    isVeg: false,
    image: "/images/food-items/pexels-4.jpg",
  },
  {
    id: 5,
    name: "Margherita Pizza",
    description: "Thin crust pizza with tomato sauce, fresh mozzarella, and basil.",
    price: 159,
    isVeg: true,
    image: "/images/food-items/pexels-5.jpg",
  },
  {
    id: 6,
    name: "Fish and Chips",
    description: "Crispy battered fish fillets served with golden fries and tartar sauce.",
    price: 179,
    isVeg: false,
    image: "/images/food-items/pexels-6.jpg",
  },
  {
    id: 7,
    name: "Cauliflower Wings",
    description: "Crispy battered cauliflower florets tossed in spicy buffalo sauce.",
    price: 119,
    isVeg: true,
    image: "/images/food-items/pexels-7.jpg",
  },
  {
    id: 8,
    name: "BBQ Pulled Pork Sandwich",
    description: "Slow-cooked pulled pork slathered in tangy BBQ sauce on a bun.",
    price: 169,
    isVeg: false,
    image: "/images/food-items/pexels-1.jpg",
  },
  {
    id: 9,
    name: "Garden Vegetable Soup",
    description: "Hearty soup with fresh seasonal vegetables and herbs.",
    price: 89,
    isVeg: true,
    image: "/images/food-items/pexels-2.jpg",
  },
  {
    id: 10,
    name: "Shrimp Scampi",
    description: "Sautéed shrimp in garlic butter sauce served over linguine pasta.",
    price: 199,
    isVeg: false,
    image: "/images/food-items/pexels-3.jpg",
  },
];


  // Filter and search menu items
  const filteredMenuItems = allMenuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' ? true :
                         filterType === 'veg' ? item.isVeg :
                         !item.isVeg;
    return matchesSearch && matchesFilter;
  });

  const hasMoreItems = filteredMenuItems.length > visibleItems;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Banner */}
      <section
        className="relative flex items-center justify-center h-96 bg-cover bg-center rounded-b-3xl shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold sm:leading-tight max-w-3xl mx-auto drop-shadow-lg">
            Craving Something? Take Your First Bite Today
          </h1>
          <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition">
            Order Now
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto p-6 sm:p-10">
        <h2 className="text-3xl font-bold mb-3 text-gray-900 text-center">
          Our Menu
        </h2>

        <SearchAndFilter 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterType={filterType}
          onFilterChange={setFilterType}
          resultsCount={filteredMenuItems.length}
        />

        {/* Menu Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMenuItems.slice(0, visibleItems).map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* View More Button */}
        {hasMoreItems && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleItems(prev => prev + 6)}
              className="bg-white text-green-600 px-6 py-2 rounded-full border border-green-600 hover:bg-green-50 font-medium transition-colors pointer"
            >
              View More
            </button>
          </div>
        )}
      </section>
      <ViewCartCard />
    </div>
  );
}
