import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BsCaretUp } from "react-icons/bs";

const TrandingProduct = () => {
    const { data: trendings = [] } = useQuery({
        queryKey: ['trendings',],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/trending`);
            return data;
        }
    })
    return (
        <div className="">
            <div className="text-left py-5">
                <h2 className="text-xl lg:text-2xl font-semibold"> <span className="text-orange-500">Tranding</span> Products</h2>
            </div>
            <div className="space-y-4">
                {
                    trendings.map((tranding) => <div key={tranding?._id} className="p-4 bg-gray-100 hover:bg-gray-200/70 duration-300 rounded-md flex items-center justify-between gap-8">
                        <div className="flex gap-4 justify-center items-center">

                            <div className="space-y-1">
                                <h2 className="text- font-semibold">{tranding?.productName}</h2>
                                <p className="text-sm text-gray-600">{tranding?.description.substring(1, 40)}...</p>

                                {tranding?.newTag?.slice(0, 3).map((tag, index) => (
                                    <span key={index} className="w-full px-3 py-1 mr-1 cursor-pointer bg-blue-100 text-blue-500 rounded-full text-[13px] text-center">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="">

                            <div className="border-2 flex gap-2 border-white bg-white py-1 px-3 text-center rounded-lg cursor-pointer">
                                <span className="text-sm font-bold text-gray-500">UpVote</span>
                                <p className="text-sm font-bold text-gray-500 ">{tranding?.votes}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TrandingProduct;