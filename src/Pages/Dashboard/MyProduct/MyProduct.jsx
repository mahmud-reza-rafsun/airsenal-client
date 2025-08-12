import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyProductRow from "./MyProductRow";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const MyProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/get-product`);
            return data;
        }
    })
    if (isLoading) return <LoadingSpinner />
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Tag</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {load dynamic data } */}
                    {
                        products.length > 0 ? products.map((product) => <MyProductRow key={product?._id} product={product} refetch={refetch} />)
                            :
                            <tr>
                                <td>
                                    <p className="p-2">No Product Found</p>
                                </td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProduct;