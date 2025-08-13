import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../hooks/useAxiosSecure";
import ReviewProductRow from "./ReviewProductRow";

const ReviewProduct = () => {
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/get-product');
            return data
        }
    })
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        reviews.length > 0 ? reviews.map((review, index) => <ReviewProductRow refetch={refetch} key={review?._id} index={index} review={review} />) : <tr><td><p>No Data Found</p></td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReviewProduct;