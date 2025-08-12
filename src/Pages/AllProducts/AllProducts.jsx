import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AllProductCard from './AllProductCard';
import { useState } from 'react';

const AllProducts = () => {
    const [search, setSearch] = useState('');
    const { data: products = [] } = useQuery({
        queryKey: ['products', search],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-products?search=${search}`)
            return data;
        }
    })

    console.log(products);

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-xl lg:text-3xl mt-5 font-semibold'>Discover Our <span className='text-indigo-500'>Products</span> </h2>
                <p className='text-gray-500 w-10/12 mx-auto pt-4'>Explore our handpicked selection of top-quality products that stand out for their exceptional value, unique design, and customer favorites. Each featured item is carefully chosen to meet high standards of quality, functionality, and style—ensuring you get only the best.</p>
            </div>
            <div className="mt-8">
                <div className='flex flex-col md:flex-row justify-center items-center gap-5'>

                    <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-30 focus-within:border-gray-400 focus-within:ring-gray-400'>
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-base-100 outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            placeholder='Enter The Tag'
                            aria-label='Enter Job Title'
                        />

                        <button className='px-3 md:hidden lg:items-center lg:flex md:px-4 py-2 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-indigo-500 rounded-md hover:bg-indigo-600 focus:bg-indigo-600 cursor-pointer focus:outline-none'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-12">
                {
                    products.map((product) => <AllProductCard key={product?._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;