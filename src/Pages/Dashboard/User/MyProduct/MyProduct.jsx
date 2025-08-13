import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import MyProductRow from "./MyProductRow";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../../../hooks/useAuth";

const MyProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/my-products/${user?.email}`);
            return data;
        }
    })
    if (isLoading) return <LoadingSpinner />
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Name</th>
                        <th>Votes</th>
                        <th>Status</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        products.length > 0 ? products.map((product, index) => <MyProductRow index={index} key={product?._id} product={product} refetch={refetch} />)
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
