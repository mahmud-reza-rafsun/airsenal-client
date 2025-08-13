import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BsCaretUp } from "react-icons/bs";
import { BsCaretDown } from "react-icons/bs";
import ReportModal from "../../../Dashboard/Moderator/ReportedContext/ReportModal";

const FeaturedProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/approve-products`);
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
                    products.map((product) => <div key={product?._id} className="p-4 bg-gray-100 rounded-md flex items-center justify-between gap-5 lg:gap-8 flex-col sm:flex-row">
                        <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
                            <div>
                                <img
                                    className="w-full lg:w-24 h-36 lg:h-20 rounded-md object-cover"
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
                        <div className="flex gap-3 items-center">
                            <div className="
                                bg-white
                                lg:py-[1px] lg:px-3 px-4 py-1 justify-center items-center 
                                lg:block flex gap-x-3 
                                text-center rounded-lg cursor-pointer">
                                <span className="text-lg text-gray-500"><BsCaretDown /></span>
                                <p className="text-sm font-bold  text-gray-500">0</p>
                            </div>
                            <div onClick={() => voteCount.mutate(product?._id)} className="
                                bg-white
                                lg:py-[1px] lg:px-3 px-4 py-1 justify-center items-center 
                                lg:block flex gap-x-3 
                                text-center rounded-lg cursor-pointer">
                                <span className="text-lg text-gray-500"><BsCaretUp /></span>
                                <p className="text-sm font-bold mt-1 text-gray-500">{product?.votes}</p>
                            </div>
                            <div className="">
                                <ReportModal product={product} />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default FeaturedProducts;