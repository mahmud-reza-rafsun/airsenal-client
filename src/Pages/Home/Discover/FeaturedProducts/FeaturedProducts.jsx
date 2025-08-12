import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BsCaretUp } from "react-icons/bs";


const FeaturedProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/get-product`);
            return data;
        }
    })

    const queryClient = useQueryClient();

    // vote count 
    const voteCount = useMutation({
        mutationFn: async (id) => {
            await axios.patch(`${import.meta.env.VITE_API_URL}/vote/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
            queryClient.invalidateQueries(['trendings']);
        }
    });


    return (
        <div className="">
            <div className="text-left py-5">
                <h2 className="text-xl lg:text-2xl font-semibold">Discover Our <span className="text-indigo-500">Featured Products</span></h2>
            </div>
            <div className="space-y-4">
                {
                    products.map((product) => <div key={product?._id} className="p-4 bg-gray-100 rounded-md flex items-center justify-between gap-8">
                        <div className="flex gap-4 justify-center items-center">
                            <div>
                                <img
                                    className="w-20 h-20 rounded-md object-cover"
                                    src={product?.image}
                                    alt={product?.productName} />
                            </div>
                            <div className="space-y-1">
                                <h2 className="text- font-semibold">{product?.productName}</h2>
                                <p className="text-sm text-gray-600">{product?.description.substring(1, 30)}...</p>
                                {product?.newTag?.slice(0, 3).map((tag, index) => (
                                    <span key={index} className="w-full px-3 py-1 mr-1 cursor-pointer bg-blue-100 text-blue-500 rounded-full text-[13px] text-center">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <div onClick={() => voteCount.mutate(product?._id)} className="border-2 border-gray-200 hover:border-indigo-500 duration-300  py-[1px] px-2 hover:broder-indigo-500 text-center rounded-lg cursor-pointer">
                                <span className="text-lg text-gray-500"><BsCaretUp /></span>
                                <p className="text-sm font-bold text-gray-500">{product?.votes}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default FeaturedProducts;