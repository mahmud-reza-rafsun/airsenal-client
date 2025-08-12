import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import AllProductCard from './AllProductCard';

const AllProducts = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/get-product`)
            return data;
        }
    })
    console.log(products);
    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-xl lg:text-3xl font-semibold'>Discover Our <span className='text-indigo-500'>Products</span> </h2>
                <p className='text-gray-500 w-10/12 mx-auto pt-4'>Explore our handpicked selection of top-quality products that stand out for their exceptional value, unique design, and customer favorites. Each featured item is carefully chosen to meet high standards of quality, functionality, and style—ensuring you get only the best.</p>
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