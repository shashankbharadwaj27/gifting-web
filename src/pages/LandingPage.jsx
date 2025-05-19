import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../services/apis';
import { getAllHeroproducts } from '../services/apis';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const LandingPage = () => {
  const [categories, setCategories] = useState([]);
  const [heroproducts, setHeroproducts] = useState([]);

  const map = {
    1:'clocks',
    2:'t-shirts',
    3:'phone-cases',
    4:'laptop-stickers',
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryData = await getAllCategories();
        const heroData = await getAllHeroproducts();
        setCategories(categoryData);
        setHeroproducts(heroData);
      } catch (error) {
        console.error('Failed to load data', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="font-roboto">
        <Navbar />
        {/* Banner */}
        <section className="text-center mt-8 px-4">
            <h1 className="text-3xl text-blue-500 font-orbitron mb-2">Turn Your Photos Into Products</h1>
            <div className="bg-blue-50 max-w-xl mx-auto rounded-full p-3 flex items-center">
                <input
                    type="text"
                    placeholder="Search for Cuboid Chains, Photo Bracelets etc."
                    className="flex-grow bg-transparent outline-none px-4 text-sm italic"
                />
                <button className="text-xl">🔍</button>
            </div>
        </section>

        {/* Popular Categories */}
        <section className="bg-orange-50 text-center py-10 mt-10">
            <h2 className="text-2xl font-bold text-brown-900 mb-8">Popular Categories</h2>
            
            <div className="grid justify-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto px-4">
                {categories.map((category) => (
                    <Link to={`/products/${map[category.id]}`} key={category.id} className="flex flex-col items-center w-full max-w-[240px] mx-auto">
                        <div className="w-full overflow-hidden rounded-xl shadow bg-white p-3 transition hover:scale-105 duration-300">
                            <img
                                src={category.imageUrl || 'https://via.placeholder.com/300'}
                                alt={category.name}
                                className="w-full h-40 object-cover rounded-md"
                            />
                        </div>
                        <p className="mt-3 font-medium text-base">{category.name}</p>
                    </Link>
                ))}
            </div>
        </section>

        {/* Hero Products */}
        <section className="bg-orange-50 text-center py-10">
            <h2 className="text-2xl font-bold text-brown-900 mb-8">🔥 Hot Selling Products</h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
                {heroproducts.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center w-full max-w-[260px] mx-auto p-4 bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={product.imageUrl || 'https://via.placeholder.com/150'}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-bold mt-3">{product.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                        <strong className="mt-2 text-brown-900 text-lg">
                            ₹{product.price.toLocaleString()}
                        </strong>
                    </div>
                ))}
            </div>
        </section>
        <Footer/>
    </div>
  );
};

export default LandingPage;
